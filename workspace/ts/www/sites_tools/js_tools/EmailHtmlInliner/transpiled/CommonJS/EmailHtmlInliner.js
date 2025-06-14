"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailHtmlInliner = void 0;
const text_1 = require("@jaisocx/text");
const css_html_1 = require("@jaisocx/css-html");
const EmailHtmlInlinerConstants_js_1 = require("./EmailHtmlInlinerConstants.js");
class EmailHtmlInliner {
    constructor() {
        this.htmlDocument = undefined;
        this.debug = true;
        this.constants = new EmailHtmlInlinerConstants_js_1.EmailHtmlInlinerConstants();
        this.trimmer = new text_1.Trimmer();
        this.cssHtmlPackage = new css_html_1.CssHtml();
        this.cssSelectorWeightPackage = new css_html_1.CssSelectorWeight();
        this.remBasePxValue = this.cssHtmlPackage.getRemBasePxValue();
        this.numberBackgroundSpacesBefore_tagStart = 0;
        this.numberBackgroundSpacesBefore_attrStart = 2;
        this.numberBackgroundSpacesBefore_styleStart = 4;
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    setNumberBackgroundSpacesBefore_tagStart(num) {
        this.numberBackgroundSpacesBefore_tagStart = num;
        return this;
    }
    setNumberBackgroundSpacesBefore_attrStart(num) {
        this.numberBackgroundSpacesBefore_attrStart = num;
        return this;
    }
    setNumberBackgroundSpacesBefore_styleStart(num) {
        this.numberBackgroundSpacesBefore_styleStart = num;
        return this;
    }
    inline(inHtmlDocument, inHtmlDocQuerySelector, inStylesPropsToCheck, inBaseUrlToReplace, inBaseUrlReplacedWith) {
        this.htmlDocument = inHtmlDocument;
        let inlineStyledHtml = "";
        // Object, key: css prop name, value: css prop value
        let locInOutInheritedStyles = {};
        // returns all css style rules and calculated css selectors weigths
        let locRulesMatchingMedia = this.getRulesMatchingMedia();
        // 3rd arg RuleAndSpecifities[], matching css props in this.constants.stylesPropsToCheck: string[]
        let locInOutArrayRulesMatchingPropsAndMedia = new Array();
        // filters all rules, matching css props in this.constants.stylesPropsToCheck: string[]
        this.filterMatchesCssPropsAllowed(locRulesMatchingMedia, inStylesPropsToCheck, locInOutArrayRulesMatchingPropsAndMedia);
        let targetNode;
        let node;
        let mainNode = this.htmlDocument.querySelector(inHtmlDocQuerySelector);
        node = mainNode;
        const newDoc = this.htmlDocument.implementation.createHTMLDocument("Inlined Html Page");
        const docElem = newDoc.documentElement;
        let newNode;
        let newNodeApplied;
        if (node.tagName.toLowerCase() === "html") {
            node = this.htmlDocument.querySelector("html");
            newNodeApplied = newDoc.querySelector("html");
        }
        else {
            newNode = newDoc.createElement(node.tagName);
            newNodeApplied = docElem.appendChild(newNode);
        }
        targetNode = newNodeApplied;
        // @ts-ignore
        let mainNodesWithClasses = [];
        // @ts-ignore
        let newNodesWithClasses = [];
        if (this.debug === true) {
            mainNodesWithClasses = this.getConcatenatedClassNames(node);
            newNodesWithClasses = this.getConcatenatedClassNames(newNodeApplied);
            newNodeApplied.className = this.cssHtmlPackage.concatClassNames(node, " ");
        }
        this.copyAllStyles(node, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia);
        let cssPropName = "";
        let cssPropValue = "";
        for (cssPropName of inStylesPropsToCheck) {
            cssPropValue = newNodeApplied.style[cssPropName];
            if (!cssPropValue) {
                continue;
            }
            locInOutInheritedStyles[cssPropName] = cssPropValue;
        }
        if (mainNode.tagName.toLowerCase() === "html") {
            node = this.htmlDocument.querySelector("body");
            newNodeApplied = docElem.querySelector("body");
            if (this.debug === true) {
                newNodeApplied.className = this.cssHtmlPackage.concatClassNames(node, " ");
            }
            this.copyAllStyles(node, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia);
        }
        if (this.debug === true) {
            mainNodesWithClasses = this.getConcatenatedClassNames(node);
            newNodesWithClasses = this.getConcatenatedClassNames(newNodeApplied);
        }
        this.inlineStyleAllNodes(node, newDoc, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia, inBaseUrlToReplace, inBaseUrlReplacedWith);
        if (this.debug === true) {
            newNodesWithClasses = this.getConcatenatedClassNames(newNodeApplied);
        }
        let backgroundSpacesTag = this.numberBackgroundSpacesBefore_tagStart ? (" ").repeat(this.numberBackgroundSpacesBefore_tagStart) : "";
        let backgroundSpacesAttr = this.numberBackgroundSpacesBefore_attrStart ? (" ").repeat(this.numberBackgroundSpacesBefore_attrStart) : "";
        let backgroundSpacesStyle = this.numberBackgroundSpacesBefore_styleStart ? (" ").repeat(this.numberBackgroundSpacesBefore_styleStart) : "";
        inlineStyledHtml = targetNode.outerHTML
            .replaceAll("><", (">\n" + backgroundSpacesTag + "<"))
            .replaceAll("\" ", ("\" \n" + backgroundSpacesAttr))
            .replaceAll("; ", (";\n" + backgroundSpacesStyle));
        return inlineStyledHtml;
    }
    inlineStyleAllNodes(root, newDoc, newElem, inOutInheritedStyles, inOutArrayRulesMatchingPropsAndMedia, inBaseUrlToReplace, inBaseUrlReplacedWith) {
        let locInOutNewNodeToInheritStyles = {};
        let nodes = root.childNodes;
        let node;
        let newNode;
        // @ts-ignore
        let mainNodeWithClasses = "";
        // @ts-ignore
        let newNodeWithClasses = "";
        // @ts-ignore
        let mainNodesWithClasses = new Array();
        // @ts-ignore
        let newNodesWithClasses = new Array();
        // @ts-ignore
        let newNodesWithClassesAfter = new Array();
        if (this.debug === true) {
            mainNodeWithClasses = root.nodeName + "." + this.cssHtmlPackage.concatClassNames(root, ".");
            newNodeWithClasses = newElem.nodeName + "." + this.cssHtmlPackage.concatClassNames(newElem, ".");
            mainNodesWithClasses = this.getConcatenatedClassNames(root);
            newNodesWithClasses = this.getConcatenatedClassNames(newElem);
        }
        let nodeNumber = 0;
        for (nodeNumber = 0; nodeNumber < nodes.length; nodeNumber++) {
            node = nodes[nodeNumber];
            if (node.nodeType === 1 && !this.constants.allowedTags.includes(node.nodeName)) {
                continue;
            }
            else if (node.nodeType === 3) {
                if (!node.nodeValue || node.nodeValue.trim().length === 0) {
                    continue;
                }
                newNode = newDoc.createTextNode(node.nodeValue);
                newElem.appendChild(newNode);
                continue;
            }
            else if (node.nodeType !== 1) {
                continue;
            }
            newNode = newDoc.createElement(node.nodeName);
            if (this.debug === true) {
                newNode.className = node.className;
            }
            if (node.nodeName.toLowerCase() === "img") {
                let imageSrc = node.getAttribute("src");
                if (imageSrc) {
                    let imageSrcReplaced = imageSrc.replace(inBaseUrlToReplace, inBaseUrlReplacedWith);
                    newNode.setAttribute("src", imageSrcReplaced);
                }
            }
            this.copyAllStyles(node, newNode, inOutInheritedStyles, inOutArrayRulesMatchingPropsAndMedia);
            newElem.appendChild(newNode);
        }
        if (this.debug === true) {
            newNodesWithClasses = this.getConcatenatedClassNames(newElem);
        }
        let newNodeNumber = 0;
        let cssPropsInherited = this.constants.inheritingProps;
        let cssPropname = "";
        let cssPropValueParent = "";
        let cssPropValueNewNode = "";
        for (nodeNumber = 0; nodeNumber < nodes.length; nodeNumber++) {
            node = nodes[nodeNumber];
            if ((node.nodeType === 1) && (this.constants.allowedTags.includes(node.nodeName) === false)) {
                continue;
            }
            else if (node.nodeType === 3) {
                if (node.nodeValue && node.nodeValue.trim().length !== 0) {
                    newNodeNumber++;
                }
                continue;
            }
            else if (node.nodeType !== 1) {
                continue;
            }
            newNode = newElem.childNodes[newNodeNumber];
            locInOutNewNodeToInheritStyles = {};
            for (cssPropname of cssPropsInherited) {
                cssPropValueParent = inOutInheritedStyles[cssPropname];
                cssPropValueNewNode = newNode.style[cssPropname];
                if (!cssPropValueParent && !cssPropValueNewNode) {
                    continue;
                }
                if (cssPropValueParent && cssPropValueNewNode) {
                    locInOutNewNodeToInheritStyles[cssPropname] = cssPropValueNewNode;
                }
                else if (cssPropValueParent && !cssPropValueNewNode) {
                    locInOutNewNodeToInheritStyles[cssPropname] = cssPropValueParent;
                }
                else if (!cssPropValueParent && cssPropValueNewNode) {
                    locInOutNewNodeToInheritStyles[cssPropname] = cssPropValueNewNode;
                }
            }
            this.inlineStyleAllNodes(node, newDoc, newNode, locInOutNewNodeToInheritStyles, inOutArrayRulesMatchingPropsAndMedia, inBaseUrlToReplace, inBaseUrlReplacedWith);
            if (this.debug === true) {
                newNodesWithClassesAfter = this.getConcatenatedClassNames(newElem);
            }
            newNodeNumber++;
        }
        if (this.debug === true) {
            newNodesWithClassesAfter = this.getConcatenatedClassNames(newElem);
        }
        return newNodeNumber;
    }
    /**
     *
     * @param node
     * @param newNode
     * @param inOutInheritedStyles : // Object, key: css prop name, value: css prop value
     * @param inArrayRulesMatchingPropsAndMedia : RuleAndSpecifities[] filtered for current media query matching
     * @param inObjectFilteredRulesAndSpecifitiesByCssPropname : Object with key = css prop name => RuleAndSpecifities[] filtered for current media query matching and relevant css props
     */
    copyAllStyles(node, newNode, inOutInheritedStyles, inArrayRulesMatchingPropsAndMedia) {
        let styleValueNewNodeParent = "";
        let styleValue = "";
        let nodeName = node.tagName.toLowerCase();
        let locInOutArrayRulesMatchingPropsAndMediaAndNode = new Array();
        // filter by node.matches( cssSelector )
        // filters inArrayRulesMatchingPropsAndMedia: RuleAndSpecifities[] matching node
        // and writes to locInOutArrayRulesMatchingPropsAndMediaAndNode: RuleAndSpecifities[]
        this.filterMatchesNode(node, inArrayRulesMatchingPropsAndMedia, locInOutArrayRulesMatchingPropsAndMediaAndNode);
        let cssPropDefaults = new Array();
        let cssPropDefaultsValueMatches = false;
        let nodeStylesDefaults = this.constants.tagsStylesDefaults[newNode.tagName.toLowerCase()];
        let nodeStylesDefaultsSet = (nodeStylesDefaults !== undefined);
        let cssPropertiesNames = this.constants.stylesPropsToCheck;
        let cssPropertyName = "";
        for (cssPropertyName of cssPropertiesNames) {
            cssPropDefaultsValueMatches = false;
            styleValue = this.getDeclaredCSSValue(locInOutArrayRulesMatchingPropsAndMediaAndNode, node, cssPropertyName);
            if (!styleValue) {
                continue;
            }
            // understood
            if (styleValue === "inherit") {
                continue;
            }
            // several tags don't have the default zero size in css props padding and margin.
            // that is why we don't bypass the css props padding and margin, when set to tags like html, body, h1, and several others.
            if (((this.constants.tagsNotZeroPadding.includes(nodeName) === true) &&
                ((cssPropertyName.startsWith("padding") === true) ||
                    (cssPropertyName.startsWith("margin") === true))) === false) {
                // cssPropDefaults as boolean === true, when a default style for css prop exists
                cssPropDefaults = this.constants.stylesPropsDefaults[cssPropertyName];
                // cssPropDefaultsValueMatches === true, when one of default styles for css prop matches the calculated style of the node.
                cssPropDefaultsValueMatches = (cssPropDefaults && (cssPropDefaults.includes(styleValue) === true));
                cssPropDefaultsValueMatches = ((cssPropDefaultsValueMatches === true) || (this.constants.stylesPropsDefaults["all"].includes(styleValue) === true));
                if (nodeStylesDefaultsSet === true) {
                    cssPropDefaultsValueMatches = ((cssPropDefaultsValueMatches === true) || (nodeStylesDefaults === styleValue));
                }
                // matches the default value
                if (cssPropDefaultsValueMatches === true) {
                    // matches the default value
                    // skipping.
                    continue;
                }
            }
            // from here else: in other cases the default value did NOT match.
            // this css prop does not inherit the css prop value from the above DOM tree.
            if (this.constants.inheritingProps.includes(cssPropertyName) === false) {
                // cssPropDefaultsValueMatches === false
                // does not inherit and defaut value for this css prop was not set.
                //  then the css value has to be set.
                newNode.style[cssPropertyName] = styleValue;
                continue;
            }
            // from here else: inheritance
            // check out the css prop value in the above DOM tree
            styleValueNewNodeParent = inOutInheritedStyles[cssPropertyName];
            //  && styleValue.length !== 0 was checked before.
            if (!styleValueNewNodeParent) {
                newNode.style[cssPropertyName] = styleValue;
                continue;
            }
            // the value is inherited according to HTML docs.
            // when the css prop value in the above DOM tree matches, skipping.
            if (styleValueNewNodeParent && styleValueNewNodeParent === styleValue) {
                continue;
            }
            newNode.style[cssPropertyName] = styleValue;
        }
    }
    getDeclaredCSSValue(cssStyleRulesMatchingNode, node, cssPropertyName) {
        // 1. Check inline style first
        const inlineStyleValue = node.style.getPropertyValue(cssPropertyName);
        if (inlineStyleValue) {
            return this.trimmer.trimQuotes(inlineStyleValue) || inlineStyleValue;
        }
        // 2. Scan all matching CSS rules
        let matchedValue = "";
        let cssPropertyValueByBrowser = window.getComputedStyle(node).getPropertyValue(cssPropertyName);
        let trimmedCssPropertyValueByBrowser = this.trimmer.trimQuotes(cssPropertyValueByBrowser) || cssPropertyValueByBrowser;
        let objCssRuleAndSpecifity = new Object();
        let objCssRuleAndSpecifityHigher = new Object();
        let cssRule = new Object();
        let specifityAndSelectorObj = new Object();
        let specifity = new Array();
        let specifityCloned = new Array();
        let specifityUpdated = new Array();
        let specifityHigher = new Array();
        let matchedValueApplied = false;
        specifityHigher = [0, 0, 0, 0, 0, 0];
        let specifitiesComparison = 0;
        let cssValueByRule = "";
        let nodeMatchingParent = new Object();
        for (objCssRuleAndSpecifity of cssStyleRulesMatchingNode) {
            cssRule = objCssRuleAndSpecifity.rule;
            cssValueByRule = cssRule.style.getPropertyValue(cssPropertyName);
            if (!cssValueByRule) {
                continue;
            }
            for (specifityAndSelectorObj of objCssRuleAndSpecifity.specifitiesAndSelectors) {
                nodeMatchingParent = node.closest(specifityAndSelectorObj.cssSelector);
                if (nodeMatchingParent && nodeMatchingParent.matches(specifityAndSelectorObj.cssSelector) === false) {
                    continue;
                }
                specifity = specifityAndSelectorObj.specifity;
                specifityCloned = [...specifity];
                specifityUpdated = this.cssSelectorWeightPackage.updateSpecifityByCssProperty(cssRule.style, cssPropertyName, specifityCloned);
                specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity(specifityUpdated, specifityHigher);
                if (specifitiesComparison >= 0) {
                    matchedValueApplied = true;
                    specifityHigher = [...specifityUpdated];
                    objCssRuleAndSpecifity.cssValueByRule = cssValueByRule;
                    objCssRuleAndSpecifityHigher = Object.assign({}, objCssRuleAndSpecifity);
                }
            }
        }
        if (matchedValueApplied === true) {
            // this is return value.
            matchedValue = this.processOneCssValueByRule(node, objCssRuleAndSpecifityHigher.cssValueByRule);
        }
        if (this.debug === true) {
            this.buildAndPrintLogRecord(node, cssPropertyName, objCssRuleAndSpecifityHigher, trimmedCssPropertyValueByBrowser, matchedValue);
        }
        return matchedValue;
    }
    // base method to get the css prop value
    processOneCssValueByRule(node, cssValueByRule) {
        let matchedValue = "";
        let trimmedCssValueByRule = "";
        let variableName = "";
        let variableValue = "";
        trimmedCssValueByRule = this.trimmer.trimQuotes(cssValueByRule) || cssValueByRule;
        if (trimmedCssValueByRule.startsWith("var(")) {
            variableName = trimmedCssValueByRule.substring(4, (trimmedCssValueByRule.length - 1));
            variableValue = window.getComputedStyle(node).getPropertyValue(variableName);
            matchedValue = this.trimmer.trimQuotes(variableValue) || variableValue;
            if (matchedValue.includes("rem")) {
                let values = matchedValue.split(" ");
                for (let i = 0; i < values.length; i++) {
                    let size = values[i];
                    values[i] = this.cssHtmlPackage.remToPx(size, this.remBasePxValue) || size;
                }
                matchedValue = values.join(" ");
            }
        }
        else if (trimmedCssValueByRule.includes("rem")) {
            let values = trimmedCssValueByRule.split(" ");
            for (let i = 0; i < values.length; i++) {
                let size = values[i];
                values[i] = this.cssHtmlPackage.remToPx(size, this.remBasePxValue) || size;
            }
            matchedValue = values.join(" ");
        }
        else {
            matchedValue = trimmedCssValueByRule;
            // Override previous if more recent in cascade
        }
        return matchedValue;
    }
    // END BLOCK MAIN METHODS
    // START BLOCK  METHODS TO PRE-BUILD DATA SETS TO AVOID AMBIGOUS METHODS CALLS ON SAME CSSRULES MANY TIMES.
    // 1) first invoked line 79
    // filters out CSSResponsiveSize by media query to current device monitor size
    // all ResponsiveSize types are recursively set as CSSStyleRule
    // relays on subcall to the next recursive method calculateSpecifitiesForAllRules()
    getRulesMatchingMedia() {
        // the return variable
        let rulesMatching = new Array();
        // @ts-ignore
        let styleSheets = this.htmlDocument.styleSheets;
        let sheet;
        for (let key in styleSheets) {
            sheet = styleSheets[key];
            this.calculateSpecifitiesForAllRules(sheet.cssRules, rulesMatching);
        }
        return rulesMatching;
    }
    // filters out CSSResponsiveSize by media query to current device monitor size
    // all ResponsiveSize types are recursively set as CSSStyleRule to the 2nd in arg inOutRulesMatching
    // pre-build subcall of 1) method of getRulesMatchingMedia() to add all rules matching current media
    calculateSpecifitiesForAllRules(cssRules, inOutRulesMatching) {
        let nestedCssRules;
        let objectPushedTemplate = {
            "rule": new Object(),
            "specifitiesAndSelectors": new Array(),
            "cssValueByRule": ""
        };
        let objectPushed = Object.assign({}, objectPushedTemplate);
        let rule;
        for (let key in cssRules) {
            rule = cssRules[key];
            if (rule instanceof CSSStyleRule) {
                objectPushed = Object.assign({}, objectPushedTemplate);
                objectPushed.rule = rule;
                objectPushed.specifitiesAndSelectors = this.cssSelectorWeightPackage.calculateSpecifities(rule.selectorText);
                inOutRulesMatching.push(objectPushed);
                continue;
            }
            else if (rule instanceof CSSResponsiveSize) {
                if (window.matchMedia(rule.conditionText).matches === false) {
                    if (this.debug === true) {
                        console.warn("Did not match @media query:", rule);
                    }
                    continue;
                }
                if (this.debug === true) {
                    console.info("Matched @media query:", rule);
                }
                nestedCssRules = rule.cssRules;
                this.calculateSpecifitiesForAllRules(nestedCssRules, inOutRulesMatching);
                continue;
            }
            else if (rule instanceof CSSImportRule) {
                if (this.debug === true) {
                    console.info("Imported rule:", rule);
                }
                // @ts-ignore
                nestedCssRules = rule.styleSheet.cssRules;
                this.calculateSpecifitiesForAllRules(nestedCssRules, inOutRulesMatching);
                continue;
            }
            else if (rule instanceof CSSFontFaceRule) {
                continue;
            }
            else {
                if (this.debug === true) {
                    console.warn("Unprocessed, other rule type", rule);
                }
                continue;
            }
            // end for
        }
    }
    // 2) line 86 invoked once in main method inline()
    // filters all rules, matching css props in this.constants.stylesPropsToCheck: string[]
    // filters 1st arg inRulesAndSpecifities: RuleAndSpecifities[] and writes to 3rd arg inOutArrayFilteredRulesAndSpecifities
    // 4th arg inOutObjectFilteredRulesAndSpecifitiesByCssPropname is the same RuleAndSpecifities[] however an Object() with keys = Css prop name.
    filterMatchesCssPropsAllowed(inRulesAndSpecifities, inStylesPropsToCheck, inOutArrayFilteredRulesAndSpecifities) {
        // the value when true then added to array by filter.
        let isCssPropInRuleSet = false;
        let objCssRuleAndSpecifity = new Object();
        let cssStyleRule;
        let cssPropsAvailable = new Array(1);
        for (objCssRuleAndSpecifity of inRulesAndSpecifities) {
            isCssPropInRuleSet = false;
            cssStyleRule = objCssRuleAndSpecifity.rule;
            // obtaining css props available in a CSSStyleRule
            cssPropsAvailable = this.cssHtmlPackage.getCssPropertiesNames_ofCSSStyleRule(cssStyleRule);
            isCssPropInRuleSet = (inStylesPropsToCheck.find((cssPropName) => {
                return cssPropsAvailable.includes(cssPropName);
            }) !== undefined);
            if (isCssPropInRuleSet === true) {
                // rule added to the in out arg of this method.
                // this is the return variable.
                inOutArrayFilteredRulesAndSpecifities.push(Object.assign({}, objCssRuleAndSpecifity));
            }
        }
    }
    // 3)
    // pre-build method for node
    // filter by node.matches( cssSelector )
    /**
     *
     * @param node
     * @param inArrayRulesMatchingPropsAndMedia
    // rule added to the in out arg of this method.
     *           // this is return variable.
     */
    filterMatchesNode(node, inArrayRulesMatchingPropsAndMedia, inOutArrayRulesMatchingPropsAndMediaAndNode) {
        let obj = new Object();
        let specifityAndSelector = new Object();
        let cssSelector = "";
        let ruleIsMatching = false;
        for (obj of inArrayRulesMatchingPropsAndMedia) {
            ruleIsMatching = false;
            for (specifityAndSelector of obj.specifitiesAndSelectors) {
                cssSelector = specifityAndSelector.cssSelector;
                if (node.matches(cssSelector) === true) {
                    ruleIsMatching = true;
                    break;
                }
            }
            if (ruleIsMatching === true) {
                // rule added to the in out arg of this method.
                // this is return variable.
                inOutArrayRulesMatchingPropsAndMediaAndNode.push(Object.assign({}, obj));
            }
        }
    }
    // END OF THE BLOCK  METHODS TO PRE-BUILD DATA SETS
    // debugging purposes.
    buildAndPrintLogRecord(node, cssPropertyName, ruleAndSpecifity, valueByBrowser, valueByInliner) {
        if (valueByBrowser.includes("px") === true) {
            let vals = valueByBrowser.split(" ");
            let rounded = vals.map((v) => {
                let v0 = this.trimmer.trimQuotes(v) || v;
                if (v0.length === 0) {
                    return v0;
                }
                if (v0.endsWith("px") === false) {
                    return v0;
                }
                let valNum = +(v0.substring(0, v0.length - 2));
                let valInteger = Math.floor(valNum);
                v0 = [valInteger, "px"].join("");
                return v0;
            });
            valueByBrowser = rounded.join(" ");
        }
        let logRecord = {
            "elem": node,
            "css": cssPropertyName,
            "ruleAndSpecifity": ruleAndSpecifity,
            // objCssRuleAndSpecifityHigher,
            "valueByBrowser": valueByBrowser,
            "valueByInliner": valueByInliner
        };
        if ((valueByInliner.length !== 0) && (valueByInliner !== valueByBrowser)) {
            if (!((valueByInliner === "inherit") ||
                (valueByBrowser === "auto" && valueByInliner === "unset") ||
                (valueByBrowser === "none" && valueByInliner === "unset") ||
                (valueByBrowser.includes("auto") && valueByInliner.includes("visible")) ||
                (valueByBrowser.startsWith("rgb") && valueByInliner.startsWith("#")) ||
                (valueByBrowser.includes("rgb")) ||
                (valueByBrowser.startsWith("1px solid rgb") && valueByInliner.startsWith("1px solid ") && !valueByInliner.startsWith("1px solid rgb")) ||
                (valueByBrowser.endsWith("px") && !valueByInliner.endsWith("px"))) ||
                ((valueByBrowser.includes("px") && valueByInliner.includes("px") && !valueByBrowser.startsWith("1px solid rgb")))) {
                console.error(logRecord);
            }
            else {
                console.warn(logRecord);
            }
        }
        else if (valueByInliner === valueByBrowser) {
            console.info(logRecord);
        }
        else if (valueByInliner.length === 0) {
            console.debug(logRecord);
        }
    }
    // debugging purposes.
    // @moves to dubugging purposes base package
    getConcatenatedClassNames(root) {
        let nodes = root.childNodes;
        let node = {};
        let mainNodesWithClasses = new Array(nodes.length);
        let nodeNumber = 0;
        let classes = "";
        for (nodeNumber = 0; nodeNumber < nodes.length; nodeNumber++) {
            node = nodes[nodeNumber];
            if (node.nodeType !== 1) {
                continue;
            }
            classes = this.cssHtmlPackage.concatClassNames(node, ".");
            // name = `${node.nodeName}.${classes}`;
            mainNodesWithClasses[nodeNumber] = [node.nodeName, ".", classes].join("");
        }
        return mainNodesWithClasses;
    }
}
exports.EmailHtmlInliner = EmailHtmlInliner;
//# sourceMappingURL=EmailHtmlInliner.js.map