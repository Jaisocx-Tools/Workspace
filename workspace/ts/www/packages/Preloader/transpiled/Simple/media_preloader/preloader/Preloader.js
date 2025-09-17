class Preloader {
    preloaderConstantsInstance;
    templateRenderer;
    themesPreloads;
    webpackAlias;
    webpackAliasReplace;



    constructor() {
        this.preloaderConstantsInstance = new PreloaderConstants();
        this.templateRenderer = new TemplateRenderer();
        this.themesPreloads = {};
        this.webpackAlias = "";
        this.webpackAliasReplace = "";
    }



    setThemesPreloads(preloads) {
        this.themesPreloads = preloads;


        return this;
    }



    setWebpackAlias(alias) {
        this.webpackAlias = alias;


        return this;
    }



    setWebpackAliasReplace(alias) {
        this.webpackAliasReplace = alias;


        return this;
    }



    init(
        inTimeoutMillis,
        isWithStopOnLoadTimeout
    ) {
        this.addDocumentLoadedEventHandler(
            inTimeoutMillis,
            isWithStopOnLoadTimeout
        );
    }



    addDocumentLoadedEventHandler(
        inTimeoutMillis,
        isWithStopOnLoadTimeout
    ) {

        if (document.readyState !== "loading") {

            // If already loaded, invokes immediately
            this.preload(
                inTimeoutMillis,
                isWithStopOnLoadTimeout
            );
        }
        else {
            document.addEventListener(
                "DOMContentLoaded",
                () => {

                    // invokes on event DOMContentLoaded
                    this.preload(
                        inTimeoutMillis,
                        isWithStopOnLoadTimeout
                    );
                },
                { once: true }
            );
        }
    }



    preload(
        inTimeoutMillis,
        isWithStopOnLoadTimeout
    ) {
        let preloadsByDatatypesKeys = Object.keys(this.themesPreloads);
        let aLinkTag = new Object();
        let linkTagsArray = new Array();
        let tmpLinkTagsArray = new Array();
        let keysNumber = preloadsByDatatypesKeys.length;
        let linkTagsNumber = 0;
        let idsInLinkTagsArray = new Array();
        let linkId = "";
        let secureCounter = 0;
        let secureMaxCounter = 8;
        let keyIx = 0;
        let key = "";

        markerA: while (keyIx < keysNumber) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                keyIx = (keysNumber + 5);
                break markerA;
            }
            key = preloadsByDatatypesKeys[keyIx];


            //@sence line
            tmpLinkTagsArray = this.htmlDocumentAppendPreloadingLinkTags(key, isWithStopOnLoadTimeout);


            // push to array with ids of the produced tags <link rel=preload.
            // need later for the preventing render block script
            linkTagsArray = [...linkTagsArray, ...tmpLinkTagsArray];
            keyIx++;
        }
        linkTagsNumber = linkTagsArray.length;
        let linkTagIx = 0;
        secureCounter = 0;
        secureMaxCounter = 124;

        markerB: while (linkTagIx < linkTagsNumber) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                linkTagIx = (linkTagsNumber + 5);
                break markerB;
            }
            aLinkTag = linkTagsArray[linkTagIx];
            linkId = aLinkTag.id;


            //@sence line
            idsInLinkTagsArray.push(linkId);
            linkTagIx++;
        }

        if (isWithStopOnLoadTimeout) {
            this.applyScriptLoadingStopOnTimeout(
                idsInLinkTagsArray,
                inTimeoutMillis
            );
        }
        linkTagIx = 0;
        secureCounter = 0;
        secureMaxCounter = 124;

        markerC: while (linkTagIx < linkTagsNumber) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                linkTagIx = (linkTagsNumber + 5);
                break markerC;
            }
            aLinkTag = linkTagsArray[linkTagIx];


            //@sence line
            document.head.append(aLinkTag);
            linkTagIx++;
        }
    }



    htmlDocumentAppendPreloadingLinkTags_Images(isWithStopOnLoadTimeout) {
        let linkTags = this.htmlDocumentAppendPreloadingLinkTags(
            "image",
            isWithStopOnLoadTimeout
        );


        return linkTags;
    }



    htmlDocumentAppendPreloadingLinkTags_Fonts(isWithStopOnLoadTimeout) {
        let linkTags = this.htmlDocumentAppendPreloadingLinkTags(
            "font",
            isWithStopOnLoadTimeout
        );


        return linkTags;
    }



    htmlDocumentAppendPreloadingLinkTags(
        inDataType,
        isWithStopOnLoadTimeout
    ) {
        let linkTags = new Array();


        //@ts-ignore
        let preloadsByDatatype = this.themesPreloads[inDataType];

        if ((preloadsByDatatype === undefined) ||
            (preloadsByDatatype === null) ||
            (Object.values(preloadsByDatatype).length === 0)) {
            return linkTags;
        }
        let linkTagName = "link";
        let rel = "preload";
        let as = inDataType;
        let linkId = "";
        let linkTagOnloadCode = this.preloaderConstantsInstance.getLinkTagOnloadCode();
        let linkTagOnerrorCode = this.preloaderConstantsInstance.getLinkTagOnerrorCode();
        let themeName = "";
        let webpackAliasedURL = "";
        let href = "";
        let urls = [];
        const alias = this.webpackAlias;
        const aliasReplace = this.webpackAliasReplace;
        const toReplaceWebpackAlias = ((alias !== undefined) && (alias !== null) && (alias.length !== 0));
        let mConstants = new SitesPreloaderMimeTypeConstants();
        let mimeTypesInstance = new MimeType();
        mimeTypesInstance
            .setMimeTypesConstants(mConstants);
        let filename = "";
        let mimeType = "";
        let filenameToId = "";

        for (themeName in preloadsByDatatype) {

            //@ts-ignore
            urls = preloadsByDatatype[themeName];

            if (urls.length === 0) {
                continue;
            }

            for (webpackAliasedURL of urls) {
                let link = document.createElement(linkTagName);

                if (toReplaceWebpackAlias === true) {
                    href = webpackAliasedURL.replace(alias, aliasReplace);
                }
                else {
                    href = webpackAliasedURL;
                }
                filename = href.substring(href.lastIndexOf("/") + 1);
                mimeType = mimeTypesInstance.getMimeTypeByFilename(filename, 2);
                filenameToId = [themeName, filename].join("_");
                linkId = CaseConverter.snake(filenameToId);
                link.setAttribute("id", linkId);

                if (mimeType.startsWith("font/") || mimeType.startsWith("image/")) {
                    link.setAttribute("fetchpriority", "low");
                    link.setAttribute("rel", rel);
                    link.setAttribute("as", as);
                }
                else if (mimeType === "text/css") {
                    link.setAttribute("rel", "stylesheet");
                    link.setAttribute("charset", "utf-8");
                }
                link.setAttribute("type", mimeType);
                link.setAttribute("href", href);

                if (mimeType.startsWith("font/")) {
                    link.setAttribute("crossorigin", "");
                    link.setAttribute("onerror", linkTagOnerrorCode);
                }

                if (isWithStopOnLoadTimeout) {
                    link.setAttribute("onload", linkTagOnloadCode);
                }
                linkTags.push(link);
            }
        }


        return linkTags;
    }


    // preventing browser requests waiting and blocking when a cdn is not responding.
    extractUrlsFromHarBrowserReport(_harBrowserReportFilepath) {
        throw new Error("Not implemented");


        return [];
    }



    getScriptLoadingStopOnTimeout(
        idsOfLinkTags,
        timeoutNumberOfMilliseconds
    ) {
        let innerHTMLof_TagScript_Array = new Array(5);
        innerHTMLof_TagScript_Array[0] = "";
        innerHTMLof_TagScript_Array[1] = this.produceLinkTagsPreloading(idsOfLinkTags);
        innerHTMLof_TagScript_Array[2] = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();
        innerHTMLof_TagScript_Array[3] = this.produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds);
        innerHTMLof_TagScript_Array[4] = "";


        return innerHTMLof_TagScript_Array;
    }



    applyScriptLoadingStopOnTimeout(
        idsOfLinkTags,
        timeoutNumberOfMilliseconds
    ) {
        let innerHTMLof_TagScript_Array = this
            .getScriptLoadingStopOnTimeout(
                idsOfLinkTags,
                timeoutNumberOfMilliseconds
            )
            .slice(1, 4);
        let scriptSourceCode = innerHTMLof_TagScript_Array.join("");
        eval(scriptSourceCode);


        return;
    }



    addScriptLoadingStopOnTimeout(
        idsOfLinkTags,
        timeoutNumberOfMilliseconds
    ) {
        let firstTagLink = document.head.querySelector("link");
        let innerHTMLof_TagScript_Array = this.getScriptLoadingStopOnTimeout(
            idsOfLinkTags,
            timeoutNumberOfMilliseconds
        );
        innerHTMLof_TagScript_Array[0] = "\n  <script>\n";
        innerHTMLof_TagScript_Array[4] = "\n  </script>\n";
        let tagScriptOuterHTML = innerHTMLof_TagScript_Array.join("");

        if (firstTagLink === null) {
            document.head.insertAdjacentHTML(
                "afterbegin",
                tagScriptOuterHTML
            );
        }
        else {
            firstTagLink.insertAdjacentHTML(
                "beforebegin",
                tagScriptOuterHTML
            );
        }


        return;
    }



    produceLinkTagsPreloading(idsOfLinkTags) {

        //@ts-ignore
        let trDataRecord = this.templateRenderer.addNewDataRecord();
        let templateText = this.preloaderConstantsInstance.getLinkTagsPreloading();
        this.templateRenderer.setTemplate(templateText);
        let inOutArgof_reduceMethod = new Object();
        let templateDataValueAsObject = idsOfLinkTags.reduce(
            (prev, _curr, currentIndex, thisArray) => {
                let currValueOfArray = thisArray[currentIndex];
                prev[currValueOfArray] = 1;


                return prev;
            },
            inOutArgof_reduceMethod
        );
        let templateDataValueAsText = JSON.stringify(
            templateDataValueAsObject,
            null,
            2
        );
        let templateData = { "idsObjectOf_LinkTagsPreloading": templateDataValueAsText };
        this.templateRenderer.setData(templateData);
        let textof_varLinkTagsPreloading = this.templateRenderer.render();


        return textof_varLinkTagsPreloading;
    }



    produceScriptLoadingStopOnTimeout() {
        let textof_ScriptLoadingStopOnTimeout = this.preloaderConstantsInstance.getScriptLoadingStopOnTimeout();


        return textof_ScriptLoadingStopOnTimeout;
    }



    produceCodeblockInvoke_ScriptLoadingStopOnTimeout(timeoutNumberOfMilliseconds) {

        //@ts-ignore
        let trDataRecord = this.templateRenderer.addNewDataRecord();
        let templateText = this.preloaderConstantsInstance.getCodeblockInvoke_ScriptLoadingStopOnTimeout();
        this.templateRenderer.setTemplate(templateText);
        let templateData = { "timeoutNumberOfMilliseconds": timeoutNumberOfMilliseconds };
        this.templateRenderer.setData(templateData);
        let textof_ScriptLoadingStopOnTimeout = this.templateRenderer.render();


        return textof_ScriptLoadingStopOnTimeout;
    }
}


