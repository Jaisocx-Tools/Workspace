import { Main } from "./Main.js";
export async function genSiteToolTemplate() {
    // console.log( process.argv );
    const terminalInpArgsObject = {
        sitesToolName: "",
        cssOrJsTool: "",
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
    const mainClassInstance = new Main();
    let withCssConstantsFile = (terminalInpArgsObject.withCssConstantsFile.length === 0) ? true : (!!terminalInpArgsObject.withCssConstantsFile);
    let withConstantsImportLine = (terminalInpArgsObject.withConstantsImportLine.length === 0) ? true : (!!terminalInpArgsObject.withConstantsImportLine);
    // let themeName: string = "theme-day-mode";
    let retVal = await mainClassInstance
        .run(terminalInpArgsObject.sitesToolName, terminalInpArgsObject.cssOrJsTool, withCssConstantsFile, withConstantsImportLine);
    return retVal;
}
genSiteToolTemplate()
    .then((retVal) => {
    console.info("Sites Tool Template has been produced", retVal);
});
//# sourceMappingURL=genSiteToolTemplate.js.map