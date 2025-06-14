import { ResponsiveSizeNames } from "./ResponsiveSizeNames.js";
export class MobileVsDesktopPack {
    #KEYWORDS_ORIENTATION_PORTRAIT;
    #KEYWORDS_ORIENTATION_LANDSCAPE;
    #KEYWORD_MOBILE;
    #KEYWORD_TABLET;
    #CSS_VARIABLE_NAME__MEDIA_RULE;
    #CSS_VARIABLE_NAME__WIDTH_FROM;
    #CSS_VARIABLE_NAME__WIDTH_TIL;
    _responsiveSizeNamesInstance;
    _responsiveSizeName;
    _responsiveSizes;
    _responsiveSizeJson;
    constructor() {
        this.#KEYWORD_MOBILE = "_mobile_";
        this.#KEYWORD_TABLET = "_tablet_";
        this.#CSS_VARIABLE_NAME__MEDIA_RULE = "--media-rule";
        this.#CSS_VARIABLE_NAME__WIDTH_FROM = "--min_width";
        this.#CSS_VARIABLE_NAME__WIDTH_TIL = "--max_width";
        this.#KEYWORDS_ORIENTATION_PORTRAIT = [
            "_portrait",
            "_vertical"
        ];
        this.#KEYWORDS_ORIENTATION_LANDSCAPE = [
            "_landscape",
            "_horizontal"
        ];
        this._responsiveSizeNamesInstance = new ResponsiveSizeNames();
        this._responsiveSizeName = "";
        this._responsiveSizes = new Object();
        this._responsiveSizeJson = new Object();
    }
    getCssVariableName_ResponsiveSize() {
        return this.#CSS_VARIABLE_NAME__MEDIA_RULE;
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
        let cssVariable_WidthFrom = this.getCssValueBySelector("html.workspace", this.#CSS_VARIABLE_NAME__WIDTH_FROM);
        let cssVariable_WidthTil = this.getCssValueBySelector("html.workspace", this.#CSS_VARIABLE_NAME__WIDTH_TIL);
        // @ts-ignore
        this._responsiveSizes["minWidth"] = cssVariable_WidthFrom;
        // @ts-ignore
        this._responsiveSizes["maxWidth"] = cssVariable_WidthTil;
        return this._responsiveSizes;
    }
    isMobile(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(this.#KEYWORD_MOBILE);
        return responsiveSizeNameMatches;
    }
    isTablet(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(this.#KEYWORD_TABLET);
        return responsiveSizeNameMatches;
    }
    isDesktop(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let keywordsDesktopNotMatching = [
            this.#KEYWORD_MOBILE,
            this.#KEYWORD_TABLET
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
        let responsiveSizeNameMatches = this.matchOrientation(this.#KEYWORDS_ORIENTATION_PORTRAIT, force);
        return responsiveSizeNameMatches;
    }
    isOrientationLandscape(force) {
        let responsiveSizeNameMatches = this.matchOrientation(this.#KEYWORDS_ORIENTATION_LANDSCAPE, force);
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
//# sourceMappingURL=Mobile.vsDesktopPack.js.map