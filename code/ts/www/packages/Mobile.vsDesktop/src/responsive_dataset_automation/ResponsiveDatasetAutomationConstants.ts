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
  #cssVariableReferenceKeyword_Var: string;
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

  #mediaName: string[];
  #mediaLine: string[];
  #mediaConstantNameLine: string[];
  #mediaConstantName: string[];
  #mediaRuleConstantLine: (string|string[])[];
  #mediaConstantLine: string[];
  #mediaRuleVariable_Width: string[];

  #bitbufsMediaName: Uint8Array[];
  #bitbufsMediaLine: Uint8Array[];
  #bitbufMediaConstantNameStart: Uint8Array;
  #bitbufsMediaConstantNameLine: Uint8Array[];
  #bitbufsMediaRuleConstantLine: (Uint8Array|Uint8Array[])[];
  #bitbufsMediaConstantName: Uint8Array[];
  #bitbufsMediaConstantLine: Uint8Array[];
  #bitbufsMediaRuleVariable_Width: Uint8Array[];
  #bitsbufN: Uint8Array;

  #bitbufKeywordFrom: Uint8Array;
  #bitbufKeywordTil: Uint8Array;


  constructor() {
    this.textEncoder = new TextEncoder();

    this.#keywordMediarule = "media_rule";
    this.#mediaRuleName = "media_rule_name";
    this.#mediaConstantNameStart = "style";

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
    this.#keywordFrom = "min_width";
    this.#keywordTil = "max_width";

    this.#cssVariablePrefix = "--";
    this.#cssVariableNameValueDelimiter = ": ";
    this.#cssVariableReferenceKeyword_Var = "var";
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

    this.#mediaName = [
      this.#mediaConstantNameStart,
      this.#underscore,
      "range_orderby_id",
      this.#underscore,
      "art",
      this.#underscore,
      "art_size",
      this.#underscore,
      "orientation"
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
      "8",
      this.#cssVariableNameValueDelimiter,
      "10",
      this.#unitPx,
      this.#cssExpressionEnd
    ];

    this.#mediaRuleVariable_Width = [
      [this.#cssVariablePrefix,
        this.#keywordMediarule,
        this.#underscore,
        this.#underscore].join(""),
      "1", 

      [this.#cssVariableNameValueDelimiter,
        this.#cssVariableReferenceKeyword_Var,
        this.#braceRoundStart,

        this.#cssVariablePrefix].join(""),
      "3",
      [this.#underscore,
        this.#underscore].join(""),
      "5", 

      [this.#braceRoundEnd,
        this.#cssExpressionEnd].join("")
    ];

    this.#bitbufsOrientationKeywords = new Array() as Uint8Array[];
    this.#bitbufMediaConstantNameStart = this.textEncoder.encode( this.#mediaConstantNameStart );
    this.#bitbufsMediaName = new Array() as Uint8Array[];
    this.#bitbufsMediaLine = new Array() as Uint8Array[];
    this.#bitbufsMediaConstantNameLine = new Array() as Uint8Array[];
    this.#bitbufsMediaConstantName = new Array() as Uint8Array[];
    this.#bitbufsMediaRuleConstantLine = new Array() as (Uint8Array|Uint8Array[])[];
    this.#bitbufsMediaConstantLine = new Array() as Uint8Array[];
    this.#bitbufsMediaRuleVariable_Width = new Array() as Uint8Array[];
    this.#bitsbufN = this.textEncoder.encode( this.#N );

    this.#bitbufKeywordFrom = this.textEncoder.encode( this.#keywordFrom );
    this.#bitbufKeywordTil = this.textEncoder.encode( this.#keywordTil );
  }

  public textsToBitsbufs(): number {
    
    let textsBlocksNamesArray: any = [
      "orientationKeywords",
      "mediaName",
      "mediaLine",
      "mediaConstantNameLine",
      "mediaRuleConstantLine",
      "mediaConstantLine",
      "mediaRuleVariable_Width"
    ];

    let textBlocks: (string|string[])[] = new Array() as (string|string[])[];
    let bitsbufsTextBlocks: (Uint8Array|Uint8Array[])[] = new Array() as (Uint8Array|Uint8Array[])[];
    let textBlockName: string = "";
    let textBlockNameFirstLetterUC: string = "";
    let getMethodName: string = "";
    let getBitsbufsMethodName: string = "";
    let textBlocksLen: number = 0;

    for ( textBlockName of textsBlocksNamesArray ) {

      textBlockNameFirstLetterUC = ( textBlockName.charAt(0).toUpperCase() + textBlockName.slice(1) );
      getMethodName = `get${textBlockNameFirstLetterUC}`;
      getBitsbufsMethodName = `getBitbufs${textBlockNameFirstLetterUC}`;

      // @ts-ignore
      textBlocks = this[getMethodName].call(this);
      // @ts-ignore
      bitsbufsTextBlocks = this[getBitsbufsMethodName].call(this);

      
      textBlocksLen = this.textArrayToUnt8Arrays ( 
        // @ts-ignore
        textBlocks,
        bitsbufsTextBlocks
      );

    }

    return textBlocksLen;
  }

  textArrayToUnt8Arrays ( 
    inArray: string[],
    inOutBitsbufsTextBlocks: Uint8Array[]
  ): number {
    
    let textLine: string = "";
    let bitsbufsTextLine: Uint8Array = this.textEncoder.encode(" ");
    let i = 0; 
    let textBlocksLen: number = inArray.length;

    for ( i = 0; i < textBlocksLen; i++ ) {
      // @ts-ignore
      textLine = inArray[i];
      bitsbufsTextLine = this.textEncoder.encode( textLine ); 

      // @ts-ignore
      inOutBitsbufsTextBlocks[i] = bitsbufsTextLine; 
    }

    return textBlocksLen;
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

  getMediaRuleVariable_Width(): string[] {
    return this.#mediaRuleVariable_Width;
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
  getBitbufsMediaRuleVariable_Width(): Uint8Array[] {
    return this.#bitbufsMediaRuleVariable_Width;
  }

  getBitsbufKeywordFrom(): Uint8Array {
    return this.#bitbufKeywordFrom;
  }
  getBitsbufKeywordTil(): Uint8Array {
    return this.#bitbufKeywordTil;
  }

  getMediaName (
    rangeOrderbyId: string,
    art: string,
    artSize: string,
    orientation: string
  ): Uint8Array[] {
    const rangeOrderbyIdPos: number = 2;
    const artPos: number = 4;
    const artSizePos: number = 6;
    const orientationPos: number = 8;

    this.#bitbufsMediaName[ rangeOrderbyIdPos ] = this.textEncoder.encode( rangeOrderbyId );
    this.#bitbufsMediaName[ artPos ] = this.textEncoder.encode( art );
    this.#bitbufsMediaName[ artSizePos ] = this.textEncoder.encode( artSize );
    this.#bitbufsMediaName[ orientationPos ] = this.textEncoder.encode( orientation );

    return this.#bitbufsMediaName;
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

  getMediaConstantNameLineUpdated ( mediaName: string ): Uint8Array[] {
    const mediaNamePos: number = 3;

    this.#bitbufsMediaConstantNameLine[mediaNamePos] = this.textEncoder.encode( mediaName );

    return this.#bitbufsMediaConstantNameLine;
  }

  getMediaRuleConstantLineUpdated ( 
    mediaName: string, 
    mediaLine: Uint8Array[] ): (Uint8Array|Uint8Array[])[] {
    const mediaNamePos: number = 5;
    const mediaLinePos: number = 11;

    this.#bitbufsMediaRuleConstantLine[mediaNamePos] = this.textEncoder.encode( mediaName );
    this.#bitbufsMediaRuleConstantLine[mediaLinePos] = mediaLine;

    return this.#bitbufsMediaRuleConstantLine;
  }

  getMediaConstantNameUpdated ( 
    mediaName: string, 
    postfix: string, 
    size: string ): Uint8Array[] {
    const mediaNamePos: number = 5;
    const postfixPos: number = 8;
    // const sizePos: number = 10;

    this.#bitbufsMediaConstantName[mediaNamePos] = this.textEncoder.encode( mediaName );
    this.#bitbufsMediaConstantName[postfixPos] = this.textEncoder.encode( postfix );
    // this.#bitbufsMediaConstantLine[sizePos] = this.textEncoder.encode( size );

    return this.#bitbufsMediaConstantName;
  }

  getMediaRuleVariable_Width_Updated ( 
    mediaName: Uint8Array, 
    postfix: Uint8Array
  ): Uint8Array[] {
    const postfixPos_1: number = 1;
    const mediaNamePos: number = 3;
    const postfixPos_2: number = 5;

    this.#bitbufsMediaRuleVariable_Width[postfixPos_1] = postfix;
    this.#bitbufsMediaRuleVariable_Width[mediaNamePos] = mediaName;
    this.#bitbufsMediaRuleVariable_Width[postfixPos_2] = postfix;

    return this.#bitbufsMediaRuleVariable_Width;
  }

}









