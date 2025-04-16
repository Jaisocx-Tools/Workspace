import { MediaruleNames } from "./MediaruleNames.js";
export class MobileVsDesktopPack {
    #KEYWORDS_ORIENTATION_PORTRAIT;
    #KEYWORDS_ORIENTATION_LANDSCAPE;
    #KEYWORD_MOBILE;
    #KEYWORD_TABLET;
    _mediaruleNamesInstance;
    _mediaRuleName;
    constructor() {
        this.#KEYWORD_MOBILE = "_mobile_";
        this.#KEYWORD_TABLET = "_tablet_";
        this.#KEYWORDS_ORIENTATION_PORTRAIT = [
            "_portrait",
            "_vertical"
        ];
        this.#KEYWORDS_ORIENTATION_LANDSCAPE = [
            "_landscape",
            "_horizontal"
        ];
        this._mediaruleNamesInstance = new MediaruleNames();
        this._mediaRuleName = "";
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
        let cssVariableName = this._mediaruleNamesInstance.getCssVariableName();
        let mediaRuleName = this.getCssValueBySelector("html.workspace", cssVariableName);
        this._mediaRuleName = mediaRuleName;
        return this._mediaRuleName;
    }
    isMobile(force) {
        let mediaruleName = this.getMediaruleName(force);
        let mediaruleNameMatches = mediaruleName.includes(this.#KEYWORD_MOBILE);
        return mediaruleNameMatches;
    }
    isTablet(force) {
        let mediaruleName = this.getMediaruleName(force);
        let mediaruleNameMatches = mediaruleName.includes(this.#KEYWORD_TABLET);
        return mediaruleNameMatches;
    }
    isDesktop(force) {
        let mediaruleName = this.getMediaruleName(force);
        let keywordsDesktopNotMatching = [
            this.#KEYWORD_MOBILE,
            this.#KEYWORD_TABLET
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
        let mediaruleNameMatches = this.matchOrientation(this.#KEYWORDS_ORIENTATION_PORTRAIT, force);
        return mediaruleNameMatches;
    }
    isOrientationLandscape(force) {
        let mediaruleNameMatches = this.matchOrientation(this.#KEYWORDS_ORIENTATION_LANDSCAPE, force);
        return mediaruleNameMatches;
    }
    toJson(force) {
        let mediaruleName = this.getMediaruleName(force);
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
        let labelMediaruleName = isMobilePortrait ? "media" : "mediaruleName";
        let labelIsOrientationPortrait = isMobilePortrait ? "portrait" : "isOrientationPortrait";
        let labelIsOrientationLandscape = isMobilePortrait ? "landscape" : "isOrientationLandscape";
        let mediaruleJson = {
            [labelMediaruleName]: mediaruleName,
            [labelIsMobile]: isMobile,
            [labelIsTablet]: isTablet,
            [labelIsDesktop]: isDesktop,
            [labelIsOrientationPortrait]: isOrientationPortrait,
            [labelIsOrientationLandscape]: isOrientationLandscape
        };
        return mediaruleJson;
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
//# sourceMappingURL=Mobile.vsDesktopPack.js.map