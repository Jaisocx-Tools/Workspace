"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLineArgs = void 0;
class CommandLineArgs {
    constructor() {
        this._commandLineArgs_source = new Array();
        this._commandLineArgs = new Object();
    }
    getCommandLineArgs() {
        return this._commandLineArgs;
    }
    readCommandLineArgs() {
        // Get command-line arguments
        // and set to protected property of this ts class.
        //@ts-ignore
        this._commandLineArgs_source = [...process.argv];
        return this;
    }
    /*
      @purpose: --sitesTool_ThemeName="theme_example" --sitesToolName="CssCleanStart"
      =>
  
      {
        "sitesTool_ThemeName": "theme_example",
        "sitesToolName": "CssCleanStart",
          ...
      }
  
    */
    transformCommandLineArgs() {
        this._commandLineArgs = new Object();
        // @action: command-line arguments starting from index 2
        let locComandLineArgs = [...this._commandLineArgs_source].slice(2);
        locComandLineArgs.forEach((inForCommandLineArg) => {
            // inForCommandLineArg example: --sitesToolName="CssCleanStart"
            let [key, value] = ["", ""];
            // @purpose: --sitesToolName="CssCleanStart" =>
            //  key_source = "--sitesToolName"
            //  value_source = "\"CssCleanStart\""
            // @action: splitting inForCommandLineArg in key and value pair
            let [key_source, value_source] = inForCommandLineArg.split("=");
            // @purpose: "--sitesToolName" => "sitesToolName"
            // @action: removing -- from start of the command line arg key
            key = key_source.replace("--", "");
            // @purpose: "\"CssCleanStart\"" => "CssCleanStart"
            // @action: Removing quotes if any
            if (value_source && (value_source.length !== 0)) {
                value = value_source.replace(/(^"|"$)/g, "");
            }
            //@ts-ignore
            this._commandLineArgs[key] = value;
        });
        return this;
    }
}
exports.CommandLineArgs = CommandLineArgs;
//# sourceMappingURL=CommandLineArgs.js.map