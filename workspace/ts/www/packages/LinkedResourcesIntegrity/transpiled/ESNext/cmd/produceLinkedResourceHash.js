import { CommandLineArgs } from "@jaisocx/command-line";
import { LinkedResourceHasher } from "../linked_resources_hasher/LinkedResourceHasher.js";
export async function produceLinkedResourceHash() {
    let commandLineArgsInstance = new CommandLineArgs();
    let cliArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    let invokerFunc = (inArgs) => {
        let hasherInstance = new LinkedResourceHasher();
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