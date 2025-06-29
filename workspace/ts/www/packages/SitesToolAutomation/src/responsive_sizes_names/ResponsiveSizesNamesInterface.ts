import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveSizesNames } from "./ResponsiveSizesNames.js";



export interface ResponsiveSizesNamesInterface {

  setResponsiveDatasetBase( base: ResponsiveDatasetBase ): ResponsiveSizesNames;


  // RENAMED produceMediaConstantsCssFile( targetFileName: string ): Promise<number>;
  // SiteToolAutomation/MediaAndStyles/responsive/MediaConstants.css
  // .workspace {
  //     --style_e02_mobile_xs_portrait__width__min_width: 240px;
  //     --style_e02_mobile_xs_portrait__width__max_width: 320px;
  //
  //     --style_e02_mobile_xs_landscape__width__min_width: 320px;
  //     --style_e02_mobile_xs_landscape__width__max_width: 500px;
  //
  //   ...
  produceCssFileWithResponsiveSizesConstants ( targetFileName: string, newLinesAmount: number, padding: number ): Promise<number>;


  // The subcall for the method produceMediaConstantsCssFile()
  // for the .css file
  // SiteToolAutomation/src/ResponsiveSizeNamesNew.ts
  // --s_56_16k_tv_vertical__min_width: 8641px; /* 16k TV */
  // --s_56_16k_tv_vertical__max_width: 9999px; /* 16k TV */
  //
  // --s_56_16k_tv_horizontal__min_width: 15361px; /* 16k TV */
  // --s_56_16k_tv_horizontal__max_width: 25360px; /* 16k TV */
  produceResponsiveSizesConstantsLinesSet (
    responsiveDatasetPropName: string,
    paddingBitsbuf: Uint8Array
  ): Uint8Array[];

}

