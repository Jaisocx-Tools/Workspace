


export class EndiannessDetection {
  
  public static detectEndianness(): "LE" | "BE" {
    const buffer = new ArrayBuffer(2);
    const view = new DataView(buffer);
    view.setUint16(0, 0x1234); // Store a known value
  
    // console.log("Detected Endianness:", detectEndianness());


    // If the first byte is 0x34, it's little-endian (LE)
    return view.getUint8(0) === 0x34 ? "LE" : "BE";
  }
  
  
  
}