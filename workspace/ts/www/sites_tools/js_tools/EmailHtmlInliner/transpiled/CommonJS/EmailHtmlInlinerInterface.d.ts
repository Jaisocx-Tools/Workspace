import { EmailHtmlInliner } from "./EmailHtmlInliner.js";
import { RuleAndSpecifities } from "./EmailHtmlInlinerTypes.js";
export interface EmailHtmlInlinerInterface {
    setDebug(inDebug: boolean): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_tagStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_attrStart(num: number): EmailHtmlInliner;
    setNumberBackgroundSpacesBefore_styleStart(num: number): EmailHtmlInliner;
    inline(inHtmlDocument: Document, inHtmlDocQuerySelector: string, inStylesPropsToCheck: string[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): string;
    inlineStyleAllNodes(root: HTMLElement, newDoc: Document, newElem: HTMLElement, inOutInheritedStyles: any, inOutArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[], inBaseUrlToReplace: string, inBaseUrlReplacedWith: string): number;
    /**
     *
     * @param node
     * @param newNode
     * @param inOutInheritedStyles : // Object, key: css prop name, value: css prop value
     * @param inArrayRulesMatchingPropsAndMedia : RuleAndSpecifities[] filtered for current media query matching
     * @param inObjectFilteredRulesAndSpecifitiesByCssPropname : Object with key = css prop name => RuleAndSpecifities[] filtered for current media query matching and relevant css props
     */
    copyAllStyles(node: HTMLElement, newNode: HTMLElement, inOutInheritedStyles: any, inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[]): undefined;
    getDeclaredCSSValue(cssStyleRulesMatchingNode: RuleAndSpecifities[], node: HTMLElement, cssPropertyName: string): string;
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