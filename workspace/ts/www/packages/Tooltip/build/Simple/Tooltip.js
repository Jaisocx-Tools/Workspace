class Tooltip {
  // debug is used in if statements for console.log debugging infos
  debug;
  // eventTargetHtmlNodeId: html node attribute id="" , this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNodeId;
  // eventTargetHtmlNode: this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNode;
  // mainHtmlNodeId is the html node attr id="", this html node is the tooltip, produced dynamic
  mainHtmlNodeId;
  // mainHtmlNode: this html node is the tooltip, produced dynamic
  mainHtmlNode;
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
  // tooltipPaddingSizeDimAlignDimensionTwo: the measurement css units for the property tooltipPaddingAlignDimensionTwo,
  // in file Constants.ts, class CssSizeDim constants: px, percentage, rem.
  tooltipPaddingSizeDimAlignDimensionTwo;
  // alternativeTabBorderSides is the array of constants: TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP, BROWSER_TAB_BORDER_RIGHT, BROWSER_TAB_BORDER_LEFT
  // if the distance between the eventTarget and the browserTabBorder does not suit for the tooltip, 
  // then the Tooltip class tries other sides for tooltip in the order, like in this array.
  alternativeTabBorderSides;
  // arrows feature
  withArrow;
  arrowSize;
  arrowSizeDim;
  arrowHtmlNode;
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
    // event target, where to click to show the tooltip initial attr id="" value is the zero length text
    this.eventTargetHtmlNodeId = "";
    this.eventTargetHtmlNode = null;
    // tooltip dynamic produced html node, the initial attr id="" value is the zero length text
    this.mainHtmlNodeId = "";
    this.mainHtmlNode = null;
    // Constants.cssClasses sets cssClass value class="tooltip", 
    // however there is the setCssClasses public method to override the default css class names for the tooltip html node.
    this.cssClasses = Constants.Defaults.cssClasses;
    // Constants.tooltipAlignDimensionOne sets tooltipAlignDimensionOne value BROWSER_TAB_BORDER_TOP = 1, 
    // however there is the setTooltipAlignDimensionOne public method to override the default css class names for the tooltip html node.
    this.tooltipAlignDimensionOne = Constants.Defaults.tooltipAlignDimensionOne;
    // dimension two values set from Constants class static properties
    this.tooltipAlignDimensionTwo = Constants.Defaults.tooltipAlignDimensionTwo;
    this.tooltipPaddingAlignDimensionTwo = Constants.Defaults.tooltipPaddingAlignDimensionTwo;
    this.tooltipPaddingSizeDimAlignDimensionTwo = Constants.Defaults.tooltipPaddingSizeDimAlignDimensionTwo;
    // lib: TooltipLib singleton instance to use helping methods.
    this.lib = TooltipLib.getInstance();
    // the predefind order to check the side to the eventTarget where to try to show the tooltip, 
    // if there is enough space til browser's tab border
    this.alternativeTabBorderSides = Constants.Defaults.alternativeTabBorderSides;
    // arrow feature
    this.withArrow = Constants.Defaults.withArrow;
    this.arrowSize = Constants.Defaults.arrowSize;
    this.arrowSizeDim = Constants.Defaults.arrowSizeDim;
    // templateRenderer is a new class exemplar of the Templaterenderer js class.
    this.templateRenderer = new TemplateRenderer();
    this.templateRenderer
      .setTemplate(Constants.Defaults.template)
      .setData(Constants.Defaults.templateData);
  }
  // setDebug is used to turn on the browser developers console infos. 
  setDebug(debug) {
    this.debug = debug;
    this.templateRenderer.setDebug(debug);

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
    tooltipPaddingSizeDimAlignDimensionTwo) {
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
  // setAlternativeTabBorderSides: method adds alternative array of values in the order, to try to plce on the site ui the tooltip.
  setAlternativeTabBorderSides(alternativeTabBorderSides) {
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

  render() {
    // @ts-ignore
    this.eventTargetHtmlNode = document.getElementById(this.eventTargetHtmlNodeId);

    if (this.mainHtmlNodeId.length === 0) {
      this.mainHtmlNodeId = "jaisocx_tooltip_" + Math.random() + (new Date()).getTime();
    }
    // the TemplateRenderer produces the html from the html template and json data via .render() method call.
    let html = this.templateRenderer.render();
    let node = document.createElement("tooltip-main");
    node.id = this.mainHtmlNodeId;
    node.className = `${Constants.CssClassNames.TOOLTIP_MAIN} ${this.cssClasses}`;
    node.innerHTML = html;
    // at the end of the html BODY in the current html document,
    // the html from the tooltip is being inserted, with html attributes id="" and class=""
    document.getElementsByTagName("BODY")[0].append(node);
    // @ts-ignore      
    this.mainHtmlNode = document.getElementById(this.mainHtmlNodeId);

    if (this.withArrow === 1) {
      this.renderTooltipArrowHtmlNode();
    }
    // TODO: rewrite, using improved DOM events hanlder
    this.addEventHandlers();

    return this;
  }

  renderTooltipArrowHtmlNode() {
    let arrowNode = document.createElement("tooltip-arrow");
    arrowNode.className = Constants.CssClassNames.TOOLTIP_ARROW;
    //@ts-ignore
    this.mainHtmlNode.append(arrowNode);
    //@ts-ignore
    this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName(Constants.CssClassNames.TOOLTIP_ARROW)[0];

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
    let arrowSize = this.arrowSize; // numeric value, if set, default is 0, set in constructor()
    let arrowSizeDim = this.arrowSizeDim; // px, % or rem
    let arrowSizeCssText = "";
    let arrowPixelSize = 0;
    let arrowSquareSideSize = 0;
    let browserTabBorderSide = this.tooltipAlignDimensionOne;
    // we check whether the tooltip is set to be rendered with an arrow
    if (this.withArrow === 1) {
      // we suggest, when set 0, then the theme css file styles apply
      // in this if condition the css theme variable value will be set.
      if (arrowSize === 0) {
        //@ts-ignore
        arrowSizeCssText = window
          .getComputedStyle(this.arrowHtmlNode)
          .getPropertyValue(Constants.CssClassNames.CSS_VARIABLE_NAME__ARROW_SIZE);
        arrowSize = parseFloat(arrowSizeCssText);
        const arrowSizeText = `${arrowSize}`;
        arrowSizeDim = arrowSizeCssText.substring(arrowSizeText.length);
        // this method throws Error if the css dimension is not supported. Supported are px, % and rem.
        this.validateCssSizeDim(arrowSizeDim);
      }

      arrowPixelSize = this.lib.translateCssDimToPixelValue(
        this.mainHtmlNode, 
        arrowSize, 
        arrowSizeDim);
      arrowSquareSideSize = this.lib.getSquareSideSizeByMidTilConerLineSize(arrowPixelSize);
    }

    const tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions(
      this.eventTargetHtmlNode, 
      this.mainHtmlNode, 
      this.tooltipAlignDimensionOne, 
      this.tooltipAlignDimensionTwo, 
      this.tooltipPaddingAlignDimensionTwo, 
      this.tooltipPaddingSizeDimAlignDimensionTwo, 
      arrowSize);
    let arrowDimensions = new Dimensions();

    if (this.withArrow === 1) {
      arrowDimensions = this.lib.setTooltipArrowDimensions(
        this.eventTargetHtmlNode, 
        this.mainHtmlNode, 
        this.arrowHtmlNode, 
        arrowSize, 
        arrowSizeDim, 
        this.tooltipAlignDimensionOne, 
        tooltipHtmlNodeDimensions);
    }

    if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_TOP)) {
      tooltipHtmlNodeDimensions.top -= arrowPixelSize;
    }
    else if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_RIGHT)) {
      tooltipHtmlNodeDimensions.left += arrowPixelSize;
    }
    else if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_LEFT)) {
      tooltipHtmlNodeDimensions.left -= arrowPixelSize;
    }
    else if ((browserTabBorderSide === Constants.AlignDimensionOne.BROWSER_TAB_BORDER_BOTTOM)) {
      tooltipHtmlNodeDimensions.bottom += arrowPixelSize;
    }
    //@ts-ignore
    this.mainHtmlNode.style.top = `${tooltipHtmlNodeDimensions.top}px`;
    //@ts-ignore
    this.mainHtmlNode.style.left = `${tooltipHtmlNodeDimensions.left}px`;

    return this;
  }

  validateCssSizeDim(cssSizeDimInputArg) {
    let isValid = 0;
    // arrow size dim text value validation code block 
    let arrowSizeDimMatched = 0;

    for (let sizeDimKey in Constants.CssSizeDim) {
      const sizeDim = Constants.CssSizeDim[sizeDimKey];
      arrowSizeDimMatched = (cssSizeDimInputArg == sizeDim) ? 1 : 0;
    }

    if (arrowSizeDimMatched === 0) {
      const sizeDimsSupported = Object.keys(Constants.CssSizeDim).join(", ");
      throw new Error(`Arrow Size dim ${cssSizeDimInputArg} not supported, supported are: (${sizeDimsSupported})`);
    }

    return isValid;
  }
}
//# sourceMappingURL=Tooltip.js.map