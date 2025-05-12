class WriteAllDataSetsCommand {
  static write(folderPath) {
    Countries.getSingletonInstance().saveCountriesNames(path.resolve(
      folderPath, 
      "countriesNames.json"));
    CountriesCodes.getSingletonInstance().saveCountriesCodes(path.resolve(
      folderPath, 
      "countriesCodesAsArray.json"));
    CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByCountryCode(path.resolve(
      folderPath, 
      "countriesCodesIndexedByCountryCode.json"));
    LanguagesCodes.getSingletonInstance().saveLanguagesCodes(path.resolve(
      folderPath, 
      "languagesCodesAsArray.json"));
    LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByLanguageCode(path.resolve(
      folderPath, 
      "languagesCodesIndexedByLanguageCode.json"));

    return 1;
  }
} 


