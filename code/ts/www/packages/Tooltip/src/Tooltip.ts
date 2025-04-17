import { EventEmitter } from "@jaisocx/event-emitter";

// TemplateRenderer is the js class to set the json data in the html template the very easy and transparent way.
import { TemplateRenderer } from "@jaisocx/template-renderer";

// Constants class is the Tooltip package class with constants.
import { Constants } from "./Constants.js";

import { Dimensions } from "./Types.js";
import { TooltipMainTemplateData } from "./TooltipMainTemplateData.js";

// TooltipLib class is the package with singleton method .getInstance() 
// and the helping methods to calculate the css rules to place the tooltip the right way in the site ui.
import { TooltipLib } from "./TooltipLib.js";

import { TooltipInterface } from "./TooltipInterface.js";
import { TooltipShownSettings } from "./TooltipShownSettings.js";

import "@jaisocx-tooltip-MediaAndStyles/tooltip-styles-main-webpack.css";


// the class to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 
// and to place the tooltip the right way near the event target html node.
export class Tooltip extends EventEmitter implements TooltipInterface {

  // eventTargetHtmlNodeId: html node attribute id="" , this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNodeId: any;

  // css selector, like e.g. "tagName.cssClassName .nestedNodeCssClassName" or "#id"
  eventTargetSelector: any;

  // eventTargetHtmlNode: this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNode: HTMLElement|null;

  eventTargetDimensions: Dimensions;

  eventName: any;

  // mainHtmlNodeId is the html node attr id="", this html node is the tooltip, produced dynamic
  mainHtmlNodeId: any;

  // mainHtmlNode: this html node is the tooltip, produced dynamic
  mainHtmlNode: HTMLElement|null;
  tooltipHtmlNodeDimensions: Dimensions;
  
  timeoutToCloseMillis: number;
  timeoutToCloseId: null | ReturnType<typeof setTimeout>;

  tooltipHideBehaviour: any;

  // cssClasses is the html attribute class="" value, delimitered with spaces, like class="tooltip theme-beta"
  cssClasses: any;

  // the innerHTML rendered in the tooltip
  html: any;

  paddingEventTarget: number;
  paddingDimEventTarget: any;

  // tooltipPostition denotes, where the tooltip appears, top, right or left side of the eventTargetHtmlNode.
  tooltipAlignDimensionOne: any;

  // tooltipAlignDimensionTwo. the next 3 AlignDimensionTwo properties, are the values, these define the place of the tooltip,
  // when, e.e the dimensionOne tells above the event target, AlignDimensionOne.BROWSER_TAB_BORDER_TOP: number = 1,
  // then the AlignDimensionTwo.EVENT_TARGET_START: number = 2, 
  // tells to place the tooltip above the event target and the left side of the tooltip starts at the left side of the the event target.
  tooltipAlignDimensionTwo: number;

  // tooltipPaddingAlignDimensionTwo: numeric value, the offset from the place, defined by tooltipAlignDimensionTwo: start, mid and end.
  tooltipPaddingAlignDimensionTwo: number;
  
  // tooltipPaddingSizeDimAlignDimensionTwo: the measurement css units for the property tooltipPaddingAlignDimensionTwo,
  // in file Constants.ts, class CssSizeDim constants: px, percentage, rem.
  tooltipPaddingSizeDimAlignDimensionTwo: any;

  // alternativeTabBorderSides is the array of constants: TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP, BROWSER_TAB_BORDER_RIGHT, BROWSER_TAB_BORDER_LEFT
  // if the distance between the eventTarget and the browserTabBorder does not suit for the tooltip, 
  // then the Tooltip class tries other sides for tooltip in the order, like in this array.
  alternativeTabBorderSides: number[];

  // arrows feature
  withArrow: number;
  arrowSize: number;
  arrowSizeDim: any;
  arrowHtmlNode: HTMLElement|undefined;

  // templateRenderer: class instance of the TemplateRenderer, used to set in the html template the fields of the json data.
  templateRenderer: TemplateRenderer;

