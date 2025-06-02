import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { JPathData } from "@jaisocx/workspace-tree-walker";
export declare class TemplateParser {
    static CONSTANTS: {
        new (): {};
        BRACES_OPEN: string;
        BRACES_CLOSE: string;
        BRACES_CHARS_NUMBER: number;
        INDEXOF_DIDNOT_MATCH: number;
    };
    static instance: TemplateParser;
    converter: CharcodeConverter;
    constructor();
    static getInstance(): TemplateParser;
    parse(template: string, placeholderName: string): (Uint16Array | JPathData)[];
}
//# sourceMappingURL=TemplateParser.d.ts.map