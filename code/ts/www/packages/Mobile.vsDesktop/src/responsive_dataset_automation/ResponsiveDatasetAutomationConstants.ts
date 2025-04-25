import { Buffer } from "node:buffer";



export class ResponsiveDatasetAutomationConstants {

  textEncoder: TextEncoder;

  #keywordMediarule: string;
  #mediaRuleName: string;
  #mediaConstantNameStart: string;

  #mediaRule: string;
  #mediaRuleScreen: string;
  #mediaRulePrint: string;
  #mediaRuleOrientation: string;
  #mediaRuleOrientationLandscape: string;
  #mediaRuleOrientationPortrait: string;
  
  #mediaRuleAnd: string;

  #braceRoundStart: string;
  #braceRoundEnd: string;
  #braceFigureStart: string;
  #braceFigureEnd: string;

  #importUrlStart: string;
  #importUrlEnd: string;

  #keywordWidth: string;
  #keywordFrom: string;
  #keywordTil: string;

  #cssVariablePrefix: string;
  #cssVariableNameValueDelimiter: string;
  #cssExpressionEnd: string;
  #doubleQuote: string;
  #commentStart: string;
  #commentEnd: string;
  #backgroundSpace: string;
  #N: string;
  #underscore: string;
  #unitPx: string;

  #minWidth: string;
  #maxWidth: string;
  
  #orientationKeywords: string[];
  #bitbufsOrientationKeywords: Uint8Array[];

  #mediaLine: string[];
  #mediaConstantNameLine: string[];
  #mediaRuleConstantLine: (string|string[])[];
  #mediaConstantLine: string[];

  #bitbufsMediaLine: Uint8Array[];
  #bitbufsMediaConstantNameLine: Uint8Array[];
  #bitbufsMediaRuleConstantLine: (Uint8Array|Uint8Array[])[];
  #bitbufsMediaConstantLine: Uint8Array[];
  #bitsbufN: Uint8Array;


  constructor() {
    this.textEncoder = new TextEncoder();

    this.#keywordMediarule = "media_rule";
    this.#mediaRuleName = "media_rule_name";
    this.#mediaConstantNameStart = "s";

    this.#mediaRule = "@media only ";
    this.#mediaRuleScreen = "screen";
    this.#mediaRulePrint = "print";
    this.#mediaRuleOrientation = "orientation";
    this.#mediaRuleOrientationLandscape = "landscape";
    this.#mediaRuleOrientationPortrait = "portrait";

    this.#mediaRuleAnd = " and ";

    this.#braceRoundStart = "(";
    this.#braceRoundEnd = ")";
    this.#braceFigureStart = "{";
    this.#braceFigureEnd = "}";

    this.#importUrlStart = "@import url(\"";
    this.#importUrlEnd = "\");";

    this.#keywordWidth = "width";
    this.#keywordFrom = "from";
    this.#keywordTil = "til";

    this.#cssVariablePrefix = "--";
    this.#cssVariableNameValueDelimiter = ": ";
    this.#cssExpressionEnd = ";";
    this.#doubleQuote = "\"";
    this.#commentStart = "/*";
    this.#commentEnd = "*/";
    this.#backgroundSpace = " ";
    this.#N = "\n";
    this.#underscore = "_";
    
    this.#unitPx = "px";
    
    this.#minWidth = "min-width";
    this.#maxWidth = "max-width";




    this.#orientationKeywords = [
      this.#mediaRuleOrientationPortrait,
      this.#mediaRuleOrientationLandscape
    ];

