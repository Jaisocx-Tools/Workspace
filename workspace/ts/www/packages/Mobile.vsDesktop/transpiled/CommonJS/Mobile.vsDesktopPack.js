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
var _MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE, _MobileVsDesktopPack_KEYWORD_MOBILE, _MobileVsDesktopPack_KEYWORD_TABLET, _MobileVsDesktopPack_CSS_VARIABLE_NAME__MEDIA_RULE, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileVsDesktopPack = void 0;
const ResponsiveSizeNames_js_1 = require("./ResponsiveSizeNames.js");
class MobileVsDesktopPack {
    constructor() {
        _MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT.set(this, void 0);
        _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE.set(this, void 0);
        _MobileVsDesktopPack_KEYWORD_MOBILE.set(this, void 0);
        _MobileVsDesktopPack_KEYWORD_TABLET.set(this, void 0);
        _MobileVsDesktopPack_CSS_VARIABLE_NAME__MEDIA_RULE.set(this, void 0);
        _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM.set(this, void 0);
        _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL.set(this, void 0);
        __classPrivateFieldSet(this, _MobileVsDesktopPack_KEYWORD_MOBILE, "_mobile_", "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_KEYWORD_TABLET, "_tablet_", "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__MEDIA_RULE, "--media-rule", "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM, "--min_width", "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL, "--max_width", "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT, [
            "_portrait",
            "_vertical"
        ], "f");
        __classPrivateFieldSet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE, [
            "_landscape",
            "_horizontal"
        ], "f");
        this._responsiveSizeNamesInstance = new ResponsiveSizeNames_js_1.ResponsiveSizeNames();
        this._responsiveSizeName = "";
        this._responsiveSizes = new Object();
        this._responsiveSizeJson = new Object();
    }
    getCssVariableName_ResponsiveSize() {
        return __classPrivateFieldGet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__MEDIA_RULE, "f");
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
        let cssVariableName = this.getCssVariableName_ResponsiveSize();
        let responsiveSizeName = this.getCssValueBySelector("html.workspace", cssVariableName);
        this._responsiveSizeName = responsiveSizeName;
        return this._responsiveSizeName;
    }
    getResponsiveSizes(force) {
        let responsiveSizesKeys = Object.keys(this._responsiveSizes);
        if (!force && responsiveSizesKeys && responsiveSizesKeys.length === 2) {
            return this._responsiveSizes;
        }
        let cssVariable_WidthFrom = this.getCssValueBySelector("html.workspace", __classPrivateFieldGet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM, "f"));
        let cssVariable_WidthTil = this.getCssValueBySelector("html.workspace", __classPrivateFieldGet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL, "f"));
        // @ts-ignore
        this._responsiveSizes["minWidth"] = cssVariable_WidthFrom;
        // @ts-ignore
        this._responsiveSizes["maxWidth"] = cssVariable_WidthTil;
        return this._responsiveSizes;
    }
    isMobile(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_MOBILE, "f"));
        return responsiveSizeNameMatches;
    }
    isTablet(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_TABLET, "f"));
        return responsiveSizeNameMatches;
    }
    isDesktop(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let keywordsDesktopNotMatching = [
            __classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_MOBILE, "f"),
            __classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_TABLET, "f")
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
    isOrientationPortrait(force) {
        let responsiveSizeNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT, "f"), force);
        return responsiveSizeNameMatches;
    }
    isOrientationLandscape(force) {
        let responsiveSizeNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE, "f"), force);
        return responsiveSizeNameMatches;
    }
    toJson(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizes = this.getResponsiveSizes(force);
        let responsiveSizeJsonKeys = Object.keys(this._responsiveSizeJson);
        if (!force && responsiveSizeJsonKeys && responsiveSizeJsonKeys.length !== 0) {
            return this._responsiveSizeJson;
        }
        let notToUpdate = false;
        let isMobile = this.isMobile(notToUpdate);
        let isTablet = this.isTablet(notToUpdate);
        let isDesktop = this.isDesktop(notToUpdate);
        let isOrientationPortrait = this.isOrientationPortrait(notToUpdate);
        let isOrientationLandscape = this.isOrientationLandscape(notToUpdate);
        let labelIsMobile = "isMobile";
        let labelIsTablet = "isTablet";
        let labelIsDesktop = "isDesktop";
        let isMobilePortrait = (isMobile && isOrientationPortrait);
        let labelResponsiveSizeName = isMobilePortrait ? "media" : "mediaQueryName";
        let labelResponsiveSizes = isMobilePortrait ? "width" : "mediaQueryWidth";
        let labelIsOrientationPortrait = isMobilePortrait ? "portrait" : "isOrientationPortrait";
        let labelIsOrientationLandscape = isMobilePortrait ? "landscape" : "isOrientationLandscape";
        this._responsiveSizeJson = {
            [labelResponsiveSizeName]: responsiveSizeName,
            [labelResponsiveSizes]: responsiveSizes,
            [labelIsMobile]: isMobile,
            [labelIsTablet]: isTablet,
            [labelIsDesktop]: isDesktop,
            [labelIsOrientationPortrait]: isOrientationPortrait,
            [labelIsOrientationLandscape]: isOrientationLandscape
        };
        return this._responsiveSizeJson;
    }
    toString() {
        let force = true;
        let responsiveSizeJson = this.toJson(force);
        let jsonString = JSON.stringify(responsiveSizeJson, null, 2);
        return jsonString;
    }
    getBrowserTabDimensions() {
        throw new Error("Not implemented");
        // return "Not implemented";
    }
}
exports.MobileVsDesktopPack = MobileVsDesktopPack;
_MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT = new WeakMap(), _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE = new WeakMap(), _MobileVsDesktopPack_KEYWORD_MOBILE = new WeakMap(), _MobileVsDesktopPack_KEYWORD_TABLET = new WeakMap(), _MobileVsDesktopPack_CSS_VARIABLE_NAME__MEDIA_RULE = new WeakMap(), _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM = new WeakMap(), _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL = new WeakMap();
//# sourceMappingURL=Mobile.vsDesktopPack.js.map