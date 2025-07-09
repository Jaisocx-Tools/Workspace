import { ResponsiveFilesSet } from "./ResponsiveFilesSet.js";



export interface ResponsiveFilesSetInterface {

  // SiteToolAutomation/data/templates/ResponsiveTemplate.template
  // in this package, just one art of .css files is produced with the template.
  // the .css files with media query for one size like "mobile_xs": SiteToolAutomation/MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css.
  readTemplateMediaCssFile( inFileAbsolutePath: string ): ResponsiveFilesSet;


  // RENAMED produceMediaCssFilesSet
  // produces .css files with media queries for sizes like this .css file:
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  //    style_e02_mobile_xs_landscape.css
  //    style_e02_mobile_s_portrait.css
  // ...
  produceResponsiveFilesSetsSet (): Promise<number>;


  // RENAMED produceMediaCssFile
  // this method produces one of the .css files for the method above
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  produceOneResponsiveFilesSet (
    themeNameBitsbuf: Uint8Array,
    sitesToolBitsbuf: Uint8Array,
    responsiveDatasetPropName: string,
    orientation: string,
    orientationBitsbuf: Uint8Array
  ): Promise<number>;



  getTemplateDataOverridden (


    //@ts-ignore
    responsiveDatasetPropName: string,
    templateDataBase: any
  ): any;

}



