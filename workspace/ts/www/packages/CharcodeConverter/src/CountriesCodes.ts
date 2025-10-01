import { DatasetBase } from "@jaisocx/cdn-datasets-base";



export class CountriesCodes extends DatasetBase {

  static _singletonInstance: CountriesCodes;



  constructor() {
    super();

    this._data = this.initData();
  }



  static getSingletonInstance(): CountriesCodes {
    if ( CountriesCodes._singletonInstance === undefined ) {
      CountriesCodes._singletonInstance = new CountriesCodes();
    }


    return CountriesCodes._singletonInstance;
  }



  getCountriesCodes(): any[] {
    return this._data;
  }



  getCountriesCodesIndexedByKeys( key: string ): any[] {
    return this.getDataIndexedByKeys( key );
  }



  saveCountriesCodes( inFilePath: string ): number {
    let locSaved: number = this.saveData(
      inFilePath,
      this._data
    );


    return locSaved;
  }



  saveCountriesCodesIndexedByKeys(
    key: string,
    inFilePath: string
  ): number {
    let locSaved: number = this.saveDataIndexedByKeys(
      key,
      inFilePath
    );


    return locSaved;
  }



  initData(): any[] {
    let locData = [
      {
        "country_name": "Afghanistan",
        "country_code": "AF",
        "country_code_long": "AFG",
        "languages_codes_and_names": [
          {
            "language_code": "ps",
            "language_names": [
              "Pashto",
              "Pushto"
            ]
          },
          {
            "language_code": "fa-AF",
            "language_names": [
              "Dari",
              "Dari Persian",
              "Afghan Persian"
            ]
          }
        ]
      },
      {
        "country_name": "Albania",
        "country_code": "AL",
        "country_code_long": "ALB",
        "languages_codes_and_names": [
          {
            "language_code": "sq",
            "language_names": [
              "Albanian"
            ]
          }
        ]
      },
      {
        "country_name": "Algeria",
        "country_code": "DZ",
        "country_code_long": "DZA",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Andorra",
        "country_code": "AD",
        "country_code_long": "AND",
        "languages_codes_and_names": [
          {
            "language_code": "ca",
            "language_names": [
              "Catalan"
            ]
          }
        ]
      },
      {
        "country_name": "Angola",
        "country_code": "AO",
        "country_code_long": "AGO",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Antigua and Barbuda",
        "country_code": "AG",
        "country_code_long": "ATG",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Argentina",
        "country_code": "AR",
        "country_code_long": "ARG",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Armenia",
        "country_code": "AM",
        "country_code_long": "ARM",
        "languages_codes_and_names": [
          {
            "language_code": "hy",
            "language_names": [
              "Armenian"
            ]
          }
        ]
      },
      {
        "country_name": "Australia",
        "country_code": "AU",
        "country_code_long": "AUS",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Austria",
        "country_code": "AT",
        "country_code_long": "AUT",
        "languages_codes_and_names": [
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          }
        ]
      },
      {
        "country_name": "Azerbaijan",
        "country_code": "AZ",
        "country_code_long": "AZE",
        "languages_codes_and_names": [
          {
            "language_code": "az",
            "language_names": [
              "Azerbaijani"
            ]
          }
        ]
      },
      {
        "country_name": "Bahamas",
        "country_code": "BS",
        "country_code_long": "BHS",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Bahrain",
        "country_code": "BH",
        "country_code_long": "BHR",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Bangladesh",
        "country_code": "BD",
        "country_code_long": "BGD",
        "languages_codes_and_names": [
          {
            "language_code": "bn",
            "language_names": [
              "Bengali",
              "Bangla"
            ]
          }
        ]
      },
      {
        "country_name": "Barbados",
        "country_code": "BB",
        "country_code_long": "BRB",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Belarus",
        "country_code": "BY",
        "country_code_long": "BLR",
        "languages_codes_and_names": [
          {
            "language_code": "be",
            "language_names": [
              "Belarusian"
            ]
          },
          {
            "language_code": "ru",
            "language_names": [
              "Russian"
            ]
          }
        ]
      },
      {
        "country_name": "Belgium",
        "country_code": "BE",
        "country_code_long": "BEL",
        "languages_codes_and_names": [
          {
            "language_code": "nl",
            "language_names": [
              "Dutch"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          }
        ]
      },
      {
        "country_name": "Belize",
        "country_code": "BZ",
        "country_code_long": "BLZ",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Benin",
        "country_code": "BJ",
        "country_code_long": "BEN",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Bhutan",
        "country_code": "BT",
        "country_code_long": "BTN",
        "languages_codes_and_names": [
          {
            "language_code": "dz",
            "language_names": [
              "Dzongkha"
            ]
          }
        ]
      },
      {
        "country_name": "Bolivia",
        "country_code": "BO",
        "country_code_long": "BOL",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          },
          {
            "language_code": "qu",
            "language_names": [
              "Quechua"
            ]
          },
          {
            "language_code": "ay",
            "language_names": [
              "Aymara"
            ]
          }
        ]
      },
      {
        "country_name": "Bosnia and Herzegovina",
        "country_code": "BA",
        "country_code_long": "BIH",
        "languages_codes_and_names": [
          {
            "language_code": "bs",
            "language_names": [
              "Bosnian"
            ]
          },
          {
            "language_code": "hr",
            "language_names": [
              "Croatian"
            ]
          },
          {
            "language_code": "sr",
            "language_names": [
              "Serbian"
            ]
          }
        ]
      },
      {
        "country_name": "Botswana",
        "country_code": "BW",
        "country_code_long": "BWA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "tn",
            "language_names": [
              "Tswana",
              "Setswana"
            ]
          }
        ]
      },
      {
        "country_name": "Brazil",
        "country_code": "BR",
        "country_code_long": "BRA",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Brunei",
        "country_code": "BN",
        "country_code_long": "BRN",
        "languages_codes_and_names": [
          {
            "language_code": "ms",
            "language_names": [
              "Malay"
            ]
          }
        ]
      },
      {
        "country_name": "Bulgaria",
        "country_code": "BG",
        "country_code_long": "BGR",
        "languages_codes_and_names": [
          {
            "language_code": "bg",
            "language_names": [
              "Bulgarian"
            ]
          }
        ]
      },
      {
        "country_name": "Burkina Faso",
        "country_code": "BF",
        "country_code_long": "BFA",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Burundi",
        "country_code": "BI",
        "country_code_long": "BDI",
        "languages_codes_and_names": [
          {
            "language_code": "rn",
            "language_names": [
              "Kirundi"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Cambodia",
        "country_code": "KH",
        "country_code_long": "KHM",
        "languages_codes_and_names": [
          {
            "language_code": "km",
            "language_names": [
              "Khmer"
            ]
          }
        ]
      },
      {
        "country_name": "Cameroon",
        "country_code": "CM",
        "country_code_long": "CMR",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Canada",
        "country_code": "CA",
        "country_code_long": "CAN",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Cape Verde",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Central African Republic",
        "country_code": "CF",
        "country_code_long": "CAF",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "sg",
            "language_names": [
              "Sango"
            ]
          }
        ]
      },
      {
        "country_name": "Chad",
        "country_code": "TD",
        "country_code_long": "TCD",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Chile",
        "country_code": "CL",
        "country_code_long": "CHL",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "China",
        "country_code": "CN",
        "country_code_long": "CHN",
        "languages_codes_and_names": [
          {
            "language_code": "zh",
            "language_names": [
              "Chinese"
            ]
          },
          {
            "language_code": "zh-Hant",
            "language_names": [
              "Chinese (Traditional)"
            ]
          },
          {
            "language_code": "zh-Hans",
            "language_names": [
              "Chinese (Simplified)"
            ]
          }
        ]
      },
      {
        "country_name": "Comoros",
        "country_code": "KM",
        "country_code_long": "COM",
        "languages_codes_and_names": [
          "Comorian",
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Congo, Dem. Rep. of the",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Congo, Rep of the",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Costa Rica",
        "country_code": "CR",
        "country_code_long": "CRI",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Croatia",
        "country_code": "HR",
        "country_code_long": "HRV",
        "languages_codes_and_names": [
          {
            "language_code": "hr",
            "language_names": [
              "Croatian"
            ]
          }
        ]
      },
      {
        "country_name": "Cuba",
        "country_code": "CU",
        "country_code_long": "CUB",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Cyprus",
        "country_code": "CY",
        "country_code_long": "CYP",
        "languages_codes_and_names": [
          {
            "language_code": "el",
            "language_names": [
              "Greek"
            ]
          },
          {
            "language_code": "tr",
            "language_names": [
              "Turkish"
            ]
          }
        ]
      },
      {
        "country_name": "Czech Republic",
        "country_code": "CZ",
        "country_code_long": "CZE",
        "languages_codes_and_names": [
          {
            "language_code": "cs",
            "language_names": [
              "Czech"
            ]
          }
        ]
      },
      {
        "country_name": "Côte d'Ivoire",
        "country_code": "CI",
        "country_code_long": "CIV",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Denmark",
        "country_code": "DK",
        "country_code_long": "DNK",
        "languages_codes_and_names": [
          {
            "language_code": "da",
            "language_names": [
              "Danish"
            ]
          }
        ]
      },
      {
        "country_name": "Djibouti",
        "country_code": "DJ",
        "country_code_long": "DJI",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Dominica",
        "country_code": "DM",
        "country_code_long": "DMA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Dominican Republic",
        "country_code": "DO",
        "country_code_long": "DOM",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "East Timor",
        "country_code": "XX",
        "languages_codes_and_names": [
          "Tetum",
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Ecuador",
        "country_code": "EC",
        "country_code_long": "ECU",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Egypt",
        "country_code": "EG",
        "country_code_long": "EGY",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "El Salvador",
        "country_code": "SV",
        "country_code_long": "SLV",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Equatorial Guinea",
        "country_code": "GQ",
        "country_code_long": "GNQ",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Eritrea",
        "country_code": "ER",
        "country_code_long": "ERI",
        "languages_codes_and_names": [
          {
            "language_code": "ti",
            "language_names": [
              "Tigrinya"
            ]
          },
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Estonia",
        "country_code": "EE",
        "country_code_long": "EST",
        "languages_codes_and_names": [
          {
            "language_code": "et",
            "language_names": [
              "Estonian"
            ]
          }
        ]
      },
      {
        "country_name": "Eswatini",
        "country_code": "SZ",
        "country_code_long": "SWZ",
        "languages_codes_and_names": [
          {
            "language_code": "ss",
            "language_names": [
              "Swati"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Ethiopia",
        "country_code": "ET",
        "country_code_long": "ETH",
        "languages_codes_and_names": [
          {
            "language_code": "am",
            "language_names": [
              "Amharic"
            ]
          }
        ]
      },
      {
        "country_name": "Fiji",
        "country_code": "FJ",
        "country_code_long": "FJI",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fj",
            "language_names": [
              "Fijian"
            ]
          },
          {
            "language_code": "hi",
            "language_names": [
              "Hindi"
            ]
          }
        ]
      },
      {
        "country_name": "Finland",
        "country_code": "FI",
        "country_code_long": "FIN",
        "languages_codes_and_names": [
          {
            "language_code": "fi",
            "language_names": [
              "Finnish"
            ]
          },
          {
            "language_code": "sv",
            "language_names": [
              "Swedish"
            ]
          }
        ]
      },
      {
        "country_name": "France",
        "country_code": "FR",
        "country_code_long": "FRA",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Gabon",
        "country_code": "GA",
        "country_code_long": "GAB",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Georgia",
        "country_code": "GE",
        "country_code_long": "GEO",
        "languages_codes_and_names": [
          {
            "language_code": "ka",
            "language_names": [
              "Georgian"
            ]
          }
        ]
      },
      {
        "country_name": "Germany",
        "country_code": "DE",
        "country_code_long": "DEU",
        "languages_codes_and_names": [
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          }
        ]
      },
      {
        "country_name": "Ghana",
        "country_code": "GH",
        "country_code_long": "GHA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Greece",
        "country_code": "GR",
        "country_code_long": "GRC",
        "languages_codes_and_names": [
          {
            "language_code": "el",
            "language_names": [
              "Greek"
            ]
          }
        ]
      },
      {
        "country_name": "Grenada",
        "country_code": "GD",
        "country_code_long": "GRD",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Guatemala",
        "country_code": "GT",
        "country_code_long": "GTM",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Guinea",
        "country_code": "GN",
        "country_code_long": "GIN",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Guinea-Bissau",
        "country_code": "GW",
        "country_code_long": "GNB",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Guyana",
        "country_code": "GY",
        "country_code_long": "GUY",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Haiti",
        "country_code": "HT",
        "country_code_long": "HTI",
        "languages_codes_and_names": [
          {
            "language_code": "ht",
            "language_names": [
              "Haitian Creole"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Honduras",
        "country_code": "HN",
        "country_code_long": "HND",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Hungary",
        "country_code": "HU",
        "country_code_long": "HUN",
        "languages_codes_and_names": [
          {
            "language_code": "hu",
            "language_names": [
              "Hungarian"
            ]
          }
        ]
      },
      {
        "country_name": "Iceland",
        "country_code": "IS",
        "country_code_long": "ISL",
        "languages_codes_and_names": [
          {
            "language_code": "is",
            "language_names": [
              "Icelandic"
            ]
          }
        ]
      },
      {
        "country_name": "India",
        "country_code": "IN",
        "country_code_long": "IND",
        "languages_codes_and_names": [
          {
            "language_code": "hi",
            "language_names": [
              "Hindi"
            ]
          },
          {
            "language_code": "bn",
            "language_names": [
              "Bengali",
              "Bangla"
            ]
          },
          {
            "language_code": "te",
            "language_names": [
              "Telugu"
            ]
          },
          {
            "language_code": "mr",
            "language_names": [
              "Marathi"
            ]
          },
          {
            "language_code": "ta",
            "language_names": [
              "Tamil"
            ]
          },
          {
            "language_code": "ur",
            "language_names": [
              "Urdu"
            ]
          },
          {
            "language_code": "gu",
            "language_names": [
              "Gujarati"
            ]
          },
          {
            "language_code": "ml",
            "language_names": [
              "Malayalam"
            ]
          },
          {
            "language_code": "kn",
            "language_names": [
              "Kannada"
            ]
          },
          {
            "language_code": "or",
            "language_names": [
              "Odia",
              "Oriya"
            ]
          },
          {
            "language_code": "pa",
            "language_names": [
              "Punjabi",
              "Eastern Punjabi"
            ]
          },
          {
            "language_code": "as",
            "language_names": [
              "Assamese"
            ]
          },
          {
            "language_code": "mai",
            "language_names": [
              "Maithili"
            ]
          },
          {
            "language_code": "sat",
            "language_names": [
              "Santali"
            ]
          },
          {
            "language_code": "ks",
            "language_names": [
              "Kashmiri"
            ]
          },
          {
            "language_code": "ne",
            "language_names": [
              "Nepali"
            ]
          },
          {
            "language_code": "kok",
            "language_names": [
              "Konkani"
            ]
          },
          {
            "language_code": "sd",
            "language_names": [
              "Sindhi"
            ]
          },
          {
            "language_code": "doi",
            "language_names": [
              "Dogri"
            ]
          },
          {
            "language_code": "mni",
            "language_names": [
              "Manipuri",
              "Meitei"
            ]
          },
          {
            "language_code": "brx",
            "language_names": [
              "Bodo"
            ]
          },
          {
            "language_code": "sa",
            "language_names": [
              "Sanskrit"
            ]
          }
        ]
      },
      {
        "country_name": "Indonesia",
        "country_code": "ID",
        "country_code_long": "IDN",
        "languages_codes_and_names": [
          {
            "language_code": "id, in",
            "language_names": [
              "Indonesian"
            ]
          }
        ]
      },
      {
        "country_name": "Iran",
        "country_code": "IR",
        "country_code_long": "IRN",
        "languages_codes_and_names": [
          {
            "language_code": "fa",
            "language_names": [
              "Persian",
              "Farsi"
            ]
          }
        ]
      },
      {
        "country_name": "Iraq",
        "country_code": "IQ",
        "country_code_long": "IRQ",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "ku",
            "language_names": [
              "Kurdish"
            ]
          }
        ]
      },
      {
        "country_name": "Ireland",
        "country_code": "IE",
        "country_code_long": "IRL",
        "languages_codes_and_names": [
          {
            "language_code": "ga",
            "language_names": [
              "Irish"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Israel",
        "country_code": "IL",
        "country_code_long": "ISR",
        "languages_codes_and_names": [
          {
            "language_code": "he",
            "language_names": [
              "Hebrew"
            ]
          },
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Italy",
        "country_code": "IT",
        "country_code_long": "ITA",
        "languages_codes_and_names": [
          {
            "language_code": "it",
            "language_names": [
              "Italian"
            ]
          }
        ]
      },
      {
        "country_name": "Jamaica",
        "country_code": "JM",
        "country_code_long": "JAM",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Japan",
        "country_code": "JP",
        "country_code_long": "JPN",
        "languages_codes_and_names": [
          {
            "language_code": "ja",
            "language_names": [
              "Japanese"
            ]
          }
        ]
      },
      {
        "country_name": "Jordan",
        "country_code": "JO",
        "country_code_long": "JOR",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Kazakhstan",
        "country_code": "KZ",
        "country_code_long": "KAZ",
        "languages_codes_and_names": [
          {
            "language_code": "kk",
            "language_names": [
              "Kazakh"
            ]
          },
          {
            "language_code": "ru",
            "language_names": [
              "Russian"
            ]
          }
        ]
      },
      {
        "country_name": "Kenya",
        "country_code": "KE",
        "country_code_long": "KEN",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "sw",
            "language_names": [
              "Swahili",
              "Kiswahili"
            ]
          }
        ]
      },
      {
        "country_name": "Kiribati",
        "country_code": "KI",
        "country_code_long": "KIR",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          "I-Kiribati"
        ]
      },
      {
        "country_name": "Korea, North",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "ko",
            "language_names": [
              "Korean"
            ]
          }
        ]
      },
      {
        "country_name": "Korea, South",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "ko",
            "language_names": [
              "Korean"
            ]
          }
        ]
      },
      {
        "country_name": "Kuwait",
        "country_code": "KW",
        "country_code_long": "KWT",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Kyrgyzstan",
        "country_code": "KG",
        "country_code_long": "KGZ",
        "languages_codes_and_names": [
          {
            "language_code": "ky",
            "language_names": [
              "Kyrgyz"
            ]
          },
          {
            "language_code": "ru",
            "language_names": [
              "Russian"
            ]
          }
        ]
      },
      {
        "country_name": "Laos",
        "country_code": "XX",
        "languages_codes_and_names": [
          {
            "language_code": "lo",
            "language_names": [
              "Lao"
            ]
          }
        ]
      },
      {
        "country_name": "Latvia",
        "country_code": "LV",
        "country_code_long": "LVA",
        "languages_codes_and_names": [
          {
            "language_code": "lv",
            "language_names": [
              "Latvian",
              "Lettish"
            ]
          }
        ]
      },
      {
        "country_name": "Lebanon",
        "country_code": "LB",
        "country_code_long": "LBN",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Lesotho",
        "country_code": "LS",
        "country_code_long": "LSO",
        "languages_codes_and_names": [
          {
            "language_code": "st",
            "language_names": [
              "Sesotho"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Liberia",
        "country_code": "LR",
        "country_code_long": "LBR",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Libya",
        "country_code": "LY",
        "country_code_long": "LBY",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Liechtenstein",
        "country_code": "LI",
        "country_code_long": "LIE",
        "languages_codes_and_names": [
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          }
        ]
      },
      {
        "country_name": "Lithuania",
        "country_code": "LT",
        "country_code_long": "LTU",
        "languages_codes_and_names": [
          {
            "language_code": "lt",
            "language_names": [
              "Lithuanian"
            ]
          }
        ]
      },
      {
        "country_name": "Luxembourg",
        "country_code": "LU",
        "country_code_long": "LUX",
        "languages_codes_and_names": [
          {
            "language_code": "lb",
            "language_names": [
              "Luxembourgish"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          }
        ]
      },
      {
        "country_name": "Macedonia",
        "country_code": "MK",
        "country_code_long": "MKD",
        "languages_codes_and_names": [
          {
            "language_code": "mk",
            "language_names": [
              "Macedonian"
            ]
          }
        ]
      },
      {
        "country_name": "Madagascar",
        "country_code": "MG",
        "country_code_long": "MDG",
        "languages_codes_and_names": [
          {
            "language_code": "mg",
            "language_names": [
              "Malagasy"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Malawi",
        "country_code": "MW",
        "country_code_long": "MWI",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "ny",
            "language_names": [
              "Chichewa",
              "Chewa",
              "Nyanja"
            ]
          }
        ]
      },
      {
        "country_name": "Malaysia",
        "country_code": "MY",
        "country_code_long": "MYS",
        "languages_codes_and_names": [
          {
            "language_code": "ms",
            "language_names": [
              "Malay"
            ]
          }
        ]
      },
      {
        "country_name": "Maldives",
        "country_code": "MV",
        "country_code_long": "MDV",
        "languages_codes_and_names": [
          {
            "language_code": "dv",
            "language_names": [
              "Divehi",
              "Dhivehi",
              "Maldivian"
            ]
          }
        ]
      },
      {
        "country_name": "Mali",
        "country_code": "ML",
        "country_code_long": "MLI",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Malta",
        "country_code": "MT",
        "country_code_long": "MLT",
        "languages_codes_and_names": [
          {
            "language_code": "mt",
            "language_names": [
              "Maltese"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Marshall Islands",
        "country_code": "MH",
        "country_code_long": "MHL",
        "languages_codes_and_names": [
          {
            "language_code": "mh",
            "language_names": [
              "Marshallese"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Mauritania",
        "country_code": "MR",
        "country_code_long": "MRT",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Mauritius",
        "country_code": "MU",
        "country_code_long": "MUS",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Mexico",
        "country_code": "MX",
        "country_code_long": "MEX",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Micronesia",
        "country_code": "FM",
        "country_code_long": "FSM",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Moldova",
        "country_code": "MD",
        "country_code_long": "MDA",
        "languages_codes_and_names": [
          {
            "language_code": "ro",
            "language_names": [
              "Romanian"
            ]
          }
        ]
      },
      {
        "country_name": "Monaco",
        "country_code": "MC",
        "country_code_long": "MCO",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Mongolia",
        "country_code": "MN",
        "country_code_long": "MNG",
        "languages_codes_and_names": [
          {
            "language_code": "mn",
            "language_names": [
              "Mongolian"
            ]
          }
        ]
      },
      {
        "country_name": "Montenegro",
        "country_code": "ME",
        "country_code_long": "MNE",
        "languages_codes_and_names": [
          "Montengrin"
        ]
      },
      {
        "country_name": "Morocco",
        "country_code": "MA",
        "country_code_long": "MAR",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          "Berber"
        ]
      },
      {
        "country_name": "Mozambique",
        "country_code": "MZ",
        "country_code_long": "MOZ",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Namibia",
        "country_code": "NA",
        "country_code_long": "NAM",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Nauru",
        "country_code": "NR",
        "country_code_long": "NRU",
        "languages_codes_and_names": [
          "Nauruan",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Nepal",
        "country_code": "NP",
        "country_code_long": "NPL",
        "languages_codes_and_names": [
          {
            "language_code": "ne",
            "language_names": [
              "Nepali"
            ]
          }
        ]
      },
      {
        "country_name": "Netherlands",
        "country_code": "NL",
        "country_code_long": "NLD",
        "languages_codes_and_names": [
          {
            "language_code": "nl",
            "language_names": [
              "Dutch"
            ]
          }
        ]
      },
      {
        "country_name": "New Zealand",
        "country_code": "NZ",
        "country_code_long": "NZL",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          "Māori"
        ]
      },
      {
        "country_name": "Nicaragua",
        "country_code": "NI",
        "country_code_long": "NIC",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Niger",
        "country_code": "NG",
        "country_code_long": "NGA",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Nigeria",
        "country_code": "NG",
        "country_code_long": "NGA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Norway",
        "country_code": "NO",
        "country_code_long": "NOR",
        "languages_codes_and_names": [
          {
            "language_code": "no",
            "language_names": [
              "Norwegian"
            ]
          }
        ]
      },
      {
        "country_name": "Oman",
        "country_code": "OM",
        "country_code_long": "OMN",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Pakistan",
        "country_code": "PK",
        "country_code_long": "PAK",
        "languages_codes_and_names": [
          {
            "language_code": "ur",
            "language_names": [
              "Urdu"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Palau",
        "country_code": "PW",
        "country_code_long": "PLW",
        "languages_codes_and_names": [
          "Palauan",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Panama",
        "country_code": "PA",
        "country_code_long": "PAN",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Papua New Guinea",
        "country_code": "PG",
        "country_code_long": "PNG",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          "Tok Pisin",
          {
            "language_code": "ho",
            "language_names": [
              "Hiri Motu"
            ]
          }
        ]
      },
      {
        "country_name": "Paraguay",
        "country_code": "PY",
        "country_code_long": "PRY",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          },
          {
            "language_code": "gn",
            "language_names": [
              "Guarani"
            ]
          }
        ]
      },
      {
        "country_name": "Peru",
        "country_code": "PE",
        "country_code_long": "PER",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          },
          {
            "language_code": "qu",
            "language_names": [
              "Quechua"
            ]
          },
          {
            "language_code": "ay",
            "language_names": [
              "Aymara"
            ]
          }
        ]
      },
      {
        "country_name": "Philippines",
        "country_code": "PH",
        "country_code_long": "PHL",
        "languages_codes_and_names": [
          "Filipino",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Poland",
        "country_code": "PL",
        "country_code_long": "POL",
        "languages_codes_and_names": [
          {
            "language_code": "pl",
            "language_names": [
              "Polish"
            ]
          }
        ]
      },
      {
        "country_name": "Portugal",
        "country_code": "PT",
        "country_code_long": "PRT",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Qatar",
        "country_code": "QA",
        "country_code_long": "QAT",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Romania",
        "country_code": "RO",
        "country_code_long": "ROU",
        "languages_codes_and_names": [
          {
            "language_code": "ro",
            "language_names": [
              "Romanian"
            ]
          }
        ]
      },
      {
        "country_name": "Russia",
        "country_code": "RU",
        "country_code_long": "RUS",
        "languages_codes_and_names": [
          {
            "language_code": "ru",
            "language_names": [
              "Russian"
            ]
          }
        ]
      },
      {
        "country_name": "Rwanda",
        "country_code": "RW",
        "country_code_long": "RWA",
        "languages_codes_and_names": [
          {
            "language_code": "rw",
            "language_names": [
              "Kinyarwanda",
              "Rwanda"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Saint Kitts and Nevis",
        "country_code": "KN",
        "country_code_long": "KNA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Saint Lucia",
        "country_code": "LC",
        "country_code_long": "LCA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Saint Vincent and the Grenadines",
        "country_code": "VC",
        "country_code_long": "VCT",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Samoa",
        "country_code": "WS",
        "country_code_long": "WSM",
        "languages_codes_and_names": [
          {
            "language_code": "sm",
            "language_names": [
              "Samoan"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "San Marino",
        "country_code": "SM",
        "country_code_long": "SMR",
        "languages_codes_and_names": [
          {
            "language_code": "it",
            "language_names": [
              "Italian"
            ]
          }
        ]
      },
      {
        "country_name": "Saudi Arabia",
        "country_code": "SA",
        "country_code_long": "SAU",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Senegal",
        "country_code": "SN",
        "country_code_long": "SEN",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Serbia",
        "country_code": "RS",
        "country_code_long": "SRB",
        "languages_codes_and_names": [
          {
            "language_code": "sr",
            "language_names": [
              "Serbian"
            ]
          }
        ]
      },
      {
        "country_name": "Seychelles",
        "country_code": "SC",
        "country_code_long": "SYC",
        "languages_codes_and_names": [
          "Seychellois Creole",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Sierra Leone",
        "country_code": "SL",
        "country_code_long": "SLE",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Singapore",
        "country_code": "SG",
        "country_code_long": "SGP",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "ms",
            "language_names": [
              "Malay"
            ]
          },
          "Mandarin",
          {
            "language_code": "ta",
            "language_names": [
              "Tamil"
            ]
          }
        ]
      },
      {
        "country_name": "Slovakia",
        "country_code": "SK",
        "country_code_long": "SVK",
        "languages_codes_and_names": [
          {
            "language_code": "sk",
            "language_names": [
              "Slovak"
            ]
          }
        ]
      },
      {
        "country_name": "Slovenia",
        "country_code": "SI",
        "country_code_long": "SVN",
        "languages_codes_and_names": [
          {
            "language_code": "sl",
            "language_names": [
              "Slovenian"
            ]
          }
        ]
      },
      {
        "country_name": "Solomon Islands",
        "country_code": "SB",
        "country_code_long": "SLB",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Somalia",
        "country_code": "SO",
        "country_code_long": "SOM",
        "languages_codes_and_names": [
          {
            "language_code": "so",
            "language_names": [
              "Somali"
            ]
          },
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "South Africa",
        "country_code": "ZA",
        "country_code_long": "ZAF",
        "languages_codes_and_names": [
          {
            "language_code": "af",
            "language_names": [
              "Afrikaans"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "zu",
            "language_names": [
              "Zulu"
            ]
          },
          {
            "language_code": "xh",
            "language_names": [
              "Xhosa"
            ]
          },
          "others"
        ]
      },
      {
        "country_name": "Spain",
        "country_code": "ES",
        "country_code_long": "ESP",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Sri Lanka",
        "country_code": "LK",
        "country_code_long": "LKA",
        "languages_codes_and_names": [
          "Sinhala",
          {
            "language_code": "ta",
            "language_names": [
              "Tamil"
            ]
          }
        ]
      },
      {
        "country_name": "Sudan",
        "country_code": "SD",
        "country_code_long": "SDN",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Suriname",
        "country_code": "SR",
        "country_code_long": "SUR",
        "languages_codes_and_names": [
          {
            "language_code": "nl",
            "language_names": [
              "Dutch"
            ]
          }
        ]
      },
      {
        "country_name": "Sweden",
        "country_code": "SE",
        "country_code_long": "SWE",
        "languages_codes_and_names": [
          {
            "language_code": "sv",
            "language_names": [
              "Swedish"
            ]
          }
        ]
      },
      {
        "country_name": "Switzerland",
        "country_code": "CH",
        "country_code_long": "CHE",
        "languages_codes_and_names": [
          {
            "language_code": "de",
            "language_names": [
              "German"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          },
          {
            "language_code": "it",
            "language_names": [
              "Italian"
            ]
          },
          {
            "language_code": "rm",
            "language_names": [
              "Romansh"
            ]
          }
        ]
      },
      {
        "country_name": "Syria",
        "country_code": "SY",
        "country_code_long": "SYR",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "São Tomé and Príncipe",
        "country_code": "ST",
        "country_code_long": "STP",
        "languages_codes_and_names": [
          {
            "language_code": "pt",
            "language_names": [
              "Portuguese"
            ]
          }
        ]
      },
      {
        "country_name": "Tajikistan",
        "country_code": "TJ",
        "country_code_long": "TJK",
        "languages_codes_and_names": [
          {
            "language_code": "tg",
            "language_names": [
              "Tajik"
            ]
          }
        ]
      },
      {
        "country_name": "Tanzania",
        "country_code": "TZ",
        "country_code_long": "TZA",
        "languages_codes_and_names": [
          {
            "language_code": "sw",
            "language_names": [
              "Swahili",
              "Kiswahili"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Thailand",
        "country_code": "TH",
        "country_code_long": "THA",
        "languages_codes_and_names": [
          {
            "language_code": "th",
            "language_names": [
              "Thai"
            ]
          }
        ]
      },
      {
        "country_name": "The Gambia",
        "country_code": "GM",
        "country_code_long": "GMB",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Togo",
        "country_code": "TG",
        "country_code_long": "TGO",
        "languages_codes_and_names": [
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Tonga",
        "country_code": "TO",
        "country_code_long": "TON",
        "languages_codes_and_names": [
          "Tongan",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Trinidad and Tobago",
        "country_code": "TT",
        "country_code_long": "TTO",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Tunisia",
        "country_code": "TN",
        "country_code_long": "TUN",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Turkey",
        "country_code": "TR",
        "country_code_long": "TUR",
        "languages_codes_and_names": [
          {
            "language_code": "tr",
            "language_names": [
              "Turkish"
            ]
          }
        ]
      },
      {
        "country_name": "Turkmenistan",
        "country_code": "TM",
        "country_code_long": "TKM",
        "languages_codes_and_names": [
          {
            "language_code": "tk",
            "language_names": [
              "Turkmen"
            ]
          }
        ]
      },
      {
        "country_name": "Tuvalu",
        "country_code": "TV",
        "country_code_long": "TUV",
        "languages_codes_and_names": [
          "Tuvaluan",
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Uganda",
        "country_code": "UG",
        "country_code_long": "UGA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "sw",
            "language_names": [
              "Swahili",
              "Kiswahili"
            ]
          }
        ]
      },
      {
        "country_name": "Ukraine",
        "country_code": "UA",
        "country_code_long": "UKR",
        "languages_codes_and_names": [
          {
            "language_code": "uk",
            "language_names": [
              "Ukrainian"
            ]
          }
        ]
      },
      {
        "country_name": "United Arab Emirates",
        "country_code": "AE",
        "country_code_long": "ARE",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "United Kingdom of Great Britain and Northern Ireland",
        "country_code": "GB",
        "country_code_long": "GBR",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "United States of America",
        "country_code": "US",
        "country_code_long": "USA",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Uruguay",
        "country_code": "UY",
        "country_code_long": "URY",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Uzbekistan",
        "country_code": "UZ",
        "country_code_long": "UZB",
        "languages_codes_and_names": [
          {
            "language_code": "uz",
            "language_names": [
              "Uzbek"
            ]
          }
        ]
      },
      {
        "country_name": "Vanuatu",
        "country_code": "VU",
        "country_code_long": "VUT",
        "languages_codes_and_names": [
          {
            "language_code": "bi",
            "language_names": [
              "Bislama"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "fr",
            "language_names": [
              "French"
            ]
          }
        ]
      },
      {
        "country_name": "Vatican",
        "country_code": "VA",
        "country_code_long": "VAT",
        "languages_codes_and_names": [
          {
            "language_code": "it",
            "language_names": [
              "Italian"
            ]
          },
          {
            "language_code": "la",
            "language_names": [
              "Latin"
            ]
          }
        ]
      },
      {
        "country_name": "Venezuela",
        "country_code": "VE",
        "country_code_long": "VEN",
        "languages_codes_and_names": [
          {
            "language_code": "es",
            "language_names": [
              "Spanish"
            ]
          }
        ]
      },
      {
        "country_name": "Vietnam",
        "country_code": "VN",
        "country_code_long": "VNM",
        "languages_codes_and_names": [
          {
            "language_code": "vi",
            "language_names": [
              "Vietnamese"
            ]
          }
        ]
      },
      {
        "country_name": "Yemen",
        "country_code": "YE",
        "country_code_long": "YEM",
        "languages_codes_and_names": [
          {
            "language_code": "ar",
            "language_names": [
              "Arabic"
            ]
          }
        ]
      },
      {
        "country_name": "Zambia",
        "country_code": "ZM",
        "country_code_long": "ZMB",
        "languages_codes_and_names": [
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          }
        ]
      },
      {
        "country_name": "Zimbabwe",
        "country_code": "ZW",
        "country_code_long": "ZWE",
        "languages_codes_and_names": [
          {
            "language_code": "ny",
            "language_names": [
              "Chichewa",
              "Chewa",
              "Nyanja"
            ]
          },
          {
            "language_code": "cib",
            "language_names": [
              "Chibarwe"
            ]
          },
          {
            "language_code": "en",
            "language_names": [
              "English"
            ]
          },
          {
            "language_code": "kck",
            "language_names": [
              "Kalanga"
            ]
          },
          {
            "language_code": "xam",
            "language_names": [
              "Koisan",
              "Khoisan"
            ]
          },
          {
            "language_code": "nmq",
            "language_names": [
              "Nambya"
            ]
          },
          {
            "language_code": "ndc",
            "language_names": [
              "Ndau"
            ]
          },
          {
            "language_code": "nde",
            "language_names": [
              "Ndebele",
              "Sindebele",
              "Northern Ndebele"
            ]
          },
          {
            "language_code": "shg",
            "language_names": [
              "Shangani",
              "Tsonga-Shangani"
            ]
          },
          {
            "language_code": "sn",
            "language_names": [
              "Shona"
            ]
          },
          {
            "language_code": "st",
            "language_names": [
              "Sotho",
              "Southern Sotho"
            ]
          },
          {
            "language_code": "to",
            "language_names": [
              "Tonga"
            ]
          },
          {
            "language_code": "tn",
            "language_names": [
              "Tswana",
              "Setswana"
            ]
          },
          {
            "language_code": "ve",
            "language_names": [
              "Venda"
            ]
          },
          {
            "language_code": "xh",
            "language_names": [
              "Xhosa"
            ]
          },
          {
            "language_code": "zsl",
            "language_names": [
              "Zimbabwean Sign Language"
            ]
          }
        ]
      }
    ];


    let orderedByCountryNameRewrittenData = locData.sort(
      (a: any, b: any) => {

        if ( a.country_name === b.country_name ) {
          return 0;
        }


        return ( a.country_name > b.country_name ) ? (1) : (-1);
      }
    );


    return orderedByCountryNameRewrittenData;

  }

}



