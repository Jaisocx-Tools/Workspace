import * as fs from "node:fs";
import * as path from "node:path";
import { TextDecoder } from "node:util";

import { FileWriter, FileWriterQueue } from "@jaisocx/file-writer";
import { TokensParser, FileReader } from "@jaisocx/tokens-parser";

import { CssImporterConstants } from "./CssImporterConstants.js";
import { CssImporterInterface } from "./CssImporterInterface.js";
import { ParsedResultDTO } from "./ParsedResultDTO.js";



export class CssImporter implements CssImporterInterface {

  debug: boolean;

  cssImporterConstants: CssImporterConstants;
  fileReader: FileReader;
  tokensParser: TokensParser;

  packagePath: string;

  webpackAliases: any|false;
  cssFilePath: string;
  cssTargetFilePath: string;

  fileWriter: FileWriter;
  fileWriterQueue: FileWriterQueue;

  textDecoder: TextDecoder;



  constructor() {
    this.debug = false;

    this.cssImporterConstants = new CssImporterConstants();
    this.fileReader = new FileReader();
    this.tokensParser = new TokensParser();

    this.packagePath = "";
    this.webpackAliases = "";
    this.cssFilePath = "";
    this.cssTargetFilePath = "";

    this.fileWriter = new FileWriter();
    this.fileWriter
      .setDebug( false );

    this.fileWriterQueue = new FileWriterQueue (
      this.fileWriter,
      200,
      200
    );
    this.fileWriterQueue
      .setDebug( false );

    this.textDecoder = new TextDecoder( "utf8" );
  }



  setDebug( inDebug: boolean ): CssImporter {
    this.debug = inDebug;


    return this;
  }



  setPackagePath( packagePath: string ): CssImporter {
    this.packagePath = packagePath;


    return this;
  }



  getPackagePath(): string {
    return this.packagePath;
  }



  setCssFilePath( cssFilePath: string ): CssImporter {
    this.cssFilePath = cssFilePath;


    return this;
  }



  getCssFilePath(): string {
    return this.cssFilePath;
  }



  setCssTargetFilePath( cssTargetFilePath: string ): CssImporter {
    this.cssTargetFilePath = cssTargetFilePath;


    return this;
  }



  getCssTargetFilePath(): string {
    return this.cssTargetFilePath;
  }



  readJsonFile( filePath: string ): any {
    const contents: string = fs.readFileSync(
      filePath,
      "utf-8"
    );
    let aliasesObj: object = JSON.parse( contents );


    return aliasesObj;
  }



  getWebpackAliases(): object|false {
    if ( (this.webpackAliases !== "") || (this.webpackAliases === false) ) {
      return this.webpackAliases;
    }

    const aliasesPath: any = path.resolve(
      this.packagePath,
      this.cssImporterConstants.getWebpackAliasesJsonPath()
    );

    let aliasesObj: object = {};
    let success: boolean = false;

    if ( fs.existsSync( aliasesPath ) ) {
      aliasesObj = this.readJsonFile( aliasesPath );
      success = true;
    }

    if ( !success ) {
      return false;
    }

    this.webpackAliases = aliasesObj;


    return this.webpackAliases;
  }



  public setWebpackAliases(
    aliasesObject: any,
    packageRoot: string
  ): CssImporter {
    this.webpackAliases = aliasesObject;

    let webpackAliasVariableNamePackageRoot: string = this.cssImporterConstants.getWebpackAliasVariableNamePackageRoot();

    let alias: string = "";
    let aliasValue: string = "";

    for ( alias in this.webpackAliases ) {
      aliasValue = this.webpackAliases[alias];
      aliasValue = aliasValue.replace(
        webpackAliasVariableNamePackageRoot,
        packageRoot
      );
      this.webpackAliases[alias] = aliasValue;
    }


    return this;
  }


  /**
   *
   * @param inBitsbuf
   * @param filePathTextRefs
   * @param webpackAliases the object, read from the file webpack.aliases.json
   * @returns
   */



  public resolveUrlBitsbufWithWebpackAlias (
    inBitsbuf: Uint8Array,
    filePathTextRefs: number[],
    webpackAliases: any
  ): string {
    let filePathBitsbuf: Uint8Array = inBitsbuf.subarray(
      filePathTextRefs[0],
      filePathTextRefs[1]
    );
    let filePathUntrimmed: string = this.textDecoder.decode( filePathBitsbuf );

    let filePathTrimmed: string = filePathUntrimmed.trim();
    let filePathAliased: string = this.tokensParser.trimQuotes( filePathTrimmed );

    let urlResolved: boolean = false;
    let alias: string = "";
    let filePathResolved: string = "";

    if ( filePathAliased.startsWith("@") === false ) {
      return filePathAliased;
    }

    for ( alias in webpackAliases ) {
      if ( filePathAliased.startsWith( alias + "/" ) === false ) {
        continue;
      }

      filePathResolved = filePathAliased.replace (
        (
          alias + "/" ),
        (
          webpackAliases[alias]
        )
      );
      filePathResolved = path.resolve( filePathResolved );

      urlResolved = true;
      break;

    }


    // @ts-ignore
    if ( urlResolved === false ) {
      let aliasesJson = JSON.stringify (
        webpackAliases,
        null,
        2
      );
      let errMsg: string = `The @import statement url in the css file:\n${filePathAliased}\nwas not prefixed with no of webpack aliases: \n${aliasesJson}`;
      throw new Error( errMsg );
    }

    if ( fs.existsSync( filePathResolved ) === false ) {
      let errMsg: string = `The file path resolved with webpack alias does not exist:\n${filePathResolved}`;
      throw new Error( errMsg );
    }


    return filePathResolved;
  }



