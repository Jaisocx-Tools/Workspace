"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSiteToolTemplate = genSiteToolTemplate;
const Main_js_1 = require("./Main.js");
async function genSiteToolTemplate() {
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
    let retVal = await mainClassInstance
        .run(terminalInpArgsObject.sitesToolName, terminalInpArgsObject.cssOrJsTool, terminalInpArgsObject.template, withCssConstantsFile, withConstantsImportLine);
    return retVal;
}
genSiteToolTemplate()
    .then((retVal) => {
    console.info("Sites Tool Template has been produced", retVal);
});
//# sourceMappingURL=genSiteToolTemplate.js.map