import { SpecifityAndSelector } from "./CssSelectorWeightTypes.js";



export class CssSelectorWeight {

  calculateOneRuleSpecificity ( selectorText: string ): number[] {

    // Remove strings to avoid confusion with quotes inside selectors
    let selector: string = selectorText.replace(
      /["'][^"']*["']/g,
      ""
    );
    let selectorWithoutNot: string = selector.replace(
      /:not\([^)]+\)/g,
      ""
    );


    let a: number = 0;
    let b: number = 0;
    let c: number = 0;
    let d: number = 0;
    let e: number = 0;
    let f: number = 0;


    // Count ID selectors: #id
    let matchingIDs: string[] = (selectorWithoutNot.match(/#[\w-]+/g) || []) as string[];
    b += matchingIDs.length;

    let matchingClassNames: string[] = (selectorWithoutNot.match(/.[\w-]+/g) || []) as string[];
    c += matchingClassNames.length;


    // Count pseudo-classes: :hover, :nth-child(), etc. (but not pseudo-elements)
    let matchingHoverlike: string[] = (selectorWithoutNot.match(/:(?!:)[\w-]+(\(.*?\))?/g) || []) as string[];
    c += matchingHoverlike.length;


    // Count attribute selectors: [type="text"]
    let matchingAttributes: string[] = (selectorWithoutNot.match(/\[[^\]]+\]/g) || []) as string[];
    d += matchingAttributes.length;


    // Count element names: div, h1, etc. (ignores *, .class, #id, etc.)
    // This is a bit naive — we filter by words not preceded by . # [ : or *
    let matchingElementsNames: string[] = (selectorWithoutNot.match(/(^|[\s>+~])([a-zA-Z][\w-]*)/g) || []) as string[];
    e += matchingElementsNames.length;


    // Count ::before, ::after, others
    let matchingAfterlike: string[] = (selectorWithoutNot.match(/::[\w-]+/g) || []) as string[];
    e += matchingAfterlike.length;


    // exactness level of the css rule, nodes positions in the DOM tree
    // > ~ +
    f += (selector.match(/[>+~]+/g) || []).length;


    return [a, b, c, d, e, f];
  }



  updateSpecifityByCssProperty (
    ruleStyle: CSSStyleDeclaration,
    cssPropertyName: string,
    inSpecifity: number[]
  ): number[] {
    let locSpecifity: number[] = [...inSpecifity];


    // !important
    let propertyPriority = ruleStyle.getPropertyPriority( cssPropertyName );
    let a = ( propertyPriority === "important" ) ? 1 : 0;

    locSpecifity[0] = a;


    return locSpecifity;
  }



  compareSpecificity (
    specificity1: number[],
    specificity2: number[]
  ): number {
    let comparisonValue: number = 0;
    let i: number = 0;
    let maxIterationsNumber: number = 6;
    let num1: number = 0;
    let num2: number = 0;

    loop: for ( i = 0; i < maxIterationsNumber; i++ ) {
      num1 = specificity1[i];
      num2 = specificity2[i];

      if ( num1 !== num2 ) {
        comparisonValue = ( num1 - num2 );

        break loop;
      }
    }


    return comparisonValue;
  }


  // @description: used by Inliner, this is the custom method.
  // @return { "specifity": [], "cssSelector": "" }[]
  calculateSpecifities ( selectorText: string ): SpecifityAndSelector[] {
    let selector: string = selectorText.replace(
      /["'][^"']*["']/g,
      ""
    );
    let selectors: string[] = new Array() as string[];
    let s: string = "";

    let specifitiesAndSelectors: SpecifityAndSelector[] = new Array() as SpecifityAndSelector[];
    let specifity: number[] = new Array(6) as number[];


    // new Array(6) as number[]
    let objTemplate: SpecifityAndSelector = { "specifity": [],
      "cssSelector": "" };
    let obj: SpecifityAndSelector = {...objTemplate};

    if ( selector.includes(",") === false ) {
      specifity = this.calculateOneRuleSpecificity( selector );
      obj.specifity = [...specifity];
      obj.cssSelector = selector;

      specifitiesAndSelectors.push( obj );

    } else {
      selectors = selector
        .split(",")
        .map( s => {
          return s.trim(); })
        .map( s => {
          return s.replace(
            /["'][^"']*["']/g,
            ""
          ); });

      for ( s of selectors ) {
        specifity = this.calculateOneRuleSpecificity( s );

        obj = {...objTemplate};
        obj.specifity = specifity;
        obj.cssSelector = s;

        specifitiesAndSelectors.push( obj );
      }

    }


    return specifitiesAndSelectors;
  }

}

