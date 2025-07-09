import { CommandLineArgs } from "./CommandLineArgs.js";


export interface CommandLineArgsInterface {

  getCommandLineArgs(): object;

  readCommandLineArgs(): CommandLineArgs;


  /*
    @purpose: --sitesTool_ThemeName="theme_example" --sitesToolName="CssCleanStart"
    =>

    {
      "sitesTool_ThemeName": "theme_example",
      "sitesToolName": "CssCleanStart",
        ...
    }

  */
  transformCommandLineArgs(): CommandLineArgs;

}



