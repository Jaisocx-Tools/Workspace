export interface ResponsiveImportsInterface {

  // RENAMED produceMediaCssImportsCssFile
  // .css file with @import url every .css file from the methods above with media queries, for every size one .css file
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    MediaCssImports.css
  //    MediaCssImports_Webpack.css
  //    MediaCssImports_CDN.css
  // lines like this:
  // one .css file with constants for sizes:
  //    @import url("./MediaConstants.css");
  // and other .css files, every same tamplate for media queries.
  //    @import url("./style_e02_mobile_xs_portrait.css");
  //    @import url("./style_e02_mobile_xs_landscape.css");
  //    @import url("./style_e04_mobile_s_portrait.css");
  //    ...
  //    ...
  produceImportsCssFileWithResponsiveFilesSetsSet
  (
    targetFileName: string,
    relativeImportedFilesFolderPath: string,
    webpackAliased: boolean
  ): Promise<number>;


  // the subcall for the method above, the produceMediaCssImportsCssFile()
  // iterates every .json data record with sizes,
  // produces .css files names with media queries like
  //    responsive/style_e02_mobile_xs_portrait.css
  // from the method
  //    produceMediaCssFile()
  // and adds the import lines for every of these .css files like this:
  //    @import url("./style_e02_mobile_xs_portrait.css");
  // or
  //    @import url("@jaisocx-css-clean-start-MediaAndStyles/style_e02_mobile_xs_portrait.css");
  // not implemented with cdn, and don't know for now, whether needed, it seems for the css-clean-start theme or a SitesTool theme for sure.
  // for example:
  //    @import url("https://cdn.brightday.email/Media.vsDesktop/responsive/style_e02_mobile_xs_portrait.css");
  produceImportsLinesSet_ForResponsiveFilesSetsSet (
    data: any,
    bitsbufUrlStart: Uint8Array
  ): Promise<number>;

}


