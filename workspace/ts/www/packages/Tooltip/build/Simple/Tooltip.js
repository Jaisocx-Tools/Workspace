class Tooltip {
  // debug is used in if statements for console.log debugging infos
  debug;
  // isShown 1 or 0, whether to show the Tooltip
  isShown;
  // cssClasses is the html attribute class="" value, delimitered with spaces, like class="tooltip theme-beta"
  cssClasses;
  // tooltipPostition denotes, where the tooltip appears, top, right or left side of the eventTargetHtmlNode.
  tooltipAlignDimensionOne;
  // tooltipAlignDimensionTwo. the next 3 AlignDimensionTwo properties, are the values, these define the place of the tooltip,
  // when, e.e the dimensionOne tells above the event target, AlignDimensionOne.BROWSER_TAB_BORDER_TOP: number = 1,
  // then the AlignDimensionTwo.EVENT_TARGET_START: number = 2, 
  // tells to place the tooltip above the event target and the left side of the tooltip starts at the left side of the the event target.
  tooltipAlignDimensionTwo;
  // tooltipPaddingAlignDimensionTwo: numeric value, the offset from the place, defined by tooltipAlignDimensionTwo: start, mid and end.
  tooltipPaddingAlignDimensionTwo;
  // tooltipPaddingUnitAlignDimensionTwo: the measurement css units for the property tooltipPaddingAlignDimensionTwo,
  // in file Constants.ts, class CssPaddingUnits constants: px, percentage, rem.
  tooltipPaddingUnitAlignDimensionTwo;
  // alternativeTabBorderSides is the array of constants: TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP, BROWSER_TAB_BORDER_RIGHT, BROWSER_TAB_BORDER_LEFT
  // if the distance between the eventTarget and the browserTabBorder does not suit for the tooltip, 
  // then the Tooltip class tries other sides for tooltip in the order, like in this array.
  alternativeTabBorderSides;
  // eventTargetHtmlNodeId: html node attribute id="" , this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNodeId;
  // eventTargetHtmlNode: this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNode;
  // mainHtmlNodeId is the html node attr id="", this html node is the tooltip, produced dynamic
  mainHtmlNodeId;
  // mainHtmlNode: this html node is the tooltip, produced dynamic
  mainHtmlNode;
  // templateRenderer: class instance of the TemplateRenderer, used to set in the html template the fields of the json data.
  templateRenderer;
  // lib is the TooltipLib class singleton, containing helping reusable functions 
  // for checking the space between an html node and the browser's tab border.
  // this methods help, too, to set the css rules for positioning ( top, right, left on a site ui) a dynamic rendered html.
  lib;
  // constructor method sets for the first time values for this class properies.
  constructor() {
    this.debug = true;
    this.isShown = 0;
    // Constants.cssClasses sets cssClass value class="tooltip", 
    // however there is the setCssClasses public method to override the default css class names for the tooltip html node.
    this.cssClasses = Constants.Defaults.cssClasses;
    // Constants.tooltipAlignDimensionOne sets tooltipAlignDimensionOne value BROWSER_TAB_BORDER_TOP = 1, 
    // however there is the setTooltipAlignDimensionOne public method to override the default css class names for the tooltip html node.
    this.tooltipAlignDimensionOne = Constants.Defaults.tooltipAlignDimensionOne;
    // dimension two values set from Constants class static properties
    this.tooltipAlignDimensionTwo = Constants.Defaults.tooltipAlignDimensionTwo;
    this.tooltipPaddingAlignDimensionTwo = Constants.Defaults.tooltipPaddingAlignDimensionTwo;
    this.tooltipPaddingUnitAlignDimensionTwo = Constants.Defaults.tooltipPaddingUnitAlignDimensionTwo;
    // lib: TooltipLib singleton instance to use helping methods.
    this.lib = TooltipLib.getInstance();
    // the predefind order to check the side to the eventTarget where to try to show the tooltip, 
    // if there is enough space til browser's tab border
    this.alternativeTabBorderSides = Constants.Defaults.alternativeTabBorderSides;
    // event target, where to click to show the tooltip initial attr id="" value is the zero length text
    this.eventTargetHtmlNodeId = "";
    this.eventTargetHtmlNode = null;
    // tooltip dynamic produced html node, the initial attr id="" value is the zero length text
    this.mainHtmlNodeId = "";
    this.mainHtmlNode = null;
    // templateRenderer is a new class exemplar of the Templaterenderer js class.
    this.templateRenderer = new TemplateRenderer();
    this.templateRenderer
      .setTemplate("")
      .setData({});
  }
  // setDebug is used to turn on the browser developers console infos. 
  setDebug(debug) {
    this.debug = debug;
    this.templateRenderer.setDebug(debug);

    return this;
  }
  // setCssClasses is used to set the tooltip html node attr class="" values, like this class="tooltip theme-beta"
  setCssClasses(cssClasses) {
    this.cssClasses = cssClasses;

    return this;
  }

  setTooltipAlignDimensionOne(tooltipAlignDimensionOne) {
    this.tooltipAlignDimensionOne = tooltipAlignDimensionOne;

    return this;
  }

  setTooltipAlignDimensionTwo(tooltipAlignDimensionTwo) {
    this.tooltipAlignDimensionTwo = tooltipAlignDimensionTwo;

    return this;
  }

  setTooltipPaddingAlignDimensionTwo(
    tooltipPaddingAlignDimensionTwo, 
    tooltipPaddingUnitAlignDimensionTwo) {
    this.tooltipPaddingAlignDimensionTwo = tooltipPaddingAlignDimensionTwo;
    this.tooltipPaddingUnitAlignDimensionTwo = tooltipPaddingUnitAlignDimensionTwo;

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
  // setAlternativeTabBorderSides: method adds alternative array of values in the order, to try to plce on the site ui the tooltip.
  setAlternativeTabBorderSides(alternativeTabBorderSides) {
    this.alternativeTabBorderSides = alternativeTabBorderSides;

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

  setDefaultTemplateRendererProps() {
    let template = this.templateRenderer.template;
    let templateData = this.templateRenderer.data;

    if ((Object.keys(templateData).length === 0) &&
            (template.length === 0)) {
      template = Constants.Defaults.template;
      templateData = {
        "id": this.mainHtmlNodeId,
        "cssClasses": this.cssClasses,
        "text": "Hello",
      };
      this.templateRenderer
        .setTemplate(template)
        .setData(templateData);
    }

    return this;
  }

  render() {
    // @ts-ignore
    this.eventTargetHtmlNode = document.getElementById(this.eventTargetHtmlNodeId);

    if (this.mainHtmlNodeId.length === 0) {
      this.mainHtmlNodeId = "jaisocx_tooltip_" + Math.random() + (new Date()).getTime();
    }

    this.setDefaultTemplateRendererProps();
    // the TemplateRenderer produces the html from the html template and json data via .render() method call.
    const html = this.templateRenderer.render();
    // at the end of the html BODY in the current html document,
    // the html from the tooltip is being inserted, with html attributes id="" and class=""
    document.getElementsByTagName("BODY")[0]
      .insertAdjacentHTML(
        "beforeend", 
        html);
    // @ts-ignore      
    this.mainHtmlNode = document.getElementById(this.mainHtmlNodeId);
    // TODO: rewrite, using improved DOM events hanlder
    this.addEventHandlers();

    return this;
  }
  // TODO: rewrite using the Jaisocx improved event handler
  addEventHandlers() {
    if (this.debug) {
      console.warn("TODO: use ImprovedEventHandler");
    }
    // @ts-ignore
    this.eventTargetHtmlNode.addEventListener(
      "click", 
      (evt) => {
        if (this.debug) {
          console.warn("TODO: use ImprovedEventHandler");
          console.log(evt);
        }

        this.showTooltip();
      });

    return this;
  }

  showTooltip() {
    // here we just switch 1 and 0 values.
    this.isShown = this.isShown ? 0 : 1;
    // when isShown property is set to 1, then the tooltip will be shown, and the css rule display we have to be set to 'block'
    // when isShown property is set to 0, then the tooltip will not be shown, and the css rule display we have to be set to 'none'
    const cssDisplay = this.isShown ? "block" : "none";
    // we have to render first and show the tooltip,
    // that we can positionize this, 
    // since only when rendered, we can get the width and height of the tooltip html node
    // @ts-ignore
    this.mainHtmlNode.style.display = cssDisplay;

    if (this.isShown === 1) {
      // this method calculates the css rules top and left of the eventTarget and the tooltip, 
      // and sets top and left cass rules values in pixels to the tooltip html node.
      this.setTooltipAlignDimensionOneCss();
    }

    return this;
  }

  setTooltipAlignDimensionOneCss() {
    // to check, whether the space for the tooltip is enough til the browser tab border
    if (this.lib.doesTooltipSuitsTilBrowserTabBorder(
      // @ts-ignore
      this.eventTargetHtmlNode, 
      this.mainHtmlNode, 
      this.tooltipAlignDimensionOne, 
      this.tooltipAlignDimensionTwo, 
      this.tooltipPaddingAlignDimensionTwo, 
      this.tooltipPaddingUnitAlignDimensionTwo)) {
      // the css rules will apply to the mainHtmlNode, this is the tooltip rendered,
      // with the constant value to place the tooltip relative to the event target,
      // the constant value was set in the method constructor() this.tooltipAlignDimensionOne = Constants.tooltipAlignDimensionOne;
      // or later optionally in the method Tooltip.setTooltipAlignDimensionOne(TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP);
      this.lib.setTooltipDimensions(
        this.eventTargetHtmlNode, 
        this.mainHtmlNode, 
        this.tooltipAlignDimensionOne, 
        this.tooltipAlignDimensionTwo, 
        this.tooltipPaddingAlignDimensionTwo, 
        this.tooltipPaddingUnitAlignDimensionTwo);

      return this;
    }

    let side = 0;

    for (side of this.alternativeTabBorderSides) {
      if (
      // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
        this.lib.doesTooltipSuitsTilBrowserTabBorder(
          this.eventTargetHtmlNode, 
          this.mainHtmlNode, 
          side, 
          this.tooltipAlignDimensionTwo, 
          this.tooltipPaddingAlignDimensionTwo, 
          this.tooltipPaddingUnitAlignDimensionTwo)) {
        // we stop iterating the loop,
        // since the if statement above tells here inside,
        // that the tooltip can be viewed between the eventTarget and the browser's tab border on the side this is chosen in this loop ( top, right or left ).
        break;
      }
    }

    this.lib.setTooltipDimensions(
      this.eventTargetHtmlNode, 
      this.mainHtmlNode, 
      side, 
      this.tooltipAlignDimensionTwo, 
      this.tooltipPaddingAlignDimensionTwo, 
      this.tooltipPaddingUnitAlignDimensionTwo);

    return this;
  }
}
//# sourceMappingURL=Tooltip.js.map