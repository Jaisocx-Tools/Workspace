import { CommandLineArgs } from "@jaisocx/command-line";
import { LinkedResourceHasher } from "../linked_resources_hasher/LinkedResourceHasher.js";
export async function produceLinkTag() {
    let commandLineArgsInstance = new CommandLineArgs();
    let cliArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    let invokerFunc = (inArgs) => {
        let hasherInstance = new LinkedResourceHasher();
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