"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteAllDataSetsCommand = void 0;
const path = __importStar(require("node:path"));
const Countries_js_1 = require("./Countries.js");
const CountriesCodes_js_1 = require("./CountriesCodes.js");
const LanguagesCodes_js_1 = require("./LanguagesCodes.js");
class WriteAllDataSetsCommand {
    static write(folderPath) {
        let pathResolveFunc;
        let isPathDefined = true;
        try {
            pathResolveFunc = path.resolve;
        }
        catch (e) {
            isPathDefined = false;
        }
        if (isPathDefined === false) {
            pathResolveFunc = (inPath1, inPath2) => {
                return [inPath1, inPath2].join("/");
            };
        }
        // @ts-ignore
        Countries_js_1.Countries.getSingletonInstance().saveCountriesNames(pathResolveFunc(folderPath, "countriesNames.json"));
        // @ts-ignore
        CountriesCodes_js_1.CountriesCodes.getSingletonInstance().saveCountriesCodes(pathResolveFunc(folderPath, "countriesCodesAsArray.json"));
        CountriesCodes_js_1.CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByKeys("country_code", 
        // @ts-ignore
        pathResolveFunc(folderPath, "countriesCodesIndexedByCountryCode.json"));
        CountriesCodes_js_1.CountriesCodes.getSingletonInstance().saveCountriesCodesIndexedByKeys("country_name", 
        // @ts-ignore
        pathResolveFunc(folderPath, "countriesCodesIndexedByCountryName.json"));
        // @ts-ignore
        LanguagesCodes_js_1.LanguagesCodes.getSingletonInstance().saveLanguagesCodes(pathResolveFunc(folderPath, "languagesCodesAsArray.json"));
        LanguagesCodes_js_1.LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByKeys("language_code", 
        // @ts-ignore
        pathResolveFunc(folderPath, "languagesCodesIndexedByLanguageCode.json"));
        LanguagesCodes_js_1.LanguagesCodes.getSingletonInstance().saveLanguagesCodesIndexedByKeys("language_names[0]", 
        // @ts-ignore
        pathResolveFunc(folderPath, "languagesCodesIndexedByLanguageName.json"));
        return 1;
    }
}
exports.WriteAllDataSetsCommand = WriteAllDataSetsCommand;
let commandPayload = process.argv.slice(2);
let folderPathFromCommandPayload = commandPayload[0];
WriteAllDataSetsCommand.write(folderPathFromCommandPayload);
//# sourceMappingURL=WriteAllDataSetsCommand.js.map