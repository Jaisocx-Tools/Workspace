"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ResponsiveSizes_KEYWORDS_ORIENTATION_PORTRAIT, _ResponsiveSizes_KEYWORDS_ORIENTATION_LANDSCAPE, _ResponsiveSizes_KEYWORD_MOBILE, _ResponsiveSizes_KEYWORD_TABLET, _ResponsiveSizes_KEYWORD_DESKTOP, _ResponsiveSizes_CSS_VARIABLE_NAME, _ResponsiveSizes_CSS_VARIABLE_NAME__MIN_HEIGHT, _ResponsiveSizes_CSS_VARIABLE_NAME__MAX_HEIGHT, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_FROM, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_TIL, _ResponsiveSizes_SELECTOR;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveSizes = void 0;
const ResponsiveSizesConstants_js_1 = require("./ResponsiveSizesConstants.js");
class ResponsiveSizes {
    constructor() {
        _ResponsiveSizes_KEYWORDS_ORIENTATION_PORTRAIT.set(this, void 0);
        _ResponsiveSizes_KEYWORDS_ORIENTATION_LANDSCAPE.set(this, void 0);
        _ResponsiveSizes_KEYWORD_MOBILE.set(this, void 0);
        _ResponsiveSizes_KEYWORD_TABLET.set(this, void 0);
        _ResponsiveSizes_KEYWORD_DESKTOP.set(this, void 0);
        _ResponsiveSizes_CSS_VARIABLE_NAME.set(this, void 0);
        _ResponsiveSizes_CSS_VARIABLE_NAME__MIN_HEIGHT.set(this, void 0);
        _ResponsiveSizes_CSS_VARIABLE_NAME__MAX_HEIGHT.set(this, void 0);
        _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_FROM.set(this, void 0);
        _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_TIL.set(this, void 0);
        _ResponsiveSizes_SELECTOR.set(this, void 0);
        __classPrivateFieldSet(this, _ResponsiveSizes_KEYWORD_MOBILE, "mobile", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_KEYWORD_TABLET, "tablet", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_KEYWORD_DESKTOP, "desktop", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_CSS_VARIABLE_NAME, "--responsive_size", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__MIN_HEIGHT, "--responsive_size__min-height", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__MAX_HEIGHT, "--responsive_size__max-height", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_FROM, "--responsive_size__min-width", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_TIL, "--responsive_size__max-width", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_SELECTOR, "html.workspace", "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_KEYWORDS_ORIENTATION_PORTRAIT, [
            "_portrait",
            "_vertical"
        ], "f");
        __classPrivateFieldSet(this, _ResponsiveSizes_KEYWORDS_ORIENTATION_LANDSCAPE, [
            "_landscape",
            "_horizontal"
        ], "f");
        this._responsiveSizesConstants = new ResponsiveSizesConstants_js_1.ResponsiveSizesConstants();
        this._responsiveSizeConstantName = __classPrivateFieldGet(this, _ResponsiveSizes_CSS_VARIABLE_NAME, "f");
        this._responsiveSizeSelector = __classPrivateFieldGet(this, _ResponsiveSizes_SELECTOR, "f");
        this._responsiveSizeName = "";
        this._responsive_sizes = new Object();
        this._responsiveSizesJson = new Object();
        this._cssVariableArray = new Array();
    }
    getResponsiveSizeConstantName() {
        // from the class SiteToolAutomation_ResponsiveSizesNames
        // in the automatique produced class SiteToolAutomation_ResponsiveSizesNames
        //   this variable has to be there too. for now not.
        return this._responsiveSizeConstantName;
    }
    setResponsiveSizeConstantName(name) {
        this._responsiveSizeConstantName = name;
        return this;
    }
    getResponsiveSizeSelector() {
        return this._responsiveSizeSelector;
    }
    setResponsiveSizeSelector(selector) {
        this._responsiveSizeSelector = selector;
        return this;
    }
    getCssValueByHtmlNode(htmlNode, cssVariableName) {
        let cssValue = window
            .getComputedStyle(htmlNode)
            .getPropertyValue(cssVariableName);
        return cssValue;
    }
    getCssValueBySelector(htmlNodeSelector, cssVariableName) {
        let htmlNode = document.querySelector(htmlNodeSelector);
        if (htmlNode === null) {
            throw new Error("HTML node not found");
        }
        let cssValue = this.getCssValueByHtmlNode(htmlNode, cssVariableName);
        return cssValue;
    }
    getResponsiveSizeName(force) {
        if (!force && this._responsiveSizeName.length != 0) {
            return this._responsiveSizeName;
        }
        let cssVariableName = this.getResponsiveSizeConstantName();
        let responsiveSizeName = this.getCssValueBySelector(this._responsiveSizeSelector, cssVariableName);
        this._responsiveSizeName = responsiveSizeName;
        this._cssVariableArray = responsiveSizeName.split("_");
        return this._responsiveSizeName;
    }
    getCssVariableArray(force) {
        if (force) {
            this.getResponsiveSizeName(force);
        }
        return this._cssVariableArray;
    }
    getResponsiveSizes(force) {
        let responsiveSizesKeys = Object.keys(this._responsive_sizes);
        if (!force && responsiveSizesKeys && responsiveSizesKeys.length === 2) {
            return this._responsive_sizes;
        }
        let cssVariable_MinHeight = this.getCssValueBySelector(this._responsiveSizeSelector, __classPrivateFieldGet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__MIN_HEIGHT, "f"));
        let cssVariable_MaxHeight = this.getCssValueBySelector(this._responsiveSizeSelector, __classPrivateFieldGet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__MAX_HEIGHT, "f"));
        let cssVariable_SizeFrom = this.getCssValueBySelector(this._responsiveSizeSelector, __classPrivateFieldGet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_FROM, "f"));
        let cssVariable_SizeTil = this.getCssValueBySelector(this._responsiveSizeSelector, __classPrivateFieldGet(this, _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_TIL, "f"));
        // @ts-ignore
        this._responsive_sizes["min-height"] = cssVariable_MinHeight;
        // @ts-ignore
        this._responsive_sizes["max-height"] = cssVariable_MaxHeight;
        // @ts-ignore
        this._responsive_sizes["min-width"] = cssVariable_SizeFrom;
        // @ts-ignore
        this._responsive_sizes["max-width"] = cssVariable_SizeTil;
        return this._responsive_sizes;
    }
    // one very precise method for the specific case, the fewest pixels dimension when a site is shown.
    mobilePortrait(force) {
        let mobile = this.mobile(force);
        let forceUpdate_false = false;
        let orientationPortrait = this.orientationPortrait(forceUpdate_false);
        let mobileAndPortrait = (mobile && orientationPortrait);
        return mobileAndPortrait;
    }
    mobile(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(__classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_MOBILE, "f"));
        return responsiveSizeNameMatches;
    }
    tablet(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(__classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_TABLET, "f"));
        return responsiveSizeNameMatches;
    }
    desktop(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let keywordsDesktopNotMatching = [
            __classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_MOBILE, "f"),
            __classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_TABLET, "f")
        ];
        // if one of keywords has matched, then this variable has value of datatype string. not undefined.
        let matchMobileOrTabletFound = keywordsDesktopNotMatching
            .find((keyword) => {
            return responsiveSizeName.includes(keyword);
        });
        // if matchMobileOrTabletFound not undefined, then one of the keywords "mobile" or "tablet" has matched.
        let responsiveSizeNameMatches = (matchMobileOrTabletFound !== undefined);
        // if responsiveSizeNameMatches === false, means did not match "mobile" or "tablet", then it is a desktop.
        let isResponsiveSizeDesktop = (responsiveSizeNameMatches === false);
        return isResponsiveSizeDesktop;
    }
    matchOrientation(keywords, force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let matchFound = keywords
            .find((keyword) => {
            return responsiveSizeName.endsWith(keyword);
        });
        let responsiveSizeNameMatches = (matchFound !== undefined);
        return responsiveSizeNameMatches;
    }
    orientationPortrait(force) {
        let responsiveSizeNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _ResponsiveSizes_KEYWORDS_ORIENTATION_PORTRAIT, "f"), force);
        return responsiveSizeNameMatches;
    }
    orientationLandscape(force) {
        let responsiveSizeNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _ResponsiveSizes_KEYWORDS_ORIENTATION_LANDSCAPE, "f"), force);
        return responsiveSizeNameMatches;
    }
    toJson(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizes = this.getResponsiveSizes(force);
        let responsiveSizesJsonKeys = Object.keys(this._responsiveSizesJson);
        if (!force && responsiveSizesJsonKeys && responsiveSizesJsonKeys.length !== 0) {
            return this._responsiveSizesJson;
        }
        let notToUpdate = false;
        let mobile = this.mobile(notToUpdate);
        let tablet = this.tablet(notToUpdate);
        let desktop = this.desktop(notToUpdate);
        let orientationPortrait = this.orientationPortrait(notToUpdate);
        let orientationLandscape = this.orientationLandscape(notToUpdate);
        let labelMobile = __classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_MOBILE, "f");
        let labelTablet = __classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_TABLET, "f");
        let labelDesktop = __classPrivateFieldGet(this, _ResponsiveSizes_KEYWORD_DESKTOP, "f");
        // this code block sets the shorter labels when viewing on mobile and orientation portrait.
        // let mobilePortrait: boolean = ( mobile && orientationPortrait);
        let labelResponsiveSizeName = "size";
        let labelResponsiveSizes = "responsive_sizes";
        let labelOrientationPortrait = "portrait";
        let labelOrientationLandscape = "landscape";
        this._responsiveSizesJson = {
            [labelResponsiveSizeName]: responsiveSizeName,
            [labelResponsiveSizes]: responsiveSizes,
            [labelMobile]: mobile,
            [labelTablet]: tablet,
            [labelDesktop]: desktop,
            [labelOrientationPortrait]: orientationPortrait,
            [labelOrientationLandscape]: orientationLandscape
        };
        return this._responsiveSizesJson;
    }
    toString() {
        let force = true;
        let responsiveSizesJson = this.toJson(force);
        let jsonString = JSON.stringify(responsiveSizesJson, null, 2);
        return jsonString;
    }
}
exports.ResponsiveSizes = ResponsiveSizes;
_ResponsiveSizes_KEYWORDS_ORIENTATION_PORTRAIT = new WeakMap(), _ResponsiveSizes_KEYWORDS_ORIENTATION_LANDSCAPE = new WeakMap(), _ResponsiveSizes_KEYWORD_MOBILE = new WeakMap(), _ResponsiveSizes_KEYWORD_TABLET = new WeakMap(), _ResponsiveSizes_KEYWORD_DESKTOP = new WeakMap(), _ResponsiveSizes_CSS_VARIABLE_NAME = new WeakMap(), _ResponsiveSizes_CSS_VARIABLE_NAME__MIN_HEIGHT = new WeakMap(), _ResponsiveSizes_CSS_VARIABLE_NAME__MAX_HEIGHT = new WeakMap(), _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_FROM = new WeakMap(), _ResponsiveSizes_CSS_VARIABLE_NAME__SIZE_TIL = new WeakMap(), _ResponsiveSizes_SELECTOR = new WeakMap();
//# sourceMappingURL=ResponsiveSizes.js.map