import { CommandLineArgsInterface } from "./CommandLineArgsInterface.js";
export declare class CommandLineArgs implements CommandLineArgsInterface {
    protected _commandLineArgs_source: string[];
    protected _commandLineArgs: object;
    constructor();
    getCommandLineArgs(): object;
    readCommandLineArgs(): CommandLineArgs;
    transformCommandLineArgs(): CommandLineArgs;
}
//# sourceMappingURL=CommandLineArgs.d.ts.map