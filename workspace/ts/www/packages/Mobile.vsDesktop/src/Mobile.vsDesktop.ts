import { MobileVsDesktop_DevicesSizesNames } from "./Mobile.vsDesktop_DevicesSizesNames.js";
import { MobileVsDesktopInterface } from "./Mobile.vsDesktopInterface.js";



export class MobileVsDesktop implements MobileVsDesktopInterface {

  #KEYWORDS_ORIENTATION_PORTRAIT: string[];
  #KEYWORDS_ORIENTATION_LANDSCAPE: string[];

  #KEYWORD_MOBILE: string;
  #KEYWORD_TABLET: string;

  #CSS_VARIABLE_NAME__MEDIA_RULE: string;
  #CSS_VARIABLE_NAME__WIDTH_FROM: string;
  #CSS_VARIABLE_NAME__WIDTH_TIL: string;

  protected _devicesSizesNamesInstance: MobileVsDesktop_DevicesSizesNames;
  protected _deviceSizeName: string;
  protected _deviceSizes: object;
  protected _deviceSizesJson: object;

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

    this._devicesSizesNamesInstance = new MobileVsDesktop_DevicesSizesNames();
    this._deviceSizeName = "";
    this._deviceSizes = new Object();
    this._deviceSizesJson = new Object();
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

  public getdeviceSizeName( force: boolean ): string {
    if ( !force && this._deviceSizeName.length != 0 ) {
      return this._deviceSizeName;
    }

    let cssVariableName: string = this.getCssVariableName_MediaRule();
    let deviceSizeName: string = this.getCssValueBySelector (
      "html.workspace",
      cssVariableName
    );

    this._deviceSizeName = deviceSizeName;

    return this._deviceSizeName;
  }

  public getdeviceSizes( force: boolean ): object {
    let deviceSizesKeys: any = Object.keys( this._deviceSizes );

    if ( !force && deviceSizesKeys && deviceSizesKeys.length === 2 ) {
      return this._deviceSizes;
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
    this._deviceSizes["minWidth"] = cssVariable_WidthFrom;

    // @ts-ignore
    this._deviceSizes["maxWidth"] = cssVariable_WidthTil;

    return this._deviceSizes;
  }

  public isMobile( force: boolean ): boolean {
    let deviceSizeName = this.getdeviceSizeName( force );

    let deviceSizeNameMatches: boolean = deviceSizeName.includes( this.#KEYWORD_MOBILE );

    return deviceSizeNameMatches;
  }

  public isTablet( force: boolean ): boolean {
    let deviceSizeName = this.getdeviceSizeName( force );

    let deviceSizeNameMatches: boolean = deviceSizeName.includes( this.#KEYWORD_TABLET );

    return deviceSizeNameMatches;
  }

  public isDesktop( force: boolean ): boolean {
    let deviceSizeName = this.getdeviceSizeName( force );

    let keywordsDesktopNotMatching: string[] = [
      this.#KEYWORD_MOBILE,
      this.#KEYWORD_TABLET
    ];

    // if one of keywords has matched, then this variable has value of datatype string. not undefined.
    let matchMobileOrTabletFound: string|undefined = keywordsDesktopNotMatching
      .find( ( keyword: string ) => {
        return deviceSizeName.includes( keyword );
      });

    // if matchMobileOrTabletFound not undefined, then one of the keywords "mobile" or "tablet" has matched.
    let deviceSizeNameMatches: boolean = ( matchMobileOrTabletFound !== undefined );

    // if deviceSizeNameMatches === false, means did not match "mobile" or "tablet", then it is a desktop.
    let isMediaruleDesktop: boolean = ( deviceSizeNameMatches === false );

    return isMediaruleDesktop;
  }

  public matchOrientation (
    keywords: string[],
    force: boolean ): boolean {
    let deviceSizeName = this.getdeviceSizeName( force );
    let matchFound: string|undefined = keywords
      .find( ( keyword: string ) => {
        return deviceSizeName.endsWith( keyword );
      });
    let deviceSizeNameMatches: boolean = ( matchFound !== undefined );

    return deviceSizeNameMatches;
  }

  public isOrientationPortrait( force: boolean ): boolean {
    let deviceSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_PORTRAIT,
      force );

    return deviceSizeNameMatches;
  }

  public isOrientationLandscape( force: boolean ): boolean {
    let deviceSizeNameMatches: boolean = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_LANDSCAPE,
      force );

    return deviceSizeNameMatches;
  }

  public toJson( force: boolean ): any {
    let deviceSizeName: string = this.getdeviceSizeName( force );
    let deviceSizes: object = this.getdeviceSizes( force );

    let deviceSizesJsonKeys: string[] = Object.keys(this._deviceSizesJson);
    if ( !force && deviceSizesJsonKeys && deviceSizesJsonKeys.length !== 0 ) {
      return this._deviceSizesJson;
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
    let labeldeviceSizeName: string = isMobilePortrait ? "media" : "mediaQueryName";
    let labeldeviceSizes: string = isMobilePortrait ? "width" : "mediaQueryWidth";
    let labelIsOrientationPortrait: string = isMobilePortrait ? "portrait" : "isOrientationPortrait";
    let labelIsOrientationLandscape: string = isMobilePortrait ? "landscape" : "isOrientationLandscape";

    this._deviceSizesJson = {
      [labeldeviceSizeName]: deviceSizeName,
      [labeldeviceSizes]: deviceSizes,
      [labelIsMobile]: isMobile,
      [labelIsTablet]: isTablet,
      [labelIsDesktop]: isDesktop,
      [labelIsOrientationPortrait]: isOrientationPortrait,
      [labelIsOrientationLandscape]: isOrientationLandscape
    };

    return this._deviceSizesJson;
  }

  public toString(): string {
    let force: boolean = true;
    let deviceSizesJson: any = this.toJson( force );
    let jsonString: string = JSON.stringify(
      deviceSizesJson,
      null,
      2 );

    return jsonString;
  }

  public getBrowserTabDimensions(): string {
    throw new Error("Not implemented");
    // return "Not implemented";
  }
}





