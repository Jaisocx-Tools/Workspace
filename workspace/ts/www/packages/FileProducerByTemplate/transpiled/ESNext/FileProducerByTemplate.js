//@ts-ignore
import * as path from "node:path";
//@ts-ignore
import * as fs from "node:fs";
import { TemplateRenderer } from "@jaisocx/template-renderer";
import { FileWriter } from "@jaisocx/file-writer";
export class FileProducerByTemplate {
    _debug;
    _filePath;
    _templateText;
    _templatePath;
    _templateData;
    _templateRenderer;
    _fileWriter;
    constructor() {
        this._debug = false;
        this._filePath = "";
        this._templateText = "";
        this._templatePath = "";
        this._templateData = "";
        this._templateRenderer = new TemplateRenderer();
        this._fileWriter = new FileWriter();
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
//# sourceMappingURL=FileProducerByTemplate.js.map