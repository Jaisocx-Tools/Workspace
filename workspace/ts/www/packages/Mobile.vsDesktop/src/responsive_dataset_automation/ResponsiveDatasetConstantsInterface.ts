export interface ResponsiveDatasetConstantsInterface {

  getDeviceSizeNameBitsbufsArrayByBitsbufs (
    sitesToolName: Uint8Array,
    rangeOrderbyId: Uint8Array,
    art: Uint8Array,
    artSize: Uint8Array
  ): Uint8Array;



  getDeviceSizeNameBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string
  ): Uint8Array[];



  getDeviceSizeNameOrientedBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[];



  getImportLineBitsbufsArray (
    urlStart: string,
    deviceSizeName: string
  ): Uint8Array[];



  getDeviceSizeConstantLineBitsbufsArrayByBitsbufs (
    deviceSizeNameOriented: Uint8Array
  ): Uint8Array[];



  getDeviceSizeConstantLineBitsbufsArray (
    deviceSizeNameOriented: string
  ): Uint8Array[];

}


