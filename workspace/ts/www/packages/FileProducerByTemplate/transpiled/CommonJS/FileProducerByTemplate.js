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
exports.FileProducerByTemplate = void 0;
//@ts-ignore
const path = __importStar(require("node:path"));
//@ts-ignore
const fs = __importStar(require("node:fs"));
const template_renderer_1 = require("@jaisocx/template-renderer");
const file_writer_1 = require("@jaisocx/file-writer");
class FileProducerByTemplate {
    constructor() {
        this._debug = false;
        this._filePath = "";
        this._templateText = "";
        this._templatePath = "";
        this._templateData = "";
        this._templateRenderer = new template_renderer_1.TemplateRenderer();
        this._fileWriter = new file_writer_1.FileWriter();
    }
    setDebug(debug) {
        this._debug = debug;
        return this;
    }
    setFilePath(path) {
        this._filePath = path;
        return this;
    }
    getFilePath() {
        return this._filePath;
    }
    setTemplateText(template) {
        this._templateText = template;
        return this;
    }
    getTemplateText() {
        return this._templateText;
    }
    readTemplateFile(path) {
        this._templatePath = path;
        if (!fs.existsSync(this._templatePath)) {
            throw new Error(`Error. no template file was found on path: ${this._templatePath}`);
        }
        this._templateText = fs.readFileSync(this._templatePath, { flag: "r",
            encoding: "utf8" });
        if (this._templateText.length === 0) {
            throw new Error("Error. could not read template file.");
        }
        return this;
    }
    getTemplatePath() {
        return this._templatePath;
    }
    setTemplateData(data) {
        this._templateData = data;
        return this;
    }
    getTemplateData() {
        return this._templateData;
    }
    validate() {
        let retVal = true;
        if (this._filePath.length === 0) {
            console.error("Error. no path to write the rendered file was set.");
            return false;
        }
        if ((this._templateText.length === 0) && (this._templatePath.length === 0)) {
            console.error("Error. no path for a template neither no template text were set.");
            return false;
        }
        if ((this._templateText.length === 0) && (!fs.existsSync(this._templatePath))) {
            console.error(`Error. no template file was found on path: ${this._templatePath}`);
            return false;
        }
        if (this._templateText.length === 0) {
            this._templateText = fs.readFileSync(this._templatePath, { flag: "r",
                encoding: "utf8" });
        }
        if (this._templateText.length === 0) {
            console.error("Error. could not read template file.");
            return false;
        }
        let renderedFileFolder = path.parse(this._filePath).dir;
        if (!fs.existsSync(renderedFileFolder)) {
            if (this._debug === true) {
                console.log(`Trying to create folder at path: ${renderedFileFolder}`);
            }
            fs.mkdirSync(renderedFileFolder, { recursive: true });
            if (this._debug === true) {
                console.log(`Created folder at path: ${renderedFileFolder}`);
            }
        }
        return retVal;
    }
    produce() {
        if (!this.validate()) {
            console.error("Error. the file was not written.");
            return 1;
        }
        //@ts-ignore
        let record = this._templateRenderer
            .addNewDataRecord();
        this._templateRenderer
            .setData(this._templateData)
            .setTemplate(this._templateText);
        let renderedTemplateText = this._templateRenderer
            .render();
        // this._templateRenderer
        //   .optimize( record.id );
        // let renderedTemplateText: string = this._templateRenderer
        //   .renderOptimizedToStringDataText (
        //     record.id,
        //     this._templateData
        //   );
        fs.writeFileSync(this._filePath, renderedTemplateText, { mode: 0o755,
            encoding: "utf8" });
        return 2;
    }
}
exports.FileProducerByTemplate = FileProducerByTemplate;
//# sourceMappingURL=FileProducerByTemplate.js.map