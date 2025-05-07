import { Trimmer } from "@jaisocx/text";
import { CssHtml, CssSelectorWeight } from "@jaisocx/css-html";
import { EmailHtmlInlinerConstants } from "./EmailHtmlInlinerConstants.js";
export class EmailHtmlInliner {
    htmlDocument;
    debug;
    constants;
    trimmer;
    cssHtmlPackage;
    cssSelectorWeightPackage;
    remBasePxValue;
    numberBackgroundSpacesBefore_tagStart;
    numberBackgroundSpacesBefore_attrStart;
    numberBackgroundSpacesBefore_styleStart;
    constructor() {
        this.htmlDocument = undefined;
        this.debug = true;
        this.constants = new EmailHtmlInlinerConstants();
        this.trimmer = new Trimmer();
        this.cssHtmlPackage = new CssHtml();
        this.cssSelectorWeightPackage = new CssSelectorWeight();
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
        let locInOutInheritedStyles = {};
        let locRulesMatchingMedia = this.getRulesMatchingMedia();
        let locInOutArrayRulesMatchingPropsAndMedia = new Array();
        let locInOutObjectFilteredRulesAndSpecifitiesByCssPropname = new Object();
        this.setRulesMatchingPropsAndMedia(locRulesMatchingMedia, inStylesPropsToCheck, locInOutArrayRulesMatchingPropsAndMedia, locInOutObjectFilteredRulesAndSpecifitiesByCssPropname);
        let targetNode;
        let node;
        // let mainNodesWithClasses: string[] = [];
        // let newNodesWithClasses: string[] = [];
        let mainNode = this.htmlDocument.querySelector(inHtmlDocQuerySelector);
        node = mainNode;
        const newDoc = this.htmlDocument.implementation.createHTMLDocument("Inlined Html Page");
        const docElem = newDoc.documentElement;
        let newNode;
        let newNodeApplied;
        if (node.tagName === "HTML") {
            node = this.htmlDocument.querySelector("html");
            newNodeApplied = newDoc.querySelector("html");
        }
        else {
            newNode = newDoc.createElement(node.tagName);
            newNodeApplied = docElem.appendChild(newNode);
        }
        targetNode = newNodeApplied;
        // if ( this.debug === true ) {
        //   mainNodesWithClasses = this.getConcatenatedClassNames( node );
        //   newNodesWithClasses = this.getConcatenatedClassNames( newNodeApplied );
        // }
        if (this.debug === true) {
            newNodeApplied.className = this.cssHtmlPackage.concatClassNames(node, " ");
        }
        this.copyAllStyles(node, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia, locInOutObjectFilteredRulesAndSpecifitiesByCssPropname);
        let cssPropName = "";
        let cssPropValue = "";
        for (cssPropName of inStylesPropsToCheck) {
            cssPropValue = newNodeApplied.style[cssPropName];
            if (!cssPropValue) {
                continue;
            }
            locInOutInheritedStyles[cssPropName] = cssPropValue;
        }
        if (mainNode.tagName === "HTML") {
            node = this.htmlDocument.querySelector("body");
            newNodeApplied = docElem.querySelector("body");
            if (this.debug === true) {
                newNodeApplied.className = this.cssHtmlPackage.concatClassNames(node, " ");
            }
            this.copyAllStyles(node, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia, locInOutObjectFilteredRulesAndSpecifitiesByCssPropname);
        }
        // if ( this.debug === true ) {
        //   mainNodesWithClasses = this.getConcatenatedClassNames( node );
        //   newNodesWithClasses = this.getConcatenatedClassNames( newNodeApplied );
        // }
        this.inlineStyleAllNodes(node, newDoc, newNodeApplied, locInOutInheritedStyles, locInOutArrayRulesMatchingPropsAndMedia, locInOutObjectFilteredRulesAndSpecifitiesByCssPropname, inBaseUrlToReplace, inBaseUrlReplacedWith);
        // if ( this.debug === true ) {
        //   newNodesWithClasses = this.getConcatenatedClassNames( newNodeApplied );
        // }
        let backgroundSpacesTag = this.numberBackgroundSpacesBefore_tagStart ? (" ").repeat(this.numberBackgroundSpacesBefore_tagStart) : "";
        let backgroundSpacesAttr = this.numberBackgroundSpacesBefore_attrStart ? (" ").repeat(this.numberBackgroundSpacesBefore_attrStart) : "";
        let backgroundSpacesStyle = this.numberBackgroundSpacesBefore_styleStart ? (" ").repeat(this.numberBackgroundSpacesBefore_styleStart) : "";
        inlineStyledHtml = targetNode.outerHTML
            .replaceAll("><", (">\n" + backgroundSpacesTag + "<"))
            .replaceAll("\" ", ("\" \n" + backgroundSpacesAttr))
            .replaceAll("; ", (";\n" + backgroundSpacesStyle));
        return inlineStyledHtml;
    }
    inlineStyleAllNodes(root, newDoc, newElem, inOutInheritedStyles, inOutArrayRulesMatchingPropsAndMedia, inOutObjectFilteredRulesAndSpecifitiesByCssPropname, inBaseUrlToReplace, inBaseUrlReplacedWith) {
        // let locInOutNodeStyles: any = {};
        let locInOutNewNodeToInheritStyles = {};
        let nodes = root.childNodes;
        let node;
        let newNode;
        // let newNodeApplied: HTMLElement;
        // let mainNodeWithClasses: string = "";
        // let newNodeWithClasses: string = "";
        // let mainNodesWithClasses: string[] = new Array() as string[];
        // let newNodesWithClasses: string[] = new Array() as string[];
        // let newNodesWithClassesAfter: string[] = new Array() as string[];
        // if ( this.debug === true ) {
        // mainNodeWithClasses = root.nodeName + "." + this.cssHtmlPackage.concatClassNames( root, "." );
        // newNodeWithClasses = newElem.nodeName + "." + this.cssHtmlPackage.concatClassNames( newElem, "." );
        // mainNodesWithClasses = this.getConcatenatedClassNames( root );
        // newNodesWithClasses = this.getConcatenatedClassNames( newElem );
        // }
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
            if (node.nodeName === "IMG") {
                let imageSrc = node.getAttribute("src");
                if (imageSrc) {
                    let imageSrcReplaced = imageSrc.replace(inBaseUrlToReplace, inBaseUrlReplacedWith);
                    newNode.setAttribute("src", imageSrcReplaced);
                }
            }
            this.copyAllStyles(node, newNode, inOutInheritedStyles, inOutArrayRulesMatchingPropsAndMedia, inOutObjectFilteredRulesAndSpecifitiesByCssPropname);
            newElem.appendChild(newNode);
        }
        // if ( this.debug === true ) {
        //   newNodesWithClasses = this.getConcatenatedClassNames( newElem );
        // }
        let newNodeNumber = 0;
        //let cssPropsToCheck: string[] = Object.keys( inOutObjectFilteredRulesAndSpecifitiesByCssPropname );
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
            this.inlineStyleAllNodes(node, newDoc, newNode, locInOutNewNodeToInheritStyles, inOutArrayRulesMatchingPropsAndMedia, inOutObjectFilteredRulesAndSpecifitiesByCssPropname, inBaseUrlToReplace, inBaseUrlReplacedWith);
            // if ( this.debug === true ) {
            //   newNodesWithClassesAfter = this.getConcatenatedClassNames( newElem );
            // }
            newNodeNumber++;
        }
        // if ( this.debug === true ) {
        //     newNodesWithClassesAfter = this.getConcatenatedClassNames( newElem );
        // }
        return newNodeNumber;
    }
    copyAllStyles(node, newNode, inOutInheritedStyles, inArrayRulesMatchingPropsAndMedia, inObjectFilteredRulesAndSpecifitiesByCssPropname) {
        let styleValueNewNodeParent = "";
        let styleValue = "";
        let locInOutArrayCssSelectorsMatchingPropsAndMediaAndNode = new Array();
        let locInOutArrayRulesMatchingPropsAndMediaAndNode = new Array();
        this.setCssRulesMatchingNode(node, inArrayRulesMatchingPropsAndMedia, locInOutArrayCssSelectorsMatchingPropsAndMediaAndNode, locInOutArrayRulesMatchingPropsAndMediaAndNode);
        let locObjectFilteredRulesAndSpecifities = this.getCssRulesMatchingNodeAndProps(locInOutArrayCssSelectorsMatchingPropsAndMediaAndNode, inObjectFilteredRulesAndSpecifitiesByCssPropname);
        let cssPropertiesNames = Object.keys(locObjectFilteredRulesAndSpecifities);
        let cssRulesMatchingNode = new Array();
        let cssPropDefaults = new Array();
        let cssPropDefaultsValueMatches = false;
        let nodeStylesDefaults = this.constants.tagsStylesDefaults[newNode.nodeName];
        let nodeStylesDefaultsSet = (nodeStylesDefaults !== undefined);
        let tagDefaultCssValueMatches = false;
        let cssPropertyName = "";
        for (cssPropertyName of cssPropertiesNames) {
            cssRulesMatchingNode = locObjectFilteredRulesAndSpecifities[cssPropertyName];
            if (cssRulesMatchingNode === undefined) {
                continue;
            }
            styleValue = this.getDeclaredCSSValue(cssRulesMatchingNode, node, cssPropertyName);
            if (!styleValue) {
                continue;
            }
            // understood
            if (styleValue === "inherit") {
                continue;
            }
            cssPropDefaults = this.constants.stylesPropsDefaults[cssPropertyName];
            cssPropDefaultsValueMatches = ((cssPropDefaults !== undefined) && (cssPropDefaults.includes(styleValue) === true));
            if (cssPropDefaultsValueMatches === false) {
                cssPropDefaultsValueMatches = (cssPropDefaultsValueMatches || (this.constants.stylesPropsDefaults["all"].includes(styleValue) === true));
            }
            // feature to check the default values for tags. for now just tagsStylesDefaults["DIV"]["display"] = "block";
            if ((cssPropDefaultsValueMatches === false) && (nodeStylesDefaultsSet === true)) {
                tagDefaultCssValueMatches = (nodeStylesDefaults[cssPropertyName] === styleValue);
                cssPropDefaultsValueMatches = (cssPropDefaultsValueMatches || tagDefaultCssValueMatches);
            }
            // matches the default value 
            if (cssPropDefaultsValueMatches === true) {
                // matches the default value
                // skipping.
                continue;
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
    getDeclaredCSSValue(allCssRules, node, cssPropertyName) {
        // 1. Check inline style first
        const inlineStyleValue = node.style.getPropertyValue(cssPropertyName);
        if (inlineStyleValue) {
            return this.trimmer.trimQuotes(inlineStyleValue) || inlineStyleValue;
        }
        // 2. Scan all matching CSS rules
        let matchedValue = "";
        // let cssPropertyValueByCssRule: string = "";
        let cssPropertyValueByBrowser = window.getComputedStyle(node).getPropertyValue(cssPropertyName);
        let trimmedCssPropertyValueByBrowser = this.trimmer.trimQuotes(cssPropertyValueByBrowser) || cssPropertyValueByBrowser;
        let objCssRuleAndSpecifity = {};
        let objCssRuleAndSpecifityHigher = {};
        let cssRule = {};
        let specifityAndSelectorObj = {};
        let specifity = [];
        let specifityHigher = [];
        let matchedValueApplied = false;
        specifityHigher = [0, 0, 0, 0, 0, 0];
        let specifitiesComparison = 0;
        // let cssRulesRelevant: any[] = [];
        let cssValueByRule = "";
        for (objCssRuleAndSpecifity of allCssRules) {
            cssRule = objCssRuleAndSpecifity.rule;
            cssValueByRule = cssRule.style.getPropertyValue(cssPropertyName);
            if (!cssValueByRule) {
                continue;
            }
            if (objCssRuleAndSpecifity.specifities.length === 1) {
                specifity = objCssRuleAndSpecifity.specifities[0].specifity;
                specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity(specifity, specifityHigher);
                if (specifitiesComparison >= 0) {
                    matchedValueApplied = true;
                    specifityHigher = [...specifity];
                    objCssRuleAndSpecifity["cssValueByRule"] = cssValueByRule;
                    objCssRuleAndSpecifityHigher = { ...objCssRuleAndSpecifity };
                }
            }
            else {
                for (specifityAndSelectorObj of objCssRuleAndSpecifity.specifities) {
                    if (node.matches(specifityAndSelectorObj.text) === true) {
                        continue;
                    }
                    specifity = specifityAndSelectorObj.specifity;
                    specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity(specifity, specifityHigher);
                    if (specifitiesComparison >= 0) {
                        matchedValueApplied = true;
                        specifityHigher = [...specifity];
                        objCssRuleAndSpecifity["cssValueByRule"] = cssValueByRule;
                        objCssRuleAndSpecifityHigher = { ...objCssRuleAndSpecifity };
                    }
                }
            }
        }
        if (matchedValueApplied === true) {
            matchedValue = this.processOneCssValueByRule(node, objCssRuleAndSpecifityHigher["cssValueByRule"]);
        }
        if (this.debug === true) {
            this.buildAndPrintLogRecord(node, cssPropertyName, objCssRuleAndSpecifityHigher, trimmedCssPropertyValueByBrowser, matchedValue);
        }
        return matchedValue;
    }
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
            "ruleAndSpecifity": ruleAndSpecifity, // objCssRuleAndSpecifityHigher,
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
            matchedValue = trimmedCssValueByRule; // Override previous if more recent in cascade
        }
        return matchedValue;
    }
    // END BLOCK MAIN METHODS
    // START BLOCK  METHODS TO PRE-BUILD DATA SETS TO AVOID AMBIGOUS METHODS CALLS ON SAME CSSRULES MANY TIMES.
    // pre-build method to add all rules matching current media
    getRulesMatchingMedia() {
        let rulesMatching = new Array();
        // @ts-ignore
        let styleSheets = this.htmlDocument.styleSheets;
        let sheet;
        for (sheet of styleSheets) {
            this.addRules(sheet.cssRules, rulesMatching);
        }
        return rulesMatching;
    }
    // pre-build subcall method of getRulesMatchingMedia() to add all rules matching current media
    addRules(cssRules, inOutRulesMatching) {
        let nestedCssRules;
        let objectPushedTemplate = {
            "rule": {},
            "specifities": []
        };
        let objectPushed = { ...objectPushedTemplate };
        let rule;
        for (rule of cssRules) {
            if (rule instanceof CSSStyleRule) {
                objectPushed = { ...objectPushedTemplate };
                objectPushed.rule = rule;
                objectPushed.specifities = this.cssSelectorWeightPackage.calculateSpecifities(rule.selectorText);
                inOutRulesMatching.push(objectPushed);
                continue;
                // if ( element.matches(rule.selectorText) === false ) {
                //   continue;
                // }
            }
            else if (rule instanceof CSSMediaRule) {
                if (window.matchMedia(rule.conditionText).matches === false) {
                    console.warn("Did not match @media query:", rule);
                    continue;
                }
                console.info("Matched @media query:", rule);
                nestedCssRules = rule.cssRules;
                this.addRules(nestedCssRules, inOutRulesMatching);
                continue;
            }
            else if (rule instanceof CSSImportRule) {
                console.info("Imported rule:", rule);
                // @ts-ignore
                nestedCssRules = rule.styleSheet.cssRules;
                this.addRules(nestedCssRules, inOutRulesMatching);
                continue;
            }
            else if (rule instanceof CSSFontFaceRule) {
                continue;
            }
            else {
                console.warn("Unprocessed, other rule type", rule);
                continue;
            }
            // end for
        }
    }
    // pre-build method for css styles names used to inline
    setRulesMatchingPropsAndMedia(inRulesAndSpecifities, inStylesPropsToCheck, inOutArrayFilteredRulesAndSpecifities, inOutObjectFilteredRulesAndSpecifitiesByCssPropname) {
        let cssRuleAndSpecifityArray = new Array();
        let ruleOnceMatchedCssPropname = false;
        let specifityId = 0;
        let specifitiesNumber = 0;
        let objCssRuleAndSpecifity = {};
        let cssRule;
        let cssValueByRule = "";
        let cssPropertyName = "";
        let objSpecifity = {};
        for (objCssRuleAndSpecifity of inRulesAndSpecifities) {
            ruleOnceMatchedCssPropname = false;
            cssRule = objCssRuleAndSpecifity.rule;
            for (cssPropertyName of inStylesPropsToCheck) {
                cssValueByRule = cssRule.style.getPropertyValue(cssPropertyName);
                if (!cssValueByRule) {
                    continue;
                }
                cssRuleAndSpecifityArray = inOutObjectFilteredRulesAndSpecifitiesByCssPropname[cssPropertyName];
                if (cssRuleAndSpecifityArray === undefined) {
                    inOutObjectFilteredRulesAndSpecifitiesByCssPropname[cssPropertyName] = new Array();
                    cssRuleAndSpecifityArray = inOutObjectFilteredRulesAndSpecifitiesByCssPropname[cssPropertyName];
                }
                specifitiesNumber = objCssRuleAndSpecifity.specifities.length;
                for (specifityId = 0; specifityId < specifitiesNumber; specifityId++) {
                    objSpecifity = objCssRuleAndSpecifity.specifities[specifityId];
                    objSpecifity.specifity = this.cssSelectorWeightPackage.updateSpecifityByCssProperty(cssRule.style, cssPropertyName, objSpecifity.specifity);
                    // objCssRuleAndSpecifity.specifities[specifityId] = objSpecifity;
                }
                cssRuleAndSpecifityArray.push(objCssRuleAndSpecifity);
                if (ruleOnceMatchedCssPropname === true) {
                    continue;
                }
                ruleOnceMatchedCssPropname = true;
                inOutArrayFilteredRulesAndSpecifities.push({ ...objCssRuleAndSpecifity });
            }
        }
    }
    // pre-build method for node 
    setCssRulesMatchingNode(node, inArrayRulesMatchingPropsAndMedia, inOutArrayCssSelectorsMatchingPropsAndMediaAndNode, inOutArrayRulesMatchingPropsAndMediaAndNode) {
        let obj = new Object();
        let cssSelector = "";
        for (obj of inArrayRulesMatchingPropsAndMedia) {
            cssSelector = obj.rule.selectorText;
            if (node.matches(cssSelector) === false) {
                continue;
            }
            inOutArrayCssSelectorsMatchingPropsAndMediaAndNode.push(cssSelector);
            inOutArrayRulesMatchingPropsAndMediaAndNode.push(obj);
        }
        // TODO
        let uniqueSet = new Set(inOutArrayCssSelectorsMatchingPropsAndMediaAndNode);
        inOutArrayCssSelectorsMatchingPropsAndMediaAndNode = [...uniqueSet];
    }
    // pre-build method for node and css props
    getCssRulesMatchingNodeAndProps(inArrayCssSelectorsMatchingPropsAndMediaAndNode, inObjectRulesMatchingPropsAndMedia) {
        let locObjectRulesMatchingPropsAndMedia = new Object();
        let cssPropName = "";
        let cssPropsArrayCreated = false;
        let cssRulesMatchingCssProp = new Array();
        let cssSelector = "";
        let cssSelectorMatchesCssProp = false;
        let cssProps = Object.keys(inObjectRulesMatchingPropsAndMedia);
        let locObjLevel2 = new Object();
        let filteredCssRulesMatchingCssProp = new Array();
        for (cssPropName of cssProps) {
            cssPropsArrayCreated = false;
            cssRulesMatchingCssProp = inObjectRulesMatchingPropsAndMedia[cssPropName];
            for (locObjLevel2 of cssRulesMatchingCssProp) {
                cssSelector = locObjLevel2.rule.selectorText;
                cssSelectorMatchesCssProp = inArrayCssSelectorsMatchingPropsAndMediaAndNode.includes(cssSelector);
                if (cssSelectorMatchesCssProp === false) {
                    continue;
                }
                if (cssPropsArrayCreated === false) {
                    locObjectRulesMatchingPropsAndMedia[cssPropName] = new Array();
                    cssPropsArrayCreated = true;
                }
                filteredCssRulesMatchingCssProp = locObjectRulesMatchingPropsAndMedia[cssPropName];
                filteredCssRulesMatchingCssProp.push(locObjLevel2);
            }
        }
        return locObjectRulesMatchingPropsAndMedia;
    }
    // END OF THE BLOCK  METHODS TO PRE-BUILD DATA SETS
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
//# sourceMappingURL=EmailHtmlInliner.js.map