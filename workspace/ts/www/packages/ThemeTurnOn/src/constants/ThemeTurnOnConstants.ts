import { ThemeTurnOnConstantsInterface } from "./ThemeTurnOnConstantsInterface.js";



export class ThemeTurnOnConstants implements ThemeTurnOnConstantsInterface {

  _keptCssClassnames: string[];
  _btnCurrentCssClassname: string;



  constructor() {
    this._keptCssClassnames = [ "jsc" ];
    this._btnCurrentCssClassname = "current";
  }



  getKeptCssClassnames(): string[] {
    return this._keptCssClassnames;
  }



  getBtnCurrentCssClassname(): string {
    return this._btnCurrentCssClassname;
  }

}