export interface ResponsiveDatasetConstantsInterface {

  getResponsiveSizeNameBitsbufsArrayByBitsbufs (
    sitesToolName: Uint8Array,
    rangeOrderbyId: Uint8Array,
    art: Uint8Array,
    artSize: Uint8Array
  ): Uint8Array;



  getResponsiveSizeNameBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string
  ): Uint8Array[];



  getResponsiveSizeNameOrientedBitsbufsArray (
    sitesToolName: string,
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[];



  getImportLineBitsbufsArray (
    urlStart: string,
    responsiveSizeName: string
  ): Uint8Array[];



  getResponsiveSizeConstantLineBitsbufsArrayByBitsbufs (
    responsiveSizeNameOriented: Uint8Array
  ): Uint8Array[];



  getResponsiveSizeConstantLineBitsbufsArray (
    responsiveSizeNameOriented: string
  ): Uint8Array[];

}


