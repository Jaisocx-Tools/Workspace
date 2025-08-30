"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produceLinkedResourceHash = produceLinkedResourceHash;
const command_line_1 = require("@jaisocx/command-line");
const LinkedResourceHasher_js_1 = require("../linked_resources_hasher/LinkedResourceHasher.js");
async function produceLinkedResourceHash() {
    let commandLineArgsInstance = new command_line_1.CommandLineArgs();
    let cliArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    let invokerFunc = (inArgs) => {
        let hasherInstance = new LinkedResourceHasher_js_1.LinkedResourceHasher();
        let linkedResourceIntegrityHash = hasherInstance
            .preloadedResourceIntegrityProduce(inArgs["filePath"], inArgs["algo"]);
        return linkedResourceIntegrityHash;
    };
    let retVal = invokerFunc(cliArgs);
    return retVal;
}
produceLinkedResourceHash()
    .then((retVal) => {
    console.log("LinkedResourceHasher.preloadedResourceIntegrityProduce( filePath, algo )");
    console.log((retVal + "\n\n"));
});
//# sourceMappingURL=produceLinkedResourceHash.js.map