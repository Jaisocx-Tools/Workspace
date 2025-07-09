export { CommandLineArgs } from "../command_line/CommandLineArgs.js";

import { ResponsiveFilesSet } from "../responsive_files_set/ResponsiveFilesSet.js";
import { Main } from "./Main.js";



export async function produceSitesTool_MediaAndStyles(): Promise<number> {

  type CommandArgsObject = {
    sitesTool_ThemeName: "theme_base",
    sitesToolName: "",
    cssOrJsTool: "",
    template: "",
    withSizesCssConstants: "",
    withConstantsImportLine: ""
  };


  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();
  commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs();

  let terminalInpArgsObject: CommandArgsObject = commandLineArgsInstance.getCommandLineArgs() as CommandArgsObject;

  // console.log(
  //   "terminalInpArgsObject",
  //   terminalInpArgsObject
  // );
  // END OF THE REUSABLE CODE BLOCK



  const mainClassInstance: Main = new Main();



  // let themeName: string = "theme-day-mode";

  mainClassInstance.responsiveCssFile.getTemplateDataOverridden = function (


    //@ts-ignore
    responsiveDatasetPropName: string,
    templateDataBase: any
  ): any {

    //@ts-ignore
    let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];


    //@ts-ignore
    let responsiveSizeName_withSitesToolName_Array: Uint8Array[] = this.responsiveDatasetConstants
      .getResponsiveSizeName_withSitesToolName_ByBitsbufs (
        responsiveData["range_orderby_id"],
        responsiveData["art"],
        responsiveData["art_size"],
        templateDataBase["orientation"],
        templateDataBase["SitesToolName"],
        templateDataBase["SitesTool_ThemeName"]
      );


    let responsiveSizeArray: Uint8Array[] = responsiveSizeName_withSitesToolName_Array.slice( 4, 11 );


    //@ts-ignore
    let responsiveSize: Uint8Array = this.responsiveDatasetBase.fileWriter
      .concatUint8Arrays( responsiveSizeArray );


    templateDataBase["responsiveSize"] = responsiveSize;

    return templateDataBase;
  };

  let responsiveCssFile: ResponsiveFilesSet = mainClassInstance.responsiveCssFile;
  mainClassInstance.responsiveCssFile.getTemplateDataOverridden = responsiveCssFile.getTemplateDataOverridden.bind( responsiveCssFile );



  let retVal: number = await mainClassInstance
    .run ( terminalInpArgsObject );

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