  async build(): Promise<number> {
    let hasError: boolean = false;
    let err: any = {};

    let webpackAliases = this.getWebpackAliases();


    // NOTICE: HARDCODED
    let counterStop = 1200;

    let opened: number = await this.fileWriterQueue.fileWriter.toAddToFileInLoop_CleanupFileAndGetNewFileHandle (
      this.cssTargetFilePath
    );


    // example to be notified on write end and file handle close.
    if ( this.debug === true ) {
      this.fileWriterQueue.addThisClassEventListener (
        this.fileWriterQueue.eventEOF.eventName,
        (eventName, payload) => {
          console.log (
            "EOF",
            {eventName,
              payload}
          );
        }
      );
    }

    let locInOutResultDTO: ParsedResultDTO = new ParsedResultDTO();

    try {
      this.setWebpackAliases (
        webpackAliases,
        this.packagePath
      );
      this.cssBundleMake (
        locInOutResultDTO,
        this.cssFilePath,
        counterStop
      );
    } catch (error) {
      console.error(error);
      err = error;
      hasError = true;
    }

    if ( hasError === true ) {
      let closed: number = await this.fileWriter.filehandleClose();
      err.closed = closed;

      throw err;
    }

    if ( this.debug === true ) {
      console.log (
        "All files enqueued",
        this.cssTargetFilePath
      );

      fs.writeFileSync(
        "locInOutResultDTO",
        JSON.stringify(
          locInOutResultDTO.toJson(),
          null,
          2
        )
      );

    }

    this.fileWriterQueue.setHasToStop( true );

    this.fileWriterQueue.filehandleClose();

    if ( this.debug === true ) {
      console.log (
        "CssImporter.build()",
        "After this.fileWriterQueue.filehandleClose();",
        this.cssTargetFilePath
      );
    }


    return opened;
  }



