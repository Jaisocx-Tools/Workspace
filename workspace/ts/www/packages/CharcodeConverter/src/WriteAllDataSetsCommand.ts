import * as path from "node:path";

import { Countries } from "./Countries.js";
import { CountriesCodes } from "./CountriesCodes.js";
import { LanguagesCodes } from "./LanguagesCodes.js";



export class WriteAllDataSetsCommand {

  static write( folderPath: string ): number {
    let pathResolveFunc: CallableFunction;
    let isPathDefined: boolean = true;

    try {
      pathResolveFunc = path.resolve;
    } catch ( e ) {
      isPathDefined = false;
    }

    if ( isPathDefined === false ) {
      pathResolveFunc = ( inPath1: string, inPath2: string ) => {
        return [ inPath1, inPath2 ].join("/"); };
    }


    // @ts-ignore
    Countries.getSingletonInstance().saveCountriesNames( pathResolveFunc(
      folderPath,
      "countriesNames.json"
    ) );


    // @ts-ignore
    CountriesCodes.getSingletonInstance().saveCountriesCodes( pathResolveFunc(
      folderPath,
      "countriesCodesAsArray.json"
    ) );

    CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByKeys(
      "country_code",


      // @ts-ignore
      pathResolveFunc(
        folderPath,
        "countriesCodesIndexedByCountryCode.json"
      )
    );
    CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByKeys(
      "country_name",


      // @ts-ignore
      pathResolveFunc(
        folderPath,
        "countriesCodesIndexedByCountryName.json"
      )
    );


    // @ts-ignore
    LanguagesCodes.getSingletonInstance().saveLanguagesCodes( pathResolveFunc(
      folderPath,
      "languagesCodesAsArray.json"
    ) );
    LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByKeys(
      "language_code",


      // @ts-ignore
      pathResolveFunc(
        folderPath,
        "languagesCodesIndexedByLanguageCode.json"
      )
    );
    LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByKeys(
      "language_names[0]",


      // @ts-ignore
      pathResolveFunc(
        folderPath,
        "languagesCodesIndexedByLanguageName.json"
      )
    );


    return 1;
  }

}

let commandPayload: string[] = process.argv.slice(2);
let folderPathFromCommandPayload: string = commandPayload[0];

WriteAllDataSetsCommand.write( folderPathFromCommandPayload );

