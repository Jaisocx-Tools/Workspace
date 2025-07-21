import { CommandLineArgs } from "../command_line/CommandLineArgs.js";
import { OverridesTemplateData } from "../overrides_template_data/OverridesTemplateData.js";
import { Main } from "./Main.js";



export type CommandArgsObject = {
  sitesTool_ThemeName: "theme_base",
  sitesToolName: "",
  cssOrJsTool: "",
  templatePath: "",
  templateDataMethodName: "",
  keywordResponsiveSize: "",
  withSizesCssConstants: "",
  justTheme: "",
  justThemeResponsiveDataset: "",
};


export async function produceSitesTool_MediaAndStyles(): Promise<number> {
  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();
  let cliArgs: CommandArgsObject = commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs()
    .getCommandLineArgs() as CommandArgsObject;


  console.log(
    "cliArgs",
    cliArgs
  );


  const mainClassInstance: Main = new Main();


  // let themeName: string = "theme-day-mode";
  let overridesTemplateDataInstance: OverridesTemplateData = new OverridesTemplateData();


  //--------------------------------------------------------------------------------------------------------
  // start block
  // TEMPLATE DATA
  //    Example of data for 2 template placeholders: { "SitesToolName": "CssCleanStart3", "SitesTool_ThemeName": "theme_nightmode", ... }
  //    used in placeholders in ${SitesToolAutomation}/data/templates/responsive_size.css.template
  //    Line 22:     --theme_name__{{ SitesToolName }}: {{ SitesTool_ThemeName }};
  //--------------------------------------------------------------------------------------------------------
  // You may set here another method,
  //    this You have implemented in ts class OverridesTemplateData,
  //    or in another ts class,
  //    overriding the calculations of data for responsive_size__.css templates.
  //    You may find source code in ${SitesToolAutomation}/src/overrides_template_data/OverridesTemplateData.ts
  let templateDataMethodName: string = cliArgs["templateDataMethodName"];

  if ( ( !templateDataMethodName ) || ( templateDataMethodName.length === 0 ) ) {
    templateDataMethodName = "getUnchanged";
  }


  //@ts-ignore
  mainClassInstance.responsiveCssFile.getTemplateDataOverridden = overridesTemplateDataInstance[templateDataMethodName]
    .bind (
      mainClassInstance.responsiveCssFile
    );


  // end block
  // TEMPLATE DATA
  //----------------------------------------------------
  let retVal: number = await mainClassInstance.run ( cliArgs );


  return retVal;

}


produceSitesTool_MediaAndStyles()
  .then (
    ( retVal: number ) => {
      console.info (
        "Sites Tool Template has been produced",
        retVal
      );
    }
  );


