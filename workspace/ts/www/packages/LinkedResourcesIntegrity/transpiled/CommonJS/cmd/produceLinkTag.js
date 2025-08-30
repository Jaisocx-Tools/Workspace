"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceLinkTag = produceLinkTag;
const command_line_1 = require("@jaisocx/command-line");
const LinkedResourceHasher_js_1 = require("../linked_resources_hasher/LinkedResourceHasher.js");
async function produceLinkTag() {
    let commandLineArgsInstance = new command_line_1.CommandLineArgs();
    let cliArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    let invokerFunc = (inArgs) => {
        let hasherInstance = new LinkedResourceHasher_js_1.LinkedResourceHasher();
        let linkTag = hasherInstance
            .linkPreloaderProduce(inArgs["href"], inArgs["path"], inArgs["rel"], inArgs["as"], inArgs["fetchpriority"], ((inArgs["prettified"] && inArgs["prettified"].length !== 0) ? true : false));
        return linkTag;
    };
    let retVal = invokerFunc(cliArgs);
    return retVal;
}
produceLinkTag()
    .then((retVal) => {
    console.info("LinkedResourceHasher.preloadedResourceIntegrityProduce( filePath, algo )", retVal);
});
//# sourceMappingURL=produceLinkTag.js.map