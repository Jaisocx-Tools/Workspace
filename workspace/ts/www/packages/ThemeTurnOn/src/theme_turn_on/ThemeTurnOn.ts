import { ThemeTurnOnConstants } from "../constants/ThemeTurnOnConstants.js";
import { ThemeTurnOnConstantsInterface } from "../constants/ThemeTurnOnConstantsInterface.js";

import { ThemeTurnOnInterface } from "./ThemeTurnOnInterface.js";



export class ThemeTurnOn implements ThemeTurnOnInterface {

  _themeTurnOnConstants: ThemeTurnOnConstantsInterface;

  _currentButtonNodeClicked: HTMLElement|null;
  _keptCssClassnames: string[];



  constructor() {
    this._themeTurnOnConstants = new ThemeTurnOnConstants();

    this._keptCssClassnames = [ "jsc" ];
    this._currentButtonNodeClicked = null;
  }



  setKeptCssClassnames( inCssClassnamesArray: string[] ): ThemeTurnOnInterface {
    this._keptCssClassnames = inCssClassnamesArray;


    return this;
  }



  getKeptCssClassnames(): string[] {
    return this._keptCssClassnames;
  }



  setCurrentButtonClicked( inButtonClicked: HTMLElement ): ThemeTurnOnInterface {
    this._currentButtonNodeClicked = inButtonClicked;


    return this;
  }



  getCurrentButtonClicked(): HTMLElement|null {
    return this._currentButtonNodeClicked;
  }



  btnThemeClickEventHandler( evt: Event ): void {
    let buttonNodeClicked: HTMLElement = evt.target as HTMLElement;

    this.turnOnTheme ( buttonNodeClicked );
  }



  turnOnTheme ( inButtonNodeClicked: HTMLElement ): void {

    // "current"
    const btnCurrentCssClassname: string = this._themeTurnOnConstants.getBtnCurrentCssClassname();

    if ( this._currentButtonNodeClicked !==  null ) {
      this._currentButtonNodeClicked.classList.remove (
        btnCurrentCssClassname
      );
    }



    const htmlNode: HTMLElement = document.getElementsByTagName( "html" )[0];


    const themeName: string|undefined = inButtonNodeClicked.dataset.theme;
    let themeCssClasses: string[] = new Array(0) as string[];

    if ( themeName && ( themeName.length !== 0 ) ) {
      themeCssClasses = themeName
        .split (" ")
        .filter (
          ( cssClassname: string ) => {
            return ( cssClassname && ( cssClassname.length !== 0 ) );
          }
        );

    }


    let docCssClassnames: string[] = new Array(0) as string[];

    if ( themeCssClasses.length !== 0 ) {
      docCssClassnames = [ ...this._keptCssClassnames, ...themeCssClasses ];
    } else {
      docCssClassnames = [ ...this._keptCssClassnames ];
    }


    htmlNode.className = docCssClassnames.join( " " );

    this._currentButtonNodeClicked = inButtonNodeClicked;
    this._currentButtonNodeClicked.classList.add( btnCurrentCssClassname );

  }


  // declaring the function, this adds to buttons the event handler to turn on the theme.
  // this function is invoked when the site loads in the browser,
  // in the event handler for the event DOMContentLoaded
  addThemeButtonsEventHandlers ( inButtonsQuerySelectors: string[] ): void {

    for ( let querySelector of inButtonsQuerySelectors ) {
      let buttonNodes: NodeListOf<HTMLElement> = document.body.querySelectorAll ( querySelector );

      buttonNodes.forEach (
        ( btn: HTMLElement ) => {
          btn.addEventListener (
            "click",
            this.btnThemeClickEventHandler.bind( this )
          );
        }
      );

    }
  }

}


