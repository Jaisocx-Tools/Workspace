export class ResponsiveDatasetAutomationConstants {

  #keywordMediarule: string;
  #mediaRuleName: string;
  #mediaConstantNameStart: string;

  #mediaLine: string[];
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
  



  constructor() {
    this.#keywordMediarule = "media_rule";
    this.#mediaRuleName = "media_rule_name";
    this.#mediaConstantNameStart = "s";

    this.#mediaLine = [];
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
    this.#cssExpressionEnd = ": ";
    this.#doubleQuote = "\"";
    this.#commentStart = "/*";
    this.#commentEnd = "*/";
    this.#backgroundSpace = " ";
    this.#N = "\n";
    this.#underscore = "_";
    
    this.#unitPx = "px";
    
    this.#minWidth = "min-width";
    this.#maxWidth = "max-width";
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

  getMediaLine (
    media: string,
    minWidth: string,
    maxWidth: string,
    orientation: string
  ): string {

    let mediaLine: string = "";

    const mediaPos: number = 1;
    const minWidthPos: number = 6;
    const maxWidthPos: number = 13;
    const orientationPos: number = 20;

    if ( this.#mediaLine.length !== 0 ) {
      this.#mediaLine[ mediaPos ] = media;
      this.#mediaLine[ minWidthPos ] = minWidth;
      this.#mediaLine[ maxWidthPos ] = maxWidth;
      this.#mediaLine[ orientationPos ] = orientation;

      mediaLine = this.#mediaLine.join( "" );

      return mediaLine;
    }

    let words: string[] = [
      this.#mediaRule,
      media,

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#minWidth,
      this.#cssVariableNameValueDelimiter,
      minWidth,
      this.#unitPx,
      this.#braceRoundEnd,

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#maxWidth,
      this.#cssVariableNameValueDelimiter,
      maxWidth,
      this.#unitPx,
      this.#braceRoundEnd,

      this.#mediaRuleAnd,

      this.#braceRoundStart,
      this.#mediaRuleOrientation,
      this.#cssVariableNameValueDelimiter,
      orientation,
      this.#braceRoundEnd
    ];

    mediaLine = words.join( "" );

    return mediaLine;
  }
}









