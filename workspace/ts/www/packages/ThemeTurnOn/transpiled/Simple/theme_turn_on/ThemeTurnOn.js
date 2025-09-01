class ThemeTurnOn {
    _themeTurnOnConstants;
    _currentButtonNodeClicked;
    _keptCssClassnames;



    constructor() {
        this._themeTurnOnConstants = new ThemeTurnOnConstants();
        this._keptCssClassnames = ["jsc"];
        this._currentButtonNodeClicked = null;
    }



    setKeptCssClassnames(inCssClassnamesArray) {
        this._keptCssClassnames = inCssClassnamesArray;


        return this;
    }



    getKeptCssClassnames() {
        return this._keptCssClassnames;
    }



    setCurrentButtonClicked(inButtonClicked) {
        this._currentButtonNodeClicked = inButtonClicked;


        return this;
    }



    getCurrentButtonClicked() {
        return this._currentButtonNodeClicked;
    }



    btnThemeClickEventHandler(evt) {
        let buttonNodeClicked = evt.target;
        this.turnOnTheme(buttonNodeClicked);
    }



    turnOnTheme(inButtonNodeClicked) {

        // "current"
        const btnCurrentCssClassname = this._themeTurnOnConstants.getBtnCurrentCssClassname();

        if (this._currentButtonNodeClicked !== null) {
            this._currentButtonNodeClicked.classList.remove(btnCurrentCssClassname);
        }
        const htmlNode = document.getElementsByTagName("html")[0];
        const themeName = inButtonNodeClicked.dataset.theme;
        let themeCssClasses = new Array(0);

        if (themeName && (themeName.length !== 0)) {
            themeCssClasses = themeName
                .split(" ")
                .filter((cssClassname) => {
                    return (cssClassname && (cssClassname.length !== 0));
                });
        }
        let docCssClassnames = new Array(0);

        if (themeCssClasses.length !== 0) {
            docCssClassnames = [...this._keptCssClassnames, ...themeCssClasses];
        }
        else {
            docCssClassnames = [...this._keptCssClassnames];
        }
        htmlNode.className = docCssClassnames.join(" ");
        this._currentButtonNodeClicked = inButtonNodeClicked;
        this._currentButtonNodeClicked.classList.add(btnCurrentCssClassname);
    }


    // declaring the function, this adds to buttons the event handler to turn on the theme.
    // this function is invoked when the site loads in the browser,
    // in the event handler for the event DOMContentLoaded
    addThemeButtonsEventHandlers(inButtonsQuerySelectors) {

        for (let querySelector of inButtonsQuerySelectors) {
            let buttonNodes = document.body.querySelectorAll(querySelector);
            buttonNodes.forEach((btn) => {
                btn.addEventListener(
                    "click",
                    this.btnThemeClickEventHandler.bind(this)
                );
            });
        }
    }
}


