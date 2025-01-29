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

import "@jaisocx-tooltip-assets/tooltip-styles-main-webpack.css";


// the class to produce dynamic a tooltip.
// the Constants.template value and the templateRederer json data can be overridden.
// the main purpose is to render the html template, to handle the js events, 
// and to place the tooltip the right way near the event target html node.
export class Tooltip extends EventEmitter implements TooltipInterface {

  // eventTargetHtmlNodeId: html node attribute id="" , this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNodeId: any;

  // eventTargetHtmlNode: this node will be added event listener, click or mouseover or similar.
  eventTargetHtmlNode: HTMLElement|null;

  eventName: any;

  // mainHtmlNodeId is the html node attr id="", this html node is the tooltip, produced dynamic
  mainHtmlNodeId: any;

  // mainHtmlNode: this html node is the tooltip, produced dynamic
  mainHtmlNode: HTMLElement|null;
  
  // isShown 1 or 0, whether to show the Tooltip
  isShown: number;

  // cssClasses is the html attribute class="" value, delimitered with spaces, like class="tooltip theme-beta"
  cssClasses: any;

  // the innerHTML rendered in the tooltip
  html: any;

  // tooltipPostition denotes, where the tooltip appears, top, right or left side of the eventTargetHtmlNode.
  tooltipAlignDimensionOne: number;

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

    this.isShown = 0;

