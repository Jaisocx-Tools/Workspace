//@ts-ignore
import * as fs from "node:fs";


//@ts-ignore
import * as path from "node:path";


// import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
import { ResponsiveFilesSetInterface } from "./ResponsiveFilesSetInterface.js";



export class ResponsiveFilesSet implements ResponsiveFilesSetInterface {

  // fileWriter: FileWriter;
  templateRenderer: TemplateRenderer;

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;

  mediaQueryCssFileContent: string;



  constructor(
    base: ResponsiveDatasetBase,
    constants: ResponsiveDatasetConstants
  ) {

    // this.fileWriter = new FileWriter();
    this.templateRenderer = new TemplateRenderer();

    this.responsiveDatasetConstants = constants;
    this.responsiveDatasetBase = base;

    this.mediaQueryCssFileContent = "";
  }


  // SiteToolAutomation/data/templates/ResponsiveTemplate.template
  // in this package, just one art of .css files is produced with the template.
  // the .css files with media query for one size like "mobile_xs": SiteToolAutomation/MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css.
  readTemplateMediaCssFile( mediaQueryCssFileTemplatePath: string ): ResponsiveFilesSet {
    const templatePath = mediaQueryCssFileTemplatePath;
    this.mediaQueryCssFileContent = fs.readFileSync( templatePath, "utf8" );


    return this;
  }


  // RENAMED produceMediaCssFilesSet
  // produces .css files with media queries for sizes like this .css file:
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  //    style_e02_mobile_xs_landscape.css
  //    style_e02_mobile_s_portrait.css
  // ...
  async produceResponsiveFilesSetsSet (): Promise<number> {

    // @ts-ignore
    let propNames: any = Object.keys( this.responsiveDatasetBase.dataset.data );
    let responsiveDatasetPropName: string = "";
    let orientationKeywords: string[] = this.responsiveDatasetConstants.getOrientationKeywords();
    let orientationKeywordsBitsbufs: Uint8Array[] = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
    let orientation: string = "";
    let orientationBitsbuf: Uint8Array = new Uint8Array();
    let sitesTool_ThemeNameBitsbuf: Uint8Array = this.responsiveDatasetBase.fileWriter.textEncoder
      .encode( this.responsiveDatasetBase.sitesTool_ThemeName );
    let sitesToolBitsbuf: Uint8Array = this.responsiveDatasetBase.fileWriter.textEncoder
      .encode( this.responsiveDatasetBase.sitesToolName );



    let templateDataBase: any = {
      "SitesTool_ThemeName": "",
      "SitesTool_ThemeCssClassName": "",
      "SitesToolName": "",
      "responsiveSizeConstantName": "",
      "responsiveSizeName": "",
      "orientation": "",
      "min-width": "",
      "max-width": "",
      "min-height": "",
      "max-height": ""
    };

    responsiveDatasetPropName = propNames[0];
    let templateDataOverridden: any = this.getTemplateDataOverridden (
      responsiveDatasetPropName,
      templateDataBase
    );


    //@ts-ignore
    let templateRendererDataRecordId: number = this.templateRenderer
      .setTemplate( this.mediaQueryCssFileContent )
      .setData ( templateDataOverridden )
      .getActiveDataRecordId();


    this.templateRenderer.optimize( templateRendererDataRecordId );

    let mediaRetVal: number = 0;
    let orientationId: number = 0;

    for ( responsiveDatasetPropName of propNames ) {
      for ( orientationId = 0; orientationId < 2; orientationId++ ) {
        orientation = orientationKeywords[orientationId];
        orientationBitsbuf = orientationKeywordsBitsbufs[orientationId];

        mediaRetVal = await this.produceOneResponsiveFilesSet (
          sitesTool_ThemeNameBitsbuf,
          sitesToolBitsbuf,
          responsiveDatasetPropName,
          orientation,
          orientationBitsbuf
        );

      }

    }


    return mediaRetVal;
  }


