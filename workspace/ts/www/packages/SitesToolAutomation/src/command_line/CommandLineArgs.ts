import { CommandLineArgsInterface } from "./CommandLineArgsInterface.js";



export class CommandLineArgs implements CommandLineArgsInterface {

  protected _commandLineArgs_source: string[];
  protected _commandLineArgs: object;



  constructor() {
    this._commandLineArgs_source = new Array() as string[];
    this._commandLineArgs = new Object();
  }



  public getCommandLineArgs(): object {
    return this._commandLineArgs;
  }



  public readCommandLineArgs(): CommandLineArgs {

    // Get command-line arguments
    // and set to protected property of this ts class.
    //@ts-ignore
    this._commandLineArgs_source = [...process.argv];


    return this;
  }


  /*
    @purpose: --sitesTool_ThemeName="theme_example" --sitesToolName="CssCleanStart"
    =>

    {
      "sitesTool_ThemeName": "theme_example",
      "sitesToolName": "CssCleanStart",
        ...
    }

  */



  public transformCommandLineArgs(): CommandLineArgs {
    this._commandLineArgs = new Object();


    // @action: command-line arguments starting from index 2
    let locComandLineArgs = [...this._commandLineArgs_source].slice(2);


    locComandLineArgs.forEach( ( inForCommandLineArg: string ) => {

      // inForCommandLineArg example: --sitesToolName="CssCleanStart"
      let [ key, value ]: string[] = [ "", "" ];


      // @purpose: --sitesToolName="CssCleanStart" =>
      //  key_source = "--sitesToolName"
      //  value_source = "\"CssCleanStart\""
      // @action: splitting inForCommandLineArg in key and value pair
      let [key_source, value_source]: string[] = inForCommandLineArg.split("=");


      // @purpose: "--sitesToolName" => "sitesToolName"
      // @action: removing -- from start of the command line arg key
      key = key_source.replace ( "--", "" );


      // @purpose: "\"CssCleanStart\"" => "CssCleanStart"
      // @action: Removing quotes if any
      if ( value_source && ( value_source.length !== 0 ) ) {
        value = value_source.replace ( /(^"|"$)/g, "" );
      }


      //@ts-ignore
      this._commandLineArgs[key] = value;

    });


    return this;
  }

}



