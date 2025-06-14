class MobileVsDesktopPack {
  #KEYWORDS_ORIENTATION_PORTRAIT;
  #KEYWORDS_ORIENTATION_LANDSCAPE;
  #KEYWORD_MOBILE;
  #KEYWORD_TABLET;
  _responsiveSizeNamesInstance;
  _responsiveSizeName;

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
    this._responsiveSizeNamesInstance = new ResponsiveSizeNames();
    this._responsiveSizeName = "";
  }

  getCssValueByHtmlNode(htmlNode, cssVariableName) {
    let cssValue = window
      .getComputedStyle(htmlNode)
      .getPropertyValue(cssVariableName);

    return cssValue;
  }

  getCssValueBySelector(
    htmlNodeSelector,
    cssVariableName) {
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

    let cssVariableName = this._responsiveSizeNamesInstance.getCssVariableName();
    let responsiveSizeName = this.getCssValueBySelector(
      "html.workspace",
      cssVariableName);
    this._responsiveSizeName = responsiveSizeName;

    return this._responsiveSizeName;
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
    let responsiveSizeNameMatches = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_PORTRAIT,
      force);

    return responsiveSizeNameMatches;
  }

  isOrientationLandscape(force) {
    let responsiveSizeNameMatches = this.matchOrientation(
      this.#KEYWORDS_ORIENTATION_LANDSCAPE,
      force);

    return responsiveSizeNameMatches;
  }

  toJson(force) {
    let responsiveSizeName = this.getResponsiveSizeName(force);
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
    let labelResponsiveSizeName = isMobilePortrait ? "media" : "responsiveSizeName";
    let labelIsOrientationPortrait = isMobilePortrait ? "portrait" : "isOrientationPortrait";
    let labelIsOrientationLandscape = isMobilePortrait ? "landscape" : "isOrientationLandscape";
    let responsiveSizeJson = {
      [labelResponsiveSizeName]: responsiveSizeName,
      [labelIsMobile]: isMobile,
      [labelIsTablet]: isTablet,
      [labelIsDesktop]: isDesktop,
      [labelIsOrientationPortrait]: isOrientationPortrait,
      [labelIsOrientationLandscape]: isOrientationLandscape
    };

    return responsiveSizeJson;
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


