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

  public getResponsiveSizeConstantName(): string {
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

  public getResponsiveSizeName( force: boolean ): string {
    if ( !force && this._responsiveSizeName.length != 0 ) {
      return this._responsiveSizeName;
    }

    let cssVariableName: string = this.getResponsiveSizeConstantName();
    let responsiveSizeName: string = this.getCssValueBySelector (
      "html.workspace",
      cssVariableName
    );

    this._responsiveSizeName = responsiveSizeName;

    return this._responsiveSizeName;
  }

  public getResponsiveSizes( force: boolean ): object {
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

  public mobile( force: boolean ): boolean {
    let responsiveSizeName = this.getResponsiveSizeName( force );

    let responsiveSizeNameMatches: boolean = responsiveSizeName.includes( this.#KEYWORD_MOBILE );

    return responsiveSizeNameMatches;
  }

  public tablet( force: boolean ): boolean {
    let responsiveSizeName = this.getResponsiveSizeName( force );

    let responsiveSizeNameMatches: boolean = responsiveSizeName.includes( this.#KEYWORD_TABLET );

    return responsiveSizeNameMatches;
  }

  public desktop( force: boolean ): boolean {
    let responsiveSizeName = this.getResponsiveSizeName( force );

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
    let isResponsiveSizeDesktop: boolean = ( responsiveSizeNameMatches === false );

    return isResponsiveSizeDesktop;
  }

  public matchOrientation (
    keywords: string[],
    force: boolean ): boolean {
    let responsiveSizeName = this.getResponsiveSizeName( force );
    let matchFound: string|undefined = keywords
      .find( ( keyword: string ) => {
        return responsiveSizeName.endsWith( keyword );
      });
    let responsiveSizeNameMatches: boolean = ( matchFound !== undefined );

    return responsiveSizeNameMatches;
  }

  public orientationPortrait( force: boolean ): boolean {
    let responsiveSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_PORTRAIT,
      force );

    return responsiveSizeNameMatches;
  }

  public orientationLandscape( force: boolean ): boolean {
    let responsiveSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_LANDSCAPE,
      force );

    return responsiveSizeNameMatches;
  }

  public toJson( force: boolean ): any {
    let responsiveSizeName: string = this.getResponsiveSizeName( force );
    let responsiveSizes: object = this.getResponsiveSizes( force );

    let responsiveSizesJsonKeys: string[] = Object.keys(this._responsiveSizesJson);
    if ( !force && responsiveSizesJsonKeys && responsiveSizesJsonKeys.length !== 0 ) {
      return this._responsiveSizesJson;
    }

    let notToUpdate: boolean = false;
    let mobile: boolean = this.mobile( notToUpdate );
    let tablet: boolean = this.tablet( notToUpdate );
    let desktop: boolean = this.desktop( notToUpdate );
    let orientationPortrait: boolean = this.orientationPortrait( notToUpdate );
    let orientationLandscape: boolean = this.orientationLandscape( notToUpdate );

    let labelMobile: string = "mobile";
    let labelTablet: string = "tablet";
    let labelDesktop: string = "desktop";

    let mobilePortrait: boolean = ( mobile && orientationPortrait);
    let labelResponsiveSizeName: string = mobilePortrait ? "media" : "mediaQueryName";
    let labelResponsiveSizes: string = mobilePortrait ? "width" : "mediaQueryWidth";
    let labelOrientationPortrait: string = mobilePortrait ? "portrait" : "orientationPortrait";
    let labelOrientationLandscape: string = mobilePortrait ? "landscape" : "orientationLandscape";

    this._responsiveSizesJson = {
      [labelResponsiveSizeName]: responsiveSizeName,
      [labelResponsiveSizes]: responsiveSizes,
      [labelMobile]: mobile,
      [labelTablet]: tablet,
      [labelDesktop]: desktop,
      [labelOrientationPortrait]: orientationPortrait,
      [labelOrientationLandscape]: orientationLandscape
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





