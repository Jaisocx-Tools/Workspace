import { ResponsiveSizeNames } from "./ResponsiveSizeNames.js";
export declare class MobileVsDesktopPack {
    #private;
    protected _responsiveSizeNamesInstance: ResponsiveSizeNames;
    protected _responsiveSizeName: string;
    protected _responsiveSizes: object;
    protected _responsiveSizeJson: object;
    constructor();
    getCssVariableName_ResponsiveSize(): string;
    getCssValueByHtmlNode(htmlNode: HTMLElement, cssVariableName: string): string;
    getCssValueBySelector(htmlNodeSelector: string, cssVariableName: string): string;
    getResponsiveSizeName(force: boolean): string;
    getResponsiveSizes(force: boolean): object;
    isMobile(force: boolean): boolean;
    isTablet(force: boolean): boolean;
    isDesktop(force: boolean): boolean;
    matchOrientation(keywords: string[], force: boolean): boolean;
    isOrientationPortrait(force: boolean): boolean;
    isOrientationLandscape(force: boolean): boolean;
    toJson(force: boolean): any;
    toString(): string;
    getBrowserTabDimensions(): string;
}
//# sourceMappingURL=Mobile.vsDesktopPack.d.ts.map