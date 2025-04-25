import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";



async function MediaDeviceInfo(): Promise<number> {

  const responsiveDatasetAutomation: ResponsiveDatasetAutomation = new ResponsiveDatasetAutomation();

  let pathToJsonDatasetForResponsiveSizes: string = "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/ResponsiveSizes/ResponsiveSizes.json";
  let responsiveTemplateFilePath: string = "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/templates/ResponsiveTemplate.template";
  let subfolderName: string = "responsive_tmp4";
  let responsiveMediaQueriesFilesPrefix: string = "media_css_file__";
  let mediaConstantsFileName: string = "MediaConstants.css";
  let webpackAliasName: string = "@css-clean-start-media_and_styles";

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
      console.info( "End" );
    }
  );




