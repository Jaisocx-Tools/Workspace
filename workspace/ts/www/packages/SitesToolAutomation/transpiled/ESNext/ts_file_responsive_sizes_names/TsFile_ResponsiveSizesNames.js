// import * as fs from "node:fs";
// import * as path from "node:path";
// import { TextEncoder, TextDecoder } from "node:util";
// import { FileWriter } from "@jaisocx/file-writer";
// import { TemplateRenderer } from "@jaisocx/template-renderer";
// import { CssImporter } from "@jaisocx/css-importer";
import { ResponsiveDatasetConstants } from "../constants/ResponsiveDatasetConstants.js";
import { ResponsiveDatasetBase } from "../automation_base_class/ResponsiveDatasetBase.js";
export class TsFile_ResponsiveSizesNames {
    responsiveDatasetConstants;
    responsiveDatasetBase;
    constructor() {
        this.responsiveDatasetConstants = new ResponsiveDatasetConstants();
        this.responsiveDatasetBase = new ResponsiveDatasetBase();
    }
    // RENAMED: produceResponsiveSizesTypescriptFile
    // SiteToolAutomation/src/ResponsiveSizeNamesNew.ts
    // the .ts class with constants names for media queries.
    // these names are unique for .css files names and css variables for width and height px sizes.
    // class prop: readonly #style_e02_mobile_xs_portrait: string = "style_e02_mobile_xs_portrait";
    // class method: getstyle_e02_mobile_xs_portrait(): string;
    // name of the .css file: MediaAndStyles/responsive/style_e02_mobile_xs_portrait.css
    // in this .css file, css variable: --media_rule_name: style_e02_mobile_xs_portrait;
    //                                  --media_rule__min_width: var(--style_e02_mobile_xs_portrait__min_width);
    async produceTsFileWithResponsiveSizesNames(_tsClassName) {
        // // @ts-ignore
        // let propNames: any = Object.keys( this.res );
        // let responsiveDatasetPropName: string = "";
        // let targetFileName: string = [ tsClassName, ".ts" ].join("");
        // let packagePath: string = path.resolve (
        //   this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath,
        //   "../../"
        // );
        // let targetFilePath: string = path.resolve (
        //   packagePath,
        //   "src/",
        //   targetFileName
        // );
        // let fileWriterRetval: number = await this.responsiveDatasetBase
        //     .fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
        //       targetFilePath
        //     );
        // let i = 0;
        // let propsNumber: number = propNames.length;
        // let textBlocks: string[] = [
        //   "export class ",
        //   tsClassName,
        //   " {\n\n"
        // ];
        // let tsClassContentBitsbufs: Uint8Array[] = new Array() as Uint8Array[];
        // tsClassContentBitsbufs.push( this.responsiveDatasetBase
        //     .textEncoder.encode ( textBlocks.join("") ) );
        // let fieldLine: string[] = [
        //   "  readonly #",
        //   "1",
        //   ": string = ",
        //   "\"",
        //   "4",
        //   "\";\n"
        // ];
        // let fieldLineMediaNamePos_1: number = 1;
        // let fieldLineMediaNamePos_3: number = 4;
        // let fieldLineBitsbufs: Uint8Array[] = new Array( fieldLine.length ) as Uint8Array[];
        // let len: number = this.responsiveDatasetConstants.textArrayToUnt8Arrays (
        //   // @ts-ignore
        //   fieldLine,
        //   fieldLineBitsbufs
        // );
        // let method: string[] = [
        //   "  get",
        //   "1",
        //   "(): string {\n",
        //   "    return this.#",
        //   "4",
        //   ";\n",
        //   "  }\n\n"
        // ];
        // let methodBitsbufs: Uint8Array[] = new Array( method.length ) as Uint8Array[];
        // len = this.responsiveDatasetConstants.textArrayToUnt8Arrays (
        //   // @ts-ignore
        //   method,
        //   methodBitsbufs
        // );
        // console.log( len );
        // fileWriterRetval = await this.responsiveDatasetBase.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );
        // let mediaName: string = "";
        // let mediaNameBitsbuf: Uint8Array = new Uint8Array();
        // let mediaNameUcFirstPos: number = 1;
        // // let mediaNameUcFirstBitsbuf: Uint8Array = new Uint8Array();
        // let mediaNamePos: number = 4;
        // // textBlocks.push( tsClassEndLine );
        // let orientationKeywords: string[] = this.responsiveDatasetConstants.getOrientationKeywords();
        // let orientationKeywordId: number = 0;
        // let propnameId: number = 0;
        // let orientation: string = "";
        // let iterationsNumber: number = ( propsNumber << 1 );
        // let mediaNamesBitsbufs: Uint8Array[] = new Array( iterationsNumber ) as Uint8Array[];
        // tsClassContentBitsbufs = new Array( iterationsNumber + 1 ) as Uint8Array[];
        // for ( i = 0; i < iterationsNumber; i++ ) {
        //   if ( orientationKeywordId === 2 ) {
        //     orientationKeywordId = 0;
        //     propnameId++;
        //   }
        //   responsiveDatasetPropName = propNames[propnameId];
        //   orientation = orientationKeywords[orientationKeywordId];
        //   mediaName = this.produceMediaName (
        //     responsiveDatasetPropName,
        //     orientation
        //   );
        //   mediaNameBitsbuf = this.responsiveDatasetBase.textEncoder.encode( mediaName );
        //   mediaNamesBitsbufs[i] = mediaNameBitsbuf;
        //   fieldLineBitsbufs[fieldLineMediaNamePos_1] = mediaNameBitsbuf;
        //   fieldLineBitsbufs[fieldLineMediaNamePos_3] = mediaNameBitsbuf;
        //   tsClassContentBitsbufs[i] = this.responsiveDatasetBase.fileWriter.concatUint8Arrays( fieldLineBitsbufs );
        //   orientationKeywordId++;
        // }
        // tsClassContentBitsbufs[iterationsNumber] = this.responsiveDatasetBase.textEncoder.encode( "\n\n\n" );
        // fileWriterRetval = await this.responsiveDatasetBase.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );
        // let mediaNameUcFirstChar: number = "S".charCodeAt(0);
        // let mediaNameLcFirstChar: number = "s".charCodeAt(0);
        // // tsClassContentBitsbufs = new Array( iterationsNumber + 1 ) as Uint8Array[];
        // for ( i = 0; i < iterationsNumber; i++ ) {
        //   mediaNameBitsbuf = mediaNamesBitsbufs[i];
        //   methodBitsbufs[mediaNameUcFirstPos] = mediaNameBitsbuf;
        //   methodBitsbufs[mediaNameUcFirstPos][0] = mediaNameUcFirstChar;
        //   methodBitsbufs[mediaNamePos] = mediaNameBitsbuf;
        //   methodBitsbufs[mediaNamePos][0] = mediaNameLcFirstChar;
        //   tsClassContentBitsbufs[i] = this.responsiveDatasetBase.fileWriter.concatUint8Arrays( methodBitsbufs );
        // }
        // tsClassContentBitsbufs[iterationsNumber] = this.responsiveDatasetBase.textEncoder.encode( "}\n\n\n" );
        // fileWriterRetval = await this.responsiveDatasetBase.fileWriter.appendMixedArrayToFile ( tsClassContentBitsbufs );
        // tsClassContentBitsbufs = new Array() as Uint8Array[];
        // fileWriterRetval = await this.responsiveDatasetBase.fileWriter.filehandleClose();
        let fileWriterRetval = 1;
        return fileWriterRetval;
    }
}
//# sourceMappingURL=TsFile_ResponsiveSizesNames.js.map