import { CommandLineArgs } from "@jaisocx/command-line";
import { CommandArgsObject_LinkTag } from "./CommandArgsObject_LinkTag.js";

import { LinkedResourceHasherInterface } from "../linked_resources_hasher/LinkedResourceHasherInterface.js";
import { LinkedResourceHasher } from "../linked_resources_hasher/LinkedResourceHasher.js";



export async function produceLinkTag(): Promise<string> {
  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();

  let cliArgs: CommandArgsObject_LinkTag = commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs()
    .getCommandLineArgs() as CommandArgsObject_LinkTag;



  let invokerFunc: CallableFunction = ( inArgs: CommandArgsObject_LinkTag ): string => {
    let hasherInstance: LinkedResourceHasherInterface = new LinkedResourceHasher();

    let linkTag: string =  hasherInstance
      .linkPreloaderProduce (
        inArgs["href"],
        inArgs["path"],
        inArgs["rel"],
        inArgs["as"],
        inArgs["fetchpriority"],
        (
          ( inArgs["prettified"] && inArgs["prettified"].length !== 0 ) ? true : false
        )
      );


    return linkTag;
  };

  let retVal: string = invokerFunc ( cliArgs );


  return retVal;

}



produceLinkTag()
  .then (
    ( retVal: string ) => {
      console.info (
        "LinkedResourceHasher.preloadedResourceIntegrityProduce( filePath, algo )",
        retVal
      );
    }
  );


