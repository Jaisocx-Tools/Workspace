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


  // filters 1st arg inRulesAndSpecifities: RuleAndSpecifities[] and writes to 3rd arg inOutArrayFilteredRulesAndSpecifities
  // 4th arg inOutObjectFilteredRulesAndSpecifitiesByCssPropname is the same RuleAndSpecifities[] however an Object() with keys = Css prop name.
  setRulesMatchingPropsAndMedia ( 
    inRulesAndSpecifities: RuleAndSpecifities[], 
    inStylesPropsToCheck: string[],
    inOutArrayFilteredRulesAndSpecifities: RuleAndSpecifities[], 
    inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any
  ): undefined;


  // pre-build method for node 
  setCssRulesMatchingNode ( 
    node: HTMLElement, 
    inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[],
    inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: string[],
    inOutArrayRulesMatchingPropsAndMediaAndNode: RuleAndSpecifities[]
  ): undefined;



  

  setCssRulesMatchingNode ( 
    node: HTMLElement, 
    inArrayRulesMatchingPropsAndMedia: any[],
    inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: any[],
    inOutArrayRulesMatchingPropsAndMediaAndNode: any[]
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





