import { CommandLineArgs } from "../CommandLineArgs.js";
export async function invokeJsClassExample() {
    let commandLineArgsInstance = new CommandLineArgs();
    let cliArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    console.log("cliArgs", cliArgs);
    //@ts-ignore
    let arg1 = cliArgs["arg1"];
    //@ts-ignore
    let arg2 = cliArgs["arg2"];
    let exampleFunc = (arg1, arg2) => {
        let retValSum = (+arg1 + +arg2);
        return retValSum;
    };
    let retVal = exampleFunc(arg1, arg2);
    return retVal;
}
invokeJsClassExample()
    .then((retVal) => {
    console.info("CommandLine js example invoked", retVal);
});
//# sourceMappingURL=invokeJsClassExample.js.map