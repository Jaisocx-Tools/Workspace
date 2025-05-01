import { ResponsiveDatasetAutomation } from "./ResponsiveDatasetAutomation.js";
async function MediaDeviceInfo() {
    const responsiveDatasetAutomation = new ResponsiveDatasetAutomation();
    let pathToJsonDatasetForResponsiveSizes = "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/ResponsiveSizes/ResponsiveSizes.json";
    let responsiveTemplateFilePath = "/Users/illiapolianskyi/Projects/JAISOCX_SITES_TOOLS/Workspace/code/ts/www/packages/Mobile.vsDesktop/data/templates/ResponsiveTemplate.template";
    let subfolderName = "responsive";
    let responsiveMediaQueriesFilesPrefix = "";
    let mediaConstantsFileName = "MediaConstants.css";
    let webpackAliasName = "@jaisocx-css-clean-start-MediaAndStyles";
    return await responsiveDatasetAutomation
        .run(pathToJsonDatasetForResponsiveSizes, responsiveTemplateFilePath, subfolderName, responsiveMediaQueriesFilesPrefix, mediaConstantsFileName, webpackAliasName);
}
MediaDeviceInfo()
    .then((retVal) => {
    console.info("End", retVal);
});
//# sourceMappingURL=produceResponsiveDataset.js.map