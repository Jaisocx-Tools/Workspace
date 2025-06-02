

//@purpose bitsBuffer 8bits aligned convert to Uint16Array 
//          with clever LE and BE regard. 
//          the Uint16Array is natively lower cost converted to texts 
//          in sites browsers' js engine variables of datatype string.
class EndiannessConverter {

  example(): undefined {

    // Usage example:
    const utf16leArray = new Uint8Array([72, 0, 101, 0, 108, 0, 108, 0, 111, 0, 32, 0, 87, 0, 111, 0, 114, 0, 108, 0, 100, 0, 33, 0]);  // "Hello World!"
    const uint16Array = EndiannessConverter.convertUtf16LeToUint16Array(utf16leArray);
    console.log(uint16Array);  // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33] (UTF-16)

  }


  codeSnippets(): undefined {
    
    
    // if (isBigEndian) {
    //   charCode = (lowByte << 8) | highByte; // Swap bytes for Big-Endian
    // }


    


  }


  // the default conversion of a bitsbuffer to a short integer 16bits long number value.
  // the most machines build short integers this order Endianness. UTF16_LE.
  // here the result value can be used as is at once the charcode of a symbol in a text,
  // and of a symbol in a js variable of datatype string.
  public static get16bitsIntLE_fromBitsBuf8UtfLE (
    byteFirst: number,
    byteNext: number
  ): number {

    //@alternative the very pretty bytes placing example into a longer integer value. 
    // const shortInteger16bits: number = (byteNext << 8) | byteFirst;

    // applying bitswise shifts due to LE rules.
    const shortInteger16bitsSetFirstByte: number = byteFirst;
    const shortInteger16bitsSetSecondByte: number = (byteNext << 8);

    // bitwise OR | sets all 1 bits both values.
    // the highest byte's bits are all starting bits offset 8, and til 8 all zeroes.
    // and the first byte's bits are all applied with bitwise OR, having all bits clean before setting firstByte bits.
    // both bytes' bits dont intersect, and are applied their own 8bits cells as they are.
    const shortInteger16bits: number = shortInteger16bitsSetSecondByte | shortInteger16bitsSetFirstByte;

    return shortInteger16bits;
  }





  /**
   * Converts a Uint8Array (UTF-16LE encoded) to Uint16Array (UTF-16 text for a browser).
   * If the machine is Big-Endian, the byte order is swapped.
   *
   * @param utf16leArray - The input Uint8Array with UTF-16LE data.
   * @returns - The converted Uint16Array with UTF-16 data (Big-Endian adjusted).
   */
  static convertUtf16LeToUint16Array(utf16leArray: Uint8Array): Uint16Array {
    // Detect the machine endianness
    const isBigEndian = this.detectEndianness() === "BE";
    
    // Ensure the Uint8Array length is even (UTF-16LE character encoding)
    if (utf16leArray.length % 2 !== 0) {
      throw new Error("Input Uint8Array length must be even (UTF-16LE encoding).");
    }

    // Create a Uint16Array to store the result
    const uint16Array = new Uint16Array(utf16leArray.length / 2);

    // Copy the UTF-16LE data to the Uint16Array
    for (let i = 0; i < utf16leArray.length; i += 2) {
      const lowByte = utf16leArray[i];
      const highByte = utf16leArray[i + 1];

      // Combine the bytes into a 16-bit value
      let charCode = (highByte << 8) | lowByte;

      // If the machine is Big-Endian, swap the byte order
      if (isBigEndian) {
        charCode = (lowByte << 8) | highByte; // Swap bytes for Big-Endian
      }

      uint16Array[i / 2] = charCode;
    }

    return uint16Array;
  }

  /**
   * Detects the endianness of the current machine.
   * @returns 'LE' for Little-Endian, 'BE' for Big-Endian.
   */
  private static detectEndianness(): "LE" | "BE" {
    const buffer = new ArrayBuffer(2);
    const view = new DataView(buffer);
    view.setUint16(0, 0x1234); // Store a known value

    // If the first byte is 0x34, it's little-endian (LE)
    return view.getUint8(0) === 0x34 ? "LE" : "BE";
  }
}