  // lib is the TooltipLib class singleton, containing helping reusable functions 
  // for checking the space between an html node and the browser's tab border.
  // this methods help, too, to set the css rules for positioning ( top, right, left on a site ui) a dynamic rendered html.
  lib: TooltipLib;

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
      .setTemplate( Constants.Defaults.templateTooltipContent )
      .setData( Constants.Defaults.templateTooltipContent );
  }


  // override this method to use for advanced visual effects.
  _hide( node: HTMLElement|null ): undefined {
    //@ts-ignore
    node.classList.remove (
      Constants.CssClassNames.TOOLTIP_SHOWN
    );

    //@ts-ignore
    node.classList.add (
      Constants.CssClassNames.TOOLTIP_HIDDEN
    );
  }

  // override this method to use for advanced visual effects.
  _show( node: HTMLElement|null ): undefined {
    //@ts-ignore
    node.classList.remove (
      Constants.CssClassNames.TOOLTIP_HIDDEN
    );

    //@ts-ignore
    node.classList.add (
      Constants.CssClassNames.TOOLTIP_SHOWN
    );
  }


  // getEventsNamesEmitted: the documentation method to know all events names those are emitted in this ts class
  getEventsNamesEmitted(): any {
    let eventsNamesEmitted: any[] = [];

    eventsNamesEmitted = [
      this.eventName,
      ...Constants.EventsEmitted
    ];

    return eventsNamesEmitted;
  }
  

  // setDebug is used to turn on the browser developers console infos. 
  setDebug(debug: boolean): Tooltip {
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

  setHtml( html: any ): TooltipInterface {
    this.html = html;
    this.setTemplate (
      Constants.Defaults.templateTooltipContent
    )
      .setTemplateData ( { html } );

    return this;
  }

  // setTemplate: method sets the html for the toltip to produce the dynamic way.
  setTemplate( template: any ): TooltipInterface {
    this.templateRenderer.setTemplate( template );

    return this;
  }

  // setTemplate: method sets the json data for the template html for the toltip to produce the dynamic way.
  setTemplateData( data: any ): TooltipInterface {
    this.templateRenderer.setData( data );

    return this;
  }

  // setCssClasses is used to set the tooltip html node attr class="" values, like this class="tooltip theme-beta"
  setCssClasses( cssClasses: any ): TooltipInterface {
    this.cssClasses = cssClasses;

    return this;
  }

  // setPaddingEventTarget: the method sets the margin between the eventTarget and the tooltip or the arrow of a tooltip, if arrow has size.
  setPaddingEventTarget ( 
    padding: number,
    paddingDim: any
  ): TooltipInterface {
    this.paddingEventTarget = padding;
    this.paddingDimEventTarget = paddingDim;

    return this;
  }

  // where first the tooltip appears on event emtted, e.g. eventtarget html node clicked.
  // e.g. above the event target, TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP with number value 2.
  setTooltipAlignDimensionOne( tooltipAlignDimensionOne: number ): TooltipInterface {
    this.tooltipAlignDimensionOne = tooltipAlignDimensionOne;

    return this;
  }

  // where first the tooltip appears on event emtted, e.g. eventtarget html node clicked.
  // e.g. above the event target, TooltipLib.getInstance().BROWSER_TAB_BORDER_TOP with number value 2.
  setTooltipAlignDimensionTwo( tooltipAlignDimensionTwo: number ): TooltipInterface {
    this.tooltipAlignDimensionTwo = tooltipAlignDimensionTwo;

    return this;
  }

  setTooltipPaddingAlignDimensionTwo (
    tooltipPaddingAlignDimensionTwo: number,
    tooltipPaddingSizeDimAlignDimensionTwo: any
  ) : TooltipInterface {
    this.tooltipPaddingAlignDimensionTwo = tooltipPaddingAlignDimensionTwo;
    this.tooltipPaddingSizeDimAlignDimensionTwo = tooltipPaddingSizeDimAlignDimensionTwo;

    return this;
  }

  // setEventTargetHtmlNodeId: method sets the id of the html node, this when clicked, the tooltip will appear.
  setEventTargetHtmlNodeId( id: any ): TooltipInterface {
    this.eventTargetHtmlNodeId = id;

    return this;
  }

  setEventTargetSelector ( cssSelector: any ) : TooltipInterface {
    this.eventTargetSelector = cssSelector;

    return this;
  }

  // setEventTargetHtmlNode: method sets the html node, this when clicked, the tooltip will appear.
  setEventTargetHtmlNode( eventTarget: HTMLElement ): TooltipInterface {
    this.eventTargetHtmlNode = eventTarget;

    return this;
  }

  // setEventName: method to set the event name, when on the eventTarget the tooltip is shown.
  setEventName( eventName: any ): TooltipInterface {
    this.eventName = eventName;

    return this;
  }
  
  // setAlignDimensionOneValueOrder: method adds alternative array of values in the order, to try to plce on the site ui the tooltip.
  setAlignDimensionOneValueOrder( alternativeTabBorderSides: number[] ): TooltipInterface {
    this.alternativeTabBorderSides = alternativeTabBorderSides;

    return this;
  }

  // arrow feature
  setIsWithArrow( withArrow: number ): TooltipInterface {
    this.withArrow = withArrow;

    return this;
  }

  setArrowSize (
    arrowSize: number,
    arrowSizeDim: any
  ): TooltipInterface {
    this.arrowSize = arrowSize;
    this.arrowSizeDim = arrowSizeDim;

    return this;
  }

  setTimeoutToCloseMillis ( timeoutMillis: number ): TooltipInterface {
    this.timeoutToCloseMillis = timeoutMillis;
    
    return this;

    this.tooltipHideBehaviour;
  }

  setTooltipHideBehaviour( tooltipHideBehaviour: any ): TooltipInterface {
    this.tooltipHideBehaviour = tooltipHideBehaviour;

    return this;
  }


  // render(): this method renders the tooltip, and adds the event listener, 
  // however doesn't show the tooltip.
  // to show the tooltip, the event target html node has to be clicked.
  render(): TooltipInterface {

    if ( this.debug ) {
      console.info (
        "JS class Tooltip emits Events:",
        this.getEventsNamesEmitted()
      );
    }

    if ( !this.eventTargetHtmlNode ) {

      if ( this.eventTargetHtmlNodeId ) {
        this.eventTargetHtmlNode = document.getElementById( this.eventTargetHtmlNodeId );

      } else if ( this.eventTargetSelector ) {
        this.eventTargetHtmlNode = document.querySelector( this.eventTargetSelector );

      } 
      // TODO: a tooltip shown near the mouse ref on click event, for example
      else {
        throw new Error (
          `no id, no css selector, no event target node was set. 
          use set methods like these: 
          .setEventTargetHtmlNode(htmlNode) 
          or .setEventTargetHtmlNodeId('id') 
          or .setEventTargetSelector('#id')`
        );
      }

    }

    if ( !this.eventTargetHtmlNode ) {
      throw new Error (
        `The eventTargetHtmlNode is null, 
        the id, css selector, or event target node were set wrong. 
        You need to use other input args for set methods like these: 
        .setEventTargetHtmlNode(htmlNode) 
        or .setEventTargetHtmlNodeId('id') 
        or .setEventTargetSelector('#id')`
      );
    }

    const templateData: TooltipMainTemplateData = new TooltipMainTemplateData();

    if ( this.mainHtmlNodeId.length === 0 ) {
      this.mainHtmlNodeId = templateData.getId();
    } else {
      templateData.setId ( this.mainHtmlNodeId );
    }

    // the TemplateRenderer produces the html from the html template and json data via .render() method call.
    const tooltipContentHtml: any = this.templateRenderer.render();

    const cssClassesArray: any[] = this.cssClasses.split(" ");
    let hiddenShownClassnameMatched: number = 0;
    for ( let i = 0; i < cssClassesArray.length; i++ ) {
      let className = cssClassesArray[i];
      if ( className.startsWith( Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX ) ) {
        hiddenShownClassnameMatched = 1;
        break;
      }
    }

    if ( hiddenShownClassnameMatched === 0 ) {
      cssClassesArray.push( Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE );
      this.cssClasses = cssClassesArray.join(" ");
    }

    templateData
      .setCssClasses( `${Constants.CssClassNames.TOOLTIP_MAIN} ${this.cssClasses} ${Constants.CssClassNames.TOOLTIP_HIDDEN}` )
      .setTooltipContent( tooltipContentHtml );

    // the main template contains in the placeholder {{ tooltipContent }} the rendered template from the custom template and data
    const templateRedererTechniq = new TemplateRenderer();
    const html: any = templateRedererTechniq
      .setTemplate( Constants.tooltipMainTemplate )
      .setData( templateData as any )
      .render();
    
    // at the end of the html BODY in the current html document,
    // the html from the tooltip is being inserted, with html attributes id="" and class=""
    document.getElementsByTagName("BODY")[0]
      .insertAdjacentHTML (
        "beforeend",
        html
      );
    
    //@ts-ignore      
    this.mainHtmlNode = document.getElementById( this.mainHtmlNodeId );
    
    //@ts-ignore
    this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName (
      Constants.CssClassNames.TOOLTIP_ARROW
    )[0] as HTMLElement;

    // TODO: rewrite, using improved DOM events hanlder
    this.addEventListeners();

    return this;
  }

  renderTooltipArrowHtmlNode(): TooltipInterface {
    let arrowNode: HTMLElement = document.createElement("tooltip-arrow");
    arrowNode.className = Constants.CssClassNames.TOOLTIP_ARROW;
    //@ts-ignore
    this.mainHtmlNode.append( arrowNode );

    //@ts-ignore
    this.arrowHtmlNode = this.mainHtmlNode.getElementsByClassName (
      Constants.CssClassNames.TOOLTIP_ARROW
    )[0] as HTMLElement;

    return this;
  }

  getLocalStorageArray(): TooltipShownSettings|null|undefined {
    let localStorageTooltipsArray: any[] = [];
    
    const localStorageTooltips: any = localStorage.getItem( 
      Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT
    );

    if ( localStorageTooltips ) {
      localStorageTooltipsArray = JSON.parse( localStorageTooltips );
    }

    if ( localStorageTooltipsArray.length === 0 ) {
      return null;
    }

    const tooltipShownSettings: TooltipShownSettings = localStorageTooltipsArray
      .find (
        ( tooltipSetting: TooltipShownSettings ) => tooltipSetting.tooltipHtmlNodeId === this.mainHtmlNodeId
      );

    return tooltipShownSettings;
  }

  addToLocalStorageArray (
    key: any,
    value: any
  ): Tooltip {
    let localStorageTooltipsArray: any[] = [];
    const localStorageTooltips: any = localStorage.getItem( key );
    if ( localStorageTooltips ) {
      localStorageTooltipsArray = JSON.parse( localStorageTooltips );
    }
    localStorageTooltipsArray.push( value );

    localStorage.removeItem (
      key
    );

    localStorage.setItem (
      key, 
      JSON.stringify( localStorageTooltipsArray ) );
    
    return this;
  }

  removeFromLocalStorageArray (
    key: any,
    jPath: any[],
    jPathMatchingValue: any
  ): Tooltip {
    let localStorageTooltipsArray: any[] = [];
    const localStorageTooltips: any = localStorage.getItem( key );
    if ( localStorageTooltips ) {
      localStorageTooltipsArray = JSON.parse( localStorageTooltips );
    }

    const localStorageTooltipsArrayFiltered: any[] = localStorageTooltipsArray
      .filter (
        ( item: any ) => {
          let toRemove: boolean = true;

          let prop: any = item;
          for ( let key of jPath ) {
            const propValue: any = prop[key];
            prop = propValue;
          }

          toRemove = ( prop === jPathMatchingValue );

          return !toRemove;
        }
      );

    localStorage.removeItem (
      key
    );

    localStorage.setItem (
      key, 
      JSON.stringify( localStorageTooltipsArrayFiltered ) );
    
    return this;
  }

  addCleanupEventHandler(): Tooltip {
    window.addEventListener(
      Constants.EventsNames.BEFOREUNLOAD, 
      (event) => 
      {
        localStorage.removeItem (
          Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST
        );

        localStorage.removeItem (
          Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT
        );

      });

    return this;
  }


  addClickCurrentTooltipCloseEventHandler(): Tooltip {

    // the local storage marker, that a tooltip class instance is already registered on this page shown in this browser tab.
    const localStorageTooltips: any = localStorage.getItem (
      Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST
    );

    // the event handler will be added only once.
    // therefore, when this marker already set,
    // the function exits, and another event handler will not be added
    if ( localStorageTooltips ) {
      return this;
    }

    // this code line adds the event listener function,
    // the function is invoked on every click on this page.
    document.getElementsByTagName("HTML")[0].addEventListener (
      Constants.EventsNames.CLICK,
      (evt: Event) => {

        // console writes the current event payload
        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        // here we get know, that the click was inside the Tooltip html node.
        // we have to stop here, since the click inside the tooltip is allowed, 
        // e.g. when a context menu or to copy inner text
        //@ts-ignore
        let holderTooltip: HTMLElement|null = evt.target.closest(`.${Constants.CssClassNames.TOOLTIP_MAIN}`);
        //@ts-ignore
        if ( holderTooltip ) {
          return;
        }

        // hides all registered shown tooltips,
        // due to hide behaviour prop.
        // and removes localStorage array with these all registered shown tooltips
        this.hideTooltipsByBehaviours (
          [
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET
          ],
          null
        );
      }
    );

    localStorage.setItem (
      Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_EXIST, 
      "true"
    );

    return this;
  }

  addEventTriggerTooltipShowEventHandler(): Tooltip {
    // @ts-ignore
    this.eventTargetHtmlNode.addEventListener ( 
      this.eventName,
      ( evt: Event ) => {
        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        evt.preventDefault();
        evt.stopPropagation();

        this.showTooltip (
          Constants.ShowModes.TURN,
          Constants.EventTarget.EVENT_TARGET
        );

        this.emitEvent (
          this.eventName,
          evt
        );
      });
      
    return this;
  }

  addWindowResizeEventListener(): Tooltip {

    window.addEventListener (
      Constants.EventsNames.RESIZE,
      (evt: Event) => {

        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        this.emitEvent (
          Constants.EventsNames.RESIZE,
          evt
        );

        this.calculateTooltipHtmlNodeDimensions();
      }
    );
    
    return this;
  }

  // TODO: write this method.
  addScrollEventListeners(): Tooltip {
    
    const scrollableHolderNodesArray: any[] = this.lib.getScrollableHolderNodes( this.eventTargetHtmlNode as HTMLElement );

    if ( this.debug ) {
      console.log( 
        "scrollableHolderNodesArray",
        scrollableHolderNodesArray 
      );
    }

    for ( let scrollableHolderNode of scrollableHolderNodesArray ) {
      scrollableHolderNode.node.addEventListener (
        Constants.EventsNames.SCROLL,
        ( evt: Event ) => {

          if ( this.debug ) {
            console.log( 
              `${Constants.EventsNames.SCROLL} event emitted`,
              evt 
            );
          }

          if ( !this.getLocalStorageArray() ) {
            return;
          }

          this.emitEvent (
            Constants.EventsNames.SCROLL,
            evt
          );

          this.calculateTooltipHtmlNodeDimensions();

        }
      );
    }

    window.addEventListener (
      Constants.EventsNames.RESIZE,
      (evt: Event) => {
        
        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        this.emitEvent (
          Constants.EventsNames.RESIZE,
          evt
        );

        this.calculateTooltipHtmlNodeDimensions();
      }
    );
    
    return this;    
  }

  // TODO: rewrite using the Jaisocx improved event handler
  addEventListeners(): TooltipInterface {
    this
      .addCleanupEventHandler()
      .addClickCurrentTooltipCloseEventHandler()
      .addEventTriggerTooltipShowEventHandler()
      .addScrollEventListeners()
      .addWindowResizeEventListener();

    return this;
  }

  showTooltip ( 
    toShowCssDisplayValue: any, // Constants.ShowModes: hide, show, turn
    eventTarget: any
  ): TooltipInterface {

    let toShow: any = toShowCssDisplayValue;
    if ( toShow === Constants.ShowModes.TURN ) {

      //@ts-ignore
      if ( this.mainHtmlNode.classList.contains ( Constants.CssClassNames.TOOLTIP_HIDDEN ) ) {
        toShow = Constants.ShowModes.SHOW;  

      } else {
        toShow = Constants.ShowModes.HIDE;  

      }
    } 

    if ( eventTarget === Constants.EventTarget.EVENT_TARGET ) {
      this.hideTooltipsByBehaviours (
        [
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE
        ],
        null
      );
    } else if ( eventTarget === Constants.EventTarget.OTHER_THAN_EVENT_TARGET ) {
      this.hideTooltipsByBehaviours (
        [
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
          Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET
        ],
        null
      );
    }


    // if .isShown has value 1, then the tooltip gets its css rule top and left values,
    // otherwise, if isShown is 0, then no need to recalculate the css rules for this,
    // since the tooltip is hidden.
    if ( toShow === Constants.ShowModes.SHOW ) {

      // this method calculates the css rules top and left of the eventTarget and the tooltip, 
      // and sets top and left cass rules values in pixels to the tooltip html node.
      this.calculateTooltipHtmlNodeDimensions();

      this.emitEvent (
        Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
        ( 
        this as any )
      );

      // override this method to use for advanced visual effects.
      setTimeout(
        () => {
          this._show( this.mainHtmlNode );

          this.emitEvent (
            Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
            ( 
                this as any )
          );
        },
        5
      );


      let timeoutHideId: any = null;
      if (
        (
          ( this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE ) ||
          ( this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET ) ||
          ( this.tooltipHideBehaviour === Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET ) 
        ) &&
        ( this.timeoutToCloseMillis > 0 )
      ) {
        timeoutHideId = setTimeout (
          () => this.showTooltip ( 
            Constants.ShowModes.HIDE,
            eventTarget
          ),
          this.timeoutToCloseMillis
        );
        this.timeoutToCloseId = timeoutHideId;
      }

      const theTooltipToRegister: TooltipShownSettings = new TooltipShownSettings (
        this.mainHtmlNodeId,
        this.tooltipHideBehaviour,
        timeoutHideId
      );

      // we need to store the tooltips shown
      this.addToLocalStorageArray (
        Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT,
        ( 
        theTooltipToRegister as any )
      );

    // the tooltip hides now
    } else if ( toShow === Constants.ShowModes.HIDE ) {

      // override this method to use for advanced visual effects.
      this._hide( this.mainHtmlNode );

      this.emitEvent (
        Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN,
        ( 
        this as any )
      );

      if ( eventTarget === Constants.EventTarget.EVENT_TARGET ) {
        // hiding this tooltip, _ANY were hidden all at the begin of this method already.
        this.hideTooltipsByBehaviours (
          [
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET,
            Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET
          ],
          this.mainHtmlNodeId
        );
      }
    }

    return this;
  }

  hideAllTooltips(): undefined {
    this.hideTooltipsByBehaviours (
      [ ...( Constants.TooltipHideBehaviour as any ) ],
      null
    );
  }

  // hides all registered shown tooltips,
  // due to hide behaviour prop.
  // and removes localStorage array with these all registered shown tooltips
  hideTooltipsByBehaviours ( 
    hideBehaviourArray: any[],
    tooltipId: any|null
  ): undefined {

    // this local storage field is the json with the data on all tooltips shown at the moment,
    // however when these tooltips have tooltipHideBehaviour values one of these:
    // Constants.TooltipHideBehaviour.HIDE_WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
    // Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET 
    // since when ANYWHERE, then a single body.click event handler has to be able to hide all other tooltips, too. 
    const tooltipsLocalStorageJson: any = localStorage.getItem (
      Constants.BrowserStorageKeys.JAISOCX_TOOLTIPS_CURRENT
    );

    // there are no registered tooltips open,
    // we have no shown tooltips to hide now,
    // we are exiting this function now.
    if ( !tooltipsLocalStorageJson ) {
      return;
    }

    // we have to hide all registered tooltips.
    // here the stored in the localStorage value must be json decoded.
    let registeredShownTooltips: any[] = JSON.parse( tooltipsLocalStorageJson );

    if ( tooltipId !== null ) {
      registeredShownTooltips = [
        ...registeredShownTooltips
          .filter(
            ( tooltipSettings: TooltipShownSettings ) => tooltipSettings.tooltipHtmlNodeId === tooltipId
          )
      ];

      if ( registeredShownTooltips.length === 0 ) {
        return;
      }
    }

    let tooltipShownSettings: TooltipShownSettings = new TooltipShownSettings("", "", null);
    let hideBehaviourConstantsRelevantToTimeout: any[] = [
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__ANYWHERE,
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__OTHER_THAN_EVENT_TARGET,
      Constants.TooltipHideBehaviour.HIDE_AFTER_TIMEOUT__AND__WHEN_CLICK__EVENT_TARGET
    ];
    let hideBehaviourFound: any = "";
    for ( tooltipShownSettings of registeredShownTooltips ) {

      for ( let hideBehaviuorTimeoutVal of hideBehaviourConstantsRelevantToTimeout ) {

        // finds match in input arg array of hideBehabiourConstants to hide in this method call,
        // however we are interested in those, hiding at timout.
        hideBehaviourFound = hideBehaviourArray
          .find(
            ( hideBehaviour: any ) => {
              return (
                ( hideBehaviour === tooltipShownSettings.tooltipHideBehaviour ) 
                && ( hideBehaviour === hideBehaviuorTimeoutVal ) 
              );
            }
          );
      
        if ( hideBehaviourFound ) {
          // clearing timout, when the behaviour is to close after timeout
          clearTimeout( tooltipShownSettings.tooltipHideTimoutId as any );
        }
      }

      if ( this.debug ) {
        console.log (
          `click event hides JaisocxTooltip id="${tooltipShownSettings.tooltipHtmlNodeId}"`
        );
      }

      // finds match in input arg array of hideBehabiourConstants to hide in this method call.
      hideBehaviourFound = hideBehaviourArray
        .find(
          ( hideBehaviour: any ) => hideBehaviour === tooltipShownSettings.tooltipHideBehaviour
        );
    
      // not found the matching hideBehabiourConstants to hide in this method call,
      if ( !hideBehaviourFound ) {
        // next iteration of a registered shown tooltip to hide
        continue;
      }

      // hiding the html node tooltip
      try {
        //@ts-ignore
        this._hide(
          document.getElementById( tooltipShownSettings.tooltipHtmlNodeId )
        );

      } catch ( e ) {
        if ( this.debug ) {
          console.log (
            `No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${tooltipShownSettings.tooltipHtmlNodeId}"`
          );
        }
      }

    }
    // for TooltipShownSettings of registeredShownTooltips code block finished

    return;
  }


  // calculateTooltipHtmlNodeDimensions: method applies the css rules values, 
  // to place the shown tooltip the right way near the event target
  calculateTooltipHtmlNodeDimensions(): Dimensions {

    let browserTabBorderSide: any = this.tooltipAlignDimensionOne;
    let arrowPixelSize: number = 0;
    let arrowRectSideSize: number = 0;
    let eventTargetPaddingPixelSize: number = 0;
    let tooltipPaddingDimensionTwoPixelSize: number = 0;

    // we check whether the tooltip is set to be rendered with an arrow
    if ( this.withArrow === 1 ) {
      arrowPixelSize = this.lib.getJsOrCssSizeValue (
        this.arrowHtmlNode,
        Constants.CssVariablesNames.CSS_VARIABLE_NAME__ARROW_SIZE,
        this,
        "arrowSize",
        "arrowSizeDim"
      );

      arrowRectSideSize = this.lib.getRectSideSizeByMidTilConerLineSize (
        arrowPixelSize
      );
    }

    // in this cycle we get the first best available window edge side,
    // where the tooltip matches in the space til the browser's window edge

    // side variable obtains in every iteration one constant value,
    // from the array Tooltip.alternativeTabBorderSides,
    // where to place the tooltip relative to event target
    const browserTabDimensions: Dimensions = this.lib.getBrowserTabDimensions();
    
    this.eventTargetDimensions = this.lib.getHtmlNodeDimensions (
      this.eventTargetHtmlNode
    );

    
    
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

    const mainHtmlNodeDimensions: Dimensions = this.setStandardCssClassAndGetDimensions (
      this.mainHtmlNode
    );



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
    eventTargetPaddingPixelSize = this.lib.translateToPixelValue (
      this.paddingEventTarget,
      this.paddingDimEventTarget
    );

    // this is the added number pixel value,
    // along with settings _START, _MID and _END,
    // to place the desired way the tooltip
    // relative to the eventTarget
    tooltipPaddingDimensionTwoPixelSize = this.lib.translateToPixelValue (
      this.tooltipPaddingAlignDimensionTwo,
      this.tooltipPaddingSizeDimAlignDimensionTwo
    );
    
    // top, right, left or bottom
    browserTabBorderSide = "";
    for ( browserTabBorderSide of this.alternativeTabBorderSides ) {

      this.tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions (
        this.eventTargetDimensions,
        mainHtmlNodeDimensions,
        browserTabBorderSide,
        this.tooltipAlignDimensionTwo,
        tooltipPaddingDimensionTwoPixelSize,
        arrowPixelSize,
        eventTargetPaddingPixelSize
      );

      if ( 
        // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
        this.lib.doesTooltipSuitsTilBrowserTabBorder ( 
          browserTabDimensions,
          this.tooltipHtmlNodeDimensions,
          browserTabBorderSide,
          arrowPixelSize,
          eventTargetPaddingPixelSize
        ) 
      ) {
        // we stop iterating the loop,
        // since the if statement above tells here inside,
        // that the tooltip can be viewed between the eventTarget and the browser's tab border on the side this is chosen in this loop ( top, right or left ).
        break;
      }
    }

    // the method of the TooltipLib class to set the top and left css rules values in pixels,
    // that the tooltip is placed on the site ui in the browser's tab the right way.
    this.lib.setTooltipDimensions (
      this.mainHtmlNode,
      //@ts-ignore
      this.tooltipHtmlNodeDimensions
    );

    if ( this.withArrow === 1 ) {
      const arrowDimensions: Dimensions = this.lib.calculateTooltipArrowDimensions (
        this.eventTargetDimensions,
        this.tooltipHtmlNodeDimensions,
        arrowPixelSize,
        browserTabBorderSide
      );

      this.lib.setTooltipArrowDimensions (
        this.arrowHtmlNode,
        arrowDimensions
      );
    }

    // the css styles are already applied to the tooltip,
    // and the tooltip has been placed the right way on the site.
    // however, maybe later someone needs to know the resulting Dimensions of the placed Tooltip))
    // I just return the Dimensions here,
    // and this value still remains accessibale like this Tooltip class instance prop.
    return this.tooltipHtmlNodeDimensions;
  }


  setStandardCssClassAndGetDimensions (
    htmlNode: HTMLElement|null
  ): Dimensions {
    //const dim: Dimensions = new Dimensions();

    const cssClassnameHiddenShownPrefix: any = Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_PREFIX;
    //@ts-ignore
    const classList: DOMTokenList =  htmlNode.classList;
    //const classListEntries: ArrayIterator<any> = classList.entries();

    // search for a hidden_shown css class impl, and remove it.
    let classNameHidden: any = "";
    for ( let i = 0; i < classList.length; i++ ) {
      const className: any = classList.item( i );

      if ( className.startsWith( cssClassnameHiddenShownPrefix ) ) {
        classNameHidden = className;
        break;
      }

    }

    if ( classNameHidden.length === 0 ) {
      throw new Error("something is wrong with hidden shown css class name!!!");

    } else if ( classNameHidden === Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE ) {
      this._show( htmlNode );
      const htmlNodeDimensions: Dimensions = this.lib.getHtmlNodeDimensions( htmlNode );
      this._hide( htmlNode );

      return htmlNodeDimensions;

    } else {
      classList.remove( classNameHidden );
    }

    const cssClassWithTransitionSet: any = classList.contains (
      Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION
    );

    classList.remove (
      Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION
    );

    const cssPositionValue: any = this.lib.getCssVariableForNode(
      htmlNode,
      "position"
    );

    //@ts-ignore
    htmlNode.style.position = "absolute";
    //@ts-ignore
    htmlNode.style.left = "110vw";

    classList.add ( 
      Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE
    );

    this._show( htmlNode );

    const htmlNodeDimensions: Dimensions = this.lib.getHtmlNodeDimensions( htmlNode );

    this._hide( htmlNode );

    // restoring css class shown_effect and styles applied normally.
    //@ts-ignore
    htmlNode.style.position = cssPositionValue;
    //@ts-ignore
    htmlNode.style.left = "0";

    classList.add (
      classNameHidden
    );

    classList.remove ( 
      Constants.CssClassNames.TOOLTIP_SHOWN_SIMPLE
    );

    
    if ( cssClassWithTransitionSet ) {
      setTimeout(
        () => {
          classList.add (
            Constants.CssClassNames.TOOLTIP_CLASSES_HIDDEN_SHOWN_WITH_TRANSITION
          );
        },
        4
      );
    }


    return htmlNodeDimensions;
  }

}