  // RENAMED produceMediaCssFile
  // this method produces one of the .css files for the method above
  // in the folder
  // SiteToolAutomation/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  async produceOneResponsiveFilesSet (
    themeNameBitsbuf: Uint8Array,
    sitesToolBitsbuf: Uint8Array,
    responsiveDatasetPropName: string,
    orientation: string,
    orientationBitsbuf: Uint8Array
  ): Promise<number> {
    let responsiveSizeConstantName: Uint8Array = this.responsiveDatasetConstants
      .getResponsiveSizeConstantNameBitsbuf();

    let sitesTool_ThemeCssClassName: string = ( this.responsiveDatasetBase.sitesTool_ThemeName === "theme_base" ) ? "" : ( "." + this.responsiveDatasetBase.sitesTool_ThemeName );
    let sitesTool_ThemeCssClassNameBitsbuf: Uint8Array = this.responsiveDatasetBase.fileWriter.textEncoder
      .encode( sitesTool_ThemeCssClassName );


    //@ts-ignore
    let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];

    let sizesByBitsbufs_true: boolean = true;
    let sizes: any = this.responsiveDatasetBase.getSizesByOrientation (
      responsiveDatasetPropName,
      orientation,
      sizesByBitsbufs_true
    );

    let responsiveSizeName_withSitesToolName_Array: Uint8Array[] = this.responsiveDatasetConstants
      .getResponsiveSizeNameOrientedBitsbufsArray (
        responsiveData["range_orderby_id"],
        responsiveData["art"],
        responsiveData["art_size"],
        orientationBitsbuf,
        sitesToolBitsbuf,
        themeNameBitsbuf
      );


    let responsiveSizeNameOrientedArray: Uint8Array[] = responsiveSizeName_withSitesToolName_Array.slice( 0, 9 );

    let responsiveSizeName_withSitesToolName: Uint8Array = this.responsiveDatasetBase.fileWriter
      .concatUint8Arrays( responsiveSizeName_withSitesToolName_Array );

    let responsiveSizeNameOriented: Uint8Array = this.responsiveDatasetBase.fileWriter
      .concatUint8Arrays( responsiveSizeNameOrientedArray );

    let templateDataBase: any = {
      "SitesTool_ThemeName": themeNameBitsbuf,
      "SitesTool_ThemeCssClassName": sitesTool_ThemeCssClassNameBitsbuf,
      "SitesToolName": sitesToolBitsbuf,
      "responsiveSizeConstantName": responsiveSizeConstantName,
      "responsiveSizeName": responsiveSizeNameOriented,
      "orientation": orientationBitsbuf,
      "min-width": sizes["from"],
      "max-width": sizes["to"],
      "min-height": sizes["min-height"],
      "max-height": sizes["max-height"]
    };

    let templateDataOverridden = this.getTemplateDataOverridden (
      responsiveDatasetPropName,
      templateDataBase
    );


    // console.info( templateDataOverridden );
    let templateRendererDataRecordId: number = this.templateRenderer.getActiveDataRecordId();

    this.templateRenderer
      .setData( templateDataOverridden );


    let responsiveCssFile_Content: Uint8Array[] = this.templateRenderer.renderOptimizedDataBitsbufs (
      templateRendererDataRecordId,
      templateDataOverridden
    );

    let responsiveSizeName_withSitesToolName_string: string = this.responsiveDatasetBase.fileWriter
      .textDecoder.decode( responsiveSizeName_withSitesToolName );

    let responsiveCssFile_Name: string = [
      responsiveSizeName_withSitesToolName_string,
      ".css"
    ].join("");


    let responsiveCssFile_Path: string = path.resolve (
      this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
      responsiveCssFile_Name
    );


    let retVal: number = 0;
    retVal = await this.responsiveDatasetBase.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle( responsiveCssFile_Path );
    retVal = await this.responsiveDatasetBase.fileWriter.appendFlatArrayToFile( responsiveCssFile_Content );
    retVal = await this.responsiveDatasetBase.fileWriter.filehandleClose();


    return retVal;
  }



  getTemplateDataOverridden (
    _responsiveDatasetPropName: string,
    templateDataBase: any
  ): any {

    // console.info( templateDataBase );
    return templateDataBase;
  }

}



