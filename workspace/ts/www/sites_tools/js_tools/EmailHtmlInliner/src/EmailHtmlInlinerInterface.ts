import { EmailHtmlInliner } from "./EmailHtmlInliner.js";
import { RuleAndSpecifities } from "./EmailHtmlInlinerTypes.js";


export interface EmailHtmlInlinerInterface {

  setDebug( inDebug: boolean ): EmailHtmlInliner;

  setNumberBackgroundSpacesBefore_tagStart( num: number ): EmailHtmlInliner;

  setNumberBackgroundSpacesBefore_attrStart( num: number ): EmailHtmlInliner;

  setNumberBackgroundSpacesBefore_styleStart( num: number ): EmailHtmlInliner;

  inline (
    inHtmlDocument: Document,
    inHtmlDocQuerySelector: string,
    inStylesPropsToCheck: string[],
    inBaseUrlToReplace: string,
    inBaseUrlReplacedWith: string
  ): string;



  inlineStyleAllNodes (
    root: HTMLElement,
    newDoc: Document,
    newElem: HTMLElement,
    inOutInheritedStyles: any,
    inOutArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[],
    inBaseUrlToReplace: string,
    inBaseUrlReplacedWith: string
  ): number;


  /**
   *
   * @param node
   * @param newNode
   * @param inOutInheritedStyles : // Object, key: css prop name, value: css prop value
   * @param inArrayRulesMatchingPropsAndMedia : RuleAndSpecifities[] filtered for current media query matching
   * @param inObjectFilteredRulesAndSpecifitiesByCssPropname : Object with key = css prop name => RuleAndSpecifities[] filtered for current media query matching and relevant css props
   */
  copyAllStyles (
    node: HTMLElement,
    newNode: HTMLElement,
    inOutInheritedStyles: any,
    inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[]
  ): undefined;



  getDeclaredCSSValue (
    cssStyleRulesMatchingNode: RuleAndSpecifities[],
    node: HTMLElement,
    cssPropertyName: string
  ): string;


  processOneCssValueByRule (
    node: HTMLElement,
    cssValueByRule: string
  ): string;


  // END BLOCK MAIN METHODS
  // START BLOCK  METHODS TO PRE-BUILD DATA SETS TO AVOID AMBIGOUS METHODS CALLS ON SAME CSSRULES MANY TIMES.
  // 1) first invoked line 79
  // filters out CSSMediaRule by media query to current device monitor size
  // all ResponsiveSize types are recursively set as CSSStyleRule
  // relays on subcall to the next recursive method calculateSpecifitiesForAllRules()
  getRulesMatchingMedia(): RuleAndSpecifities[];


  // filters out CSSMediaRule by media query to current device monitor size
  // all ResponsiveSize types are recursively set as CSSStyleRule to the 2nd in arg inOutRulesMatching
  // pre-build subcall of 1) method of getRulesMatchingMedia() to add all rules matching current media
  calculateSpecifitiesForAllRules (
    cssRules: CSSRuleList,
    inOutRulesMatching: RuleAndSpecifities[]
  ): undefined;


  // 2)
  // filters all rules, matching css props in this.constants.stylesPropsToCheck: string[]
  // filters 1st arg inRulesAndSpecifities: RuleAndSpecifities[] and writes to 3rd arg inOutArrayFilteredRulesAndSpecifities
  // 4th arg inOutObjectFilteredRulesAndSpecifitiesByCssPropname is the same RuleAndSpecifities[] however an Object() with keys = Css prop name.
    filterMatchesCssPropsAllowed (
    inRulesAndSpecifities: RuleAndSpecifities[],
    inStylesPropsToCheck: string[],
    inOutArrayFilteredRulesAndSpecifities: RuleAndSpecifities[]
  ): undefined;


  // filter by node.matches( cssSelector )
  /**
   *
   * @param node
   * @param inArrayRulesMatchingPropsAndMedia
   * @param inOutArrayRulesMatchingPropsAndMediaAndNode // rule added to the in out arg of this method.
   *           // this is return variable.
   */
  filterMatchesNode (
    node: HTMLElement,
    inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[],
    inOutArrayRulesMatchingPropsAndMediaAndNode: RuleAndSpecifities[]
  ): undefined;


  // END OF THE BLOCK  METHODS TO PRE-BUILD DATA SETS





  buildAndPrintLogRecord (
    node: HTMLElement,
    cssPropertyName: string,
    ruleAndSpecifity: any,
    valueByBrowser: string,
    valueByInliner: string
  ): undefined;

  getConcatenatedClassNames( root: HTMLElement ): string[];

}