  public cssBundleMake (
    inOutParsedResultDTO: ParsedResultDTO,
    inFilePath: string,
    counterStop: number
  ): number {
    let fileContentsBuffer: Uint8Array = this.fileReader.readFileContentsAsBitsBuf ( inFilePath );

    let fileSize: number = fileContentsBuffer.length;
    let fileLastIx: number = fileSize - 1;

    let bitsBufRefs_ReadFile: number[][] = [[0, (fileLastIx + 1)]];
    let bitsBufRefs_NoComments: number[][] = [];
    let bitsBufRefs_Comments_Outer: number[][] = [];
    let bitsBufRefs_Comments_Inner: number[][] = [];

    let bitsBufRefs_NoImports: number[][] = [];
    let bitsBufRefs_ImportURLs_Outer: number[][] = [];
    let bitsBufRefs_ImportURLs_Inner: number[][] = [];

    let cssTokens: any = this.cssImporterConstants.getCssTokens();
    let commentsTokens: any = cssTokens["comment"];
    let importsTokens: any = cssTokens["import"];



    this.tokensParser
      .parseWithStartAndEndTokensSets (
        fileContentsBuffer,
        bitsBufRefs_ReadFile,
        commentsTokens,
        bitsBufRefs_NoComments,
        bitsBufRefs_Comments_Outer,
        bitsBufRefs_Comments_Inner,
        counterStop
      );

    if ( this.debug === true ) {
      console.log( "Comments:\n" );
      this.tokensParser.contentPreviewByRange(
        fileContentsBuffer,
        bitsBufRefs_Comments_Inner
      );

      console.log( "\n\nCss without comments:\n" );
      this.tokensParser.contentPreviewByRange(
        fileContentsBuffer,
        bitsBufRefs_NoComments
      );
    }

    this.tokensParser
      .parseWithStartAndEndTokensSets (
        fileContentsBuffer,
        bitsBufRefs_NoComments,
        importsTokens,
        bitsBufRefs_NoImports,
        bitsBufRefs_ImportURLs_Outer,
        bitsBufRefs_ImportURLs_Inner,
        counterStop
      );

    if ( this.debug === true ) {
      console.log( "\n\nImports:\n" );
      this.tokensParser.contentPreviewByRange(
        fileContentsBuffer,
        bitsBufRefs_ImportURLs_Inner
      );

      console.log( "\n\nCss with no imports no comments:\n" );
      this.tokensParser.contentPreviewByRange(
        fileContentsBuffer,
        bitsBufRefs_NoImports
      );
    }



    let refsIx: number = 0;
    let numberOf_NoImportsRanges: number = bitsBufRefs_NoImports.length;
    let range: number[] = [];
    let rangeStart: number = 0;
    let rangeEnd: number = 0;

    let resultDTO: ParsedResultDTO = new ParsedResultDTO();
    resultDTO.cssFilePath = inFilePath;
    resultDTO.cssFileContents = fileContentsBuffer;

    this.fileWriterQueue.namedBitsbufs[resultDTO.cssFilePath] = fileContentsBuffer;

    let firstRange_NoImports: number[] = bitsBufRefs_NoImports[0];
    let firstRange_NoImports_Start: number = firstRange_NoImports[0];
    let firstRange_NoImports_End: number = firstRange_NoImports[1];
    rangeStart = firstRange_NoImports_Start;
    rangeEnd = firstRange_NoImports_End;


    // here we handle the css file when no import urls were found in the file.
    // just writing all ranges to target file.
    if ( bitsBufRefs_ImportURLs_Inner.length === 0 ) {
      resultDTO.rangesOrDtoOfImport = [...bitsBufRefs_NoImports];

      for ( refsIx = 0; refsIx < numberOf_NoImportsRanges; refsIx++ ) {
        range = [...bitsBufRefs_NoImports[refsIx]];
        rangeStart = range[0];
        rangeEnd = range[1];


        // when the range is of zero size, skip to the next range.
        if ( rangeStart === rangeEnd ) {
          continue;
        }

        this.fileWriterQueue.enqueue (
          resultDTO.cssFilePath,
          range
        );

      }

      resultDTO.cssFileContents = new Uint8Array();
      inOutParsedResultDTO.addParsedResult( resultDTO );


      return 1;

    }



    let aNumberRanges_Imports: number = bitsBufRefs_ImportURLs_Inner.length;
    let bNumberRanges_NoImports: number = bitsBufRefs_NoImports.length;

    let aRange_Imports: number[];
    let bRange_NoImports: number[];

    let aRange_Imports_Start: number = 0;


    // let aRange_Imports_End: number = 0;
    let bRange_NoImports_Start: number = 0;


    // let bRange_NoImports_End: number = 0;
    let aImportsIx: number = 0;
    let bNoImportsIx: number = 0;

    bitsBufRefs_NoImports = bitsBufRefs_NoImports.filter (
      ( range: any ) => {
        return ( range[0] !== range[1] );
      }
    );

    bitsBufRefs_ImportURLs_Inner = bitsBufRefs_ImportURLs_Inner.filter (
      ( range: any ) => {
        return ( range[0] !== range[1] );
      }
    );



    let latest_bNoImportsIx: number = 0;
    let max_aNumberRanges_Imports: number = ( aNumberRanges_Imports - 1 );

    markerA: for ( aImportsIx = 0; aImportsIx < aNumberRanges_Imports; aImportsIx++ ) {
      aRange_Imports = [...bitsBufRefs_ImportURLs_Inner[ aImportsIx ]];
      aRange_Imports_Start = aRange_Imports[0];


      // aRange_Imports_End = aRange_Imports[1];
      bRange_NoImports = [...bitsBufRefs_NoImports[ latest_bNoImportsIx ]];
      bRange_NoImports_Start = bRange_NoImports[0];

      if ( aRange_Imports_Start < bRange_NoImports_Start ) {
        let locToImportFilePath: string = this.resolveUrlBitsbufWithWebpackAlias (
          fileContentsBuffer,
          aRange_Imports,
          this.webpackAliases
        );


        //@ts-ignore
        let cssBundleResult: number = this.cssBundleMake (
          inOutParsedResultDTO,
          locToImportFilePath,
          counterStop
        );

      }

      if ( ( aRange_Imports_Start < bRange_NoImports_Start )  && ( aRange_Imports_Start < max_aNumberRanges_Imports ) ) {
        continue markerA;
      }

      markerB: for ( bNoImportsIx = latest_bNoImportsIx; bNoImportsIx < bNumberRanges_NoImports; bNoImportsIx++ ) {
        bRange_NoImports = [...bitsBufRefs_NoImports[ bNoImportsIx ]];
        bRange_NoImports_Start = bRange_NoImports[0];


        // bRange_NoImports_End = bRange_NoImports[1];
        latest_bNoImportsIx = bNoImportsIx;

        if ( ( aRange_Imports_Start < bRange_NoImports_Start )  && ( aRange_Imports_Start < max_aNumberRanges_Imports ) ) {
          continue markerA;
        }

        resultDTO.addRange( bRange_NoImports );

        this.fileWriterQueue.enqueue (
          resultDTO.cssFilePath,
          bRange_NoImports
        );

        continue markerB;

      }

    }

    resultDTO.cssFileContents = new Uint8Array();

    inOutParsedResultDTO.addParsedResult( resultDTO );


    return 2;
  }

}




