import { DatasetBase } from "@jaisocx/cdn-datasets-base";
export class LanguagesCodes extends DatasetBase {
    static _singletonInstance;
    constructor() {
        super();
        this._data = this.initData();
    }
    static getSingletonInstance() {
        if (LanguagesCodes._singletonInstance === undefined) {
            LanguagesCodes._singletonInstance = new LanguagesCodes();
        }
        return LanguagesCodes._singletonInstance;
    }
    getLanguagesCodes() {
        return this._data;
    }
    getLanguagesCodesIndexedByKeys(key) {
        return this.getDataIndexedByKeys(key);
    }
    saveLanguagesCodes(inFilePath) {
        let locSaved = this.saveData(inFilePath, this._data);
        return locSaved;
    }
    saveLanguagesCodesIndexedByKeys(key, inFilePath) {
        let locSaved = this.saveDataIndexedByKeys(key, inFilePath);
        return locSaved;
    }
    initData() {
        let locData = [
            {
                "language_code": "aa",
                "language_names": [
                    "Afar"
                ],
                "countries": []
            },
            {
                "language_code": "ab",
                "language_names": [
                    "Abkhazian"
                ],
                "countries": []
            },
            {
                "language_code": "ae",
                "language_names": [
                    "Avestan"
                ],
                "countries": []
            },
            {
                "language_code": "af",
                "language_names": [
                    "Afrikaans"
                ],
                "countries": [
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    }
                ]
            },
            {
                "language_code": "ak",
                "language_names": [
                    "Akan"
                ],
                "countries": []
            },
            {
                "language_code": "am",
                "language_names": [
                    "Amharic"
                ],
                "countries": [
                    {
                        "country_name": "Ethiopia",
                        "country_code": "ET",
                        "country_code_long": "ETH"
                    }
                ]
            },
            {
                "language_code": "an",
                "language_names": [
                    "Aragonese"
                ],
                "countries": []
            },
            {
                "language_code": "ar",
                "language_names": [
                    "Arabic"
                ],
                "countries": [
                    {
                        "country_name": "Algeria",
                        "country_code": "DZ",
                        "country_code_long": "DZA"
                    },
                    {
                        "country_name": "Bahrain",
                        "country_code": "BH",
                        "country_code_long": "BHR"
                    },
                    {
                        "country_name": "Chad",
                        "country_code": "TD",
                        "country_code_long": "TCD"
                    },
                    {
                        "country_name": "Comoros",
                        "country_code": "KM",
                        "country_code_long": "COM"
                    },
                    {
                        "country_name": "Djibouti",
                        "country_code": "DJ",
                        "country_code_long": "DJI"
                    },
                    {
                        "country_name": "Egypt",
                        "country_code": "EG",
                        "country_code_long": "EGY"
                    },
                    {
                        "country_name": "Eritrea",
                        "country_code": "ER",
                        "country_code_long": "ERI"
                    },
                    {
                        "country_name": "Iraq",
                        "country_code": "IQ",
                        "country_code_long": "IRQ"
                    },
                    {
                        "country_name": "Israel",
                        "country_code": "IL",
                        "country_code_long": "ISR"
                    },
                    {
                        "country_name": "Jordan",
                        "country_code": "JO",
                        "country_code_long": "JOR"
                    },
                    {
                        "country_name": "Kuwait",
                        "country_code": "KW",
                        "country_code_long": "KWT"
                    },
                    {
                        "country_name": "Lebanon",
                        "country_code": "LB",
                        "country_code_long": "LBN"
                    },
                    {
                        "country_name": "Libya",
                        "country_code": "LY",
                        "country_code_long": "LBY"
                    },
                    {
                        "country_name": "Mauritania",
                        "country_code": "MR",
                        "country_code_long": "MRT"
                    },
                    {
                        "country_name": "Morocco",
                        "country_code": "MA",
                        "country_code_long": "MAR"
                    },
                    {
                        "country_name": "Oman",
                        "country_code": "OM",
                        "country_code_long": "OMN"
                    },
                    {
                        "country_name": "Qatar",
                        "country_code": "QA",
                        "country_code_long": "QAT"
                    },
                    {
                        "country_name": "Saudi Arabia",
                        "country_code": "SA",
                        "country_code_long": "SAU"
                    },
                    {
                        "country_name": "Somalia",
                        "country_code": "SO",
                        "country_code_long": "SOM"
                    },
                    {
                        "country_name": "Sudan",
                        "country_code": "SD",
                        "country_code_long": "SDN"
                    },
                    {
                        "country_name": "Syria",
                        "country_code": "SY",
                        "country_code_long": "SYR"
                    },
                    {
                        "country_name": "Tunisia",
                        "country_code": "TN",
                        "country_code_long": "TUN"
                    },
                    {
                        "country_name": "United Arab Emirates",
                        "country_code": "AE",
                        "country_code_long": "ARE"
                    },
                    {
                        "country_name": "Yemen",
                        "country_code": "YE",
                        "country_code_long": "YEM"
                    }
                ]
            },
            {
                "language_code": "as",
                "language_names": [
                    "Assamese"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "as",
                "language_names": [
                    "Assamese"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "av",
                "language_names": [
                    "Avaric"
                ],
                "countries": []
            },
            {
                "language_code": "ay",
                "language_names": [
                    "Aymara"
                ],
                "countries": [
                    {
                        "country_name": "Bolivia",
                        "country_code": "BO",
                        "country_code_long": "BOL"
                    },
                    {
                        "country_name": "Peru",
                        "country_code": "PE",
                        "country_code_long": "PER"
                    }
                ]
            },
            {
                "language_code": "az",
                "language_names": [
                    "Azerbaijani"
                ],
                "countries": [
                    {
                        "country_name": "Azerbaijan",
                        "country_code": "AZ",
                        "country_code_long": "AZE"
                    }
                ]
            },
            {
                "language_code": "ba",
                "language_names": [
                    "Bashkir"
                ],
                "countries": []
            },
            {
                "language_code": "be",
                "language_names": [
                    "Belarusian"
                ],
                "countries": [
                    {
                        "country_name": "Belarus",
                        "country_code": "BY",
                        "country_code_long": "BLR"
                    }
                ]
            },
            {
                "language_code": "bg",
                "language_names": [
                    "Bulgarian"
                ],
                "countries": [
                    {
                        "country_name": "Bulgaria",
                        "country_code": "BG",
                        "country_code_long": "BGR"
                    }
                ]
            },
            {
                "language_code": "bh",
                "language_names": [
                    "Bihari"
                ],
                "countries": []
            },
            {
                "language_code": "bi",
                "language_names": [
                    "Bislama"
                ],
                "countries": [
                    {
                        "country_name": "Vanuatu",
                        "country_code": "VU",
                        "country_code_long": "VUT"
                    }
                ]
            },
            {
                "language_code": "bm",
                "language_names": [
                    "Bambara"
                ],
                "countries": []
            },
            {
                "language_code": "bn",
                "language_names": [
                    "Bengali",
                    "Bangla"
                ],
                "countries": [
                    {
                        "country_name": "Bangladesh",
                        "country_code": "BD",
                        "country_code_long": "BGD"
                    },
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "bn",
                "language_names": [
                    "Bengali",
                    "Bangla"
                ],
                "countries": [
                    {
                        "country_name": "Bangladesh",
                        "country_code": "BD",
                        "country_code_long": "BGD"
                    },
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "bo",
                "language_names": [
                    "Tibetan"
                ],
                "countries": []
            },
            {
                "language_code": "br",
                "language_names": [
                    "Breton"
                ],
                "countries": []
            },
            {
                "language_code": "brx",
                "language_names": [
                    "Bodo"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "bs",
                "language_names": [
                    "Bosnian"
                ],
                "countries": [
                    {
                        "country_name": "Bosnia and Herzegovina",
                        "country_code": "BA",
                        "country_code_long": "BIH"
                    }
                ]
            },
            {
                "language_code": "ca",
                "language_names": [
                    "Catalan"
                ],
                "countries": [
                    {
                        "country_name": "Andorra",
                        "country_code": "AD",
                        "country_code_long": "AND"
                    }
                ]
            },
            {
                "language_code": "ce",
                "language_names": [
                    "Chechen"
                ],
                "countries": []
            },
            {
                "language_code": "ch",
                "language_names": [
                    "Chamorro"
                ],
                "countries": []
            },
            {
                "language_code": "cib",
                "language_names": [
                    "Chibarwe"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "co",
                "language_names": [
                    "Corsican"
                ],
                "countries": []
            },
            {
                "language_code": "cr",
                "language_names": [
                    "Cree"
                ],
                "countries": []
            },
            {
                "language_code": "cs",
                "language_names": [
                    "Czech"
                ],
                "countries": [
                    {
                        "country_name": "Czech Republic",
                        "country_code": "CZ",
                        "country_code_long": "CZE"
                    }
                ]
            },
            {
                "language_code": "cu",
                "language_names": [
                    "Old Church Slavonic",
                    "Old Bulgarian"
                ],
                "countries": []
            },
            {
                "language_code": "cv",
                "language_names": [
                    "Chuvash"
                ],
                "countries": []
            },
            {
                "language_code": "cy",
                "language_names": [
                    "Welsh"
                ],
                "countries": []
            },
            {
                "language_code": "da",
                "language_names": [
                    "Danish"
                ],
                "countries": [
                    {
                        "country_name": "Denmark",
                        "country_code": "DK",
                        "country_code_long": "DNK"
                    }
                ]
            },
            {
                "language_code": "de",
                "language_names": [
                    "German"
                ],
                "countries": [
                    {
                        "country_name": "Austria",
                        "country_code": "AT",
                        "country_code_long": "AUT"
                    },
                    {
                        "country_name": "Belgium",
                        "country_code": "BE",
                        "country_code_long": "BEL"
                    },
                    {
                        "country_name": "Germany",
                        "country_code": "DE",
                        "country_code_long": "DEU"
                    },
                    {
                        "country_name": "Liechtenstein",
                        "country_code": "LI",
                        "country_code_long": "LIE"
                    },
                    {
                        "country_name": "Luxembourg",
                        "country_code": "LU",
                        "country_code_long": "LUX"
                    },
                    {
                        "country_name": "Switzerland",
                        "country_code": "CH",
                        "country_code_long": "CHE"
                    }
                ]
            },
            {
                "language_code": "doi",
                "language_names": [
                    "Dogri"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "dv",
                "language_names": [
                    "Divehi",
                    "Dhivehi",
                    "Maldivian"
                ],
                "countries": [
                    {
                        "country_name": "Maldives",
                        "country_code": "MV",
                        "country_code_long": "MDV"
                    }
                ]
            },
            {
                "language_code": "dz",
                "language_names": [
                    "Dzongkha"
                ],
                "countries": [
                    {
                        "country_name": "Bhutan",
                        "country_code": "BT",
                        "country_code_long": "BTN"
                    }
                ]
            },
            {
                "language_code": "ee",
                "language_names": [
                    "Ewe"
                ],
                "countries": []
            },
            {
                "language_code": "el",
                "language_names": [
                    "Greek"
                ],
                "countries": [
                    {
                        "country_name": "Cyprus",
                        "country_code": "CY",
                        "country_code_long": "CYP"
                    },
                    {
                        "country_name": "Greece",
                        "country_code": "GR",
                        "country_code_long": "GRC"
                    }
                ]
            },
            {
                "language_code": "en",
                "language_names": [
                    "English"
                ],
                "countries": [
                    {
                        "country_name": "Antigua and Barbuda",
                        "country_code": "AG",
                        "country_code_long": "ATG"
                    },
                    {
                        "country_name": "Australia",
                        "country_code": "AU",
                        "country_code_long": "AUS"
                    },
                    {
                        "country_name": "Bahamas",
                        "country_code": "BS",
                        "country_code_long": "BHS"
                    },
                    {
                        "country_name": "Barbados",
                        "country_code": "BB",
                        "country_code_long": "BRB"
                    },
                    {
                        "country_name": "Belize",
                        "country_code": "BZ",
                        "country_code_long": "BLZ"
                    },
                    {
                        "country_name": "Botswana",
                        "country_code": "BW",
                        "country_code_long": "BWA"
                    },
                    {
                        "country_name": "Burundi",
                        "country_code": "BI",
                        "country_code_long": "BDI"
                    },
                    {
                        "country_name": "Cameroon",
                        "country_code": "CM",
                        "country_code_long": "CMR"
                    },
                    {
                        "country_name": "Canada",
                        "country_code": "CA",
                        "country_code_long": "CAN"
                    },
                    {
                        "country_name": "Dominica",
                        "country_code": "DM",
                        "country_code_long": "DMA"
                    },
                    {
                        "country_name": "Eritrea",
                        "country_code": "ER",
                        "country_code_long": "ERI"
                    },
                    {
                        "country_name": "Eswatini",
                        "country_code": "SZ",
                        "country_code_long": "SWZ"
                    },
                    {
                        "country_name": "Fiji",
                        "country_code": "FJ",
                        "country_code_long": "FJI"
                    },
                    {
                        "country_name": "Ghana",
                        "country_code": "GH",
                        "country_code_long": "GHA"
                    },
                    {
                        "country_name": "Grenada",
                        "country_code": "GD",
                        "country_code_long": "GRD"
                    },
                    {
                        "country_name": "Guyana",
                        "country_code": "GY",
                        "country_code_long": "GUY"
                    },
                    {
                        "country_name": "Ireland",
                        "country_code": "IE",
                        "country_code_long": "IRL"
                    },
                    {
                        "country_name": "Jamaica",
                        "country_code": "JM",
                        "country_code_long": "JAM"
                    },
                    {
                        "country_name": "Kenya",
                        "country_code": "KE",
                        "country_code_long": "KEN"
                    },
                    {
                        "country_name": "Kiribati",
                        "country_code": "KI",
                        "country_code_long": "KIR"
                    },
                    {
                        "country_name": "Lesotho",
                        "country_code": "LS",
                        "country_code_long": "LSO"
                    },
                    {
                        "country_name": "Liberia",
                        "country_code": "LR",
                        "country_code_long": "LBR"
                    },
                    {
                        "country_name": "Malawi",
                        "country_code": "MW",
                        "country_code_long": "MWI"
                    },
                    {
                        "country_name": "Malta",
                        "country_code": "MT",
                        "country_code_long": "MLT"
                    },
                    {
                        "country_name": "Marshall Islands",
                        "country_code": "MH",
                        "country_code_long": "MHL"
                    },
                    {
                        "country_name": "Mauritius",
                        "country_code": "MU",
                        "country_code_long": "MUS"
                    },
                    {
                        "country_name": "Micronesia",
                        "country_code": "FM",
                        "country_code_long": "FSM"
                    },
                    {
                        "country_name": "Namibia",
                        "country_code": "NA",
                        "country_code_long": "NAM"
                    },
                    {
                        "country_name": "Nauru",
                        "country_code": "NR",
                        "country_code_long": "NRU"
                    },
                    {
                        "country_name": "New Zealand",
                        "country_code": "NZ",
                        "country_code_long": "NZL"
                    },
                    {
                        "country_name": "Nigeria",
                        "country_code": "NG",
                        "country_code_long": "NGA"
                    },
                    {
                        "country_name": "Pakistan",
                        "country_code": "PK",
                        "country_code_long": "PAK"
                    },
                    {
                        "country_name": "Palau",
                        "country_code": "PW",
                        "country_code_long": "PLW"
                    },
                    {
                        "country_name": "Papua New Guinea",
                        "country_code": "PG",
                        "country_code_long": "PNG"
                    },
                    {
                        "country_name": "Philippines",
                        "country_code": "PH",
                        "country_code_long": "PHL"
                    },
                    {
                        "country_name": "Rwanda",
                        "country_code": "RW",
                        "country_code_long": "RWA"
                    },
                    {
                        "country_name": "Saint Kitts and Nevis",
                        "country_code": "KN",
                        "country_code_long": "KNA"
                    },
                    {
                        "country_name": "Saint Lucia",
                        "country_code": "LC",
                        "country_code_long": "LCA"
                    },
                    {
                        "country_name": "Saint Vincent and the Grenadines",
                        "country_code": "VC",
                        "country_code_long": "VCT"
                    },
                    {
                        "country_name": "Samoa",
                        "country_code": "WS",
                        "country_code_long": "WSM"
                    },
                    {
                        "country_name": "Seychelles",
                        "country_code": "SC",
                        "country_code_long": "SYC"
                    },
                    {
                        "country_name": "Sierra Leone",
                        "country_code": "SL",
                        "country_code_long": "SLE"
                    },
                    {
                        "country_name": "Singapore",
                        "country_code": "SG",
                        "country_code_long": "SGP"
                    },
                    {
                        "country_name": "Solomon Islands",
                        "country_code": "SB",
                        "country_code_long": "SLB"
                    },
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    },
                    {
                        "country_name": "Sudan",
                        "country_code": "SD",
                        "country_code_long": "SDN"
                    },
                    {
                        "country_name": "Tanzania",
                        "country_code": "TZ",
                        "country_code_long": "TZA"
                    },
                    {
                        "country_name": "Tonga",
                        "country_code": "TO",
                        "country_code_long": "TON"
                    },
                    {
                        "country_name": "Trinidad and Tobago",
                        "country_code": "TT",
                        "country_code_long": "TTO"
                    },
                    {
                        "country_name": "Tuvalu",
                        "country_code": "TV",
                        "country_code_long": "TUV"
                    },
                    {
                        "country_name": "Uganda",
                        "country_code": "UG",
                        "country_code_long": "UGA"
                    },
                    {
                        "country_name": "United Kingdom of Great Britain and Northern Ireland",
                        "country_code": "GB",
                        "country_code_long": "GBR"
                    },
                    {
                        "country_name": "United States of America",
                        "country_code": "US",
                        "country_code_long": "USA"
                    },
                    {
                        "country_name": "Vanuatu",
                        "country_code": "VU",
                        "country_code_long": "VUT"
                    },
                    {
                        "country_name": "Zambia",
                        "country_code": "ZM",
                        "country_code_long": "ZMB"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "en",
                "language_names": [
                    "English"
                ],
                "countries": [
                    {
                        "country_name": "Antigua and Barbuda",
                        "country_code": "AG",
                        "country_code_long": "ATG"
                    },
                    {
                        "country_name": "Australia",
                        "country_code": "AU",
                        "country_code_long": "AUS"
                    },
                    {
                        "country_name": "Bahamas",
                        "country_code": "BS",
                        "country_code_long": "BHS"
                    },
                    {
                        "country_name": "Barbados",
                        "country_code": "BB",
                        "country_code_long": "BRB"
                    },
                    {
                        "country_name": "Belize",
                        "country_code": "BZ",
                        "country_code_long": "BLZ"
                    },
                    {
                        "country_name": "Botswana",
                        "country_code": "BW",
                        "country_code_long": "BWA"
                    },
                    {
                        "country_name": "Burundi",
                        "country_code": "BI",
                        "country_code_long": "BDI"
                    },
                    {
                        "country_name": "Cameroon",
                        "country_code": "CM",
                        "country_code_long": "CMR"
                    },
                    {
                        "country_name": "Canada",
                        "country_code": "CA",
                        "country_code_long": "CAN"
                    },
                    {
                        "country_name": "Dominica",
                        "country_code": "DM",
                        "country_code_long": "DMA"
                    },
                    {
                        "country_name": "Eritrea",
                        "country_code": "ER",
                        "country_code_long": "ERI"
                    },
                    {
                        "country_name": "Eswatini",
                        "country_code": "SZ",
                        "country_code_long": "SWZ"
                    },
                    {
                        "country_name": "Fiji",
                        "country_code": "FJ",
                        "country_code_long": "FJI"
                    },
                    {
                        "country_name": "Ghana",
                        "country_code": "GH",
                        "country_code_long": "GHA"
                    },
                    {
                        "country_name": "Grenada",
                        "country_code": "GD",
                        "country_code_long": "GRD"
                    },
                    {
                        "country_name": "Guyana",
                        "country_code": "GY",
                        "country_code_long": "GUY"
                    },
                    {
                        "country_name": "Ireland",
                        "country_code": "IE",
                        "country_code_long": "IRL"
                    },
                    {
                        "country_name": "Jamaica",
                        "country_code": "JM",
                        "country_code_long": "JAM"
                    },
                    {
                        "country_name": "Kenya",
                        "country_code": "KE",
                        "country_code_long": "KEN"
                    },
                    {
                        "country_name": "Kiribati",
                        "country_code": "KI",
                        "country_code_long": "KIR"
                    },
                    {
                        "country_name": "Lesotho",
                        "country_code": "LS",
                        "country_code_long": "LSO"
                    },
                    {
                        "country_name": "Liberia",
                        "country_code": "LR",
                        "country_code_long": "LBR"
                    },
                    {
                        "country_name": "Malawi",
                        "country_code": "MW",
                        "country_code_long": "MWI"
                    },
                    {
                        "country_name": "Malta",
                        "country_code": "MT",
                        "country_code_long": "MLT"
                    },
                    {
                        "country_name": "Marshall Islands",
                        "country_code": "MH",
                        "country_code_long": "MHL"
                    },
                    {
                        "country_name": "Mauritius",
                        "country_code": "MU",
                        "country_code_long": "MUS"
                    },
                    {
                        "country_name": "Micronesia",
                        "country_code": "FM",
                        "country_code_long": "FSM"
                    },
                    {
                        "country_name": "Namibia",
                        "country_code": "NA",
                        "country_code_long": "NAM"
                    },
                    {
                        "country_name": "Nauru",
                        "country_code": "NR",
                        "country_code_long": "NRU"
                    },
                    {
                        "country_name": "New Zealand",
                        "country_code": "NZ",
                        "country_code_long": "NZL"
                    },
                    {
                        "country_name": "Nigeria",
                        "country_code": "NG",
                        "country_code_long": "NGA"
                    },
                    {
                        "country_name": "Pakistan",
                        "country_code": "PK",
                        "country_code_long": "PAK"
                    },
                    {
                        "country_name": "Palau",
                        "country_code": "PW",
                        "country_code_long": "PLW"
                    },
                    {
                        "country_name": "Papua New Guinea",
                        "country_code": "PG",
                        "country_code_long": "PNG"
                    },
                    {
                        "country_name": "Philippines",
                        "country_code": "PH",
                        "country_code_long": "PHL"
                    },
                    {
                        "country_name": "Rwanda",
                        "country_code": "RW",
                        "country_code_long": "RWA"
                    },
                    {
                        "country_name": "Saint Kitts and Nevis",
                        "country_code": "KN",
                        "country_code_long": "KNA"
                    },
                    {
                        "country_name": "Saint Lucia",
                        "country_code": "LC",
                        "country_code_long": "LCA"
                    },
                    {
                        "country_name": "Saint Vincent and the Grenadines",
                        "country_code": "VC",
                        "country_code_long": "VCT"
                    },
                    {
                        "country_name": "Samoa",
                        "country_code": "WS",
                        "country_code_long": "WSM"
                    },
                    {
                        "country_name": "Seychelles",
                        "country_code": "SC",
                        "country_code_long": "SYC"
                    },
                    {
                        "country_name": "Sierra Leone",
                        "country_code": "SL",
                        "country_code_long": "SLE"
                    },
                    {
                        "country_name": "Singapore",
                        "country_code": "SG",
                        "country_code_long": "SGP"
                    },
                    {
                        "country_name": "Solomon Islands",
                        "country_code": "SB",
                        "country_code_long": "SLB"
                    },
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    },
                    {
                        "country_name": "Sudan",
                        "country_code": "SD",
                        "country_code_long": "SDN"
                    },
                    {
                        "country_name": "Tanzania",
                        "country_code": "TZ",
                        "country_code_long": "TZA"
                    },
                    {
                        "country_name": "Tonga",
                        "country_code": "TO",
                        "country_code_long": "TON"
                    },
                    {
                        "country_name": "Trinidad and Tobago",
                        "country_code": "TT",
                        "country_code_long": "TTO"
                    },
                    {
                        "country_name": "Tuvalu",
                        "country_code": "TV",
                        "country_code_long": "TUV"
                    },
                    {
                        "country_name": "Uganda",
                        "country_code": "UG",
                        "country_code_long": "UGA"
                    },
                    {
                        "country_name": "United Kingdom of Great Britain and Northern Ireland",
                        "country_code": "GB",
                        "country_code_long": "GBR"
                    },
                    {
                        "country_name": "United States of America",
                        "country_code": "US",
                        "country_code_long": "USA"
                    },
                    {
                        "country_name": "Vanuatu",
                        "country_code": "VU",
                        "country_code_long": "VUT"
                    },
                    {
                        "country_name": "Zambia",
                        "country_code": "ZM",
                        "country_code_long": "ZMB"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "eo",
                "language_names": [
                    "Esperanto"
                ],
                "countries": []
            },
            {
                "language_code": "es",
                "language_names": [
                    "Spanish"
                ],
                "countries": [
                    {
                        "country_name": "Argentina",
                        "country_code": "AR",
                        "country_code_long": "ARG"
                    },
                    {
                        "country_name": "Bolivia",
                        "country_code": "BO",
                        "country_code_long": "BOL"
                    },
                    {
                        "country_name": "Chile",
                        "country_code": "CL",
                        "country_code_long": "CHL"
                    },
                    {
                        "country_name": "Costa Rica",
                        "country_code": "CR",
                        "country_code_long": "CRI"
                    },
                    {
                        "country_name": "Cuba",
                        "country_code": "CU",
                        "country_code_long": "CUB"
                    },
                    {
                        "country_name": "Dominican Republic",
                        "country_code": "DO",
                        "country_code_long": "DOM"
                    },
                    {
                        "country_name": "Ecuador",
                        "country_code": "EC",
                        "country_code_long": "ECU"
                    },
                    {
                        "country_name": "El Salvador",
                        "country_code": "SV",
                        "country_code_long": "SLV"
                    },
                    {
                        "country_name": "Equatorial Guinea",
                        "country_code": "GQ",
                        "country_code_long": "GNQ"
                    },
                    {
                        "country_name": "Guatemala",
                        "country_code": "GT",
                        "country_code_long": "GTM"
                    },
                    {
                        "country_name": "Honduras",
                        "country_code": "HN",
                        "country_code_long": "HND"
                    },
                    {
                        "country_name": "Mexico",
                        "country_code": "MX",
                        "country_code_long": "MEX"
                    },
                    {
                        "country_name": "Nicaragua",
                        "country_code": "NI",
                        "country_code_long": "NIC"
                    },
                    {
                        "country_name": "Panama",
                        "country_code": "PA",
                        "country_code_long": "PAN"
                    },
                    {
                        "country_name": "Paraguay",
                        "country_code": "PY",
                        "country_code_long": "PRY"
                    },
                    {
                        "country_name": "Peru",
                        "country_code": "PE",
                        "country_code_long": "PER"
                    },
                    {
                        "country_name": "Spain",
                        "country_code": "ES",
                        "country_code_long": "ESP"
                    },
                    {
                        "country_name": "Uruguay",
                        "country_code": "UY",
                        "country_code_long": "URY"
                    },
                    {
                        "country_name": "Venezuela",
                        "country_code": "VE",
                        "country_code_long": "VEN"
                    }
                ]
            },
            {
                "language_code": "et",
                "language_names": [
                    "Estonian"
                ],
                "countries": [
                    {
                        "country_name": "Estonia",
                        "country_code": "EE",
                        "country_code_long": "EST"
                    }
                ]
            },
            {
                "language_code": "eu",
                "language_names": [
                    "Basque"
                ],
                "countries": []
            },
            {
                "language_code": "fa",
                "language_names": [
                    "Persian",
                    "Farsi"
                ],
                "countries": [
                    {
                        "country_name": "Iran",
                        "country_code": "IR",
                        "country_code_long": "IRN"
                    }
                ]
            },
            {
                "language_code": "fa-AF",
                "language_names": [
                    "Dari",
                    "Dari Persian",
                    "Afghan Persian"
                ],
                "countries": [
                    {
                        "country_name": "Afghanistan",
                        "country_code": "AF",
                        "country_code_long": "AFG"
                    }
                ]
            },
            {
                "language_code": "ff",
                "language_names": [
                    "Fula",
                    "Fulah",
                    "Pulaar",
                    "Pular"
                ],
                "countries": []
            },
            {
                "language_code": "fi",
                "language_names": [
                    "Finnish"
                ],
                "countries": [
                    {
                        "country_name": "Finland",
                        "country_code": "FI",
                        "country_code_long": "FIN"
                    }
                ]
            },
            {
                "language_code": "fj",
                "language_names": [
                    "Fijian"
                ],
                "countries": [
                    {
                        "country_name": "Fiji",
                        "country_code": "FJ",
                        "country_code_long": "FJI"
                    }
                ]
            },
            {
                "language_code": "fo",
                "language_names": [
                    "Faroese"
                ],
                "countries": []
            },
            {
                "language_code": "fr",
                "language_names": [
                    "French"
                ],
                "countries": [
                    {
                        "country_name": "Belgium",
                        "country_code": "BE",
                        "country_code_long": "BEL"
                    },
                    {
                        "country_name": "Benin",
                        "country_code": "BJ",
                        "country_code_long": "BEN"
                    },
                    {
                        "country_name": "Burkina Faso",
                        "country_code": "BF",
                        "country_code_long": "BFA"
                    },
                    {
                        "country_name": "Burundi",
                        "country_code": "BI",
                        "country_code_long": "BDI"
                    },
                    {
                        "country_name": "Cameroon",
                        "country_code": "CM",
                        "country_code_long": "CMR"
                    },
                    {
                        "country_name": "Canada",
                        "country_code": "CA",
                        "country_code_long": "CAN"
                    },
                    {
                        "country_name": "Central African Republic",
                        "country_code": "CF",
                        "country_code_long": "CAF"
                    },
                    {
                        "country_name": "Chad",
                        "country_code": "TD",
                        "country_code_long": "TCD"
                    },
                    {
                        "country_name": "Comoros",
                        "country_code": "KM",
                        "country_code_long": "COM"
                    },
                    {
                        "country_name": "Djibouti",
                        "country_code": "DJ",
                        "country_code_long": "DJI"
                    },
                    {
                        "country_name": "Equatorial Guinea",
                        "country_code": "GQ",
                        "country_code_long": "GNQ"
                    },
                    {
                        "country_name": "France",
                        "country_code": "FR",
                        "country_code_long": "FRA"
                    },
                    {
                        "country_name": "Gabon",
                        "country_code": "GA",
                        "country_code_long": "GAB"
                    },
                    {
                        "country_name": "Guinea",
                        "country_code": "GN",
                        "country_code_long": "GIN"
                    },
                    {
                        "country_name": "Haiti",
                        "country_code": "HT",
                        "country_code_long": "HTI"
                    },
                    {
                        "country_name": "Lebanon",
                        "country_code": "LB",
                        "country_code_long": "LBN"
                    },
                    {
                        "country_name": "Luxembourg",
                        "country_code": "LU",
                        "country_code_long": "LUX"
                    },
                    {
                        "country_name": "Madagascar",
                        "country_code": "MG",
                        "country_code_long": "MDG"
                    },
                    {
                        "country_name": "Mali",
                        "country_code": "ML",
                        "country_code_long": "MLI"
                    },
                    {
                        "country_name": "Mauritius",
                        "country_code": "MU",
                        "country_code_long": "MUS"
                    },
                    {
                        "country_name": "Monaco",
                        "country_code": "MC",
                        "country_code_long": "MCO"
                    },
                    {
                        "country_name": "Niger",
                        "country_code": "NE",
                        "country_code_long": "NER"
                    },
                    {
                        "country_name": "Rwanda",
                        "country_code": "RW",
                        "country_code_long": "RWA"
                    },
                    {
                        "country_name": "Senegal",
                        "country_code": "SN",
                        "country_code_long": "SEN"
                    },
                    {
                        "country_name": "Seychelles",
                        "country_code": "SC",
                        "country_code_long": "SYC"
                    },
                    {
                        "country_name": "Switzerland",
                        "country_code": "CH",
                        "country_code_long": "CHE"
                    },
                    {
                        "country_name": "Togo",
                        "country_code": "TG",
                        "country_code_long": "TGO"
                    },
                    {
                        "country_name": "Vanuatu",
                        "country_code": "VU",
                        "country_code_long": "VUT"
                    }
                ]
            },
            {
                "language_code": "fy",
                "language_names": [
                    "Western Frisian"
                ],
                "countries": []
            },
            {
                "language_code": "ga",
                "language_names": [
                    "Irish"
                ],
                "countries": [
                    {
                        "country_name": "Ireland",
                        "country_code": "IE",
                        "country_code_long": "IRL"
                    }
                ]
            },
            {
                "language_code": "gd",
                "language_names": [
                    "Gaelic",
                    "Scottish"
                ],
                "countries": []
            },
            {
                "language_code": "gl",
                "language_names": [
                    "Galician"
                ],
                "countries": []
            },
            {
                "language_code": "gn",
                "language_names": [
                    "Guarani"
                ],
                "countries": [
                    {
                        "country_name": "Paraguay",
                        "country_code": "PY",
                        "country_code_long": "PRY"
                    }
                ]
            },
            {
                "language_code": "gu",
                "language_names": [
                    "Gujarati"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "gu",
                "language_names": [
                    "Gujarati"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "gv",
                "language_names": [
                    "Gaelic",
                    "Manx"
                ],
                "countries": []
            },
            {
                "language_code": "gv",
                "language_names": [
                    "Manx"
                ],
                "countries": []
            },
            {
                "language_code": "ha",
                "language_names": [
                    "Hausa"
                ],
                "countries": []
            },
            {
                "language_code": "he",
                "language_names": [
                    "Hebrew"
                ],
                "countries": [
                    {
                        "country_name": "Israel",
                        "country_code": "IL",
                        "country_code_long": "ISR"
                    }
                ]
            },
            {
                "language_code": "hi",
                "language_names": [
                    "Hindi"
                ],
                "countries": [
                    {
                        "country_name": "Fiji",
                        "country_code": "FJ",
                        "country_code_long": "FJI"
                    },
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "hi",
                "language_names": [
                    "Hindi"
                ],
                "countries": [
                    {
                        "country_name": "Fiji",
                        "country_code": "FJ",
                        "country_code_long": "FJI"
                    },
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ho",
                "language_names": [
                    "Hiri Motu"
                ],
                "countries": [
                    {
                        "country_name": "Papua New Guinea",
                        "country_code": "PG",
                        "country_code_long": "PNG"
                    }
                ]
            },
            {
                "language_code": "hr",
                "language_names": [
                    "Croatian"
                ],
                "countries": [
                    {
                        "country_name": "Bosnia and Herzegovina",
                        "country_code": "BA",
                        "country_code_long": "BIH"
                    },
                    {
                        "country_name": "Croatia",
                        "country_code": "HR",
                        "country_code_long": "HRV"
                    }
                ]
            },
            {
                "language_code": "ht",
                "language_names": [
                    "Haitian Creole"
                ],
                "countries": [
                    {
                        "country_name": "Haiti",
                        "country_code": "HT",
                        "country_code_long": "HTI"
                    }
                ]
            },
            {
                "language_code": "hu",
                "language_names": [
                    "Hungarian"
                ],
                "countries": [
                    {
                        "country_name": "Hungary",
                        "country_code": "HU",
                        "country_code_long": "HUN"
                    }
                ]
            },
            {
                "language_code": "hy",
                "language_names": [
                    "Armenian"
                ],
                "countries": [
                    {
                        "country_name": "Armenia",
                        "country_code": "AM",
                        "country_code_long": "ARM"
                    }
                ]
            },
            {
                "language_code": "hz",
                "language_names": [
                    "Herero"
                ],
                "countries": []
            },
            {
                "language_code": "ia",
                "language_names": [
                    "Interlingua"
                ],
                "countries": []
            },
            {
                "language_code": "id, in",
                "language_names": [
                    "Indonesian"
                ],
                "countries": [
                    {
                        "country_name": "Indonesia",
                        "country_code": "ID",
                        "country_code_long": "IDN"
                    }
                ]
            },
            {
                "language_code": "ie",
                "language_names": [
                    "Interlingue"
                ],
                "countries": []
            },
            {
                "language_code": "ig",
                "language_names": [
                    "Igbo"
                ],
                "countries": []
            },
            {
                "language_code": "ii",
                "language_names": [
                    "Nuosu"
                ],
                "countries": []
            },
            {
                "language_code": "ii",
                "language_names": [
                    "Sichuan Yi"
                ],
                "countries": []
            },
            {
                "language_code": "ik",
                "language_names": [
                    "Inupiak"
                ],
                "countries": []
            },
            {
                "language_code": "io",
                "language_names": [
                    "Ido"
                ],
                "countries": []
            },
            {
                "language_code": "is",
                "language_names": [
                    "Icelandic"
                ],
                "countries": [
                    {
                        "country_name": "Iceland",
                        "country_code": "IS",
                        "country_code_long": "ISL"
                    }
                ]
            },
            {
                "language_code": "it",
                "language_names": [
                    "Italian"
                ],
                "countries": [
                    {
                        "country_name": "Italy",
                        "country_code": "IT",
                        "country_code_long": "ITA"
                    },
                    {
                        "country_name": "San Marino",
                        "country_code": "SM",
                        "country_code_long": "SMR"
                    },
                    {
                        "country_name": "Switzerland",
                        "country_code": "CH",
                        "country_code_long": "CHE"
                    },
                    {
                        "country_name": "Vatican",
                        "country_code": "VA",
                        "country_code_long": "VAT"
                    }
                ]
            },
            {
                "language_code": "iu",
                "language_names": [
                    "Inuktitut"
                ],
                "countries": []
            },
            {
                "language_code": "ja",
                "language_names": [
                    "Japanese"
                ],
                "countries": [
                    {
                        "country_name": "Japan",
                        "country_code": "JP",
                        "country_code_long": "JPN"
                    }
                ]
            },
            {
                "language_code": "ji",
                "language_names": [
                    "Yiddish"
                ],
                "countries": []
            },
            {
                "language_code": "jv",
                "language_names": [
                    "Javanese"
                ],
                "countries": []
            },
            {
                "language_code": "ka",
                "language_names": [
                    "Georgian"
                ],
                "countries": [
                    {
                        "country_name": "Georgia",
                        "country_code": "GE",
                        "country_code_long": "GEO"
                    }
                ]
            },
            {
                "language_code": "kck",
                "language_names": [
                    "Kalanga"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "kg",
                "language_names": [
                    "Kongo"
                ],
                "countries": []
            },
            {
                "language_code": "ki",
                "language_names": [
                    "Kikuyu"
                ],
                "countries": []
            },
            {
                "language_code": "kj",
                "language_names": [
                    "Kwanyama"
                ],
                "countries": []
            },
            {
                "language_code": "kk",
                "language_names": [
                    "Kazakh"
                ],
                "countries": [
                    {
                        "country_name": "Kazakhstan",
                        "country_code": "KZ",
                        "country_code_long": "KAZ"
                    }
                ]
            },
            {
                "language_code": "kl",
                "language_names": [
                    "Greenlandic"
                ],
                "countries": []
            },
            {
                "language_code": "kl",
                "language_names": [
                    "Kalaallisut",
                    "Greenlandic"
                ],
                "countries": []
            },
            {
                "language_code": "km",
                "language_names": [
                    "Khmer"
                ],
                "countries": [
                    {
                        "country_name": "Cambodia",
                        "country_code": "KH",
                        "country_code_long": "KHM"
                    }
                ]
            },
            {
                "language_code": "kn",
                "language_names": [
                    "Kannada"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "kn",
                "language_names": [
                    "Kannada"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ko",
                "language_names": [
                    "Korean"
                ],
                "countries": [
                    {
                        "country_name": "Korea, North"
                    },
                    {
                        "country_name": "Korea, South"
                    }
                ]
            },
            {
                "language_code": "kok",
                "language_names": [
                    "Konkani"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "kr",
                "language_names": [
                    "Kanuri"
                ],
                "countries": []
            },
            {
                "language_code": "ks",
                "language_names": [
                    "Kashmiri"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ks",
                "language_names": [
                    "Kashmiri"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ku",
                "language_names": [
                    "Kurdish"
                ],
                "countries": [
                    {
                        "country_name": "Iraq",
                        "country_code": "IQ",
                        "country_code_long": "IRQ"
                    }
                ]
            },
            {
                "language_code": "kv",
                "language_names": [
                    "Komi"
                ],
                "countries": []
            },
            {
                "language_code": "kw",
                "language_names": [
                    "Cornish"
                ],
                "countries": []
            },
            {
                "language_code": "ky",
                "language_names": [
                    "Kyrgyz"
                ],
                "countries": [
                    {
                        "country_name": "Kyrgyzstan",
                        "country_code": "KG",
                        "country_code_long": "KGZ"
                    }
                ]
            },
            {
                "language_code": "la",
                "language_names": [
                    "Latin"
                ],
                "countries": [
                    {
                        "country_name": "Vatican",
                        "country_code": "VA",
                        "country_code_long": "VAT"
                    }
                ]
            },
            {
                "language_code": "lb",
                "language_names": [
                    "Luxembourgish"
                ],
                "countries": [
                    {
                        "country_name": "Luxembourg",
                        "country_code": "LU",
                        "country_code_long": "LUX"
                    }
                ]
            },
            {
                "language_code": "lg",
                "language_names": [
                    "Luganda",
                    "Ganda"
                ],
                "countries": []
            },
            {
                "language_code": "li",
                "language_names": [
                    "Limburgish",
                    "Limburger"
                ],
                "countries": []
            },
            {
                "language_code": "ln",
                "language_names": [
                    "Lingala"
                ],
                "countries": []
            },
            {
                "language_code": "lo",
                "language_names": [
                    "Lao"
                ],
                "countries": [
                    {
                        "country_name": "Laos",
                        "country_code": "LA",
                        "country_code_long": "LAO"
                    }
                ]
            },
            {
                "language_code": "lt",
                "language_names": [
                    "Lithuanian"
                ],
                "countries": [
                    {
                        "country_name": "Lithuania",
                        "country_code": "LT",
                        "country_code_long": "LTU"
                    }
                ]
            },
            {
                "language_code": "lu",
                "language_names": [
                    "Luga-Katanga"
                ],
                "countries": []
            },
            {
                "language_code": "lv",
                "language_names": [
                    "Latvian",
                    "Lettish"
                ],
                "countries": [
                    {
                        "country_name": "Latvia",
                        "country_code": "LV",
                        "country_code_long": "LVA"
                    }
                ]
            },
            {
                "language_code": "mai",
                "language_names": [
                    "Maithili"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "mg",
                "language_names": [
                    "Malagasy"
                ],
                "countries": [
                    {
                        "country_name": "Madagascar",
                        "country_code": "MG",
                        "country_code_long": "MDG"
                    }
                ]
            },
            {
                "language_code": "mh",
                "language_names": [
                    "Marshallese"
                ],
                "countries": [
                    {
                        "country_name": "Marshall Islands",
                        "country_code": "MH",
                        "country_code_long": "MHL"
                    }
                ]
            },
            {
                "language_code": "mi",
                "language_names": [
                    "Maori"
                ],
                "countries": []
            },
            {
                "language_code": "mk",
                "language_names": [
                    "Macedonian"
                ],
                "countries": [
                    {
                        "country_name": "Macedonia",
                        "country_code": "MK",
                        "country_code_long": "MKD"
                    }
                ]
            },
            {
                "language_code": "ml",
                "language_names": [
                    "Malayalam"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ml",
                "language_names": [
                    "Malayalam"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "mn",
                "language_names": [
                    "Mongolian"
                ],
                "countries": [
                    {
                        "country_name": "Mongolia",
                        "country_code": "MN",
                        "country_code_long": "MNG"
                    }
                ]
            },
            {
                "language_code": "mni",
                "language_names": [
                    "Manipuri",
                    "Meitei"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "mo",
                "language_names": [
                    "Moldavian"
                ],
                "countries": [
                    {
                        "country_name": "Moldova",
                        "country_code": "MD",
                        "country_code_long": "MDA"
                    }
                ]
            },
            {
                "language_code": "mr",
                "language_names": [
                    "Marathi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "mr",
                "language_names": [
                    "Marathi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "ms",
                "language_names": [
                    "Malay"
                ],
                "countries": [
                    {
                        "country_name": "Brunei",
                        "country_code": "BN",
                        "country_code_long": "BRN"
                    },
                    {
                        "country_name": "Malaysia",
                        "country_code": "MY",
                        "country_code_long": "MYS"
                    },
                    {
                        "country_name": "Singapore",
                        "country_code": "SG",
                        "country_code_long": "SGP"
                    }
                ]
            },
            {
                "language_code": "mt",
                "language_names": [
                    "Maltese"
                ],
                "countries": [
                    {
                        "country_name": "Malta",
                        "country_code": "MT",
                        "country_code_long": "MLT"
                    }
                ]
            },
            {
                "language_code": "na",
                "language_names": [
                    "Nauru"
                ],
                "countries": []
            },
            {
                "language_code": "nb",
                "language_names": [
                    "Norwegian bokmål"
                ],
                "countries": []
            },
            {
                "language_code": "nd",
                "language_names": [
                    "Northern Ndebele"
                ],
                "countries": []
            },
            {
                "language_code": "ndc",
                "language_names": [
                    "Ndau"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "nde",
                "language_names": [
                    "Ndebele",
                    "Sindebele",
                    "Northern Ndebele"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "ne",
                "language_names": [
                    "Nepali"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Nepal",
                        "country_code": "NP",
                        "country_code_long": "NPL"
                    }
                ]
            },
            {
                "language_code": "ne",
                "language_names": [
                    "Nepali"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Nepal",
                        "country_code": "NP",
                        "country_code_long": "NPL"
                    }
                ]
            },
            {
                "language_code": "ng",
                "language_names": [
                    "Ndonga"
                ],
                "countries": []
            },
            {
                "language_code": "nl",
                "language_names": [
                    "Dutch"
                ],
                "countries": [
                    {
                        "country_name": "Belgium",
                        "country_code": "BE",
                        "country_code_long": "BEL"
                    },
                    {
                        "country_name": "Netherlands",
                        "country_code": "NL",
                        "country_code_long": "NLD"
                    },
                    {
                        "country_name": "Suriname",
                        "country_code": "SR",
                        "country_code_long": "SUR"
                    }
                ]
            },
            {
                "language_code": "nmq",
                "language_names": [
                    "Nambya"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "nn",
                "language_names": [
                    "Norwegian nynorsk"
                ],
                "countries": []
            },
            {
                "language_code": "no",
                "language_names": [
                    "Norwegian"
                ],
                "countries": [
                    {
                        "country_name": "Norway",
                        "country_code": "NO",
                        "country_code_long": "NOR"
                    }
                ]
            },
            {
                "language_code": "nr",
                "language_names": [
                    "Southern Ndebele"
                ],
                "countries": []
            },
            {
                "language_code": "nv",
                "language_names": [
                    "Navajo"
                ],
                "countries": []
            },
            {
                "language_code": "ny",
                "language_names": [
                    "Chichewa",
                    "Chewa",
                    "Nyanja"
                ],
                "countries": [
                    {
                        "country_name": "Malawi",
                        "country_code": "MW",
                        "country_code_long": "MWI"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "ny",
                "language_names": [
                    "Chewa",
                    "Chichewa",
                    "Nyanja"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    },
                    {
                        "country_name": "Malawi",
                        "country_code": "MW",
                        "country_code_long": "MWI"
                    }
                ]
            },
            {
                "language_code": "oc",
                "language_names": [
                    "Occitan"
                ],
                "countries": []
            },
            {
                "language_code": "oj",
                "language_names": [
                    "Ojibwe"
                ],
                "countries": []
            },
            {
                "language_code": "om",
                "language_names": [
                    "Oromo",
                    "Afaan Oromo"
                ],
                "countries": []
            },
            {
                "language_code": "or",
                "language_names": [
                    "Oriya"
                ],
                "countries": []
            },
            {
                "language_code": "or",
                "language_names": [
                    "Odia",
                    "Oriya"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "os",
                "language_names": [
                    "Ossetian"
                ],
                "countries": []
            },
            {
                "language_code": "pa",
                "language_names": [
                    "Punjabi",
                    "Eastern Punjabi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "pa",
                "language_names": [
                    "Punjabi",
                    "Panjabi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "pi",
                "language_names": [
                    "Pāli"
                ],
                "countries": []
            },
            {
                "language_code": "pl",
                "language_names": [
                    "Polish"
                ],
                "countries": [
                    {
                        "country_name": "Poland",
                        "country_code": "PL",
                        "country_code_long": "POL"
                    }
                ]
            },
            {
                "language_code": "ps",
                "language_names": [
                    "Pashto",
                    "Pushto"
                ],
                "countries": [
                    {
                        "country_name": "Afghanistan",
                        "country_code": "AF",
                        "country_code_long": "AFG"
                    }
                ]
            },
            {
                "language_code": "pt",
                "language_names": [
                    "Portuguese"
                ],
                "countries": [
                    {
                        "country_name": "Angola",
                        "country_code": "AO",
                        "country_code_long": "AGO"
                    },
                    {
                        "country_name": "Brazil",
                        "country_code": "BR",
                        "country_code_long": "BRA"
                    },
                    {
                        "country_name": "Cape Verde",
                        "country_code": "CV",
                        "country_code_long": "CPV"
                    },
                    {
                        "country_name": "East Timor",
                        "country_code": "TL",
                        "country_code_long": "TLS"
                    },
                    {
                        "country_name": "Equatorial Guinea",
                        "country_code": "GQ",
                        "country_code_long": "GNQ"
                    },
                    {
                        "country_name": "Guinea-Bissau",
                        "country_code": "GW",
                        "country_code_long": "GNB"
                    },
                    {
                        "country_name": "Mozambique",
                        "country_code": "MZ",
                        "country_code_long": "MOZ"
                    },
                    {
                        "country_name": "Portugal",
                        "country_code": "PT",
                        "country_code_long": "PRT"
                    }
                ]
            },
            {
                "language_code": "qu",
                "language_names": [
                    "Quechua"
                ],
                "countries": [
                    {
                        "country_name": "Bolivia",
                        "country_code": "BO",
                        "country_code_long": "BOL"
                    },
                    {
                        "country_name": "Peru",
                        "country_code": "PE",
                        "country_code_long": "PER"
                    }
                ]
            },
            {
                "language_code": "rm",
                "language_names": [
                    "Romansh"
                ],
                "countries": [
                    {
                        "country_name": "Switzerland",
                        "country_code": "CH",
                        "country_code_long": "CHE"
                    }
                ]
            },
            {
                "language_code": "rn",
                "language_names": [
                    "Kirundi"
                ],
                "countries": [
                    {
                        "country_name": "Burundi",
                        "country_code": "BI",
                        "country_code_long": "BDI"
                    }
                ]
            },
            {
                "language_code": "ro",
                "language_names": [
                    "Romanian"
                ],
                "countries": [
                    {
                        "country_name": "Moldova",
                        "country_code": "MD",
                        "country_code_long": "MDA"
                    },
                    {
                        "country_name": "Romania",
                        "country_code": "RO",
                        "country_code_long": "ROU"
                    }
                ]
            },
            {
                "language_code": "ru",
                "language_names": [
                    "Russian"
                ],
                "countries": [
                    {
                        "country_name": "Belarus",
                        "country_code": "BY",
                        "country_code_long": "BLR"
                    },
                    {
                        "country_name": "Kazakhstan",
                        "country_code": "KZ",
                        "country_code_long": "KAZ"
                    },
                    {
                        "country_name": "Kyrgyzstan",
                        "country_code": "KG",
                        "country_code_long": "KGZ"
                    },
                    {
                        "country_name": "Russia",
                        "country_code": "RU",
                        "country_code_long": "RUS"
                    }
                ]
            },
            {
                "language_code": "rw",
                "language_names": [
                    "Kinyarwanda",
                    "Rwanda"
                ],
                "countries": [
                    {
                        "country_name": "Rwanda",
                        "country_code": "RW",
                        "country_code_long": "RWA"
                    }
                ]
            },
            {
                "language_code": "sa",
                "language_names": [
                    "Sanskrit"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "sa",
                "language_names": [
                    "Sanskrit"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "sat",
                "language_names": [
                    "Santali"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "sd",
                "language_names": [
                    "Sindhi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "sd",
                "language_names": [
                    "Sindhi"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "se",
                "language_names": [
                    "Sami"
                ],
                "countries": []
            },
            {
                "language_code": "sg",
                "language_names": [
                    "Sango"
                ],
                "countries": [
                    {
                        "country_name": "Central African Republic",
                        "country_code": "CF",
                        "country_code_long": "CAF"
                    }
                ]
            },
            {
                "language_code": "sh",
                "language_names": [
                    "Serbo-Croatian"
                ],
                "countries": []
            },
            {
                "language_code": "shg",
                "language_names": [
                    "Shangani",
                    "Tsonga-Shangani"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "si",
                "language_names": [
                    "Sinhalese"
                ],
                "countries": []
            },
            {
                "language_code": "sk",
                "language_names": [
                    "Slovak"
                ],
                "countries": [
                    {
                        "country_name": "Slovakia",
                        "country_code": "SK",
                        "country_code_long": "SVK"
                    }
                ]
            },
            {
                "language_code": "sl",
                "language_names": [
                    "Slovenian"
                ],
                "countries": [
                    {
                        "country_name": "Slovenia",
                        "country_code": "SI",
                        "country_code_long": "SVN"
                    }
                ]
            },
            {
                "language_code": "sm",
                "language_names": [
                    "Samoan"
                ],
                "countries": [
                    {
                        "country_name": "Samoa",
                        "country_code": "WS",
                        "country_code_long": "WSM"
                    }
                ]
            },
            {
                "language_code": "sn",
                "language_names": [
                    "Shona"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "sn",
                "language_names": [
                    "Shona"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "so",
                "language_names": [
                    "Somali"
                ],
                "countries": [
                    {
                        "country_name": "Somalia",
                        "country_code": "SO",
                        "country_code_long": "SOM"
                    }
                ]
            },
            {
                "language_code": "sq",
                "language_names": [
                    "Albanian"
                ],
                "countries": [
                    {
                        "country_name": "Albania",
                        "country_code": "AL",
                        "country_code_long": "ALB"
                    }
                ]
            },
            {
                "language_code": "sr",
                "language_names": [
                    "Serbian"
                ],
                "countries": [
                    {
                        "country_name": "Bosnia and Herzegovina",
                        "country_code": "BA",
                        "country_code_long": "BIH"
                    },
                    {
                        "country_name": "Serbia",
                        "country_code": "RS",
                        "country_code_long": "SRB"
                    }
                ]
            },
            {
                "language_code": "ss",
                "language_names": [
                    "Swati"
                ],
                "countries": [
                    {
                        "country_name": "Eswatini",
                        "country_code": "SZ",
                        "country_code_long": "SWZ"
                    }
                ]
            },
            {
                "language_code": "ss",
                "language_names": [
                    "Swati"
                ],
                "countries": [
                    {
                        "country_name": "Eswatini",
                        "country_code": "SZ",
                        "country_code_long": "SWZ"
                    }
                ]
            },
            {
                "language_code": "st",
                "language_names": [
                    "Sesotho"
                ],
                "countries": [
                    {
                        "country_name": "Lesotho",
                        "country_code": "LS",
                        "country_code_long": "LSO"
                    }
                ]
            },
            {
                "language_code": "st",
                "language_names": [
                    "Sotho",
                    "Southern Sotho"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "su",
                "language_names": [
                    "Sundanese"
                ],
                "countries": []
            },
            {
                "language_code": "sv",
                "language_names": [
                    "Swedish"
                ],
                "countries": [
                    {
                        "country_name": "Finland",
                        "country_code": "FI",
                        "country_code_long": "FIN"
                    },
                    {
                        "country_name": "Sweden",
                        "country_code": "SE",
                        "country_code_long": "SWE"
                    }
                ]
            },
            {
                "language_code": "sw",
                "language_names": [
                    "Swahili",
                    "Kiswahili"
                ],
                "countries": [
                    {
                        "country_name": "Kenya",
                        "country_code": "KE",
                        "country_code_long": "KEN"
                    },
                    {
                        "country_name": "Tanzania",
                        "country_code": "TZ",
                        "country_code_long": "TZA"
                    },
                    {
                        "country_name": "Uganda",
                        "country_code": "UG",
                        "country_code_long": "UGA"
                    }
                ]
            },
            {
                "language_code": "ta",
                "language_names": [
                    "Tamil"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Singapore",
                        "country_code": "SG",
                        "country_code_long": "SGP"
                    },
                    {
                        "country_name": "Sri Lanka",
                        "country_code": "LK",
                        "country_code_long": "LKA"
                    }
                ]
            },
            {
                "language_code": "ta",
                "language_names": [
                    "Tamil"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Singapore",
                        "country_code": "SG",
                        "country_code_long": "SGP"
                    },
                    {
                        "country_name": "Sri Lanka",
                        "country_code": "LK",
                        "country_code_long": "LKA"
                    }
                ]
            },
            {
                "language_code": "te",
                "language_names": [
                    "Telugu"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "te",
                "language_names": [
                    "Telugu"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    }
                ]
            },
            {
                "language_code": "tg",
                "language_names": [
                    "Tajik"
                ],
                "countries": [
                    {
                        "country_name": "Tajikistan",
                        "country_code": "TJ",
                        "country_code_long": "TJK"
                    }
                ]
            },
            {
                "language_code": "th",
                "language_names": [
                    "Thai"
                ],
                "countries": [
                    {
                        "country_name": "Thailand",
                        "country_code": "TH",
                        "country_code_long": "THA"
                    }
                ]
            },
            {
                "language_code": "ti",
                "language_names": [
                    "Tigrinya"
                ],
                "countries": [
                    {
                        "country_name": "Eritrea",
                        "country_code": "ER",
                        "country_code_long": "ERI"
                    }
                ]
            },
            {
                "language_code": "tk",
                "language_names": [
                    "Turkmen"
                ],
                "countries": [
                    {
                        "country_name": "Turkmenistan",
                        "country_code": "TM",
                        "country_code_long": "TKM"
                    }
                ]
            },
            {
                "language_code": "tl",
                "language_names": [
                    "Tagalog"
                ],
                "countries": []
            },
            {
                "language_code": "tn",
                "language_names": [
                    "Setswana"
                ],
                "countries": []
            },
            {
                "language_code": "tn",
                "language_names": [
                    "Tswana",
                    "Setswana"
                ],
                "countries": [
                    {
                        "country_name": "Botswana",
                        "country_code": "BW",
                        "country_code_long": "BWA"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "to",
                "language_names": [
                    "Tonga"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "toi",
                "language_names": [
                    "Tonga",
                    "Zambezi Tonga"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "tr",
                "language_names": [
                    "Turkish"
                ],
                "countries": [
                    {
                        "country_name": "Cyprus",
                        "country_code": "CY",
                        "country_code_long": "CYP"
                    },
                    {
                        "country_name": "Turkey",
                        "country_code": "TR",
                        "country_code_long": "TUR"
                    }
                ]
            },
            {
                "language_code": "ts",
                "language_names": [
                    "Tsonga"
                ],
                "countries": []
            },
            {
                "language_code": "tt",
                "language_names": [
                    "Tatar"
                ],
                "countries": []
            },
            {
                "language_code": "tw",
                "language_names": [
                    "Twi"
                ],
                "countries": []
            },
            {
                "language_code": "ty",
                "language_names": [
                    "Tahitian"
                ],
                "countries": []
            },
            {
                "language_code": "ug",
                "language_names": [
                    "Uyghur"
                ],
                "countries": []
            },
            {
                "language_code": "uk",
                "language_names": [
                    "Ukrainian"
                ],
                "countries": [
                    {
                        "country_name": "Ukraine",
                        "country_code": "UA",
                        "country_code_long": "UKR"
                    }
                ]
            },
            {
                "language_code": "ur",
                "language_names": [
                    "Urdu"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Pakistan",
                        "country_code": "PK",
                        "country_code_long": "PAK"
                    }
                ]
            },
            {
                "language_code": "ur",
                "language_names": [
                    "Urdu"
                ],
                "countries": [
                    {
                        "country_name": "India",
                        "country_code": "IN",
                        "country_code_long": "IND"
                    },
                    {
                        "country_name": "Pakistan",
                        "country_code": "PK",
                        "country_code_long": "PAK"
                    }
                ]
            },
            {
                "language_code": "uz",
                "language_names": [
                    "Uzbek"
                ],
                "countries": [
                    {
                        "country_name": "Uzbekistan",
                        "country_code": "UZ",
                        "country_code_long": "UZB"
                    }
                ]
            },
            {
                "language_code": "ve",
                "language_names": [
                    "Venda"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "ve",
                "language_names": [
                    "Venda"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "vi",
                "language_names": [
                    "Vietnamese"
                ],
                "countries": [
                    {
                        "country_name": "Vietnam",
                        "country_code": "VN",
                        "country_code_long": "VNM"
                    }
                ]
            },
            {
                "language_code": "vo",
                "language_names": [
                    "Volapük"
                ],
                "countries": []
            },
            {
                "language_code": "wa",
                "language_names": [
                    "Wallon"
                ],
                "countries": []
            },
            {
                "language_code": "wo",
                "language_names": [
                    "Wolof"
                ],
                "countries": []
            },
            {
                "language_code": "xam",
                "language_names": [
                    "Koisan",
                    "Khoisan"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "xh",
                "language_names": [
                    "Xhosa"
                ],
                "countries": [
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "xh",
                "language_names": [
                    "Xhosa"
                ],
                "countries": [
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    },
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "yi",
                "language_names": [
                    "Yiddish"
                ],
                "countries": []
            },
            {
                "language_code": "yo",
                "language_names": [
                    "Yoruba"
                ],
                "countries": []
            },
            {
                "language_code": "za",
                "language_names": [
                    "Zhuang",
                    "Chuang"
                ],
                "countries": []
            },
            {
                "language_code": "zh",
                "language_names": [
                    "Chinese"
                ],
                "countries": [
                    {
                        "country_name": "China",
                        "country_code": "CN",
                        "country_code_long": "CHN"
                    }
                ]
            },
            {
                "language_code": "zh-Hans",
                "language_names": [
                    "Chinese (Simplified)"
                ],
                "countries": [
                    {
                        "country_name": "China",
                        "country_code": "CN",
                        "country_code_long": "CHN"
                    }
                ]
            },
            {
                "language_code": "zh-Hant",
                "language_names": [
                    "Chinese (Traditional)"
                ],
                "countries": [
                    {
                        "country_name": "China",
                        "country_code": "CN",
                        "country_code_long": "CHN"
                    }
                ]
            },
            {
                "language_code": "zsl",
                "language_names": [
                    "Zimbabwean Sign Language"
                ],
                "countries": [
                    {
                        "country_name": "Zimbabwe",
                        "country_code": "ZW",
                        "country_code_long": "ZWE"
                    }
                ]
            },
            {
                "language_code": "zu",
                "language_names": [
                    "Zulu"
                ],
                "countries": [
                    {
                        "country_name": "South Africa",
                        "country_code": "ZA",
                        "country_code_long": "ZAF"
                    }
                ]
            }
        ];
        let orderedByLanguageCodeRewrittenData = locData.sort((a, b) => {
            if (a.language_code === b.language_code) {
                return 0;
            }
            return (a.language_code > b.language_code) ? (1) : (-1);
        });
        return orderedByLanguageCodeRewrittenData;
    }
}
//# sourceMappingURL=LanguagesCodes.js.map