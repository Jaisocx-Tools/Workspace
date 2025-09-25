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

    let inOutResultDTO: ParsedResultDTO = new ParsedResultDTO();
    let resultDTO: ParsedResultDTO = new ParsedResultDTO();

    try {
      this.setWebpackAliases (
        webpackAliases,
        this.packagePath
      );
      resultDTO = this.cssBundleMake (
        inOutResultDTO,
        this.cssFilePath,
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
        "inOutResultDTO",
        JSON.stringify(
          inOutResultDTO.toJson(),
          null,
          2
        )
      );
      fs.writeFileSync(
        "resultDTO",
        JSON.stringify(
          resultDTO.toJson(),
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


  /**
   * @info based on methods call .validBitsbufRefsRefine(), .resolveUrlBitsbufWithWebpackAlias(), fs.read and fs.write files.
   */



  public cssBundleMake (
    inParsedResultDTO: ParsedResultDTO,
    inFilePath: string,
    bitsbufName: string,
    counterStop: number
  ): ParsedResultDTO {
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


        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
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


        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
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
    let numberOfRanges: number = bitsBufRefs_NoImports.length;
    let range: number[] = [];
    let rangeStart: number = 0;
    let rangeEnd: number = 0;

    let resultDTO: ParsedResultDTO = new ParsedResultDTO();
    resultDTO.cssFilePath = inFilePath;
    resultDTO.cssFileContents = fileContentsBuffer;

    this.fileWriterQueue.namedBitsbufs[resultDTO.cssFilePath] = fileContentsBuffer;


    let firstRange: number[] = bitsBufRefs_NoImports[0];
    let firstRangeStart: number = firstRange[0];
    let firstRangeEnd: number = firstRange[1];
    rangeStart = firstRangeStart;
    rangeEnd = firstRangeEnd;

    let latestImportsIx: number = 0;


    // here we handle the css file when no import urls were found in the file.
    // just writing all ranges to target file.
    if ( bitsBufRefs_ImportURLs_Inner.length === 0 ) {
      resultDTO.rangesOrDtoOfImport = [...bitsBufRefs_NoImports];

      for ( refsIx = 0; refsIx < numberOfRanges; refsIx++ ) {
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
      inParsedResultDTO.addParsedResult( resultDTO );


      return resultDTO;

    } else {
      let firstImportRange: number[] = bitsBufRefs_ImportURLs_Inner[0];


      // may be undefined
      let firstImportRangeStart: number = firstImportRange[0];

      if ( firstImportRangeStart < firstRangeStart ) {
        latestImportsIx = this.compareRanges (
          fileContentsBuffer,
          bitsbufName,
          bitsBufRefs_ImportURLs_Inner,
          resultDTO,
          firstRangeStart,
          latestImportsIx,
          counterStop,
          true
        );
      }
    }

    for ( refsIx = 0; refsIx < numberOfRanges; refsIx++ ) {
      range = [...bitsBufRefs_NoImports[refsIx]];

      rangeStart = range[0];
      rangeEnd = range[1];


      // in this condition code applies, when all css import url lines were already done.
      // just writing the bitsbuf of the main range and skip to the next range.
      if ( latestImportsIx === bitsBufRefs_ImportURLs_Inner.length ) {

        // when the range is of zero size, skip to the next range.
        if ( rangeStart === rangeEnd ) {
          continue;
        }

        resultDTO.addRange( range );

        this.fileWriterQueue.enqueue (
          resultDTO.cssFilePath,
          range
        );

        continue;
      }

      if ( bitsBufRefs_ImportURLs_Inner[latestImportsIx][0] > rangeStart ) {
        if ( rangeStart === rangeEnd ) {
          continue;
        }

        resultDTO.addRange( range );

        this.fileWriterQueue.enqueue (
          resultDTO.cssFilePath,
          range
        );

        if ( refsIx !== ( numberOfRanges - 1 ) ) {
          continue;
        }

      }

      latestImportsIx = this.compareRanges (
        fileContentsBuffer,
        bitsbufName,
        bitsBufRefs_ImportURLs_Inner,
        resultDTO,
        rangeStart,
        latestImportsIx,
        counterStop,
        true
      );

    }

    resultDTO.cssFileContents = new Uint8Array();

    inParsedResultDTO.addParsedResult( resultDTO );


    return resultDTO;
  }



  compareRanges (
    fileContentsBuffer: Uint8Array,
    bitsbufName: string,
    ranges: number[][],
    inResultDTO: ParsedResultDTO,
    mainRangeStart: number,
    inLastRangeIx: number,
    counterStop: number,
    isRangeImportUrl: boolean
  ): number {
    let importsIx=0;
    let lastRangeIx = inLastRangeIx;
    let numberOfRanges: number = ranges.length;

    for ( importsIx = lastRangeIx; importsIx < numberOfRanges; importsIx++ ) {
      lastRangeIx = importsIx;

      let importRange: number[] = ranges[importsIx];
      let importRangeStart: number = importRange[0];

      if ( importRangeStart > mainRangeStart ) {
        break;
      }

      if ( isRangeImportUrl === false ) {
        inResultDTO.addRange( importRange );

        this.fileWriterQueue.enqueue (
          bitsbufName,
          importRange
        );

        continue;
      }

      let cssFileToImport_Path: string = this.resolveUrlBitsbufWithWebpackAlias (
        fileContentsBuffer,
        ranges[importsIx],
        this.webpackAliases
      );


      // temp workaround, the inp file bitsbuf's name has t o be a number, or a description text or file path for debugging purposes.
      let bitsbufNameSubcall: string = cssFileToImport_Path;

      let importParseResultDTO: ParsedResultDTO = this.cssBundleMake (
        inResultDTO,
        cssFileToImport_Path,
        bitsbufNameSubcall,
        counterStop
      );

      inResultDTO.addParsedResult( importParseResultDTO );
    }


    return lastRangeIx;
  }

}



