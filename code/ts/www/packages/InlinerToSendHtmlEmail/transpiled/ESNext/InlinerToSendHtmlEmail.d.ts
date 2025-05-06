import { Trimmer } from "@jaisocx/text";
import { CssHtml, CssSelectorWeight } from "@jaisocx/css-html";
import { InlinerToSendHtmlEmailConstants } from "./InlinerToSendHtmlEmailConstants.js";
export declare class InlinerToSendHtmlEmail {
    debug: boolean;
    constants: InlinerToSendHtmlEmailConstants;
    trimmer: Trimmer;
    cssHtmlPackage: CssHtml;
    cssSelectorWeightPackage: CssSelectorWeight;
    remBasePxValue: number;
    constructor();
    setDebug(inDebug: boolean): InlinerToSendHtmlEmail;
    inline(htmlDocQuerySelector: string, inStylesPropsToCheck: string[], baseUrlToReplace: string, baseUrlReplacedWith: string): string;
    inlineStyleAllNodes(root: HTMLElement, newDoc: Document, newElem: HTMLElement, inOutInheritedStyles: any, inOutArrayRulesMatchingPropsAndMedia: any[], inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any, inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): number;
    copyAllStyles(node: HTMLElement, newNode: HTMLElement, inOutInheritedStyles: any, inArrayRulesMatchingPropsAndMedia: any[], inObjectFilteredRulesAndSpecifitiesByCssPropname: any): undefined;
    getDeclaredCSSValue(allCssRules: any, node: HTMLElement, cssPropertyName: string): string;
    buildAndPrintLogRecord(node: HTMLElement, cssPropertyName: string, ruleAndSpecifity: any, valueByBrowser: string, valueByInliner: string): undefined;
    processOneCssValueByRule(node: HTMLElement, cssValueByRule: string): string;
    getRulesMatchingMedia(): any[];
    addRules(cssRules: any[], inOutRulesMatching: any[]): undefined;
    setRulesMatchingPropsAndMedia(inRulesAndSpecifities: any[], inStylesPropsToCheck: string[], inOutArrayFilteredRulesAndSpecifities: any[], inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any): undefined;
    setCssRulesMatchingNode(node: HTMLElement, inArrayRulesMatchingPropsAndMedia: any[], inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: any[], inOutArrayRulesMatchingPropsAndMediaAndNode: any[]): undefined;
    getCssRulesMatchingNodeAndProps(inArrayCssSelectorsMatchingPropsAndMediaAndNode: any[], inObjectRulesMatchingPropsAndMedia: any): any;
    getConcatenatedClassNames(root: HTMLElement): string[];
}
//# sourceMappingURL=InlinerToSendHtmlEmail.d.ts.map