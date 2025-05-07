import { Trimmer } from "@jaisocx/text";
import { CssHtml, CssSelectorWeight } from "@jaisocx/css-html";
import { EmailHtmlInlinerConstants } from "./EmailHtmlInlinerConstants.js";
export declare class EmailHtmlInliner {
    htmlDocument: Document | undefined;
    debug: boolean;
    constants: EmailHtmlInlinerConstants;
    trimmer: Trimmer;
    cssHtmlPackage: CssHtml;
    cssSelectorWeightPackage: CssSelectorWeight;
    remBasePxValue: number;
    numberBackgroundSpacesBefore_tagStart: number;
    numberBackgroundSpacesBefore_attrStart: number;
    numberBackgroundSpacesBefore_styleStart: number;
    constructor();
    setDebug(inDebug: boolean): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_tagStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_attrStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_styleStart(num: number): EmailHtmlInliner;
    inline(inHtmlDocument: Document, inHtmlDocQuerySelector: string, inStylesPropsToCheck: string[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): string;
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
//# sourceMappingURL=EmailHtmlInliner.d.ts.map