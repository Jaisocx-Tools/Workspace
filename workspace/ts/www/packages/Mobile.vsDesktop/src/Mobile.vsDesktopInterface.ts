export interface MobileVsDesktopInterface {

  getCssVariableName_MediaRule (): string;

  getCssValueByHtmlNode (
    htmlNode: HTMLElement,
    cssVariableName: string
  ): string;

  getCssValueBySelector (
    htmlNodeSelector: string,
    cssVariableName: string
  ): string;

  getMediaruleName( force: boolean ): string;

  getMediaruleSizes( force: boolean ): object;

  isMobile( force: boolean ): boolean;

  isTablet( force: boolean ): boolean;

  isDesktop( force: boolean ): boolean;

  matchOrientation (
    keywords: string[],
    force: boolean
  ): boolean;

  isOrientationPortrait( force: boolean ): boolean;

  isOrientationLandscape( force: boolean ): boolean;

  toJson( force: boolean ): any;

  toString(): string;

  getBrowserTabDimensions(): string;

}



