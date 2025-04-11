import { MediaruleNames } from "./MediaruleNames.js";
export declare class MobileVsDesktopPack {
    #private;
    protected _mediaruleNamesInstance: MediaruleNames;
    protected _mediaRuleName: string;
    constructor();
    getCssValueByHtmlNode(htmlNode: HTMLElement, cssVariableName: string): string;
    getCssValueBySelector(htmlNodeSelector: string, cssVariableName: string): string;
    getMediaruleName(force: boolean): string;
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