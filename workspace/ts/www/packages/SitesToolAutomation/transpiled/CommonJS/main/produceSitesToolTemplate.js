"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceSitesToolTemplate = produceSitesToolTemplate;
const Main_js_1 = require("./Main.js");
async function produceSitesToolTemplate() {
    const terminalInpArgsObject = {
        sitesToolName: "",
        cssOrJsTool: "",
        template: "",
        withSizesCssConstants: "",
        withConstantsImportLine: ""
    };
    // THE REUSABLE CODE BLOCK MOVES LATER TO A JS PACKAGE
    const terminalInpArgs = process.argv.slice(2);
    // Get command-line arguments starting from index 2
    terminalInpArgs.forEach((arg) => {
        let [key, value] = arg.split("=");
        key = key.replace("--", "");
        terminalInpArgsObject[key] = value ? value.replace(/(^"|"$)/g, "") : "";
        // Remove quotes if any
    });
    // console.log(
    //   "terminalInpArgsObject",
    //   terminalInpArgsObject
    // );
    // END OF THE REUSABLE CODE BLOCK
    const mainClassInstance = new Main_js_1.Main();
    let withSizesCssConstants = (terminalInpArgsObject.withSizesCssConstants.length === 0) ? true : (!!terminalInpArgsObject.withSizesCssConstants);
    let withConstantsImportLine = (terminalInpArgsObject.withConstantsImportLine.length === 0) ? true : (!!terminalInpArgsObject.withConstantsImportLine);
    // let themeName: string = "theme-day-mode";
    let retVal = await mainClassInstance
        .run(terminalInpArgsObject.sitesToolName, terminalInpArgsObject.cssOrJsTool, terminalInpArgsObject.template, withSizesCssConstants, withConstantsImportLine);
    return retVal;
}
produceSitesToolTemplate()
    .then((retVal) => {
    console.info("Sites Tool Template has been produced", retVal);
});
//# sourceMappingURL=produceSitesToolTemplate.js.map