    this.#mediaLine = [
      this.#mediaRule,
      "1",

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#minWidth,
      this.#cssVariableNameValueDelimiter,
      "6",
      this.#unitPx,
      this.#braceRoundEnd,

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#maxWidth,
      this.#cssVariableNameValueDelimiter,
      "13",
      this.#unitPx,
      this.#braceRoundEnd,

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#mediaRuleOrientation,
      this.#cssVariableNameValueDelimiter,
      "20",
      this.#braceRoundEnd
    ];

    this.#mediaConstantNameLine = [
      this.#cssVariablePrefix,
      this.#mediaRuleName,
      this.#cssVariableNameValueDelimiter,
      "3",
      this.#cssExpressionEnd
    ];

    this.#mediaRuleConstantLine = [
      this.#backgroundSpace,
      this.#backgroundSpace,
      this.#backgroundSpace,
      this.#backgroundSpace,

      this.#cssVariablePrefix,
      "5",
      this.#underscore,
      this.#underscore,
      this.#keywordMediarule,
      this.#cssVariableNameValueDelimiter,
  
      this.#doubleQuote,
      "11",
      this.#doubleQuote,
      this.#cssExpressionEnd,
      this.#N
    ];

    this.#mediaConstantLine = [
      this.#backgroundSpace,
      this.#backgroundSpace,
      this.#backgroundSpace,
      this.#backgroundSpace,

      this.#cssVariablePrefix,
      "5",
      this.#underscore,
      this.#underscore,
      this.#keywordWidth,
      this.#underscore,
      this.#underscore,
      "11",
      this.#cssVariableNameValueDelimiter,
      "13",
      this.#unitPx,
      this.#cssExpressionEnd
    ];

    this.#bitbufsOrientationKeywords = new Array() as Uint8Array[];
    this.#bitbufsMediaLine = new Array() as Uint8Array[];
    this.#bitbufsMediaConstantNameLine = new Array() as Uint8Array[];
    this.#bitbufsMediaRuleConstantLine = new Array() as (Uint8Array|Uint8Array[])[];
    this.#bitbufsMediaConstantLine = new Array() as Uint8Array[];
    this.#bitsbufN = this.textEncoder.encode( this.#N );

  }

  public textsToBitsbufs(): number {
    
    let textsBlocksNamesArray: any = [
      "orientationKeywords",
      "mediaLine",
      "mediaConstantNameLine",
      "mediaRuleConstantLine",
      "mediaConstantLine"
    ];

    let textBlocks: (string|string[])[] = new Array() as (string|string[])[];
    let bitsbufsTextBlocks: (Uint8Array|Uint8Array[])[] = new Array() as (Uint8Array|Uint8Array[])[];
    let textBlockName: string = "";
    let textBlockNameFirstLetterUC: string = "";
    let propertyName: string = "";
    let getMethodName: string = "";
    let getBitsbufsMethodName: string = "";
    let bitsbufsPropertyName: string = "";
    for ( textBlockName of textsBlocksNamesArray ) {
      propertyName = `#${textBlockName}`;
      textBlockNameFirstLetterUC = ( textBlockName.charAt(0).toUpperCase() + textBlockName.slice(1) );
      getMethodName = `get${textBlockNameFirstLetterUC}`;
      getBitsbufsMethodName = `getBitbufs${textBlockNameFirstLetterUC}`;

      // @ts-ignore
      textBlocks = this[getMethodName].call(this);
      // @ts-ignore
      bitsbufsTextBlocks = this[getBitsbufsMethodName].call(this);

      let textLine: string = "";
      let bitsbufsTextLine: Uint8Array = this.textEncoder.encode(" ");
      let i = 0; 
      let textBlocksLen: number = textBlocks.length;
      for ( i = 0; i < textBlocksLen; i++ ) {
        // @ts-ignore
        textLine = textBlocks[i];
        bitsbufsTextLine = this.textEncoder.encode( textLine ); //this.textEncoder.encode( textLine );

        // @ts-ignore
        bitsbufsTextBlocks[i] = bitsbufsTextLine; 
      }
    }

    return 1;
  }

  getKeywordMediarule(): string {
    return this.#keywordMediarule;
  }
  getMediaRuleName(): string {
    return this.#mediaRuleName;
  }
  getMediaConstantNameStart(): string {
    return this.#mediaConstantNameStart;
  }
  getMediaRule(): string {
    return this.#mediaRule;
  }
  getMediaRuleScreen(): string {
    return this.#mediaRuleScreen;
  }
  getMediaRulePrint(): string {
    return this.#mediaRulePrint;
  }
  getMediaRuleOrientation(): string {
    return this.#mediaRuleOrientation;
  }
  getMediaRuleOrientationLandscape(): string {
    return this.#mediaRuleOrientationLandscape;
  }
  getMediaRuleOrientationPortrait(): string {
    return this.#mediaRuleOrientationPortrait;
  }
  getMediaRuleAnd(): string {
    return this.#mediaRuleAnd;
  }
  getBraceRoundStart(): string {
    return this.#braceRoundStart;
  }
  getBraceRoundEnd(): string {
    return this.#braceRoundEnd;
  }
  getBraceFigureStart(): string {
    return this.#braceFigureStart;
  }
  getBraceFigureEnd(): string {
    return this.#braceFigureEnd;
  }
  getImportUrlStart(): string {
    return this.#importUrlStart;
  }
  getImportUrlEnd(): string {
    return this.#importUrlEnd;
  }
  getKeywordWidth(): string {
    return this.#keywordWidth;
  }
  getKeywordFrom(): string {
    return this.#keywordFrom;
  }
  getKeywordTil(): string {
    return this.#keywordTil;
  }
  getCssVariablePrefix(): string {
    return this.#cssVariablePrefix;
  }
  getCssVariableNameValueDelimiter(): string {
    return this.#cssVariableNameValueDelimiter;
  }
  getCssExpressionEnd(): string {
    return this.#cssExpressionEnd;
  }
  getDoubleQuote(): string {
    return this.#doubleQuote;
  }
  getCommentStart(): string {
    return this.#commentStart;
  }
  getCommentEnd(): string {
    return this.#commentEnd;
  }
  getBackgroundSpace(): string {
    return this.#backgroundSpace;
  }
  getN(): string {
    return this.#N;
  }
  getBitsbufN(): Uint8Array {
    return this.#bitsbufN;
  }
  getUnderscore(): string {
    return this.#underscore;
  }
  getUnitPx(): string {
    return this.#unitPx;
  }
  getMinWidth(): string {
    return this.#minWidth;
  }
  getMaxWidth(): string {
    return this.#maxWidth;
  }

  getBitbufsOrientationKeywords(): Uint8Array[] {
    return this.#bitbufsOrientationKeywords;
  }
  getOrientationKeywords(): string[] {
    return this.#orientationKeywords;
  }

  getMediaLine(): string[] {
    return this.#mediaLine;
  }
  getMediaConstantNameLine(): string[] {
    return this.#mediaConstantNameLine;
  }
  getMediaRuleConstantLine(): (string|string[])[] {
    return this.#mediaRuleConstantLine;
  }
  getMediaConstantLine(): string[] {
    return this.#mediaConstantLine;
  }



  getBitbufsMediaLine(): Uint8Array[] {
    return this.#bitbufsMediaLine;
  }
  getBitbufsMediaConstantNameLine(): Uint8Array[] {
    return this.#bitbufsMediaConstantNameLine;
  }
  getBitbufsMediaRuleConstantLine(): (Uint8Array|Uint8Array[])[] {
    return this.#bitbufsMediaRuleConstantLine;
  }
  getBitbufsMediaConstantLine(): Uint8Array[] {
    return this.#bitbufsMediaConstantLine;
  }



  getMediaLineUpdated (
    media: string,
    minWidth: string,
    maxWidth: string,
    orientation: string
  ): Uint8Array[] {

    const mediaPos: number = 1;
    const minWidthPos: number = 6;
    const maxWidthPos: number = 13;
    const orientationPos: number = 20;

    this.#bitbufsMediaLine[ mediaPos ] = this.textEncoder.encode( media );
    this.#bitbufsMediaLine[ minWidthPos ] = this.textEncoder.encode( minWidth );
    this.#bitbufsMediaLine[ maxWidthPos ] = this.textEncoder.encode( maxWidth );
    this.#bitbufsMediaLine[ orientationPos ] = this.textEncoder.encode( orientation );

    return this.#bitbufsMediaLine;
  }

  getMediaConstantNameLineUpdated( mediaName: string ): Uint8Array[] {
    const mediaNamePos: number = 3;

    this.#bitbufsMediaConstantNameLine[mediaNamePos] = this.textEncoder.encode( mediaName );

    return this.#bitbufsMediaConstantNameLine;
  }

  getMediaRuleConstantLineUpdated( 
    mediaName: string, 
    mediaLine: Uint8Array[] ): (Uint8Array|Uint8Array[])[] {
    const mediaNamePos: number = 5;
    const mediaLinePos: number = 11;

    this.#bitbufsMediaRuleConstantLine[mediaNamePos] = this.textEncoder.encode( mediaName );
    this.#bitbufsMediaRuleConstantLine[mediaLinePos] = mediaLine;

    return this.#bitbufsMediaRuleConstantLine;
  }

  getMediaConstantLineUpdated( 
    mediaName: string, 
    postfix: string, 
    size: string ): Uint8Array[] {
    const mediaNamePos: number = 5;
    const postfixPos: number = 11;
    const sizePos: number = 13;

    this.#bitbufsMediaConstantLine[mediaNamePos] = this.textEncoder.encode( mediaName );
    this.#bitbufsMediaConstantLine[postfixPos] = this.textEncoder.encode( postfix );
    this.#bitbufsMediaConstantLine[sizePos] = this.textEncoder.encode( size );

    return this.#bitbufsMediaConstantLine;
  }

}









