import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";



async function MediaDeviceInfo(): Promise<number> {

  const responsiveDatasetAutomation: ResponsiveDatasetAutomation = new ResponsiveDatasetAutomation();

  responsiveDatasetAutomation
    .readDataset( "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/ResponsiveSizes/ResponsiveSizes.json" )
    .readTemplateMediaCssFile( "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/templates/ResponsiveTemplate.template" )
    .setWebpackAliasName( "@css-clean-start-media_and_styles" )
    .setMediaAndStylesResponsiveFolderPath( "MediaAndStyles/responsive_tmp" );

  await responsiveDatasetAutomation.produceMediaConstantsCssFile( "MediaConstantsCssFile.css" );
  await responsiveDatasetAutomation.produceMediaCssFilesSet( "media_css_file__" );
  // await responsiveDatasetAutomation.produceMediaCssImportsCssFile ( 
  //   "MediaCssImports.css",
  //   "responsive_tmp",
  //   "media_css_file__",
  //   true
  // );

  return 1;
}



MediaDeviceInfo()
  .then(
    ( retVal: number) => {
      console.info( "End" );
    }
  );




