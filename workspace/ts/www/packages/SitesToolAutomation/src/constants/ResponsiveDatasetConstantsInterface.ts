import { ResponsiveDatasetConstants } from "./ResponsiveDatasetConstants.js";



export interface ResponsiveDatasetConstantsInterface {

  initBitbufsArrays(): ResponsiveDatasetConstants;


  // responsive_size
  setKeywordResponsiveSize( keyword: string ): ResponsiveDatasetConstants;


  // responsive_size
  getKeywordResponsiveSize(): string;


  // responsive_size
  getBitsbufKeywordResponsiveSize(): Uint8Array;


  // array of strings string[]
  // num = 2
  getOrientationKeywords(): string[];


  // array of bitsbuffers Uint8Array[]
  // num = 2
  getOrientationKeywordsBitsbufs(): Uint8Array[];


  // array of bitsbuffers Uint8Array[]
  // num = 2
  getMaxOrMinArray(): Uint8Array[];


  // portrait
  getKeywordOrientationPortrait(): string;


  // landscape
  getKeywordOrientationLandscape(): string;


  // min
  getKeywordMin(): Uint8Array;


  // max
  getKeywordMax(): Uint8Array;


  // "\n"
  getNewLineBitsbuf(): Uint8Array;


  // "/*"
  getBitsbufSymbolCommentStart(): Uint8Array;


  // "*/"
  getBitsbufSymbolCommentEnd(): Uint8Array;


  // " "
  getBitsbufSymbolBackgroundSpace(): Uint8Array;


  // --responsive_size
  // array of bitsbuffers Uint8Array[]
  // num = 2
  getResponsiveSizeConstantNameBitsbufsArray(): Uint8Array[];


  // --responsive_size
  // bitsbuffer Uint8Array
  // num over 3 octets
  getResponsiveSizeConstantNameBitsbuf(): Uint8Array;


  // "    /* mobile s */\n"
  // Uint8Array[]
  // num = 9
  /*
    {
      padding: 0,
      art: 3,
      art_size: 5
    }
  */
  getLabelLineArray (
    padding: Uint8Array,
    art: Uint8Array,
    art_size: Uint8Array
  ): Uint8Array[];


  // /* <comment> */\n
  // Uint8Array[]
  // num = 6
  /*
    {
      comment: 2
    }
  */
  getCssEncommentedLine (
    comment: Uint8Array
  ): Uint8Array[];


  // responsive_size_h03_tablet_sm_portrait_CssCleanStart_theme_base
  // Uint8Array[]
  // num = 13
  /*
    {
      range_orderby_id: 2,
      art: 4,
      art_size: 6,
      orientation: 8,
      sites_tool_name: 10,
      sites_tool_theme_name: 12
    }
  */
  getResponsiveSizeNameOrientedBitsbufsArray (
      range_orderby_id: Uint8Array,
      art: Uint8Array,
      art_size: Uint8Array,
      orientation: Uint8Array,
      sites_tool_name: Uint8Array,
      sites_tool_theme_name: Uint8Array
  ): Uint8Array[];


  getResponsiveSizeName( responsiveSizeNameOriented: Uint8Array[] ): Uint8Array[];
  getResponsiveSizeNameOriented( responsiveSizeNameOriented: Uint8Array[] ): Uint8Array[];

  responsiveSizeName_setOrientation( orientation: Uint8Array ): ResponsiveDatasetConstants;
  responsiveSizeName_setSitesToolName( sites_tool_name: Uint8Array ): ResponsiveDatasetConstants;
  responsiveSizeName_setSitesTool_ThemeName( sites_tool_theme_name: Uint8Array ): ResponsiveDatasetConstants;


  // @import url("./d_e02_mobile_xs_portrait_CssTable2_theme_example9.css");
  // Uint8Array[]
  // num = 7
  /*
    {
      url_start: 1,
      device_size_name: 3
    }
  */
  getImportLineBitsbufsArray (
      url_start: Uint8Array,
      device_size_name: Uint8Array,
      newLineBitsbuf: Uint8Array
  ): Uint8Array[];


  importLine_setNewlineBitsbuf( newLineBitsbuf: Uint8Array ): ResponsiveDatasetConstants;


  // --responsive_size_max_width: 320px;
  // Uint8Array[]
  // num = 10
  /*
    {
      maxOrMin: 3,
      size: 7
    }
  */
  getResponsiveSizeConstantLineMaxOrMinBitsbufsArray (
    size: Uint8Array,
    isMax: boolean
  ): Uint8Array[];


  // getResponsiveSizeConstantLineMaxOrMinBitsbufsArray_SitesTool (
  //   size: Uint8Array,
  //   isMax: boolean
  // ): Uint8Array[] {
  //   let maxOrMinPos: number = 3;
  //   let sizePos: number = 7;
  //   this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[maxOrMinPos] = isMax ? this.#bitsbufKeywordMax : this.#bitsbufKeywordMin;
  //   this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray[sizePos] = size;
  //   return this.#responsiveSizeConstantLineMaxOrMinBitsbufsArray as Uint8Array[];
  // }
  // --responsive_size_name_CssCleanStart: d_e02_mobile_xs_portrait;
  // --d_CssTable2_theme_example9: d_e04_mobile_s_portrait_CssTable2_theme_example9;
  // Uint8Array[]
  // num = 9
  /*
    {
      siteToolName: 5,
      responsiveSizeNameOriented: 7
    }
  */
  getResponsiveSizeConstantLineBitsbufsArray (
      siteToolName: Uint8Array,
      responsiveSizeNameOriented: Uint8Array
  ): Uint8Array[];


  // "    --d_e04_mobile_s_portrait_max_width: 320px;"
  // Uint8Array[]
  // num = 11
  /*
    {
      padding: 0,
      responsiveSizeNameOriented: 2,
      max_or_min: 4,
      size: 8
    }
  */
  getResponsiveSizeConstantLine_size_BitsbufsArray (
      padding: Uint8Array,
      responsiveSizeNameOriented: Uint8Array,
      max_or_min: Uint8Array,
      size: Uint8Array
  ): Uint8Array[];

}


