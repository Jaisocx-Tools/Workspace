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
    inOutArrayRulesMatchingPropsAndMedia: any[],
    inBaseUrlToReplace: string,
    inBaseUrlReplacedWith: string
  ): number;

  copyAllStyles ( 
    node: HTMLElement, 
    newNode: HTMLElement,
    inOutInheritedStyles: any,
    inArrayRulesMatchingPropsAndMedia: any[],
    inObjectFilteredRulesAndSpecifitiesByCssPropname: any
  ): undefined;

  getDeclaredCSSValue ( 
    allCssRules: RuleAndSpecifities[], 
    node: HTMLElement, 
    cssPropertyName: string 
  ): string;

  
  processOneCssValueByRule ( 
    node: HTMLElement, 
    cssValueByRule: string 
  ): string;

  // END BLOCK MAIN METHODS




  


  // START BLOCK  METHODS TO PRE-BUILD DATA SETS TO AVOID AMBIGOUS METHODS CALLS ON SAME CSSRULES MANY TIMES.

  // returns the array of css rules and specifities for these rules, 
  // matching the media queries in current device monitor.
  getRulesMatchingMedia(): RuleAndSpecifities[];


  // subcall for the method above getRulesMatchingMedia(): RuleAndSpecifities[];
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



  // 3) 
  // pre-build method for node 
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





