export interface MobileVsDesktopInterface {

  getResponsiveSizeConstantName (): string;

  getCssValueByHtmlNode (
    htmlNode: HTMLElement,
    cssVariableName: string
  ): string;

  getCssValueBySelector (
    htmlNodeSelector: string,
    cssVariableName: string
  ): string;

  getResponsiveSizeName( force: boolean ): string;

  getResponsiveSizes( force: boolean ): object;

  mobile( force: boolean ): boolean;

  tablet( force: boolean ): boolean;

  desktop( force: boolean ): boolean;

  matchOrientation (
    keywords: string[],
    force: boolean
  ): boolean;

  orientationPortrait( force: boolean ): boolean;

  orientationLandscape( force: boolean ): boolean;

  toJson( force: boolean ): any;

  toString(): string;

  getBrowserTabDimensions(): string;

}



