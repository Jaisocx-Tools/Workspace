import { TemplateRenderer } from "@jaisocx/template-renderer";
import { FileWriter } from "@jaisocx/file-writer";
import { FileProducerByTemplateInterface } from "./FileProducerByTemplateInterface.js";
export declare class FileProducerByTemplate implements FileProducerByTemplateInterface {
    protected _debug: boolean;
    protected _filePath: any;
    protected _templateText: any;
    protected _templatePath: any;
    protected _templateData: any;
    protected _templateRenderer: TemplateRenderer;
    protected _fileWriter: FileWriter;
    constructor();
    setDebug(debug: boolean): FileProducerByTemplateInterface;
    setFilePath(path: string): FileProducerByTemplateInterface;
    getFilePath(): string;
    setTemplateText(template: string): FileProducerByTemplateInterface;
    getTemplateText(): string;
    readTemplateFile(path: string): FileProducerByTemplateInterface;
    getTemplatePath(): string;
    setTemplateData(data: object): FileProducerByTemplateInterface;
    getTemplateData(): object;
    validate(): boolean;
    produce(): number;
}
//# sourceMappingURL=FileProducerByTemplate.d.ts.map