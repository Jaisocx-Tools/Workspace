import { EmailHtmlInliner } from "./EmailHtmlInliner.js";
import { RuleAndSpecifities } from "./EmailHtmlInlinerTypes.js";
export interface EmailHtmlInlinerInterface {
    setDebug(inDebug: boolean): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_tagStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_attrStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_styleStart(num: number): EmailHtmlInliner;
    inline(inHtmlDocument: Document, inHtmlDocQuerySelector: string, inStylesPropsToCheck: string[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): string;
    inlineStyleAllNodes(root: HTMLElement, newDoc: Document, newElem: HTMLElement, inOutInheritedStyles: any, inOutArrayRulesMatchingPropsAndMedia: any[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): number;
    copyAllStyles(node: HTMLElement, newNode: HTMLElement, inOutInheritedStyles: any, inArrayRulesMatchingPropsAndMedia: any[], inObjectFilteredRulesAndSpecifitiesByCssPropname: any): undefined;
    getDeclaredCSSValue(allCssRules: RuleAndSpecifities[], node: HTMLElement, cssPropertyName: string): string;
    processOneCssValueByRule(node: HTMLElement, cssValueByRule: string): string;
    getRulesMatchingMedia(): RuleAndSpecifities[];
    calculateSpecifitiesForAllRules(cssRules: CSSRuleList, inOutRulesMatching: RuleAndSpecifities[]): undefined;
    filterMatchesCssPropsAllowed(inRulesAndSpecifities: RuleAndSpecifities[], inStylesPropsToCheck: string[], inOutArrayFilteredRulesAndSpecifities: RuleAndSpecifities[]): undefined;
    /**
     *
     * @param node
     * @param inArrayRulesMatchingPropsAndMedia
     * @param inOutArrayRulesMatchingPropsAndMediaAndNode // rule added to the in out arg of this method.
     *           // this is return variable.
     */
    filterMatchesNode(node: HTMLElement, inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[], inOutArrayRulesMatchingPropsAndMediaAndNode: RuleAndSpecifities[]): undefined;
    buildAndPrintLogRecord(node: HTMLElement, cssPropertyName: string, ruleAndSpecifity: any, valueByBrowser: string, valueByInliner: string): undefined;
    getConcatenatedClassNames(root: HTMLElement): string[];
}
//# sourceMappingURL=EmailHtmlInlinerInterface.d.ts.map