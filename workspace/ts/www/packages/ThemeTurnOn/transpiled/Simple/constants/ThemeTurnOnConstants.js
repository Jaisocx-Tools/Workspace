class ThemeTurnOnConstants {
    _keptCssClassnames;
    _btnCurrentCssClassname;



    constructor() {
        this._keptCssClassnames = ["jsc"];
        this._btnCurrentCssClassname = "current";
    }



    getKeptCssClassnames() {
        return this._keptCssClassnames;
    }



    getBtnCurrentCssClassname() {
        return this._btnCurrentCssClassname;
    }
}


