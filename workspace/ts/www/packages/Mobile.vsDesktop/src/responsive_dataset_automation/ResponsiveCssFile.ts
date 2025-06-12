import * as fs from "node:fs";
import * as path from "node:path";

import { FileWriter } from "@jaisocx/file-writer";
import { TemplateRenderer } from "@jaisocx/template-renderer";

import { ResponsiveDatasetConstants } from "./ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "./ResponsiveDatasetBase.js";
import { ResponsiveCssFileInterface } from "./ResponsiveCssFileInterface.js";



export class ResponsiveCssFile implements ResponsiveCssFileInterface {

  responsiveDatasetConstants: ResponsiveDatasetConstants;
  responsiveDatasetBase: ResponsiveDatasetBase;

  templateMediaCssFileContent: string;
  templateRenderer: TemplateRenderer;


  constructor() {
    this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
    this.responsiveDatasetBase = new ResponsiveDatasetBase();

    this.templateMediaCssFileContent = "";

    this.templateRenderer = new TemplateRenderer();
    this.templateRenderer
      .setDebug( false );

  }



  // Mobile.vsDesktop/data/templates/ResponsiveTemplate.template
  // in this package, just one art of .css files is produced with the template.
  // the .css files with media query for one size like "mobile_xs": Mobile.vsDesktop/MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css.
  readTemplateMediaCssFile( inFileAbsolutePath: string ): ResponsiveCssFile {
    const templatePath = inFileAbsolutePath;
    this.templateMediaCssFileContent = fs.readFileSync( templatePath, "utf8" );

    return this;
  }



  // RENAMED produceMediaCssFilesSet
  // produces .css files with media queries for sizes like this .css file:
  // in the folder
  // Mobile.vsDesktop/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  //    style_e02_mobile_xs_landscape.css
  //    style_e02_mobile_s_portrait.css
  // ...
  async produceResponsiveCssFilesSet (): Promise<number> {

    // @ts-ignore
    let propNames: any = Object.keys( this.dataset.data );
    let responsiveDatasetPropName: string = "";
    let orientationKeywords: string[] = this.responsiveDatasetConstants.getOrientationKeywords();
    let orientation: string = "";

    let templateRendererDataRecordId: number = this.templateRenderer
      .setTemplate( this.templateMediaCssFileContent )
      .setData (
        {
          "sizeFrom": "",
          "sizeTil": "",
          "orientation": "",
          "deviceSizeNameConstantLine": "",
          "deviceSizeConstant_sizeFrom": "",
          "deviceSizeConstant_sizeTil": ""
        }
      )
      .getActiveDataRecordId();

    this.templateRenderer.optimize( templateRendererDataRecordId );

    let mediaRetVal: number = 0;
    for ( responsiveDatasetPropName of propNames ) {

      for ( orientation of orientationKeywords ) {

        mediaRetVal = await this.produceOneResponsiveCssFile (
          responsiveDatasetPropName,
          orientation
        );

      }

    }


    return mediaRetVal;
  }



  // RENAMED produceMediaCssFile
  // this method produces one of the .css files for the method above
  // in the folder
  // Mobile.vsDesktop/MediaAndStyles/responsive
  //    style_e02_mobile_xs_portrait.css
  async produceOneResponsiveCssFile (
    responsiveDatasetPropName: string,
    orientation: string
  ): Promise<number> {

    let data = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName]

    let sizesByBitsbufs_true: boolean = true;
    let sizes: any = this.responsiveDatasetBase.getSizesByOrientation (
      responsiveDatasetPropName,
      orientation,
      sizesByBitsbufs_true
    );

    let deviceSizeName: Uint8Array = data["deviceSizeName"];

    let deviceSizeNameConstantLineArray: Uint8Array[] = this.responsiveDatasetConstants
        .getDeviceSizeConstantLineBitsbufsArrayByBitsbufs (
          deviceSizeName
        );

    let deviceSizeNameConstantLine: Uint8Array = this.responsiveDatasetBase.fileWriter.concatUint8Arrays( deviceSizeNameConstantLineArray );

    let keywordMin: Uint8Array = this.responsiveDatasetConstants.getKeywordMin();
    let deviceSizeConstantLine_size: Uint8Array[] = this.responsiveDatasetConstants
        .getDeviceSizeConstantLine_size_BitsbufsArrayByBitsbufs (
          deviceSizeName,
          keywordMin
        );


    let deviceSizeConstant_SizeFrom: Uint8Array = this.responsiveDatasetBase.fileWriter.concatUint8Arrays( deviceSizeConstantLine_size );

    let keywordMax: Uint8Array = this.responsiveDatasetConstants.getKeywordMax();
    deviceSizeConstantLine_size = this.responsiveDatasetConstants
        .getDeviceSizeConstantLine_size_BitsbufsArrayByBitsbufs (
          deviceSizeName,
          keywordMax
        );
    let deviceSizeConstant_SizeTil: Uint8Array = this.responsiveDatasetBase.fileWriter.concatUint8Arrays( deviceSizeConstantLine_size );


    let templateData: any = {
      "sizeFrom": sizes["from"],
      "sizeTil": sizes["to"],
      "orientation": this.responsiveDatasetBase.textEncoder.encode( orientation ),
      "deviceSizeNameConstantLine": deviceSizeNameConstantLine,
      "deviceSizeConstant_sizeFrom": deviceSizeConstant_SizeFrom,
      "deviceSizeConstant_sizeTil": deviceSizeConstant_SizeTil
    };



    this.templateRenderer
      .setData( templateData );

    let templateRendererDataRecordId: number = this.templateRenderer.getActiveDataRecordId();

    let content: Uint8Array[] = this.templateRenderer.renderOptimizedDataBitsbufs (
      templateRendererDataRecordId,
      templateData
    );



    // temp for debugging
    // @ts-ignore
    // let contentText: string = this.templateRenderer.renderOptimizedToString (
    //   templateRendererDataRecordId,
    //   templateData
    // );



    let deviceSizeNameString: string = this.responsiveDatasetBase.textDecoder.decode( deviceSizeName );
    let fileName: string = [ deviceSizeNameString, ".css" ].join("");

    let mediaCssFilePath: string = path.resolve (
      this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
      fileName
    );


    let retVal: number = 0;
    retVal = await this.responsiveDatasetBase.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle( mediaCssFilePath );
    retVal = await this.responsiveDatasetBase.fileWriter.appendFlatArrayToFile( content );
    retVal = await this.responsiveDatasetBase.fileWriter.filehandleClose();


    return retVal;
  }

}

