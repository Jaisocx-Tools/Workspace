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
const DatasetBase_js_1 = require("./DatasetBase.js");
class WriteAllDataSetsCommand {
    static exampleWriteMethod(folderPath) {
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
        let datasetBase = new DatasetBase_js_1.DatasetBase();
        datasetBase.saveDataIndexedByKeys("items[2]", 
        // @ts-ignore
        pathResolveFunc(folderPath, "datasetIndexedByKey.json"));
        return 1;
    }
}
exports.WriteAllDataSetsCommand = WriteAllDataSetsCommand;
// let commandPayload: string[] = process.argv.slice(2);
// let folderPathFromCommandPayload: string = commandPayload[0];
// WriteAllDataSetsCommand.exampleWriteMethod( folderPathFromCommandPayload );
//# sourceMappingURL=WriteAllDataSetsCommand.js.map