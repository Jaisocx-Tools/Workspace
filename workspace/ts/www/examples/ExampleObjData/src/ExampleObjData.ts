class ObjData {
  // Extended Data Type Constants
  static readonly TYPE_STRING = 1;
  static readonly TYPE_NUMBER = 2;
  static readonly TYPE_BOOLEAN = 3;
  static readonly TYPE_OBJECT = 4;
  static readonly TYPE_ARRAY = 5;
  static readonly TYPE_BASE64 = 6;
  static readonly TYPE_URL = 7;

  // Helper method to convert number to 64-bit representation (8 bytes)
  static toUInt64(value: number): Uint8Array {
      const result = new Uint8Array(8);
      for (let i = 0; i < 8; i++) {
          result[i] = (value >> (8 * (7 - i))) & 0xFF;
      }
      return result;
  }

  // Serialize the object to a byte array
  static serialize(obj: any): Uint8Array {
      let byteArray: Uint8Array[] = [];

      const processValue = (value: any): Uint8Array => {
          if (typeof value === 'string') {
              return this.serializeString(value);
          } else if (typeof value === 'number') {
              return this.serializeNumber(value);
          } else if (typeof value === 'boolean') {
              return this.serializeBoolean(value);
          } else if (Array.isArray(value)) {
              return this.serializeArray(value);
          } else if (value && typeof value === 'object') {
              return this.serializeObject(value);
          } else {
              throw new Error("Unsupported data type");
          }
      }

      // Start serialization for the entire object
      const objKeys = Object.keys(obj);
      byteArray.push(this.toUInt64(objKeys.length));  // Property count
      for (let key of objKeys) {
          byteArray.push(this.serializeString(key));  // Property name
          byteArray.push(processValue(obj[key]));    // Property value
      }

      return this.concatByteArrays(byteArray);
  }

  // Deserialize the byte array into an object
  static deserialize(data: Uint8Array): any {
      let offset = 0;
      
      // Helper function to read bytes and convert to a number
      const readUInt64 = (data: Uint8Array): number => {
          let value = 0;
          for (let i = 0; i < 8; i++) {
              value |= (data[i] << (8 * (7 - i)));
          }
          return value;
      }

      const readString = (data: Uint8Array, length: number): string => {
          return new TextDecoder().decode(data.slice(offset, offset + length));
      }

      const deserializeValue = (data: Uint8Array): any => {
          let dataType = data[offset]; 
          offset += 1;
          let length: number;

          switch (dataType) {
              case this.TYPE_STRING:
                  length = readUInt64(data);
                  return readString(data, length);

              case this.TYPE_NUMBER:
                  length = readUInt64(data);
                  return new DataView(data.buffer, offset, length).getFloat64(0);
                  
              case this.TYPE_BOOLEAN:
                  return data[offset++] !== 0;

              case this.TYPE_OBJECT:
                  return this.deserializeObject(data);

              case this.TYPE_ARRAY:
                  return this.deserializeArray(data);

              case this.TYPE_BASE64:
                  length = readUInt64(data);
                  return readString(data, length);

              case this.TYPE_URL:
                  length = readUInt64(data);
                  return readString(data, length);

              default:
                  throw new Error("Unknown data type");
          }
      }

      // Helper function to deserialize objects and arrays recursively
      const deserializeObject = (data: Uint8Array): any => {
          const propertyCount = readUInt64(data);
          const result: any = {};
          
          for (let i = 0; i < propertyCount; i++) {
              const keyLength = readUInt64(data);
              const key = readString(data, keyLength);
              result[key] = deserializeValue(data);
          }

          return result;
      }

      const deserializeArray = (data: Uint8Array): any[] => {
          const itemCount = readUInt64(data);
          const result: any[] = [];

          for (let i = 0; i < itemCount; i++) {
              result.push(deserializeValue(data));
          }

          return result;
      }

      return deserializeObject(data);
  }

  // Helper method to serialize a string
  static serializeString(value: string): Uint8Array {
      const encoded = new TextEncoder().encode(value);
      const length = encoded.length;
      const lengthBytes = this.toUInt64(length);
      return this.concatByteArrays([lengthBytes, encoded]);
  }

  // Helper method to serialize a number
  static serializeNumber(value: number): Uint8Array {
      const lengthBytes = this.toUInt64(8);  // 64-bit number length
      const numberBytes = new ArrayBuffer(8);
      const view = new DataView(numberBytes);
      view.setFloat64(0, value);
      return this.concatByteArrays([lengthBytes, new Uint8Array(numberBytes)]);
  }

  // Helper method to serialize a boolean
  static serializeBoolean(value: boolean): Uint8Array {
      const byte = new Uint8Array(1);
      byte[0] = value ? 1 : 0;
      return byte;
  }

  // Helper method to serialize an array
  static serializeArray(arr: any[]): Uint8Array {
      const lengthBytes = this.toUInt64(arr.length);
      const arrayItems = arr.map(item => this.serialize(item));
      return this.concatByteArrays([lengthBytes, ...arrayItems]);
  }

  // Helper method to concatenate byte arrays
  static concatByteArrays(arrays: Uint8Array[]): Uint8Array {
      const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const arr of arrays) {
          result.set(arr, offset);
          offset += arr.length;
      }
      return result;
  }

  // Fetch method to get and parse data from the server with flexible headers and method options
  static async fetchData(url: string, method: string = 'GET', headers: Record<string, string> = {}): Promise<any> {
      // Fetch request with flexible headers and method
      const response = await fetch(url, {
          method: method,
          headers: headers
      });

      // Check for successful response
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get response as a binary array (use arrayBuffer for byte data)
      const buffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);

      // Deserialize the data
      return this.deserialize(uint8Array);
  }
}
