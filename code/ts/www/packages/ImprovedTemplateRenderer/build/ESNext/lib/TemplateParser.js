import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { JPath, JPathData } from "@jaisocx/workspace-tree-walker";
export class TemplateParser {
    static CONSTANTS = class {
        static BRACES_OPEN = "{{ ";
        static BRACES_CLOSE = " }}";
        static BRACES_CHARS_NUMBER = 3;
        static INDEXOF_DIDNOT_MATCH = (-1);
    };
    static instance;
    converter;
    constructor() {
        this.converter = CharcodeConverter.getInstance();
    }
    static getInstance() {
        if (!TemplateParser.instance) {
            TemplateParser.instance = new TemplateParser();
        }
        return TemplateParser.instance;
    }
    parse(template, placeholderName) {
        const parser = TemplateParser.instance;
        const preparedTemplates = [];
        const placeholdersPositions = [];
        const templateLength = template.length;
        const templateLastCharPos = (templateLength - 1);
        let lookupOffset = 0;
        let matchedPosition = 0;
        let placeholderStart = 0;
        let placeholderEnd = 0;
        const noMatch = TemplateParser.CONSTANTS.INDEXOF_DIDNOT_MATCH;
        const braceOpen = TemplateParser.CONSTANTS.BRACES_OPEN;
        const braceClose = TemplateParser.CONSTANTS.BRACES_CLOSE;
        const braceLen = TemplateParser.CONSTANTS.BRACES_CHARS_NUMBER;
        let range;
        while (matchedPosition > noMatch) {
            range = {
                bracesStart: 0,
                bracesEnd: 0,
                placeholderStart: 0,
                placeholderEnd: 0
            };
            matchedPosition = template.indexOf(braceOpen, lookupOffset);
            if (matchedPosition === noMatch) {
                break;
            }
            range.bracesStart = matchedPosition;
            range.placeholderStart = (matchedPosition + braceLen);
            lookupOffset = (range.placeholderStart + 1);
            matchedPosition = template.indexOf(braceClose, lookupOffset);
            if (matchedPosition === noMatch) {
                throw new Error("Placeholders");
                break;
            }
            range.placeholderEnd = (matchedPosition);
            range.bracesEnd = (matchedPosition + braceLen);
            placeholdersPositions.push({ ...range });
            lookupOffset = (range.bracesEnd + 1);
            if (lookupOffset > templateLastCharPos) {
                break;
            }
        }
        let offset = 0;
        let staticTemplate = "";
        let staticTemplateToBitsBuffer;
        let placeholder = "";
        let jpathData;
        for (range of placeholdersPositions) {
            if (range.bracesStart > offset) {
                staticTemplate = template.substring(offset, (range.bracesStart));
                if (staticTemplate && staticTemplate.length > 0) {
                    preparedTemplates.push(parser.converter.stringToArray(staticTemplate, 0));
                }
                offset = range.placeholderStart;
            }
            placeholder = template.substring(range.placeholderStart, range.placeholderEnd);
            if (placeholder.startsWith(placeholderName) === true) {
                placeholder = placeholder.substring(placeholderName.length);
            }
            jpathData = new JPathData();
            if (placeholder && placeholder.length > 0) {
                jpathData.setJPathExpression(placeholder);
                jpathData.setJPath(JPath.parse(placeholder));
                preparedTemplates.push(jpathData);
            }
            else if (placeholder.length === 0) {
                jpathData.setIsPlaceholderValue(1);
                preparedTemplates.push(jpathData);
            }
            offset = range.bracesEnd;
        }
        staticTemplate = template.substring(offset);
        if (staticTemplate && staticTemplate.length > 0) {
            preparedTemplates.push(parser.converter.stringToArray(staticTemplate, 0));
        }
        return preparedTemplates;
    }
}
//# sourceMappingURL=TemplateParser.js.map