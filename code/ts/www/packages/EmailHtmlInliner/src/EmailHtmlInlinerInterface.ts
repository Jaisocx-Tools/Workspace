import { RuleAndSpecifities } from "./EmailHtmlinlinerTypes.js";
import { EmailHtmlInliner } from "./EmailHtmlInliner.js";



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
    inOutObjectFilteredRulesAndSpecifitiesByCssPropname: any,
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










  getDeclaredCSSValue ( 
    allCssRules: any, 
    node: HTMLElement, 
    cssPropertyName: string 
  );

  
  processOneCssValueByRule ( 
    node: HTMLElement, 
    cssValueByRule: string 
  ): string;


  

  setCssRulesMatchingNode ( 
    node: HTMLElement, 
    inArrayRulesMatchingPropsAndMedia: any[],
    inOutArrayCssSelectorsMatchingPropsAndMediaAndNode: any[],
    inOutArrayRulesMatchingPropsAndMediaAndNode: any[]
  ): undefined;

  getCssRulesMatchingNodeAndProps (
    inArrayCssSelectorsMatchingPropsAndMediaAndNode: any[],
    inObjectRulesMatchingPropsAndMedia: any
  );







  buildAndPrintLogRecord (
    node: HTMLElement, 
    cssPropertyName: string,
    ruleAndSpecifity: any,
    valueByBrowser: string,
    valueByInliner: string
  ): undefined;

  getConcatenatedClassNames( root: HTMLElement ): string[];

}





