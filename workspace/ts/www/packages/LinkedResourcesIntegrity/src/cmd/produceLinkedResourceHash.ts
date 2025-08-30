import { CommandLineArgs } from "@jaisocx/command-line";
import { CommandArgsObject_LinkedResourceHash } from "./CommandArgsObject_LinkedResourceHash.js";

import { LinkedResourceHasherInterface } from "../linked_resources_hasher/LinkedResourceHasherInterface.js";
import { LinkedResourceHasher } from "../linked_resources_hasher/LinkedResourceHasher.js";



export async function produceLinkedResourceHash(): Promise<string> {
  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();

  let cliArgs: CommandArgsObject_LinkedResourceHash = commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs()
    .getCommandLineArgs() as CommandArgsObject_LinkedResourceHash;



  let invokerFunc: CallableFunction = ( inArgs: CommandArgsObject_LinkedResourceHash ): string => {
    let hasherInstance: LinkedResourceHasherInterface = new LinkedResourceHasher();

    let linkedResourceIntegrityHash: string =  hasherInstance
      .preloadedResourceIntegrityProduce (
        inArgs["filePath"],
        inArgs["algo"]
      );


    return linkedResourceIntegrityHash;
  };

  let retVal: string = invokerFunc ( cliArgs );


  return retVal;

}



produceLinkedResourceHash()
  .then (
    ( retVal: string ) => {
      console.log (
        "LinkedResourceHasher.preloadedResourceIntegrityProduce( filePath, algo )"
      );

      console.log (
        ( retVal + "\n\n" )
      );
    }
  );


