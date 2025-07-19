import { ResponsiveSizesConstants } from "./ResponsiveSizesConstants.js";
import { ResponsiveSizesInterface } from "./ResponsiveSizesInterface.js";
export declare class ResponsiveSizes implements ResponsiveSizesInterface {
    #private;
    protected _responsiveSizesConstants: ResponsiveSizesConstants;
    protected _responsiveSizeConstantName: string;
    protected _responsiveSizeSelector: string;
    protected _responsiveSizeName: string;
    protected _responsive_sizes: object;
    protected _responsiveSizesJson: object;
    protected _cssVariableArray: string[];
    constructor();
    getResponsiveSizeConstantName(): string;
    setResponsiveSizeConstantName(name: string): ResponsiveSizesInterface;
    getResponsiveSizeSelector(): string;
    setResponsiveSizeSelector(selector: string): ResponsiveSizesInterface;
    getCssValueByHtmlNode(htmlNode: HTMLElement, cssVariableName: string): string;
    getCssValueBySelector(htmlNodeSelector: string, cssVariableName: string): string;
    getResponsiveSizeName(force: boolean): string;
    getCssVariableArray(force: boolean): string[];
    getResponsiveSizes(force: boolean): object;
    mobilePortrait(force: boolean): boolean;
    mobile(force: boolean): boolean;
    tablet(force: boolean): boolean;
    desktop(force: boolean): boolean;
    matchOrientation(keywords: string[], force: boolean): boolean;
    orientationPortrait(force: boolean): boolean;
    orientationLandscape(force: boolean): boolean;
    toJson(force: boolean): any;
    toString(): string;
}
//# sourceMappingURL=ResponsiveSizes.d.ts.map