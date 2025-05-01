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
const MediaruleNames_js_1 = require("./MediaruleNames.js");
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
        this._mediaruleNamesInstance = new MediaruleNames_js_1.MediaruleNames();
        this._mediaRuleName = "";
        this._mediaRuleSizes = new Object();
        this._mediaruleJson = new Object();
    }
    getCssVariableName_MediaRule() {
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
    getMediaruleName(force) {
        if (!force && this._mediaRuleName.length != 0) {
            return this._mediaRuleName;
        }
        let cssVariableName = this.getCssVariableName_MediaRule();
        let mediaRuleName = this.getCssValueBySelector("html.workspace", cssVariableName);
        this._mediaRuleName = mediaRuleName;
        return this._mediaRuleName;
    }
    getMediaruleSizes(force) {
        let mediaRuleSizesKeys = Object.keys(this._mediaRuleSizes);
        if (!force && mediaRuleSizesKeys && mediaRuleSizesKeys.length === 2) {
            return this._mediaRuleSizes;
        }
        let cssVariable_WidthFrom = this.getCssValueBySelector("html.workspace", __classPrivateFieldGet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_FROM, "f"));
        let cssVariable_WidthTil = this.getCssValueBySelector("html.workspace", __classPrivateFieldGet(this, _MobileVsDesktopPack_CSS_VARIABLE_NAME__WIDTH_TIL, "f"));
        // @ts-ignore
        this._mediaRuleSizes["minWidth"] = cssVariable_WidthFrom;
        // @ts-ignore
        this._mediaRuleSizes["maxWidth"] = cssVariable_WidthTil;
        return this._mediaRuleSizes;
    }
    isMobile(force) {
        let mediaruleName = this.getMediaruleName(force);
        let mediaruleNameMatches = mediaruleName.includes(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_MOBILE, "f"));
        return mediaruleNameMatches;
    }
    isTablet(force) {
        let mediaruleName = this.getMediaruleName(force);
        let mediaruleNameMatches = mediaruleName.includes(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_TABLET, "f"));
        return mediaruleNameMatches;
    }
    isDesktop(force) {
        let mediaruleName = this.getMediaruleName(force);
        let keywordsDesktopNotMatching = [
            __classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_MOBILE, "f"),
            __classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORD_TABLET, "f")
        ];
        // if one of keywords has matched, then this variable has value of datatype string. not undefined.
        let matchMobileOrTabletFound = keywordsDesktopNotMatching
            .find((keyword) => {
            return mediaruleName.includes(keyword);
        });
        // if matchMobileOrTabletFound not undefined, then one of the keywords "mobile" or "tablet" has matched.
        let mediaruleNameMatches = (matchMobileOrTabletFound !== undefined);
        // if mediaruleNameMatches === false, means did not match "mobile" or "tablet", then it is a desktop.
        let isMediaruleDesktop = (mediaruleNameMatches === false);
        return isMediaruleDesktop;
    }
    matchOrientation(keywords, force) {
        let mediaruleName = this.getMediaruleName(force);
        let matchFound = keywords
            .find((keyword) => {
            return mediaruleName.endsWith(keyword);
        });
        let mediaruleNameMatches = (matchFound !== undefined);
        return mediaruleNameMatches;
    }
    isOrientationPortrait(force) {
        let mediaruleNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_PORTRAIT, "f"), force);
        return mediaruleNameMatches;
    }
    isOrientationLandscape(force) {
        let mediaruleNameMatches = this.matchOrientation(__classPrivateFieldGet(this, _MobileVsDesktopPack_KEYWORDS_ORIENTATION_LANDSCAPE, "f"), force);
        return mediaruleNameMatches;
    }
    toJson(force) {
        let mediaruleName = this.getMediaruleName(force);
        let mediaruleSizes = this.getMediaruleSizes(force);
        let mediaruleJsonKeys = Object.keys(this._mediaruleJson);
        if (!force && mediaruleJsonKeys && mediaruleJsonKeys.length !== 0) {
            return this._mediaruleJson;
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
        let labelMediaruleName = isMobilePortrait ? "media" : "mediaQueryName";
        let labelMediaruleSizes = isMobilePortrait ? "width" : "mediaQueryWidth";
        let labelIsOrientationPortrait = isMobilePortrait ? "portrait" : "isOrientationPortrait";
        let labelIsOrientationLandscape = isMobilePortrait ? "landscape" : "isOrientationLandscape";
        this._mediaruleJson = {
            [labelMediaruleName]: mediaruleName,
            [labelMediaruleSizes]: mediaruleSizes,
            [labelIsMobile]: isMobile,
            [labelIsTablet]: isTablet,
            [labelIsDesktop]: isDesktop,
            [labelIsOrientationPortrait]: isOrientationPortrait,
            [labelIsOrientationLandscape]: isOrientationLandscape
        };
        return this._mediaruleJson;
    }
    toString() {
        let force = true;
        let mediaruleJson = this.toJson(force);
        let jsonString = JSON.stringify(mediaruleJson, null, 2);
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