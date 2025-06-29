export interface TsFile_ResponsiveSizesNames_Interface {

  // RENAMED: produceResponsiveSizesTypescriptFile
  // SiteToolAutomation/src/ResponsiveSizeNamesNew.ts
  // the .ts class with constants names for media queries.
  // these names are unique for .css files names and css variables for width and height px sizes.
  // class prop: readonly #style_e02_mobile_xs_portrait: string = "style_e02_mobile_xs_portrait";
  // class method: getstyle_e02_mobile_xs_portrait(): string;
  // name of the .css file: MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css
  // in this .css file, css variable: --media_rule_name: style_e02_mobile_xs_portrait;
  //                                  --media_rule__min_width: var(--style_e02_mobile_xs_portrait__min_width);
  produceTsFileWithResponsiveSizesNames (
    tsClassName: string
  ): Promise<number>;

}



