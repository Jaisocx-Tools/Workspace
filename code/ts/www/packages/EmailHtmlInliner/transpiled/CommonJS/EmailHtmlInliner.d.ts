import { Trimmer } from "@jaisocx/text";
import { CssHtml, CssSelectorWeight } from "@jaisocx/css-html";
import { EmailHtmlInlinerConstants } from "./EmailHtmlInlinerConstants.js";
import { EmailHtmlInlinerInterface } from "./EmailHtmlInlinerInterface.js";
import { RuleAndSpecifities } from "./EmailHtmlInlinerTypes.js";
export declare class EmailHtmlInliner implements EmailHtmlInlinerInterface {
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
    getDeclaredCSSValue(allCssRules: RuleAndSpecifities[], node: HTMLElement, cssPropertyName: string): string;
    processOneCssValueByRule(node: HTMLElement, cssValueByRule: string): string;
    getRulesMatchingMedia(): RuleAndSpecifities[];
    calculateSpecifitiesForAllRules(cssRules: CSSRuleList, inOutRulesMatching: RuleAndSpecifities[]): undefined;
    setRulesMatchingPropsAndMedia(inRulesAndSpecifities: RuleAndSpecifities[], inStylesPropsToCheck: string[], inOutArrayFilteredRulesAndSpecifities: RuleAndSpecifities[]): undefined;
    setCssRulesMatchingNode(node: HTMLElement, inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[], inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: string[], inOutArrayRulesMatchingPropsAndMediaAndNode: RuleAndSpecifities[]): undefined;
    buildAndPrintLogRecord(node: HTMLElement, cssPropertyName: string, ruleAndSpecifity: any, valueByBrowser: string, valueByInliner: string): undefined;
    getConcatenatedClassNames(root: HTMLElement): string[];
}
//# sourceMappingURL=EmailHtmlInliner.d.ts.map