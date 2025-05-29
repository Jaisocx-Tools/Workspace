import { EmailHtmlInliner } from "./EmailHtmlInliner.js";
export interface EmailHtmlInlinerInterface {
    setDebug(inDebug: boolean): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_tagStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_attrStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_styleStart(num: number): EmailHtmlInliner;
    inline(inHtmlDocument: Document, inHtmlDocQuerySelector: string, inStylesPropsToCheck: string[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): string;
    inlineStyleAllNodes(root: HTMLElement, newDoc: Document, newElem: HTMLElement, inOutInheritedStyles: any, inOutArrayRulesMatchingPropsAndMedia: any[], inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any, inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): number;
    copyAllStyles(node: HTMLElement, newNode: HTMLElement, inOutInheritedStyles: any, inArrayRulesMatchingPropsAndMedia: any[], inObjectFilteredRulesAndSpecifitiesByCssPropname: any): undefined;
    getDeclaredCSSValue(allCssRules: any, node: HTMLElement, cssPropertyName: string): any;
    buildAndPrintLogRecord(node: HTMLElement, cssPropertyName: string, ruleAndSpecifity: any, valueByBrowser: string, valueByInliner: string): undefined;
    processOneCssValueByRule(node: HTMLElement, cssValueByRule: string): string;
    getRulesMatchingMedia(): any[];
    addRules(cssRules: any[], inOutRulesMatching: any[]): undefined;
    setRulesMatchingPropsAndMedia(inRulesAndSpecifities: any[], inStylesPropsToCheck: string[], inOutArrayFilteredRulesAndSpecifities: any[], inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any): undefined;
    setCssRulesMatchingNode(node: HTMLElement, inArrayRulesMatchingPropsAndMedia: any[], inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: any[], inOutArrayRulesMatchingPropsAndMediaAndNode: any[]): undefined;
    getCssRulesMatchingNodeAndProps(inArrayCssSelectorsMatchingPropsAndMediaAndNode: any[], inObjectRulesMatchingPropsAndMedia: any): any;
    getConcatenatedClassNames(root: HTMLElement): string[];
}
//# sourceMappingURL=EmailHtmlInlinerInterface.d.ts.map