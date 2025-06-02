"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ResponsiveDatasetAutomation_js_1 = require("./ResponsiveDatasetAutomation.js");
async function MediaDeviceInfo() {
    const responsiveDatasetAutomation = new ResponsiveDatasetAutomation_js_1.ResponsiveDatasetAutomation();
    let pathToJsonDatasetForResponsiveSizes = "/var/www/workspace/ts/www/packages/Mobile.vsDesktop/data/ResponsiveSizes/ResponsiveSizes.json";
    let responsiveTemplateFilePath = "/var/www/workspace/ts/www/packages/Mobile.vsDesktop/data/templates/ResponsiveTemplate.template";
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