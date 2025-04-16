import { MediaruleNames } from "./MediaruleNames.js"; 

export class MobileVsDesktopPack {

  #KEYWORDS_ORIENTATION_PORTRAIT: string[];
  #KEYWORDS_ORIENTATION_LANDSCAPE: string[];

  #KEYWORD_MOBILE: string;
  #KEYWORD_TABLET: string;

  protected _mediaruleNamesInstance: MediaruleNames;
  protected _mediaRuleName: string; 

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

    this._mediaruleNamesInstance = new MediaruleNames();
    this._mediaRuleName = "";
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

  public getMediaruleName( force: boolean ): string {
    if ( !force && this._mediaRuleName.length != 0 ) {
      return this._mediaRuleName;
    }

    let cssVariableName: string = this._mediaruleNamesInstance.getCssVariableName();
    let mediaRuleName: string = this.getCssValueBySelector (
      "html.workspace",
      cssVariableName
    );

    this._mediaRuleName = mediaRuleName;

    return this._mediaRuleName;
  }

  public isMobile( force: boolean ): boolean {
    let mediaruleName = this.getMediaruleName( force );

    let mediaruleNameMatches: boolean = mediaruleName.includes( this.#KEYWORD_MOBILE );

    return mediaruleNameMatches;
  }

  public isTablet( force: boolean ): boolean {
    let mediaruleName = this.getMediaruleName( force );

    let mediaruleNameMatches: boolean = mediaruleName.includes( this.#KEYWORD_TABLET );

    return mediaruleNameMatches;
  }

  public isDesktop( force: boolean ): boolean {
    let mediaruleName = this.getMediaruleName( force );

    let keywordsDesktopNotMatching: string[] = [
      this.#KEYWORD_MOBILE,
      this.#KEYWORD_TABLET
    ];

    // if one of keywords has matched, then this variable has value of datatype string. not undefined.
    let matchMobileOrTabletFound: string|undefined = keywordsDesktopNotMatching
      .find( ( keyword: string ) => {
        return mediaruleName.includes( keyword );
      });

    // if matchMobileOrTabletFound not undefined, then one of the keywords "mobile" or "tablet" has matched.
    let mediaruleNameMatches: boolean = ( matchMobileOrTabletFound !== undefined );

    // if mediaruleNameMatches === false, means did not match "mobile" or "tablet", then it is a desktop.
    let isMediaruleDesktop: boolean = ( mediaruleNameMatches === false );

    return isMediaruleDesktop;
  }

  public matchOrientation( 
    keywords: string[], 
    force: boolean ): boolean {
    let mediaruleName = this.getMediaruleName( force );
    let matchFound: string|undefined = keywords
      .find( ( keyword: string ) => {
        return mediaruleName.endsWith( keyword );
      });
    let mediaruleNameMatches: boolean = ( matchFound !== undefined );

    return mediaruleNameMatches;
  } 

  public isOrientationPortrait( force: boolean ): boolean {
    let mediaruleNameMatches: boolean = this.matchOrientation( 
      this.#KEYWORDS_ORIENTATION_PORTRAIT, 
      force );

    return mediaruleNameMatches;
  }

  public isOrientationLandscape( force: boolean ): boolean {
    let mediaruleNameMatches: boolean = this.matchOrientation( 
      this.#KEYWORDS_ORIENTATION_LANDSCAPE, 
      force );

    return mediaruleNameMatches;
  }

  public toJson( force: boolean ): any {
    let mediaruleName: string = this.getMediaruleName( force );

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
    let labelMediaruleName: string = isMobilePortrait ? "media" : "mediaruleName";
    let labelIsOrientationPortrait: string = isMobilePortrait ? "portrait" : "isOrientationPortrait";
    let labelIsOrientationLandscape: string = isMobilePortrait ? "landscape" : "isOrientationLandscape";

    let mediaruleJson: object = {
      [labelMediaruleName]: mediaruleName,
      [labelIsMobile]: isMobile,
      [labelIsTablet]: isTablet,
      [labelIsDesktop]: isDesktop,
      [labelIsOrientationPortrait]: isOrientationPortrait,
      [labelIsOrientationLandscape]: isOrientationLandscape
    };
    
    return mediaruleJson;
  }

  public toString() {
    let force: boolean = true;
    let mediaruleJson: any = this.toJson( force );
    let jsonString: string = JSON.stringify( 
      mediaruleJson, 
      null, 
      2 );

    return jsonString;
  }

  public getBrowserTabDimensions(): string {
    throw new Error("Not implemented");
    // return "Not implemented";
  }
}

