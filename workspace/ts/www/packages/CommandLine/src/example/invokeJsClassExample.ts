import { CommandLineArgs } from "../CommandLineArgs.js";
import { CommandArgsObjectExample } from "./CommandArgsObjectExample.js";



export async function invokeJsClassExample(): Promise<number> {
  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();

  let cliArgs: CommandArgsObjectExample = commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs()
    .getCommandLineArgs() as CommandArgsObjectExample;



  console.log(
    "cliArgs",
    cliArgs
  );


  //@ts-ignore
  let arg1: string = cliArgs["arg1"];


  //@ts-ignore
  let arg2: string = cliArgs["arg2"];


  let exampleFunc: CallableFunction = ( arg1: string, arg2: string ): number => {
    let retValSum: number = ( +arg1 + +arg2 );


    return retValSum;
  };

  let retVal: number = exampleFunc ( arg1, arg2 );


  return retVal;

}



invokeJsClassExample()
  .then (
    ( retVal: number ) => {
      console.info (
        "CommandLine js example invoked",
        retVal
      );
    }
  );


