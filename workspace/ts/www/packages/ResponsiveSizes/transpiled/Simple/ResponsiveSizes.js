class ResponsiveSizes {
    #KEYWORDS_ORIENTATION_PORTRAIT;
    #KEYWORDS_ORIENTATION_LANDSCAPE;
    #KEYWORD_MOBILE;
    #KEYWORD_TABLET;
    #KEYWORD_DESKTOP;
    #CSS_VARIABLE_NAME;
    #CSS_VARIABLE_NAME__SIZE_FROM;
    #CSS_VARIABLE_NAME__SIZE_TIL;
    _responsiveSizesConstants;
    _responsiveSizeName;
    _responsive_sizes;
    _responsiveSizesJson;
    _cssVariableArray;


    constructor() {
        this.#KEYWORD_MOBILE = "mobile";
        this.#KEYWORD_TABLET = "tablet";
        this.#KEYWORD_DESKTOP = "desktop";
        this.#CSS_VARIABLE_NAME = "--responsive_size";
        this.#CSS_VARIABLE_NAME__SIZE_FROM = "--responsive_size__min-width";
        this.#CSS_VARIABLE_NAME__SIZE_TIL = "--responsive_size__max-width";
        this.#KEYWORDS_ORIENTATION_PORTRAIT = [
            "_portrait",
            "_vertical"
        ];
        this.#KEYWORDS_ORIENTATION_LANDSCAPE = [
            "_landscape",
            "_horizontal"
        ];
        this._responsiveSizesConstants = new ResponsiveSizesConstants();
        this._responsiveSizeName = "";
        this._responsive_sizes = new Object();
        this._responsiveSizesJson = new Object();
        this._cssVariableArray = new Array();
    }


    getResponsiveSizeConstantName() {

        // from the class SiteToolAutomation_ResponsiveSizesNames
        // in the automatique produced class SiteToolAutomation_ResponsiveSizesNames
        //   this variable has to be there too. for now not.
        return this.#CSS_VARIABLE_NAME;
    }


    getCssValueByHtmlNode(htmlNode, cssVariableName) {
        let cssValue = window
            .getComputedStyle(htmlNode)
            .getPropertyValue(cssVariableName);

        return cssValue;
    }


    getCssValueBySelector(
        htmlNodeSelector,
        cssVariableName
    ) {
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
        let responsiveSizeName = this.getCssValueBySelector(
            "html.workspace",
            cssVariableName
        );
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
        let cssVariable_SizeFrom = this.getCssValueBySelector(
            "html.workspace",
            this.#CSS_VARIABLE_NAME__SIZE_FROM
        );
        let cssVariable_SizeTil = this.getCssValueBySelector(
            "html.workspace",
            this.#CSS_VARIABLE_NAME__SIZE_TIL
        );


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
        let responsiveSizeNameMatches = responsiveSizeName.includes(this.#KEYWORD_MOBILE);

        return responsiveSizeNameMatches;
    }


    tablet(force) {
        let responsiveSizeName = this.getResponsiveSizeName(force);
        let responsiveSizeNameMatches = responsiveSizeName.includes(this.#KEYWORD_TABLET);

        return responsiveSizeNameMatches;
    }


    desktop(force) {
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


    orientationPortrait(force) {
        let responsiveSizeNameMatches = this.matchOrientation(
            this.#KEYWORDS_ORIENTATION_PORTRAIT,
            force
        );

        return responsiveSizeNameMatches;
    }


    orientationLandscape(force) {
        let responsiveSizeNameMatches = this.matchOrientation(
            this.#KEYWORDS_ORIENTATION_LANDSCAPE,
            force
        );

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
        let labelMobile = this.#KEYWORD_MOBILE;
        let labelTablet = this.#KEYWORD_TABLET;
        let labelDesktop = this.#KEYWORD_DESKTOP;


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


