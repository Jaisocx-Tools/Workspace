import { MobileVsDesktop_ResponsiveSizesNames } from "./Mobile.vsDesktop_ResponsiveSizesNames.js";
import { MobileVsDesktopInterface } from "./Mobile.vsDesktopInterface.js";



export class MobileVsDesktop implements MobileVsDesktopInterface {

  #KEYWORDS_ORIENTATION_PORTRAIT: string[];
  #KEYWORDS_ORIENTATION_LANDSCAPE: string[];

  #KEYWORD_MOBILE: string;
  #KEYWORD_TABLET: string;

  #CSS_VARIABLE_NAME__MEDIA_RULE: string;
  #CSS_VARIABLE_NAME__WIDTH_FROM: string;
  #CSS_VARIABLE_NAME__WIDTH_TIL: string;

  protected _responsiveSizesNamesInstance: MobileVsDesktop_ResponsiveSizesNames;
  protected _responsiveSizeName: string;
  protected _responsiveSizes: object;
  protected _responsiveSizesJson: object;

  constructor() {
    this.#KEYWORD_MOBILE = "_mobile_";
    this.#KEYWORD_TABLET = "_tablet_";

    this.#CSS_VARIABLE_NAME__MEDIA_RULE = "--media-rule";
    this.#CSS_VARIABLE_NAME__WIDTH_FROM = "--min_width";
    this.#CSS_VARIABLE_NAME__WIDTH_TIL = "--max_width";

    this.#KEYWORDS_ORIENTATION_PORTRAIT = [
      "_portrait",
      "_vertical"
    ];

