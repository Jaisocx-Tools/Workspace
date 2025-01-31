"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const event_emitter_1 = require("@jaisocx/event-emitter");
// TemplateRenderer is the js class to set the json data in the html template the very easy and transparent way.
const template_renderer_1 = require("@jaisocx/template-renderer");
// Constants class is the Tooltip package class with constants.
const Constants_js_1 = require("./Constants.js");
const Types_js_1 = require("./Types.js");
const TooltipMainTemplateData_js_1 = require("./TooltipMainTemplateData.js");
// TooltipLib class is the package with singleton method .getInstance() 
// and the helping methods to calculate the css rules to place the tooltip the right way in the site ui.
const TooltipLib_js_1 = require("./TooltipLib.js");
const TooltipShownSettings_js_1 = require("./TooltipShownSettings.js");
require("@jaisocx-tooltip-assets/tooltip-styles-main-webpack.css");
// the class to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 
// and to place the tooltip the right way near the event target html node.
class Tooltip extends event_emitter_1.EventEmitter {
    // constructor method sets for the first time values for this class properies.
    constructor() {
        super();
        this.timeoutToCloseMillis = Constants_js_1.Constants.Defaults.tooltipHideTimoutMilliseconds;
        this.timeoutToCloseId = null;
        this.tooltipHideBehaviour = Constants_js_1.Constants.Defaults.tooltipHideBehaviour;
        // event target, where to click to show the tooltip initial attr id="" value is the zero length text
        this.eventTargetHtmlNodeId = "";
        this.eventTargetHtmlNode = null;
        this.eventTargetDimensions = new Types_js_1.Dimensions();
        this.eventName = Constants_js_1.Constants.EventsNames.CLICK;
        // tooltip dynamic produced html node, the initial attr id="" value is the zero length text
        this.mainHtmlNodeId = "";
        this.mainHtmlNode = null;
        this.tooltipHtmlNodeDimensions = new Types_js_1.Dimensions();
        // Constants.cssClasses sets cssClass value class="tooltip", 
        // however there is the setCssClasses public method to override the default css class names for the tooltip html node.
        this.cssClasses = Constants_js_1.Constants.Defaults.cssClasses;
        // the distance between the eventtarget and the tooltip or the arrow of a tooltip, if arrow has size.
        this.paddingEventTarget = Constants_js_1.Constants.Defaults.paddingEventTarget;
        this.paddingDimEventTarget = Constants_js_1.Constants.Defaults.paddingDimEventTarget;
        // Constants.tooltipAlignDimensionOne sets tooltipAlignDimensionOne value BROWSER_TAB_BORDER_TOP = 1, 
        // however there is the setTooltipAlignDimensionOne public method to override the default css class names for the tooltip html node.
        this.tooltipAlignDimensionOne = Constants_js_1.Constants.Defaults.tooltipAlignDimensionOne;
        // dimension two values set from Constants class static properties
        this.tooltipAlignDimensionTwo = Constants_js_1.Constants.Defaults.tooltipAlignDimensionTwo;
        this.tooltipPaddingAlignDimensionTwo = Constants_js_1.Constants.Defaults.tooltipPaddingAlignDimensionTwo;
        this.tooltipPaddingSizeDimAlignDimensionTwo = Constants_js_1.Constants.Defaults.tooltipPaddingSizeDimAlignDimensionTwo;
        // lib: TooltipLib singleton instance to use helping methods.
        this.lib = TooltipLib_js_1.TooltipLib.getInstance();
        // the predefind order to check the side to the eventTarget where to try to show the tooltip, 
        // if there is enough space til browser's tab border
        this.alternativeTabBorderSides = Constants_js_1.Constants.Defaults.alternativeTabBorderSides;
        // arrow feature
        this.withArrow = Constants_js_1.Constants.Defaults.withArrow;
        this.arrowSize = Constants_js_1.Constants.Defaults.arrowSize;
        this.arrowSizeDim = Constants_js_1.Constants.Defaults.arrowSizeDim;
        // templateRenderer is a new class exemplar of the Templaterenderer js class.
        this.templateRenderer = new template_renderer_1.TemplateRenderer();
        this.templateRenderer
            .setTemplate(Constants_js_1.Constants.Defaults.templateTooltipContent)
            .setData(Constants_js_1.Constants.Defaults.templateTooltipContent);
    }
    // getEventsNamesEmitted: the documentation method to know all events names those are emitted in this ts class
    getEventsNamesEmitted() {
        let eventsNamesEmitted = [];
        eventsNamesEmitted = [
            this.eventName,
            ...Constants_js_1.Constants.EventsEmitted,
        ];
        return eventsNamesEmitted;
    }
    // setDebug is used to turn on the browser developers console infos. 
    setDebug(debug) {
        this.debug = debug;
        this.templateRenderer.setDebug(debug);
        // return this; the code line allows to use the codng style like here:
        // tooltip
        //   .setDebug(true)
        //   .setTeplate(html)
        //   .setData(json)
        //   .render();
        return this;
    }
    setHtml(html) {
        this.html = html;
        this.setTemplate(Constants_js_1.Constants.Defaults.templateTooltipContent)
            .setTemplateData({ html, });
        return this;
    }
    // setTemplate: method sets the html for the toltip to produce the dynamic way.
    setTemplate(template) {
        this.templateRenderer.setTemplate(template);
        return this;
    }
    // setTemplate: method sets the json data for the template html for the toltip to produce the dynamic way.
    setTemplateData(data) {
        this.templateRenderer.setData(data);
        return this;
    }
    // setCssClasses is used to set the tooltip html node attr class="" values, like this class="tooltip theme-beta"
    setCssClasses(cssClasses) {
        this.cssClasses = cssClasses;
        return this;
    }
    // setPaddingEventTarget: the method sets the margin between the eventTarget and the tooltip or the arrow of a tooltip, if arrow has size.
    setPaddingEventTarget(padding, paddingDim) {
        this.paddingEventTarget = padding;
        this.paddingDimEventTarget = paddingDim;
        return this;
    }
    // where first the tooltip appears on event emtted, e.g. eventtarget html node clicked.
    // e.g. above the event target, TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP with number value 2.
    setTooltipAlignDimensionOne(tooltipAlignDimensionOne) {
        this.tooltipAlignDimensionOne = tooltipAlignDimensionOne;
        return this;
    }
    // where first the tooltip appears on event emtted, e.g. eventtarget html node clicked.
    // e.g. above the event target, TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP with number value 2.
    setTooltipAlignDimensionTwo(tooltipAlignDimensionTwo) {
        this.tooltipAlignDimensionTwo = tooltipAlignDimensionTwo;
        return this;
    }
    setTooltipPaddingAlignDimensionTwo(tooltipPaddingAlignDimensionTwo, tooltipPaddingSizeDimAlignDimensionTwo) {
        this.tooltipPaddingAlignDimensionTwo = tooltipPaddingAlignDimensionTwo;
        this.tooltipPaddingSizeDimAlignDimensionTwo = tooltipPaddingSizeDimAlignDimensionTwo;
        return this;
    }
    // setEventTargetHtmlNodeId: method sets the id of the html node, this when clicked, the tooltip will appear.
    setEventTargetHtmlNodeId(id) {
        this.eventTargetHtmlNodeId = id;
        return this;
    }
    // setEventTargetHtmlNode: method sets the html node, this when clicked, the tooltip will appear.
    setEventTargetHtmlNode(eventTarget) {
        this.eventTargetHtmlNode = eventTarget;
        return this;
    }
    // setEventName: method to set the event name, when on the eventTarget the tooltip is shown.
    setEventName(eventName) {
        this.eventName = eventName;
        return this;
    }
    // setAlignDimensionOneValueOrder: method adds alternative array of values in the order, to try to plce on the site ui the tooltip.
    setAlignDimensionOneValueOrder(alternativeTabBorderSides) {
        this.alternativeTabBorderSides = alternativeTabBorderSides;
        return this;
    }
    // arrow feature
    setIsWithArrow(withArrow) {
        this.withArrow = withArrow;
        return this;
    }
    setArrowSize(arrowSize, arrowSizeDim) {
        this.arrowSize = arrowSize;
        this.arrowSizeDim = arrowSizeDim;
        return this;
    }
    setTimeoutToCloseMillis(timeoutMillis) {
        this.timeoutToCloseMillis = timeoutMillis;
        return this;
        this.tooltipHideBehaviour;
    }
    setTooltipHideBehaviour(tooltipHideBehaviour) {
        this.tooltipHideBehaviour = tooltipHideBehaviour;
        return this;
    }
    // render(): this method renders the tooltip, and adds the event listener, 
    // however doesn't show the tooltip.
    // to show the tooltip, the event target html node has to be clicked.
    render() {
        if (this.debug) {
            console.info("JS class Tooltip emits Events:", this.getEventsNamesEmitted());
        }
        // @ts-ignore
        this.eventTargetHtmlNode = document.getElementById(this.eventTargetHtmlNodeId);
        const templateData = new TooltipMainTemplateData_js_1.TooltipMainTemplateData();
        if (this.mainHtmlNodeId.length === 0) {
            this.mainHtmlNodeId = templateData.getId();
        }
        else {
            templateData.setId(this.mainHtmlNodeId);
        }
        // the TemplateRenderer produces the html from the html template and json data via .render() method call.
        const tooltipContentHtml = this.templateRenderer.render();
        templateData
            .setCssClasses(`${Constants_js_1.Constants.CssClassNames.TOOLTIP_MAIN} ${this.cssClasses}`)
            .setTooltipContent(tooltipContentHtml);
        // the main template contains in the placeholder {{ tooltipContent }} the rendered template from the custom template and data
        const templateRedererTechniq = new template_renderer_1.TemplateRenderer();
        const html = templateRedererTechniq
            .setTemplate(Constants_js_1.Constants.tooltipMainTemplate)
            .setData(templateData)
            .render();
        // at the end of the html BODY in the current html document,
        // the html from the tooltip is being inserted, with html attributes id="" and class=""
        document.getElementsByTagName("BODY")[0]
            .insertAdjacentHTML("beforeend", html);
        //@ts-ignore      
        this.mainHtmlNode = document.getElementById(this.mainHtmlNodeId);
        //@ts-ignore
        this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName(Constants_js_1.Constants.CssClassNames.TOOLTIP_ARROW)[0];
        // TODO: rewrite, using improved DOM events hanlder
        this.addEventListeners();
        return this;
    }
    renderTooltipArrowHtmlNode() {
        let arrowNode = document.createElement("tooltip-arrow");
        arrowNode.className = Constants_js_1.Constants.CssClassNames.TOOLTIP_ARROW;
        //@ts-ignore
        this.mainHtmlNode.append(arrowNode);
        //@ts-ignore
        this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName(Constants_js_1.Constants.CssClassNames.TOOLTIP_ARROW)[0];
        return this;
    }
    getLocalStorageArray() {
        let localStorageTooltipsArray = [];
        const localStorageTooltips = localStorage.getItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);
        if (localStorageTooltips) {
            localStorageTooltipsArray = JSON.parse(localStorageTooltips);
        }
        if (localStorageTooltipsArray.length === 0) {
            return null;
        }
        const tooltipShownSettings = localStorageTooltipsArray
            .find((tooltipSetting) => tooltipSetting.tooltipHtmlNodeId === this.mainHtmlNodeId);
        return tooltipShownSettings;
    }
    addToLocalStorageArray(key, value) {
        let localStorageTooltipsArray = [];
        const localStorageTooltips = localStorage.getItem(key);
        if (localStorageTooltips) {
            localStorageTooltipsArray = JSON.parse(localStorageTooltips);
        }
        localStorageTooltipsArray.push(value);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(localStorageTooltipsArray));
        return this;
    }
    removeFromLocalStorageArray(key, jPath, jPathMatchingValue) {
        let localStorageTooltipsArray = [];
        const localStorageTooltips = localStorage.getItem(key);
        if (localStorageTooltips) {
            localStorageTooltipsArray = JSON.parse(localStorageTooltips);
        }
        const localStorageTooltipsArrayFiltered = localStorageTooltipsArray
            .filter((item) => {
            let toRemove = true;
            let prop = item;
            for (let key of jPath) {
                const propValue = prop[key];
                prop = propValue;
            }
            toRemove = (prop === jPathMatchingValue);
            return !toRemove;
        });
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(localStorageTooltipsArrayFiltered));
        return this;
    }
    addCleanupEventHandler() {
        window.addEventListener(Constants_js_1.Constants.EventsNames.BEFOREUNLOAD, (event) => {
            localStorage.removeItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST);
            localStorage.removeItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);
        });
        return this;
    }
    addClickCurrentTooltipCloseEventHandler() {
        // the local storage marker, that a tooltip class instance is already registered on this page shown in this browser tab.
        const localStorageTooltips = localStorage.getItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST);
        // the event handler will be added only once.
        // therefore, when this marker already set,
        // the function exits, and another event handler will not be added
        if (localStorageTooltips) {
            return this;
        }
        // this code line adds the event listener function,
        // the function is invoked on every click on this page.
        document.getElementsByTagName("HTML")[0].addEventListener(Constants_js_1.Constants.EventsNames.CLICK, (evt) => {
            // console writes the current event payload
            if (this.debug) {
                console.log(evt);
            }
            // here we get know, that the click was inside the Tooltip html node.
            // we have to stop here, since the click inside the tooltip is allowed, 
            // e.g. when a context menu or to copy inner text
            //@ts-ignore
            let holderTooltip = evt.target.closest(`.${Constants_js_1.Constants.CssClassNames.TOOLTIP_MAIN}`);
            //@ts-ignore
            if (holderTooltip) {
                return;
            }
            // hides all registered shown tooltips,
            // due to hide behaviour prop.
            // and removes localStorage array with these all registered shown tooltips
            this.hideTooltipsByBehaviours([
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            ], null);
        });
        localStorage.setItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST, "true");
        return this;
    }
    addEventTriggerTooltipShowEventHandler() {
        // @ts-ignore
        this.eventTargetHtmlNode.addEventListener(this.eventName, (evt) => {
            if (this.debug) {
                console.log(evt);
            }
            evt.preventDefault();
            evt.stopPropagation();
            this.showTooltip(null, Constants_js_1.Constants.EventTarget.EVENT_TARGET);
            this.emitEvent(this.eventName, evt);
        });
        return this;
    }
    addWindowResizeEventListener() {
        window.addEventListener(Constants_js_1.Constants.EventsNames.RESIZE, (evt) => {
            if (this.debug) {
                console.log(evt);
            }
            this.emitEvent(Constants_js_1.Constants.EventsNames.RESIZE, evt);
            this.calculateTooltipHtmlNodeDimensions();
        });
        return this;
    }
    // TODO: write this method.
    addScrollEventListeners() {
        const scrollableHolderNodesArray = this.lib.getScrollableHolderNodes(this.eventTargetHtmlNode);
        if (this.debug) {
            console.log("scrollableHolderNodesArray", scrollableHolderNodesArray);
        }
        for (let scrollableHolderNode of scrollableHolderNodesArray) {
            scrollableHolderNode.node.addEventListener(Constants_js_1.Constants.EventsNames.SCROLL, (evt) => {
                if (this.debug) {
                    console.log(`${Constants_js_1.Constants.EventsNames.SCROLL} event emitted`, evt);
                }
                if (!this.getLocalStorageArray()) {
                    return;
                }
                this.emitEvent(Constants_js_1.Constants.EventsNames.SCROLL, evt);
                this.calculateTooltipHtmlNodeDimensions();
            });
        }
        window.addEventListener(Constants_js_1.Constants.EventsNames.RESIZE, (evt) => {
            if (this.debug) {
                console.log(evt);
            }
            this.emitEvent(Constants_js_1.Constants.EventsNames.RESIZE, evt);
            this.calculateTooltipHtmlNodeDimensions();
        });
        return this;
    }
    // TODO: rewrite using the Jaisocx improved event handler
    addEventListeners() {
        this
            .addCleanupEventHandler()
            .addClickCurrentTooltipCloseEventHandler()
            .addEventTriggerTooltipShowEventHandler()
            .addScrollEventListeners()
            .addWindowResizeEventListener();
        return this;
    }
    showTooltip(toShowCssDisplayValue, eventTarget) {
        let cssDisplay = "";
        if (toShowCssDisplayValue === null) {
            const cssDisplayCurrent = this.lib.getCssVariableForNode(this.mainHtmlNode, Constants_js_1.Constants.CssPropertiesNames.DISPLAY);
            cssDisplay = (cssDisplayCurrent === Constants_js_1.Constants.cssDisplay.NONE) ? Constants_js_1.Constants.cssDisplay.BLOCK : Constants_js_1.Constants.cssDisplay.NONE;
        }
        if (eventTarget === Constants_js_1.Constants.EventTarget.EVENT_TARGET) {
            this.hideTooltipsByBehaviours([
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
            ], null);
        }
        else if (eventTarget === Constants_js_1.Constants.EventTarget.OTHER_THAN_EVENT_TARGET) {
            this.hideTooltipsByBehaviours([
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
                Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            ], null);
        }
        // we have to render first and show the tooltip,
        // that we can positionize this, 
        // since only when rendered, we can get the width and height of the tooltip html node
        // @ts-ignore
        this.mainHtmlNode.style.display = cssDisplay;
        // if .isShown has value 1, then the tooltip gets its css rule top and left values,
        // otherwise, if isShown is 0, then no need to recalculate the css rules for this,
        // since the tooltip is hidden.
        if (cssDisplay === Constants_js_1.Constants.cssDisplay.BLOCK) {
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN, this);
            // this method calculates the css rules top and left of the eventTarget and the tooltip, 
            // and sets top and left cass rules values in pixels to the tooltip html node.
            this.calculateTooltipHtmlNodeDimensions();
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN, this);
            let timeoutHideId = null;
            if (((this.tooltipHideBehaviour === Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE) ||
                (this.tooltipHideBehaviour === Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET) ||
                (this.tooltipHideBehaviour === Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET)) &&
                (this.timeoutToCloseMillis > 0)) {
                timeoutHideId = setTimeout(() => this.showTooltip(Constants_js_1.Constants.cssDisplay.NONE, eventTarget), this.timeoutToCloseMillis);
                this.timeoutToCloseId = timeoutHideId;
            }
            const theTooltipToRegister = new TooltipShownSettings_js_1.TooltipShownSettings(this.mainHtmlNodeId, this.tooltipHideBehaviour, timeoutHideId);
            // we need to store the tooltips shown
            this.addToLocalStorageArray(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT, theTooltipToRegister);
            // the tooltip hides now
        }
        else if (cssDisplay === Constants_js_1.Constants.cssDisplay.NONE) {
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN, this);
            if (eventTarget === Constants_js_1.Constants.EventTarget.EVENT_TARGET) {
                // hiding this tooltip, _ANY were hidden all at the begin of this method already.
                this.hideTooltipsByBehaviours([
                    Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__EVENT_TARGET,
                    Constants_js_1.Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
                    Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
                    Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
                ], this.mainHtmlNodeId);
            }
        }
        return this;
    }
    hideAllTooltips() {
        this.hideTooltipsByBehaviours([...Constants_js_1.Constants.TooltipHideBehaviour,], null);
    }
    // hides all registered shown tooltips,
    // due to hide behaviour prop.
    // and removes localStorage array with these all registered shown tooltips
    hideTooltipsByBehaviours(hideBehaviourArray, tooltipId) {
        // this local storage field is the json with the data on all tooltips shown at the moment,
        // however when these tooltips have tooltipHideBehaviour values one of these:
        // Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
        // Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
        // since when ANYWHERE, then a single body.click event handler has to be able to hide all other tooltips, too. 
        const tooltipsLocalStorageJson = localStorage.getItem(Constants_js_1.Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);
        // there are no registered tooltips open,
        // we have no shown tooltips to hide now,
        // we are exiting this function now.
        if (!tooltipsLocalStorageJson) {
            return;
        }
        // we have to hide all registered tooltips.
        // here the stored in the localStorage value must be json decoded.
        let registeredShownTooltips = JSON.parse(tooltipsLocalStorageJson);
        if (tooltipId !== null) {
            registeredShownTooltips = [
                ...registeredShownTooltips
                    .filter((tooltipSettings) => tooltipSettings.tooltipHtmlNodeId === tooltipId),
            ];
            if (registeredShownTooltips.length === 0) {
                return;
            }
        }
        let tooltipShownSettings = new TooltipShownSettings_js_1.TooltipShownSettings("", "", null);
        let hideBehaviourConstantsRelevantToTimeout = [
            Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
            Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            Constants_js_1.Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
        ];
        let hideBehaviourFound = "";
        for (tooltipShownSettings of registeredShownTooltips) {
            for (let hideBehaviuorTimeoutVal of hideBehaviourConstantsRelevantToTimeout) {
                // finds match in input arg array of hideBehabiourConstants to hide in this method call,
                // however we are interested in those, hiding at timout.
                hideBehaviourFound = hideBehaviourArray
                    .find((hideBehaviour) => {
                    return ((hideBehaviour === tooltipShownSettings.tooltipHideBehaviour)
                        && (hideBehaviour === hideBehaviuorTimeoutVal));
                });
                if (hideBehaviourFound) {
                    // clearing timout, when the behaviour is to close after timeout
                    clearTimeout(tooltipShownSettings.tooltipHideTimoutId);
                }
            }
            if (this.debug) {
                console.log(`click event hides JaisocxTooltip id="${tooltipShownSettings.tooltipHtmlNodeId}"`);
            }
            // finds match in input arg array of hideBehabiourConstants to hide in this method call.
            hideBehaviourFound = hideBehaviourArray
                .find((hideBehaviour) => hideBehaviour === tooltipShownSettings.tooltipHideBehaviour);
            // not found the matching hideBehabiourConstants to hide in this method call,
            if (!hideBehaviourFound) {
                // next iteration of a registered shown tooltip to hide
                continue;
            }
            // hiding the html node tooltip
            try {
                //@ts-ignore
                document.getElementById(tooltipShownSettings.tooltipHtmlNodeId).style.display = Constants_js_1.Constants.cssDisplay.NONE;
            }
            catch (e) {
                if (this.debug) {
                    console.log(`No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${tooltipShownSettings.tooltipHtmlNodeId}"`);
                }
            }
        }
        // for TooltipShownSettings of registeredShownTooltips code block finished
        return;
    }
    // calculateTooltipHtmlNodeDimensions: method applies the css rules values, 
    // to place the shown tooltip the right way near the event target
    calculateTooltipHtmlNodeDimensions() {
        let browserTabBorderSide = this.tooltipAlignDimensionOne;
        let arrowPixelSize = 0;
        let arrowRectSideSize = 0;
        let eventTargetPaddingPixelSize = 0;
        // we check whether the tooltip is set to be rendered with an arrow
        if (this.withArrow === 1) {
            arrowPixelSize = this.lib.getJsOrCssSizeValue(this.arrowHtmlNode, Constants_js_1.Constants.CssVariablesNames.CSS_VARIABLE_NAME__ARROW_SIZE, this, "arrowSize", "arrowSizeDim");
            arrowRectSideSize = this.lib.getRectSideSizeByMidTilConerLineSize(arrowPixelSize);
        }
        // in this cycle we get the first best available window edge side,
        // where the tooltip matches in the space til the browser's window edge
        // side variable obtains in every iteration one constant value,
        // from the array Tooltip.alternativeTabBorderSides,
        // where to place the tooltip relative to event target
        const browserTabDimensions = this.lib.getBrowserTabDimensions();
        this.eventTargetDimensions = this.lib.getHtmlNodeDimensions(this.eventTargetHtmlNode);
        // the mainHtml node is the tooltip html node,
        // rendered til this time pint by TemplateRenderer,
        // and is show on site, however not placed the right way.
        // we need 2 different variables for the Tooltip sizes:
        // this here is for html node as is now,
        // and the tooltipHtmlNodeDimensions will have the calculated here values,
        // like sizes and top and left values for css style props.
        const mainHtmlNodeDimensions = this.lib.getHtmlNodeDimensions(this.mainHtmlNode);
        // this.tooltipHtmlNodeDimensions = new Dimensions();
        //    // ///////////
        // this.tooltipHtmlNodeDimensions = this.lib.adjustHeight (
        //   this.mainHtmlNode,
        //   mainHtmlNodeDimensions,
        //   Constants.CssVariablesNames.CSS_VARIABLE_NAME__TOOLTIP_HEIGHT,
        //   Constants.CssVariablesNames.CSS_VARIABLE_NAME__OVERFLOW_Y
        // );
        // this is the added number pixel value,
        // along with settings _START, _MID and _END,
        // to place the desired way the tooltip
        // relative to the eventTarget
        const tooltipPaddingPixelSize = this.lib.translateToPixelValue(this.tooltipPaddingAlignDimensionTwo, this.tooltipPaddingSizeDimAlignDimensionTwo);
        // this is the added number pixel value 
        // to have the distance between the event target and the tooltip.
        const eventTargetPaddingSize = this.lib.getJsOrCssSizeValue(this.eventTargetHtmlNode, Constants_js_1.Constants.CssVariablesNames.CSS_VARIABLE_NAME__EVENT_TARGET_PADDING, this, "paddingEventTarget", "paddingDimEventTarget");
        // top, right, left or bottom
        browserTabBorderSide = "";
        for (browserTabBorderSide of this.alternativeTabBorderSides) {
            this.tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions(this.eventTargetDimensions, mainHtmlNodeDimensions, browserTabBorderSide, this.tooltipAlignDimensionTwo, tooltipPaddingPixelSize, arrowPixelSize, eventTargetPaddingPixelSize);
            if (
            // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
            this.lib.doesTooltipSuitsTilBrowserTabBorder(browserTabDimensions, this.tooltipHtmlNodeDimensions, browserTabBorderSide, arrowPixelSize, eventTargetPaddingPixelSize)) {
                // we stop iterating the loop,
                // since the if statement above tells here inside,
                // that the tooltip can be viewed between the eventTarget and the browser's tab border on the side this is chosen in this loop ( top, right or left ).
                break;
            }
        }
        // the method of the TooltipLib class to set the top and left css rules values in pixels,
        // that the tooltip is placed on the site ui in the browser's tab the right way.
        this.lib.setTooltipDimensions(this.mainHtmlNode, 
        //@ts-ignore
        this.tooltipHtmlNodeDimensions);
        if (this.withArrow === 1) {
            const arrowDimensions = this.lib.calculateTooltipArrowDimensions(this.eventTargetDimensions, this.tooltipHtmlNodeDimensions, arrowPixelSize, browserTabBorderSide);
            this.lib.setTooltipArrowDimensions(this.arrowHtmlNode, arrowDimensions);
        }
        // the css styles are already applied to the tooltip,
        // and the tooltip has been placed the right way on the site.
        // however, maybe later someone needs to know the resulting Dimensions of the placed Tooltip))
        // I just return the Dimensions here,
        // and this value still remains accessibale like this Tooltip class instance prop.
        return this.tooltipHtmlNodeDimensions;
    }
}
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map