import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";



async function MediaDeviceInfo(): Promise<number> {

  const responsiveDatasetAutomation: ResponsiveDatasetAutomation = new ResponsiveDatasetAutomation();

  let pathToJsonDatasetForResponsiveSizes: string = "/var/www/code/ts/www/packages/Mobile.vsDesktop/data/ResponsiveSizes/ResponsiveSizes.json";
  let responsiveTemplateFilePath: string = "/var/www/code/ts/www/packages/Mobile.vsDesktop/data/templates/ResponsiveTemplate.template";
  let subfolderName: string = "responsive";
  let responsiveMediaQueriesFilesPrefix: string = "";
  let mediaConstantsFileName: string = "MediaConstants.css";
  let webpackAliasName: string = "@jaisocx-css-clean-start-MediaAndStyles";

  return await responsiveDatasetAutomation
    .run(
      pathToJsonDatasetForResponsiveSizes,
      responsiveTemplateFilePath,
      subfolderName,
      responsiveMediaQueriesFilesPrefix,
      mediaConstantsFileName,
      webpackAliasName
    );

}



MediaDeviceInfo()
  .then(
    ( retVal: number) => {
      console.info( "End", retVal );
    }
  );