    this.#KEYWORDS_ORIENTATION_LANDSCAPE = [
      "_landscape",
      "_horizontal"
    ];

    this._responsiveSizesNamesInstance = new MobileVsDesktop_ResponsiveSizesNames();
    this._responsiveSizeName = "";
    this._responsiveSizes = new Object();
    this._responsiveSizesJson = new Object();
  }

  public getCssVariableName_MediaRule(): string {
    return this.#CSS_VARIABLE_NAME__MEDIA_RULE;
  }

  public getCssValueByHtmlNode (
    htmlNode: HTMLElement,
    cssVariableName: string
  ): string {

    let cssValue: string = window
      .getComputedStyle( htmlNode )
      .getPropertyValue( cssVariableName );

    return cssValue;
  }

  public getCssValueBySelector (
    htmlNodeSelector: string,
    cssVariableName: string
  ): string {

    let htmlNode: HTMLElement|null = document.querySelector( htmlNodeSelector );

    if ( htmlNode === null ) {
      throw new Error( "HTML node not found" );
    }

    let cssValue: string = this.getCssValueByHtmlNode(
      htmlNode,
      cssVariableName );

    return cssValue;
  }

  public getresponsiveSizeName( force: boolean ): string {
    if ( !force && this._responsiveSizeName.length != 0 ) {
      return this._responsiveSizeName;
    }

    let cssVariableName: string = this.getCssVariableName_MediaRule();
    let responsiveSizeName: string = this.getCssValueBySelector (
      "html.workspace",
      cssVariableName
    );

    this._responsiveSizeName = responsiveSizeName;

    return this._responsiveSizeName;
  }

  public getresponsiveSizes( force: boolean ): object {
    let responsiveSizesKeys: any = Object.keys( this._responsiveSizes );

    if ( !force && responsiveSizesKeys && responsiveSizesKeys.length === 2 ) {
      return this._responsiveSizes;
    }

    let cssVariable_WidthFrom: string = this.getCssValueBySelector (
      "html.workspace",
      this.#CSS_VARIABLE_NAME__WIDTH_FROM
    );
    let cssVariable_WidthTil: string = this.getCssValueBySelector (
      "html.workspace",
      this.#CSS_VARIABLE_NAME__WIDTH_TIL
    );

    // @ts-ignore
    this._responsiveSizes["minWidth"] = cssVariable_WidthFrom;

    // @ts-ignore
    this._responsiveSizes["maxWidth"] = cssVariable_WidthTil;

    return this._responsiveSizes;
  }

  public isMobile( force: boolean ): boolean {
    let responsiveSizeName = this.getresponsiveSizeName( force );

    let responsiveSizeNameMatches: boolean = responsiveSizeName.includes( this.#KEYWORD_MOBILE );

    return responsiveSizeNameMatches;
  }

  public isTablet( force: boolean ): boolean {
    let responsiveSizeName = this.getresponsiveSizeName( force );

    let responsiveSizeNameMatches: boolean = responsiveSizeName.includes( this.#KEYWORD_TABLET );

    return responsiveSizeNameMatches;
  }

  public isDesktop( force: boolean ): boolean {
    let responsiveSizeName = this.getresponsiveSizeName( force );

    let keywordsDesktopNotMatching: string[] = [
      this.#KEYWORD_MOBILE,
      this.#KEYWORD_TABLET
    ];

    // if one of keywords has matched, then this variable has value of datatype string. not undefined.
    let matchMobileOrTabletFound: string|undefined = keywordsDesktopNotMatching
      .find( ( keyword: string ) => {
        return responsiveSizeName.includes( keyword );
      });

    // if matchMobileOrTabletFound not undefined, then one of the keywords "mobile" or "tablet" has matched.
    let responsiveSizeNameMatches: boolean = ( matchMobileOrTabletFound !== undefined );

    // if responsiveSizeNameMatches === false, means did not match "mobile" or "tablet", then it is a desktop.
    let isMediaruleDesktop: boolean = ( responsiveSizeNameMatches === false );

    return isMediaruleDesktop;
  }

  public matchOrientation (
    keywords: string[],
    force: boolean ): boolean {
    let responsiveSizeName = this.getresponsiveSizeName( force );
    let matchFound: string|undefined = keywords
      .find( ( keyword: string ) => {
        return responsiveSizeName.endsWith( keyword );
      });
    let responsiveSizeNameMatches: boolean = ( matchFound !== undefined );

    return responsiveSizeNameMatches;
  }

  public isOrientationPortrait( force: boolean ): boolean {
    let responsiveSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_PORTRAIT,
      force );

    return responsiveSizeNameMatches;
  }

  public isOrientationLandscape( force: boolean ): boolean {
    let responsiveSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_LANDSCAPE,
      force );

    return responsiveSizeNameMatches;
  }

  public toJson( force: boolean ): any {
    let responsiveSizeName: string = this.getresponsiveSizeName( force );
    let responsiveSizes: object = this.getresponsiveSizes( force );

    let responsiveSizesJsonKeys: string[] = Object.keys(this._responsiveSizesJson);
    if ( !force && responsiveSizesJsonKeys && responsiveSizesJsonKeys.length !== 0 ) {
      return this._responsiveSizesJson;
    }

    let notToUpdate: boolean = false;
    let isMobile: boolean = this.isMobile( notToUpdate );
    let isTablet: boolean = this.isTablet( notToUpdate );
    let isDesktop: boolean = this.isDesktop( notToUpdate );
    let isOrientationPortrait: boolean = this.isOrientationPortrait( notToUpdate );
    let isOrientationLandscape: boolean = this.isOrientationLandscape( notToUpdate );

    let labelIsMobile: string = "isMobile";
    let labelIsTablet: string = "isTablet";
    let labelIsDesktop: string = "isDesktop";

    let isMobilePortrait: boolean = ( isMobile && isOrientationPortrait);
    let labelresponsiveSizeName: string = isMobilePortrait ? "media" : "mediaQueryName";
    let labelresponsiveSizes: string = isMobilePortrait ? "width" : "mediaQueryWidth";
    let labelIsOrientationPortrait: string = isMobilePortrait ? "portrait" : "isOrientationPortrait";
    let labelIsOrientationLandscape: string = isMobilePortrait ? "landscape" : "isOrientationLandscape";

    this._responsiveSizesJson = {
      [labelresponsiveSizeName]: responsiveSizeName,
      [labelresponsiveSizes]: responsiveSizes,
      [labelIsMobile]: isMobile,
      [labelIsTablet]: isTablet,
      [labelIsDesktop]: isDesktop,
      [labelIsOrientationPortrait]: isOrientationPortrait,
      [labelIsOrientationLandscape]: isOrientationLandscape
    };

    return this._responsiveSizesJson;
  }

  public toString(): string {
    let force: boolean = true;
    let responsiveSizesJson: any = this.toJson( force );
    let jsonString: string = JSON.stringify(
      responsiveSizesJson,
      null,
      2 );

    return jsonString;
  }

  public getBrowserTabDimensions(): string {
    throw new Error("Not implemented");
    // return "Not implemented";
  }
}





