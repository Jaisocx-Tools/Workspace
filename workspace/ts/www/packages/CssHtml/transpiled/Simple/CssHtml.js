class CssHtml {
    KEYWORD_HTML_UC;
    KEYWORD_HTML_LC;
    KEYWORD_BODY_UC;
    KEYWORD_BODY_LC;
    KEYWORD_REM;
    KEYWORD_PX;
    KEYWORD_VAR;
    KEYWORD_CSS_VARIABLE_START;
    CSS_FONT_SIZE;



    constructor() {
        this.KEYWORD_HTML_UC = "HTML";
        this.KEYWORD_HTML_LC = "html";
        this.KEYWORD_BODY_UC = "BODY";
        this.KEYWORD_BODY_LC = "body";
        this.KEYWORD_REM = "rem";
        this.KEYWORD_PX = "px";
        this.KEYWORD_VAR = "var";
        this.CSS_FONT_SIZE = "font-size";
        this.KEYWORD_CSS_VARIABLE_START = [this.KEYWORD_VAR, "("].join("");
    }



    escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }



    unescapeHTML(str) {
        return str
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, "\"")
            .replace(/&#039;/g, "'")
            .replace(/&amp;/g, "&");
    }



    concatClassNames(node, delimiter) {
        return node.className.split(" ").join(delimiter);
    }



    getRemBasePxValue() {
        let remBasePxValueNumber = 16;
        let remPxValue = "";
        let htmlElem = null;


        // @ts-ignore
        htmlElem = document.querySelector(this.KEYWORD_HTML_LC);

        if (htmlElem === null) {
            return remBasePxValueNumber;
        }
        let stylesHtmlElem = window.getComputedStyle(htmlElem);
        remPxValue = stylesHtmlElem.getPropertyValue(this.CSS_FONT_SIZE);
        let substringEndPos = (remPxValue.length - this.KEYWORD_PX.length);

        if (remPxValue.endsWith(this.KEYWORD_PX)) {
            remBasePxValueNumber = +(remPxValue.substring(0, substringEndPos));
        }


        return remBasePxValueNumber;
    }



    remToPx(remValue, inRemBasePxValue) {
        let locRemBasePxValue = inRemBasePxValue || this.getRemBasePxValue();

        if (remValue.endsWith(this.KEYWORD_REM) === false) {
            return false;
        }
        let substringEndPos = (remValue.length - this.KEYWORD_REM.length);
        let remValNumber = +(remValue.substring(0, substringEndPos));
        let remValToPxNumber = (remValNumber * locRemBasePxValue);


        // `${remValToPxNumber}px`
        let pxValue = [remValToPxNumber, this.KEYWORD_PX].join("");


        return pxValue;
    }



    remToPxAllValues(cssPropertyValue) {

        if (cssPropertyValue.includes(this.KEYWORD_REM) === false) {
            return false;
        }
        let locRemBasePxValue = this.getRemBasePxValue();
        let values = cssPropertyValue.split(" ");
        let remToPxRetVal = false;
        let size = "";
        let i = 0;

        for (i = 0; i < values.length; i++) {
            size = values[i];
            remToPxRetVal = this.remToPx(size, locRemBasePxValue);

            if (remToPxRetVal === false) {
                values[i] = size;
            }
            else {
                values[i] = remToPxRetVal;
            }
        }
        let remToPxStyles = values.join(" ");


        return remToPxStyles;
    }



    getVariableValue(element, variableName) {
        let cssVariableValue = window.getComputedStyle(element).getPropertyValue(variableName);


        return cssVariableValue;
    }



    resolveCssValueIfVariable(element, cssValue) {

        if (cssValue.startsWith(this.KEYWORD_CSS_VARIABLE_START) === false) {
            return false;
        }
        let substringStartPos = this.KEYWORD_CSS_VARIABLE_START.length;
        let substringEndPos = (cssValue.length - 1);
        let variableName = cssValue.substring(
            substringStartPos,
            substringEndPos
        );
        let cssVariableValue = this.getVariableValue(element, variableName);


        return cssVariableValue;
    }



    getCssPropertiesNames_ofCSSStyleRule(cssStyleRule) {

        /**
          cssStyleRule.style is a CSSStyleDeclaration object.
          cssStyleRule.style.length gives the number of properties explicitly set.
          cssStyleRule.style[i] accesses the property name at index i.
          This avoids inherited properties or prototype keys you'd get with Object.keys( cssStyleRule.style ).
        */
        let ruleStyles = cssStyleRule.style;
        let cssPropName = "";
        let cssPropId = 0;
        let numberOfCssProps = ruleStyles.length;


        // obtaining css props available in a CSSStyleRule
        // this is the return value.
        let cssPropsAvailable = new Array(numberOfCssProps);

        for (cssPropId = 0; cssPropId < numberOfCssProps; cssPropId++) {
            cssPropName = ruleStyles[cssPropId];
            cssPropsAvailable[cssPropId] = cssPropName;
        }


        return cssPropsAvailable;
    }


    // browser tab width and height not including scrollbars width and height
    getBrowserTabDimensions() {
        let dimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        };


        return dimensions;
    }
}