    // event target, where to click to show the tooltip initial attr id="" value is the zero length text
    this.eventTargetHtmlNodeId = "";
    this.eventTargetHtmlNode = null;
    this.eventName = Constants.EventsNames.CLICK;

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
      .setTemplate( Constants.Defaults.templateTooltipContent )
      .setData( Constants.Defaults.templateTooltipContent );
  }

  // getEventsNamesEmitted: the documentation method to know all events names those are emitted in this ts class
  getEventsNamesEmitted(): any {
    let eventsNamesEmitted: any[] = [];

    eventsNamesEmitted = [
      this.eventName,
      ...Constants.EventsEmitted,
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
      .setTemplateData ( { html, } );

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

  setArrowSize( arrowSize: number ): TooltipInterface {
    this.arrowSize = arrowSize;

    return this;
  }

  setArrowSizeDim ( arrowSizeDim: number ): TooltipInterface {
    this.arrowSizeDim = arrowSizeDim;

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

    // @ts-ignore
    this.eventTargetHtmlNode = document.getElementById(this.eventTargetHtmlNodeId);

    const templateData: TooltipMainTemplateData = new TooltipMainTemplateData();

    if ( this.mainHtmlNodeId.length === 0 ) {
      this.mainHtmlNodeId = templateData.getId();
    } else {
      templateData.setId ( this.mainHtmlNodeId );
    }

    // the TemplateRenderer produces the html from the html template and json data via .render() method call.
    const tooltipContentHtml: any = this.templateRenderer.render();

    templateData
      .setCssClasses( `${Constants.CssClassNames.TOOLTIP_MAIN} ${this.cssClasses}` )
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
    this.addEventHandlers();

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

  addToSessionStorageArray (
    key: any,
    value: any
  ): Tooltip {
    let sessionStorageTooltipsArray: any[] = [];
    const sessionStorageTooltips: any = sessionStorage.getItem( key );
    if ( sessionStorageTooltips ) {
      sessionStorageTooltipsArray = JSON.parse( sessionStorageTooltips );
    }
    sessionStorageTooltipsArray.push( this.mainHtmlNodeId );

    sessionStorage.removeItem (
      key
    );

    sessionStorage.setItem (
      key, 
      JSON.stringify( sessionStorageTooltipsArray ) );
    
    return this;
  }

  addCleanupEventHandler(): Tooltip {
    window.addEventListener(
      "beforeunload", 
      (event) => 
      {
        sessionStorage.removeItem (
          "JaisocxTooltips"
        );

        sessionStorage.removeItem (
          "JaisocxTooltipCurrent"
        );

      });

    return this;
  }

  addClickCurrentTooltipCloseEventHandler(): Tooltip {

    const sessionStorageTooltips: any = sessionStorage.getItem("JaisocxTooltips");

    if ( sessionStorageTooltips ) {
      return this;
    }

    document.getElementsByTagName("BODY")[0].addEventListener (
      Constants.EventsNames.CLICK,
      (evt: Event) => {
        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        let idCurrent: any = sessionStorage.getItem ( "JaisocxTooltipCurrent" );
        if ( !idCurrent ) {
          return;
        }

        //@ts-ignore
        let holderTooltip: HTMLElement|null = evt.target.closest(`.${Constants.CssClassNames.TOOLTIP_MAIN}`);
        //@ts-ignore
        if ( holderTooltip ) {
          if ( holderTooltip.id === idCurrent ) {
            return;
          }
        }

        if ( this.debug ) {
          console.log (
            `click event hides JaisocxTooltip id="${idCurrent}"`
          );
        }

        try {
          //@ts-ignore
          document.getElementById( idCurrent ).style.display = "none";
        } catch ( e ) {
          if ( this.debug ) {
            console.log (
              `No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${idCurrent}"`
            );
          }
        }
        sessionStorage.removeItem ( "JaisocxTooltipCurrent" );
      }
    );

    sessionStorage.setItem (
      "JaisocxTooltips", 
      "true"
    );

    return this;
  }

  addEvenTriggerTooltipShowEventHandler(): Tooltip {
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

        let idCurrent: any = sessionStorage.getItem ( "JaisocxTooltipCurrent" );
        if ( this.mainHtmlNodeId === idCurrent ) {
          this.showTooltip(0);
          sessionStorage.removeItem ( "JaisocxTooltipCurrent" );
          return;

        } else if ( idCurrent ) {
          if ( this.debug ) {
            console.log (
              `click event hides JaisocxTooltip id="${idCurrent}"`
            );
          }
  
          try {
            //@ts-ignore
            document.getElementById( idCurrent ).style.display = "none";
          } catch ( e ) {
            if ( this.debug ) {
              console.log (
                `No such Tooltip with this id, click event tried to hide JaisocxTooltip id="${idCurrent}"`
              );
            }
          }
        }

        sessionStorage.removeItem ( "JaisocxTooltipCurrent" );
        sessionStorage.setItem (
          "JaisocxTooltipCurrent",
          this.mainHtmlNodeId
        );

        this.emitEvent (
          this.eventName,
          evt
        );

        this.showTooltip(1);

      });
      
    return this;
  }

  addWindowResizeEventListener(): Tooltip {

    window.addEventListener (
      Constants.EventsNames.RESIZE,
      (evt: Event) => {
        if ( this.isShown === 0 ) {
          return;
        }

        if ( this.debug ) {
          console.log( 
            evt 
          );
        }

        this.emitEvent (
          Constants.EventsNames.RESIZE,
          evt
        );

        this.setTooltipAlignDimensionOneCss();
      }
    );
    
    return this;
  }

  // TODO: rewrite using the Jaisocx improved event handler
  addEventHandlers(): TooltipInterface {
    this
      .addCleanupEventHandler()
      .addClickCurrentTooltipCloseEventHandler()
      .addEvenTriggerTooltipShowEventHandler()
      .addWindowResizeEventListener();

    return this;
  }

  // showTooltip: method shows the tooltip or hides it.
  // the Tooltip.isShown:number property is set, accordingly, value one(1) or zero(0)
  showTooltip ( show: number ): TooltipInterface {

    // here we just switch 1 and 0 values.
    this.isShown = show;

    // when isShown property is set to 1, then the tooltip will be shown, and the css rule display we have to be set to 'block'
    // when isShown property is set to 0, then the tooltip will not be shown, and the css rule display we have to be set to 'none'
    const cssDisplay: any = this.isShown ? "block" : "none";

    // we have to render first and show the tooltip,
    // that we can positionize this, 
    // since only when rendered, we can get the width and height of the tooltip html node
    // @ts-ignore
    this.mainHtmlNode.style.display = cssDisplay;

    // if .isShown has value 1, then the tooltip gets its css rule top and left values,
    // otherwise, if isShown is 0, then no need to recalculate the css rules for this,
    // since the tooltip is hidden.
    if ( this.isShown === 1 ) {

      this.emitEvent (
        Constants.TooltipEventsNames.BEFORE_TOOLTIP_SHOWN,
        ( 
        this as any )
      );

      // this method calculates the css rules top and left of the eventTarget and the tooltip, 
      // and sets top and left cass rules values in pixels to the tooltip html node.
      this.setTooltipAlignDimensionOneCss();

      this.emitEvent (
        Constants.TooltipEventsNames.AFTER_TOOLTIP_SHOWN,
        ( 
        this as any )
      );

    } else {
      this.emitEvent (
        Constants.TooltipEventsNames.AFTER_TOOLTIP_HIDDEN,
        ( 
        this as any )
      );

    }

    return this;
  }

  // setTooltipAlignDimensionOneCss: method applies the css rules values, 
  // to place the shown tooltip the right way near the event target
  setTooltipAlignDimensionOneCss(): TooltipInterface {

    let arrowSize: number = this.arrowSize; // numeric value, if set, default is 0, set in constructor()
    let arrowSizeDim: any = this.arrowSizeDim; // px, % or rem
    let arrowSizeCssValue: any = "";
    let arrowPixelSize: number = 0;
    let arrowRectSideSize: number = 0;
    let browserTabBorderSide: number = this.tooltipAlignDimensionOne;

    // we check whether the tooltip is set to be rendered with an arrow
    if ( this.withArrow === 1 ) {
      // we suggest, when set 0, then the theme css file styles apply
      // in this if condition the css theme variable value will be set.
      if ( arrowSize === 0 ) {
        //@ts-ignore
        arrowSizeCssValue = this.lib.getCssVariableForNode (
          this.arrowHtmlNode,
          Constants.CssClassNames.CSS_VARIABLE_NAME__ARROW_SIZE
        ); 
        
        if (
          ( arrowSizeCssValue ) && 
          ( arrowSizeCssValue !== "0" )
        ) {
          arrowPixelSize = this.lib.translateCssDimToPixelValue (
            arrowSizeCssValue
          );

        }
      } else {
        arrowPixelSize = this.lib.translateToPixelValue(
          arrowSize,
          arrowSizeDim
        );
      }

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
    const eventTargetDimensions: Dimensions = this.lib.getHtmlNodeDimensions(
      this.eventTargetHtmlNode
    );
    const mainHtmlNodeDimensions: Dimensions = this.lib.getHtmlNodeDimensions(
      this.mainHtmlNode
    );
    let tooltipHtmlNodeDimensions: Dimensions = new Dimensions();

    const tooltipPaddingPixelSize: number = this.lib.translateToPixelValue (
      this.tooltipPaddingAlignDimensionTwo,
      this.tooltipPaddingSizeDimAlignDimensionTwo
    );

    browserTabBorderSide = 0;
    for ( browserTabBorderSide of this.alternativeTabBorderSides ) {

      tooltipHtmlNodeDimensions = this.lib.calculateTooltipDimensions (
        eventTargetDimensions,
        mainHtmlNodeDimensions,
        browserTabBorderSide,
        this.tooltipAlignDimensionTwo,
        tooltipPaddingPixelSize,
        arrowPixelSize
      );

      if ( 
        // if condition checks, whether the tooltip can be placed between the event target and browser tab border.
        this.lib.doesTooltipSuitsTilBrowserTabBorder ( 
          browserTabDimensions,
          tooltipHtmlNodeDimensions,
          browserTabBorderSide,
          arrowPixelSize
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
      tooltipHtmlNodeDimensions
    );

    if ( this.withArrow === 1 ) {
      const arrowDimensions: Dimensions = this.lib.calculateTooltipArrowDimensions (
        eventTargetDimensions,
        tooltipHtmlNodeDimensions,
        arrowPixelSize,
        browserTabBorderSide
      );

      this.lib.setTooltipArrowDimensions(
        this.arrowHtmlNode,
        arrowDimensions
      );
    }

    return this;
  }

  
}








