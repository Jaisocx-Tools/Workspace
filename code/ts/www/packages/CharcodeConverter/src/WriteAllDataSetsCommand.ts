import * as path from "node:path";

import { Countries } from "./Countries.js";
import { CountriesCodes } from "./CountriesCodes.js";
import { LanguagesCodes } from "./LanguagesCodes.js";


export class WriteAllDataSetsCommand {

  static write( folderPath: string ): number {

    Countries.getSingletonInstance().saveCountriesNames( path.resolve( 
      folderPath, 
      "countriesNames.json" ) );
    CountriesCodes.getSingletonInstance().saveCountriesCodes( path.resolve( 
      folderPath, 
      "countriesCodesAsArray.json" ) );
    CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByCountryCode( path.resolve( 
      folderPath, 
      "countriesCodesIndexedByCountryCode.json" ) );

    LanguagesCodes.getSingletonInstance().saveLanguagesCodes( path.resolve( 
      folderPath, 
      "languagesCodesAsArray.json" ) );
    LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByLanguageCode( path.resolve( 
      folderPath, 
      "languagesCodesIndexedByLanguageCode.json" ) );

    return 1;
  }

}

let commandPayload: string[] = process.argv.slice(2);
let folderPathFromCommandPayload: string = commandPayload[0];

WriteAllDataSetsCommand.write( folderPathFromCommandPayload );

