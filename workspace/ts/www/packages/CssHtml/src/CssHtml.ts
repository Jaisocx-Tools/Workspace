export class CssHtml {

  KEYWORD_HTML_UC: string;
  KEYWORD_HTML_LC: string;
  KEYWORD_BODY_UC: string;
  KEYWORD_BODY_LC: string;
  KEYWORD_REM: string;
  KEYWORD_PX: string;
  KEYWORD_VAR: string;
  KEYWORD_CSS_VARIABLE_START: string;
  CSS_FONT_SIZE: string;



  constructor () {
    this.KEYWORD_HTML_UC = "HTML";
    this.KEYWORD_HTML_LC = "html";
    this.KEYWORD_BODY_UC = "BODY";
    this.KEYWORD_BODY_LC = "body";
    this.KEYWORD_REM     = "rem";
    this.KEYWORD_PX      = "px";
    this.KEYWORD_VAR     = "var";
    this.CSS_FONT_SIZE   = "font-size";

    this.KEYWORD_CSS_VARIABLE_START = [ this.KEYWORD_VAR, "(" ].join( "" );
  }



  escapeHTML(str: string): string {
    return str
      .replace( /&/g, "&amp;" )
      .replace( /</g, "&lt;" )
      .replace( />/g, "&gt;" )
      .replace( /"/g, "&quot;" )
      .replace( /'/g, "&#039;" );
  }



  unescapeHTML(str: string): string {
    return str
      .replace( /&lt;/g, "<" )
      .replace( /&gt;/g, ">" )
      .replace( /&quot;/g, "\"" )
      .replace( /&#039;/g, "'" )
      .replace( /&amp;/g, "&" );
  }



  concatClassNames(
    node: HTMLElement,
    delimiter: string
  ): string {
    return node.className.split(" ").join( delimiter );
  }



  getRemBasePxValue(): number {
    let remBasePxValueNumber: number = 16;
    let remPxValue: string = "";
    let htmlElem: HTMLElement|null = null;


    // @ts-ignore
    htmlElem = document.querySelector( this.KEYWORD_HTML_LC ) as HTMLElement;

    if ( htmlElem === null ) {
      return remBasePxValueNumber;
    }

    let stylesHtmlElem: CSSStyleDeclaration = window.getComputedStyle( htmlElem );
    remPxValue = stylesHtmlElem.getPropertyValue( this.CSS_FONT_SIZE );

    let substringEndPos: number = ( remPxValue.length - this.KEYWORD_PX.length );

    if ( remPxValue.endsWith( this.KEYWORD_PX ) ) {
      remBasePxValueNumber = +( remPxValue.substring(
        0,
        substringEndPos
      ) );
    }


    return remBasePxValueNumber;
  }



  remToPx(
    remValue: string,
    inRemBasePxValue: number
  ): string|false {
    let locRemBasePxValue: number = inRemBasePxValue || this.getRemBasePxValue();

    if ( remValue.endsWith( this.KEYWORD_REM ) === false ) {
      return false;
    }


    let substringEndPos: number = ( remValue.length - this.KEYWORD_REM.length );
    let remValNumber: number = +( remValue.substring(
      0,
      substringEndPos
    ) );
    let remValToPxNumber: number = ( remValNumber * locRemBasePxValue );


    // `${remValToPxNumber}px`
    let pxValue: string = [remValToPxNumber, this.KEYWORD_PX].join( "" );


    return pxValue;
  }



  remToPxAllValues( cssPropertyValue: string ): string|false {
    if ( cssPropertyValue.includes( this.KEYWORD_REM ) === false ) {
      return false;
    }

    let locRemBasePxValue: number = this.getRemBasePxValue();

    let values: string[] = cssPropertyValue.split( " " );
    let remToPxRetVal: string|boolean = false;
    let size: string = "";
    let i: number = 0;

    for ( i = 0; i < values.length; i++ ) {
      size = values[i];
      remToPxRetVal = this.remToPx(
        size,
        locRemBasePxValue
      );

      if ( remToPxRetVal === false ) {
        values[i] = size;
      } else {
        values[i] = remToPxRetVal;
      }

    }

    let remToPxStyles: string = values.join( " " );


    return remToPxStyles;
  }



  getVariableValue(
    element: HTMLElement,
    variableName: string
  ): string {
    let cssVariableValue: string = window.getComputedStyle( element ).getPropertyValue( variableName );


    return cssVariableValue;
  }



  resolveCssValueIfVariable(
    element: HTMLElement,
    cssValue: string
  ): string|false {

    if ( cssValue.startsWith( this.KEYWORD_CSS_VARIABLE_START ) === false ) {
      return false;
    }

    let substringStartPos: number = this.KEYWORD_CSS_VARIABLE_START.length;
    let substringEndPos: number = (cssValue.length - 1);
    let variableName: string = cssValue.substring(
      substringStartPos,
      substringEndPos
    );
    let cssVariableValue: string = this.getVariableValue(
      element,
      variableName
    );


    return cssVariableValue;
  }



  getCssPropertiesNames_ofCSSStyleRule( cssStyleRule: CSSStyleRule ): string[] {

    /**
      cssStyleRule.style is a CSSStyleDeclaration object.
      cssStyleRule.style.length gives the number of properties explicitly set.
      cssStyleRule.style[i] accesses the property name at index i.
      This avoids inherited properties or prototype keys you'd get with Object.keys( cssStyleRule.style ).
    */


    let ruleStyles: CSSStyleDeclaration = cssStyleRule.style;

    let cssPropName: string = "";
    let cssPropId: number = 0;
    let numberOfCssProps: number = ruleStyles.length;


    // obtaining css props available in a CSSStyleRule
    // this is the return value.
    let cssPropsAvailable: string[] = new Array(numberOfCssProps) as string[];

    for ( cssPropId = 0; cssPropId < numberOfCssProps; cssPropId++ ) {
      cssPropName = ruleStyles[cssPropId];
      cssPropsAvailable[cssPropId] = cssPropName;
    }


    return cssPropsAvailable;

  }


  // browser tab width and height not including scrollbars width and height
  getBrowserTabDimensions(): { width: number; height: number } {
    let dimensions: any = {
      width: window.innerWidth,
      height: window.innerHeight
    };


    return dimensions;
  }

}


