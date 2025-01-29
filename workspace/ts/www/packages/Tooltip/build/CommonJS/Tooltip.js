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
require("@jaisocx-tooltip-assets/tooltip-styles-main-webpack.css");
// the class to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 
// and to place the tooltip the right way near the event target html node.
class Tooltip extends event_emitter_1.EventEmitter {
    // constructor method sets for the first time values for this class properies.
    constructor() {
        super();
        this.isShown = 0;
        // event target, where to click to show the tooltip initial attr id="" value is the zero length text
        this.eventTargetHtmlNodeId = "";
        this.eventTargetHtmlNode = null;
        this.eventName = Constants_js_1.Constants.EventsNames.CLICK;
        // tooltip dynamic produced html node, the initial attr id="" value is the zero length text
        this.mainHtmlNodeId = "";
        this.mainHtmlNode = null;
        // Constants.cssClasses sets cssClass value class="tooltip", 
        // however there is the setCssClasses public method to override the default css class names for the tooltip html node.
        this.cssClasses = Constants_js_1.Constants.Defaults.cssClasses;
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
    setArrowSize(arrowSize) {
        this.arrowSize = arrowSize;
        return this;
    }
    setArrowSizeDim(arrowSizeDim) {
        this.arrowSizeDim = arrowSizeDim;
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
        this.addEventHandlers();
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
    addToSessionStorageArray(key, value) {
        let sessionStorageTooltipsArray = [];
        const sessionStorageTooltips = sessionStorage.getItem(key);
        if (sessionStorageTooltips) {
            sessionStorageTooltipsArray = JSON.parse(sessionStorageTooltips);
        }
        sessionStorageTooltipsArray.push(this.mainHtmlNodeId);
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, JSON.stringify(sessionStorageTooltipsArray));
        return this;
    }
    addCleanupEventHandler() {
        window.addEventListener("beforeunload", (event) => {
            sessionStorage.removeItem("JaisocxTooltips");
            sessionStorage.removeItem("JaisocxTooltipCurrent");
        });
        return this;
    }
    addClickCurrentTooltipCloseEventHandler() {
        const sessionStorageTooltips = sessionStorage.getItem("JaisocxTooltips");
        if (sessionStorageTooltips) {
            return this;
        }
        document.getElementsByTagName("BODY")[0].addEventListener(Constants_js_1.Constants.EventsNames.CLICK, (evt) => {
            if (this.debug) {
                console.log(evt);
            }
            let idCurrent = sessionStorage.getItem("JaisocxTooltipCurrent");
            if (!idCurrent) {
                return;
            }
            //@ts-ignore
            let holderTooltip = evt.target.closest(`.${Constants_js_1.Constants.CssClassNames.TOOLTIP_MAIN}`);
            //@ts-ignore
            if (holderTooltip) {
                if (holderTooltip.id === idCurrent) {
                    return;
                }
            }
            if (this.debug) {
                console.log(`click event hides JaisocxTooltip id="${idCurrent}"`);
            }
            try {
                //@ts-ignore
                document.getElementById(idCurrent).style.display = "none";
            }
            catch (e) {
                if (this.debug) {
                    console.log(`No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${idCurrent}"`);
                }
            }
            sessionStorage.removeItem("JaisocxTooltipCurrent");
        });
        sessionStorage.setItem("JaisocxTooltips", "true");
        return this;
    }
    addEvenTriggerTooltipShowEventHandler() {
        // @ts-ignore
        this.eventTargetHtmlNode.addEventListener(this.eventName, (evt) => {
            if (this.debug) {
                console.log(evt);
            }
            evt.preventDefault();
            evt.stopPropagation();
            let idCurrent = sessionStorage.getItem("JaisocxTooltipCurrent");
            if (this.mainHtmlNodeId === idCurrent) {
                this.showTooltip(0);
                sessionStorage.removeItem("JaisocxTooltipCurrent");
                return;
            }
            else if (idCurrent) {
                if (this.debug) {
                    console.log(`click event hides JaisocxTooltip id="${idCurrent}"`);
                }
                try {
                    //@ts-ignore
                    document.getElementById(idCurrent).style.display = "none";
                }
                catch (e) {
                    if (this.debug) {
                        console.log(`No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${idCurrent}"`);
                    }
                }
            }
            sessionStorage.removeItem("JaisocxTooltipCurrent");
            sessionStorage.setItem("JaisocxTooltipCurrent", this.mainHtmlNodeId);
            this.emitEvent(this.eventName, evt);
            this.showTooltip(1);
        });
        return this;
    }
    addWindowResizeEventListener() {
        window.addEventListener(Constants_js_1.Constants.EventsNames.RESIZE, (evt) => {
            if (this.isShown === 0) {
                return;
            }
            if (this.debug) {
                console.log(evt);
            }
            this.emitEvent(Constants_js_1.Constants.EventsNames.RESIZE, evt);
            this.setTooltipAlignDimensionOneCss();
        });
        return this;
    }
    // TODO: rewrite using the Jaisocx improved event handler
    addEventHandlers() {
        this
            .addCleanupEventHandler()
            .addClickCurrentTooltipCloseEventHandler()
            .addEvenTriggerTooltipShowEventHandler()
            .addWindowResizeEventListener();
        return this;
    }
    // showTooltip: method shows the tooltip or hides it.
    // the Tooltip.isShown:number property is set, accordingly, value one(1) or zero(0)
    showTooltip(show) {
        // here we just switch 1 and 0 values.
        this.isShown = show;
        // when isShown property is set to 1, then the tooltip will be shown, and the css rule display we have to be set to 'block'
        // when isShown property is set to 0, then the tooltip will not be shown, and the css rule display we have to be set to 'none'
        const cssDisplay = this.isShown ? "block" : "none";
        // we have to render first and show the tooltip,
        // that we can positionize this, 
        // since only when rendered, we can get the width and height of the tooltip html node
        // @ts-ignore
        this.mainHtmlNode.style.display = cssDisplay;
        // if .isShown has value 1, then the tooltip gets its css rule top and left values,
        // otherwise, if isShown is 0, then no need to recalculate the css rules for this,
        // since the tooltip is hidden.
        if (this.isShown === 1) {
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN, this);
            // this method calculates the css rules top and left of the eventTarget and the tooltip, 
            // and sets top and left cass rules values in pixels to the tooltip html node.
            this.setTooltipAlignDimensionOneCss();
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN, this);
        }
        else {
            this.emitEvent(Constants_js_1.Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN, this);
        }
        return this;
    }
    // setTooltipAlignDimensionOneCss: method applies the css rules values, 
    // to place the shown tooltip the right way near the event target
    setTooltipAlignDimensionOneCss() {
        let arrowSize = this.arrowSize; // numeric value, if set, default is 0, set in constructor()
        let arrowSizeDim = this.arrowSizeDim; // px, % or rem
        let arrowSizeCssValue = "";
        let arrowPixelSize = 0;
        let arrowRectSideSize = 0;
        let browserTabBorderSide = this.tooltipAlignDimensionOne;
        // we check whether the tooltip is set to be rendered with an arrow
        if (this.withArrow === 1) {
            // we suggest, when set 0, then the theme css file styles apply
            // in this if condition the css theme variable value will be set.
            if (arrowSize === 0) {
                //@ts-ignore
                arrowSizeCssValue = this.lib.getCssVariableForNode(this.arrowHtmlNode, Constants_js_1.Constants.CssClassNames.CSS_VARIABLE_NAME__ARROW_SIZE);
                if ((arrowSizeCssValue) &&
                    (arrowSizeCssValue !== "0")) {
                    arrowPixelSize = this.lib.translateCssDimToPixelValue(arrowSizeCssValue);
                }
            }
            else {
                arrowPixelSize = this.lib.translateToPixelValue(arrowSize, arrowSizeDim);
            }
            arrowRectSideSize = this.lib.getRectSideSizeByMidTilConerLineSize(arrowPixelSize);
        }
        // in this cycle we get the first best available window edge side,
        // where the tooltip matches in the space til the browser's window edge
        // side variable obtains in every iteration one constant value,
        // from the array Tooltip.alternativeTabBorderSides,
        // where to place the tooltip relative to event target
        const browserTabDimensions = this.lib.getBrowserTabDimensions();
        const eventTargetDimensions = this.lib.getHtmlNodeDimensions(this.eventTargetHtmlNode);
        const mainHtmlNodeDimensions = this.lib.getHtmlNodeDimensions(this.mainHtmlNode);
        let tooltipHtmlNodeDimensions = new Types_js_1.Dimensions();
        const tooltipPaddingPixelSize = this.lib.translateToPixelValue(this.tooltipPaddingAlignDimensionTwo, this.tooltipPaddingSizeDimAlignDimensionTwo);
        browserTabBorderSide = 0;
        for (browserTabBorderSide of this.alternativeTabBorderSides) {
            tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions(eventTargetDimensions, mainHtmlNodeDimensions, browserTabBorderSide, this.tooltipAlignDimensionTwo, tooltipPaddingPixelSize, arrowPixelSize);
            if (
            // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
            this.lib.doesTooltipSuitsTilBrowserTabBorder(browserTabDimensions, tooltipHtmlNodeDimensions, browserTabBorderSide, arrowPixelSize)) {
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
        tooltipHtmlNodeDimensions);
        if (this.withArrow === 1) {
            const arrowDimensions = this.lib.calculateTooltipArrowDimensions(eventTargetDimensions, tooltipHtmlNodeDimensions, arrowPixelSize, browserTabBorderSide);
            this.lib.setTooltipArrowDimensions(this.arrowHtmlNode, arrowDimensions);
        }
        return this;
    }
}
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map