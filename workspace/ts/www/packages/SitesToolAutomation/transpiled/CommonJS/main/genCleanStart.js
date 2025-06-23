"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCleanStart = genCleanStart;
const Main_js_1 = require("./Main.js");
async function genCleanStart() {
    const terminalInpArgsObject = {
        sitesToolName: "",
        cssOrJsTool: "",
        template: "",
        withCssConstantsFile: "",
        withConstantsImportLine: ""
    };
    // THE REUSABLE CODE BLOCK MOVES LATER TO A JS PACKAGE
    const terminalInpArgs = process.argv.slice(2); // Get command-line arguments starting from index 2
    terminalInpArgs.forEach((arg) => {
        let [key, value] = arg.split("=");
        key = key.replace("--", "");
        terminalInpArgsObject[key] = value ? value.replace(/(^"|"$)/g, "") : ""; // Remove quotes if any
    });
    // console.log(
    //   "terminalInpArgsObject",
    //   terminalInpArgsObject
    // );
    // END OF THE REUSABLE CODE BLOCK
    const mainClassInstance = new Main_js_1.Main();
    let withCssConstantsFile = (terminalInpArgsObject.withCssConstantsFile.length === 0) ? true : (!!terminalInpArgsObject.withCssConstantsFile);
    let withConstantsImportLine = (terminalInpArgsObject.withConstantsImportLine.length === 0) ? true : (!!terminalInpArgsObject.withConstantsImportLine);
    // let themeName: string = "theme-day-mode";
    mainClassInstance.responsiveCssFile.getTemplateDataOverridden = function (
    //@ts-ignore
    responsiveDatasetPropName, templateDataBase) {
        //@ts-ignore
        let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];
        //@ts-ignore
        let responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
            .getResponsiveSizeName_withSitesToolName_ByBitsbufs(responsiveData["range_orderby_id"], responsiveData["art"], responsiveData["art_size"], templateDataBase["orientation"], templateDataBase["SitesToolName"]);
        let responsiveSizeArray = responsiveSizeName_withSitesToolName_Array.slice(4, 9);
        //@ts-ignore
        let responsiveSize = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeArray);
        templateDataBase["responsiveSize"] = responsiveSize;
        return templateDataBase;
    };
    let responsiveCssFile = mainClassInstance.responsiveCssFile;
    mainClassInstance.responsiveCssFile.getTemplateDataOverridden = responsiveCssFile.getTemplateDataOverridden.bind(responsiveCssFile);
    let retVal = await mainClassInstance
        .run(terminalInpArgsObject.sitesToolName, terminalInpArgsObject.cssOrJsTool, terminalInpArgsObject.template, withCssConstantsFile, withConstantsImportLine);
    return retVal;
}
genCleanStart()
    .then((retVal) => {
    console.info("Sites Tool Template has been produced", retVal);
});
//# sourceMappingURL=genCleanStart.js.map