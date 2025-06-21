import { Main } from "./Main.js";



export async function genSiteToolTemplate(): Promise<number> {

  const terminalInpArgsObject: any = {
    sitesToolName: "",
    cssOrJsTool: "",
    template: "",
    withCssConstantsFile: "",
    withConstantsImportLine: ""
  };



  // THE REUSABLE CODE BLOCK MOVES LATER TO A JS PACKAGE
  const terminalInpArgs: string[] = process.argv.slice(2); // Get command-line arguments starting from index 2

  terminalInpArgs.forEach( ( arg ) => {
    let [key, value] = arg.split("=");
    key = key.replace(
      "--",
      "");
    terminalInpArgsObject[key] = value ? value.replace (
      /(^"|"$)/g,
      ""
    ) : ""; // Remove quotes if any
  });

  // console.log(
  //   "terminalInpArgsObject",
  //   terminalInpArgsObject
  // );
  // END OF THE REUSABLE CODE BLOCK



  const mainClassInstance: Main = new Main();

  let withCssConstantsFile: boolean = ( terminalInpArgsObject.withCssConstantsFile.length === 0 ) ? true : (!!terminalInpArgsObject.withCssConstantsFile);
  let withConstantsImportLine: boolean = ( terminalInpArgsObject.withConstantsImportLine.length === 0 ) ? true : (!!terminalInpArgsObject.withConstantsImportLine);

  // let themeName: string = "theme-day-mode";

  let retVal: number = await mainClassInstance
    .run (
      terminalInpArgsObject.sitesToolName,
      terminalInpArgsObject.cssOrJsTool,
      terminalInpArgsObject.template,
      withCssConstantsFile,
      withConstantsImportLine
    );

  return retVal;

}



genSiteToolTemplate()
  .then(
    ( retVal: number) => {
      console.info( "Sites Tool Template has been produced", retVal );
    }
  );




