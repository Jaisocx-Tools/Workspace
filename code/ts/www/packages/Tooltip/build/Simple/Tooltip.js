class Tooltip extends EventEmitter {
  // eventTargetHtmlNodeId: html node attribute id="" , this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNodeId;
  // css selector, like e.g. "tagName.cssClassName .nestedNodeCssClassName" or "#id"
  eventTargetSelector;
  // eventTargetHtmlNode: this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNode;
  eventTargetDimensions;
  eventName;
  // mainHtmlNodeId is the html node attr id="", this html node is the tooltip, produced dynamic
  mainHtmlNodeId;
  // mainHtmlNode: this html node is the tooltip, produced dynamic
  mainHtmlNode;
  tooltipHtmlNodeDimensions;
  timeoutToCloseMillis;
  timeoutToCloseId;
  tooltipHideBehaviour;
  // cssClasses is the html attribute class="" value, delimitered with spaces, like class="tooltip theme-beta"
  cssClasses;
  // the innerHTML rendered in the tooltip
  html;
  paddingEventTarget;
  paddingDimEventTarget;
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
    super();
    this.timeoutToCloseMillis = Constants.Defaults.tooltipHideTimoutMilliseconds;
    this.timeoutToCloseId = null;
    this.tooltipHideBehaviour = Constants.Defaults.tooltipHideBehaviour;
    // event target, where to click to show the tooltip initial attr id="" value is the zero length text
    this.eventTargetHtmlNodeId = "";
    // css selector, like e.g. "tagName.cssClassName .nestedNodeCssClassName" or "#id"
    this.eventTargetSelector = "";
    this.eventTargetHtmlNode = null;
    this.eventTargetDimensions = new Dimensions();
    this.eventName = Constants.EventsNames.CLICK;
    // tooltip dynamic produced html node, the initial attr id="" value is the zero length text
    this.mainHtmlNodeId = "";
    this.mainHtmlNode = null;
    this.tooltipHtmlNodeDimensions = new Dimensions();
    // Constants.cssClasses sets cssClass value class="tooltip", 
    // however there is the setCssClasses public method to override the default css class names for the tooltip html node.
    this.cssClasses = Constants.Defaults.cssClasses;
    // the distance between the eventtarget and the tooltip or the arrow of a tooltip, if arrow has size.
    this.paddingEventTarget = Constants.Defaults.paddingEventTarget;
    this.paddingDimEventTarget = Constants.Defaults.paddingDimEventTarget;
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
      .setTemplate(Constants.Defaults.templateTooltipContent)
      .setData(Constants.Defaults.templateTooltipContent);
  }
  // override this method to use for advanced visual effects.
  _hide(node) {
    //@ts-ignore
    node.classList.remove(Constants.CssClassNames.TOOLTIP_SHOWN);
    //@ts-ignore
    node.classList.add(Constants.CssClassNames.TOOLTIP_HIDDEN);
  }
  // override this method to use for advanced visual effects.
  _show(node) {
    //@ts-ignore
    node.classList.remove(Constants.CssClassNames.TOOLTIP_HIDDEN);
    //@ts-ignore
    node.classList.add(Constants.CssClassNames.TOOLTIP_SHOWN);
  }
  // getEventsNamesEmitted: the documentation method to know all events names those are emitted in this ts class
  getEventsNamesEmitted() {
    let eventsNamesEmitted = [];
    eventsNamesEmitted = [
      this.eventName,
      ...Constants.EventsEmitted,
    ];

    return eventsNamesEmitted;
  }
  // setDebug is used to turn on the browser developers console infos. 
  setDebug(debug) {
    this.debug = debug;
    this.templateRenderer.setDebug(debug);

    return this;
  }

  setHtml(html) {
    this.html = html;
    this.setTemplate(Constants.Defaults.templateTooltipContent)
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
  setPaddingEventTarget(
    padding, 
    paddingDim) {
    this.paddingEventTarget = padding;
    this.paddingDimEventTarget = paddingDim;

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

  setEventTargetSelector(cssSelector) {
    this.eventTargetSelector = cssSelector;

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

  setArrowSize(
    arrowSize, 
    arrowSizeDim) {
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

  render() {
    if (this.debug) {
      console.info(
        "JS class Tooltip emits Events:", 
        this.getEventsNamesEmitted());
    }

    if (!this.eventTargetHtmlNode) {
      if (this.eventTargetHtmlNodeId) {
        this.eventTargetHtmlNode = document.getElementById(this.eventTargetHtmlNodeId);
      }
      else if (this.eventTargetSelector) {
        this.eventTargetHtmlNode = document.querySelector(this.eventTargetSelector);
      }
      // TODO: a tooltip shown near the mouse pointer on click event, for example
      else {
        throw new Error(`no id, no css selector, no event target node was set. 
          use set methods like these: 
          .setEventTargetHtmlNode(htmlNode) 
          or .setEventTargetHtmlNodeId('id') 
          or .setEventTargetSelector('#id')`);
      }
    }

    if (!this.eventTargetHtmlNode) {
      throw new Error(`The eventTargetHtmlNode is null, 
        the id, css selector, or event target node were set wrong. 
        You need to use other input args for set methods like these: 
        .setEventTargetHtmlNode(htmlNode) 
        or .setEventTargetHtmlNodeId('id') 
        or .setEventTargetSelector('#id')`);
    }

    const templateData = new TooltipMainTemplateData();

    if (this.mainHtmlNodeId.length === 0) {
      this.mainHtmlNodeId = templateData.getId();
    }
    else {
      templateData.setId(this.mainHtmlNodeId);
    }
    // the TemplateRenderer produces the html from the html template and json data via .render() method call.
    const tooltipContentHtml = this.templateRenderer.render();
    const cssClassesArray = this.cssClasses.split(" ");
    let hiddenShownClassnameMatched = 0;

    for (let i = 0; i < cssClassesArray.length; i++) {
      let className = cssClassesArray[i];

      if (className.startsWith(Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX)) {
        hiddenShownClassnameMatched = 1;
        break;
      }
    }

    if (hiddenShownClassnameMatched === 0) {
      cssClassesArray.push(Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE);
      this.cssClasses = cssClassesArray.join(" ");
    }

    templateData
      .setCssClasses(`${Constants.CssClassNames.TOOLTIP_MAIN} ${this.cssClasses} ${Constants.CssClassNames.TOOLTIP_HIDDEN}`)
      .setTooltipContent(tooltipContentHtml);
    // the main template contains in the placeholder {{ tooltipContent }} the rendered template from the custom template and data
    const templateRedererTechniq = new TemplateRenderer();
    const html = templateRedererTechniq
      .setTemplate(Constants.tooltipMainTemplate)
      .setData(templateData)
      .render();
    // at the end of the html BODY in the current html document,
    // the html from the tooltip is being inserted, with html attributes id="" and class=""
    document.getElementsByTagName("BODY")[0]
      .insertAdjacentHTML(
        "beforeend", 
        html);
    //@ts-ignore      
    this.mainHtmlNode = document.getElementById(this.mainHtmlNodeId);
    //@ts-ignore
    this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName(Constants.CssClassNames.TOOLTIP_ARROW)[0];
    // TODO: rewrite, using improved DOM events hanlder
    this.addEventListeners();

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

  getLocalStorageArray() {
    let localStorageTooltipsArray = [];
    const localStorageTooltips = localStorage.getItem(Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);

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

  addToLocalStorageArray(
    key, 
    value) {
    let localStorageTooltipsArray = [];
    const localStorageTooltips = localStorage.getItem(key);

    if (localStorageTooltips) {
      localStorageTooltipsArray = JSON.parse(localStorageTooltips);
    }

    localStorageTooltipsArray.push(value);
    localStorage.removeItem(key);
    localStorage.setItem(
      key, 
      JSON.stringify(localStorageTooltipsArray));

    return this;
  }

  removeFromLocalStorageArray(
    key, 
    jPath, 
    jPathMatchingValue) {
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
    localStorage.setItem(
      key, 
      JSON.stringify(localStorageTooltipsArrayFiltered));

    return this;
  }

  addCleanupEventHandler() {
    window.addEventListener(
      Constants.EventsNames.BEFOREUNLOAD, 
      (event) => {
        localStorage.removeItem(Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST);
        localStorage.removeItem(Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);
      });

    return this;
  }

  addClickCurrentTooltipCloseEventHandler() {
    // the local storage marker, that a tooltip class instance is already registered on this page shown in this browser tab.
    const localStorageTooltips = localStorage.getItem(Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST);

    if (localStorageTooltips) {
      return this;
    }

    document.getElementsByTagName("HTML")[0].addEventListener(
      Constants.EventsNames.CLICK, 
      (evt) => {
      // console writes the current event payload
        if (this.debug) {
          console.log(evt);
        }

        let holderTooltip = evt.target.closest(`.${Constants.CssClassNames.TOOLTIP_MAIN}`);
        //@ts-ignore
        if (holderTooltip) {
          return;
        }

        this.hideTooltipsByBehaviours(
          [
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
          ], 
          null);
      });
    localStorage.setItem(
      Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST, 
      "true");

    return this;
  }

  addEventTriggerTooltipShowEventHandler() {
    // @ts-ignore
    this.eventTargetHtmlNode.addEventListener(
      this.eventName, 
      (evt) => {
        if (this.debug) {
          console.log(evt);
        }

        evt.preventDefault();
        evt.stopPropagation();
        this.showTooltip(
          Constants.ShowModes.TURN, 
          Constants.EventTarget.EVENT_TARGET);
        this.emitEvent(
          this.eventName, 
          evt);
      });

    return this;
  }

  addWindowResizeEventListener() {
    window.addEventListener(
      Constants.EventsNames.RESIZE, 
      (evt) => {
        if (this.debug) {
          console.log(evt);
        }

        this.emitEvent(
          Constants.EventsNames.RESIZE, 
          evt);
        this.calculateTooltipHtmlNodeDimensions();
      });

    return this;
  }
  // TODO: write this method.
  addScrollEventListeners() {
    const scrollableHolderNodesArray = this.lib.getScrollableHolderNodes(this.eventTargetHtmlNode);

    if (this.debug) {
      console.log(
        "scrollableHolderNodesArray", 
        scrollableHolderNodesArray);
    }

    for (let scrollableHolderNode of scrollableHolderNodesArray) {
      scrollableHolderNode.node.addEventListener(
        Constants.EventsNames.SCROLL, 
        (evt) => {
          if (this.debug) {
            console.log(
              `${Constants.EventsNames.SCROLL} event emitted`, 
              evt);
          }

          if (!this.getLocalStorageArray()) {
            return;
          }

          this.emitEvent(
            Constants.EventsNames.SCROLL, 
            evt);
          this.calculateTooltipHtmlNodeDimensions();
        });
    }

    window.addEventListener(
      Constants.EventsNames.RESIZE, 
      (evt) => {
        if (this.debug) {
          console.log(evt);
        }

        this.emitEvent(
          Constants.EventsNames.RESIZE, 
          evt);
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

  showTooltip(
    toShowCssDisplayValue, // Constants.ShowModes: hide, show, turn
    eventTarget) {
    let toShow = toShowCssDisplayValue;

    if (toShow === Constants.ShowModes.TURN) {
      //@ts-ignore
      if (this.mainHtmlNode.classList.contains(Constants.CssClassNames.TOOLTIP_HIDDEN)) {
        toShow = Constants.ShowModes.SHOW;
      }
      else {
        toShow = Constants.ShowModes.HIDE;
      }
    }

    if (eventTarget === Constants.EventTarget.EVENT_TARGET) {
      this.hideTooltipsByBehaviours(
        [
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
        ], 
        null);
    }
    else if (eventTarget === Constants.EventTarget.OTHER_THAN_EVENT_TARGET) {
      this.hideTooltipsByBehaviours(
        [
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
        ], 
        null);
    }

    if (toShow === Constants.ShowModes.SHOW) {
      // this method calculates the css rules top and left of the eventTarget and the tooltip, 
      // and sets top and left cass rules values in pixels to the tooltip html node.
      this.calculateTooltipHtmlNodeDimensions();
      this.emitEvent(
        Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN, 
        this);
      // override this method to use for advanced visual effects.
      setTimeout(
        () => {
          this._show(this.mainHtmlNode);
          this.emitEvent(
            Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN, 
            this);
        }, 
        5);
      let timeoutHideId = null;

      if (((this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE) ||
                (this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET) ||
                (this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET)) &&
                (this.timeoutToCloseMillis > 0)) {
        timeoutHideId = setTimeout(
          () => this.showTooltip(
            Constants.ShowModes.HIDE, 
            eventTarget), 
          this.timeoutToCloseMillis);
        this.timeoutToCloseId = timeoutHideId;
      }

      const theTooltipToRegister = new TooltipShownSettings(this.mainHtmlNodeId, this.tooltipHideBehaviour, timeoutHideId);
      // we need to store the tooltips shown
      this.addToLocalStorageArray(
        Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT, 
        theTooltipToRegister);
      // the tooltip hides now
    }
    else if (toShow === Constants.ShowModes.HIDE) {
      // override this method to use for advanced visual effects.
      this._hide(this.mainHtmlNode);
      this.emitEvent(
        Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN, 
        this);

      if (eventTarget === Constants.EventTarget.EVENT_TARGET) {
        // hiding this tooltip, _ANY were hidden all at the begin of this method already.
        this.hideTooltipsByBehaviours(
          [
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
          ], 
          this.mainHtmlNodeId);
      }
    }

    return this;
  }

  hideAllTooltips() {
    this.hideTooltipsByBehaviours(
      [...Constants.TooltipHideBehaviour,], 
      null);
  }

  hideTooltipsByBehaviours(
    hideBehaviourArray, 
    tooltipId) {
    // this local storage field is the json with the data on all tooltips shown at the moment,
    // however when these tooltips have tooltipHideBehaviour values one of these:
    // Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
    // Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
    // since when ANYWHERE, then a single body.click event handler has to be able to hide all other tooltips, too. 
    const tooltipsLocalStorageJson = localStorage.getItem(Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT);

    if (!tooltipsLocalStorageJson) {
      return;
    }

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

    let tooltipShownSettings = new TooltipShownSettings("", "", null);
    let hideBehaviourConstantsRelevantToTimeout = [
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
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
        this._hide(document.getElementById(tooltipShownSettings.tooltipHtmlNodeId));
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

  calculateTooltipHtmlNodeDimensions() {
    let browserTabBorderSide = this.tooltipAlignDimensionOne;
    let arrowPixelSize = 0;
    let arrowRectSideSize = 0;
    let eventTargetPaddingPixelSize = 0;
    let tooltipPaddingDimensionTwoPixelSize = 0;
    // we check whether the tooltip is set to be rendered with an arrow
    if (this.withArrow === 1) {
      arrowPixelSize = this.lib.getJsOrCssSizeValue(
        this.arrowHtmlNode, 
        Constants.CssVariablesNames.CSS_VARIABLE_NAME__ARROW_SIZE, 
        this, 
        "arrowSize", 
        "arrowSizeDim");
      arrowRectSideSize = this.lib.getRectSideSizeByMidTilConerLineSize(arrowPixelSize);
    }

    const browserTabDimensions = this.lib.getBrowserTabDimensions();
    this.eventTargetDimensions = this.lib.getHtmlNodeDimensions(this.eventTargetHtmlNode);
    // the mainHtml node is the tooltip html node,
    // rendered til this time pint by TemplateRenderer,
    // and is show on site, however not placed the right way.
    // we need 2 different variables for the Tooltip sizes:
    // this here is for html node as is now,
    // and the tooltipHtmlNodeDimensions will have the calculated here values,
    // like sizes and top and left values for css style props.
    // const mainHtmlNodeDimensions: Dimensions = this.lib.getHtmlNodeDimensions (
    //   this.mainHtmlNode
    // );
    const mainHtmlNodeDimensions = this.setStandardCssClassAndGetDimensions(this.mainHtmlNode);
    // this.tooltipHtmlNodeDimensions = new Dimensions();
    //    // ///////////
    // this.tooltipHtmlNodeDimensions = this.lib.adjustHeight (
    //   this.mainHtmlNode,
    //   mainHtmlNodeDimensions,
    //   Constants.CssVariablesNames.CSS_VARIABLE_NAME__TOOLTIP_HEIGHT,
    //   Constants.CssVariablesNames.CSS_VARIABLE_NAME__OVERFLOW_Y
    // );
    // this is the added number pixel value 
    // to have the distance between the event target and the tooltip.
    eventTargetPaddingPixelSize = this.lib.translateToPixelValue(
      this.paddingEventTarget, 
      this.paddingDimEventTarget);
    // this is the added number pixel value,
    // along with settings _START, _MID and _END,
    // to place the desired way the tooltip
    // relative to the eventTarget
    tooltipPaddingDimensionTwoPixelSize = this.lib.translateToPixelValue(
      this.tooltipPaddingAlignDimensionTwo, 
      this.tooltipPaddingSizeDimAlignDimensionTwo);
    // top, right, left or bottom
    browserTabBorderSide = "";

    for (browserTabBorderSide of this.alternativeTabBorderSides) {
      this.tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions(
        this.eventTargetDimensions, 
        mainHtmlNodeDimensions, 
        browserTabBorderSide, 
        this.tooltipAlignDimensionTwo, 
        tooltipPaddingDimensionTwoPixelSize, 
        arrowPixelSize, 
        eventTargetPaddingPixelSize);

      if (
      // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
        this.lib.doesTooltipSuitsTilBrowserTabBorder(
          browserTabDimensions, 
          this.tooltipHtmlNodeDimensions, 
          browserTabBorderSide, 
          arrowPixelSize, 
          eventTargetPaddingPixelSize)) {
        // we stop iterating the loop,
        // since the if statement above tells here inside,
        // that the tooltip can be viewed between the eventTarget and the browser's tab border on the side this is chosen in this loop ( top, right or left ).
        break;
      }
    }

    this.lib.setTooltipDimensions(
      this.mainHtmlNode, 
      //@ts-ignore
      this.tooltipHtmlNodeDimensions);

    if (this.withArrow === 1) {
      const arrowDimensions = this.lib.calculateTooltipArrowDimensions(
        this.eventTargetDimensions, 
        this.tooltipHtmlNodeDimensions, 
        arrowPixelSize, 
        browserTabBorderSide);
      this.lib.setTooltipArrowDimensions(
        this.arrowHtmlNode, 
        arrowDimensions);
    }

    return this.tooltipHtmlNodeDimensions;
  }

  setStandardCssClassAndGetDimensions(htmlNode) {
    //const dim: Dimensions = new Dimensions();
    const cssClassnameHiddenShownPrefix = Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX;
    //@ts-ignore
    const classList = htmlNode.classList;
    //const classListEntries: ArrayIterator<any> = classList.entries();
    // search for a hidden_shown css class impl, and remove it.
    let classNameHidden = "";

    for (let i = 0; i < classList.length; i++) {
      const className = classList.item(i);

      if (className.startsWith(cssClassnameHiddenShownPrefix)) {
        classNameHidden = className;
        break;
      }
    }

    if (classNameHidden.length === 0) {
      throw new Error("something is wrong with hidden shown css class name!!!");
    }
    else if (classNameHidden === Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE) {
      this._show(htmlNode);
      const htmlNodeDimensions = this.lib.getHtmlNodeDimensions(htmlNode);
      this._hide(htmlNode);

      return htmlNodeDimensions;
    }
    else {
      classList.remove(classNameHidden);
    }

    const cssClassWithTransitionSet = classList.contains(Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION);
    classList.remove(Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION);
    const cssPositionValue = this.lib.getCssVariableForNode(
      htmlNode, 
      "position");
    //@ts-ignore
    htmlNode.style.position = "absolute";
    //@ts-ignore
    htmlNode.style.left = "110vw";
    classList.add(Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE);
    this._show(htmlNode);
    const htmlNodeDimensions = this.lib.getHtmlNodeDimensions(htmlNode);
    this._hide(htmlNode);
    // restoring css class shown_effect and styles applied normally.
    //@ts-ignore
    htmlNode.style.position = cssPositionValue;
    //@ts-ignore
    htmlNode.style.left = "0";
    classList.add(classNameHidden);
    classList.remove(Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE);

    if (cssClassWithTransitionSet) {
      setTimeout(
        () => {
          classList.add(Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION);
        }, 
        4);
    }

    return htmlNodeDimensions;
  }
}
//# sourceMappingURL=Tooltip.js.map