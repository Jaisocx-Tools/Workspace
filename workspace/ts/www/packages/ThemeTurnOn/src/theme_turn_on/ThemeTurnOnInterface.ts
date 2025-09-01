export interface ThemeTurnOnInterface {

  setKeptCssClassnames( inCssClassnamesArray: string[] ): ThemeTurnOnInterface;

  getKeptCssClassnames(): string[];

  setCurrentButtonClicked( inButtonClicked: HTMLElement ): ThemeTurnOnInterface;

  getCurrentButtonClicked(): HTMLElement|null;



  btnThemeClickEventHandler( evt: Event ): void;


  turnOnTheme ( inButtonNodeClicked: HTMLElement ): void;


  // declaring the function, this adds to buttons the event handler to turn on the theme.
  // this function is invoked when the site loads in the browser,
  // in the event handler for the event DOMContentLoaded
  addThemeButtonsEventHandlers ( inButtonsQuerySelectors: string[] ): void;

}

