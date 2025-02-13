"use strict";
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateParser = void 0;
const CharcodeConverter_1 = require("../../../CharcodeConverter/build/ESNext/CharcodeConverter");
const JPathData_js_1 = require("../types/JPathData.js");
const JPath_js_1 = require("./JPath.js");
class TemplateParser {
    constructor() {
        if (TemplateParser.instance) {
            return TemplateParser.instance;
        }
        this.converter = CharcodeConverter_1.CharcodeConverter.getInstance();
        TemplateParser.instance = this;
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
                placeholderEnd: 0,
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
            range.placeholderEnd = (matchedPosition - braceLen);
            range.bracesEnd = (matchedPosition + braceLen);
            placeholdersPositions.push(Object.assign({}, range));
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
                staticTemplate = template.substring(offset, (range.bracesStart - 1));
                if (staticTemplate && staticTemplate.length > 0) {
                    preparedTemplates.push(parser.converter.stringToArray(staticTemplate, 0));
                }
                offset = range.placeholderStart;
            }
            placeholder = template.substring(range.placeholderStart, range.placeholderEnd);
            if (!placeholder || placeholder.length === 0) {
                offset = (range.bracesEnd + 1);
                continue;
            }
            if (placeholder.startsWith(placeholderName) === true) {
                placeholder = placeholder.substring(placeholder.length);
            }
            jpathData = new JPathData_js_1.JPathData();
            if (placeholder && placeholder.length > 0) {
                jpathData.setJPathExpression(placeholder);
                jpathData.setJPath(JPath_js_1.JPath.parse(placeholder));
                preparedTemplates.push(jpathData);
            }
            offset = range.placeholderStart;
        }
        return preparedTemplates;
    }
}
exports.TemplateParser = TemplateParser;
TemplateParser.CONSTANTS = (_a = class {
    },
    __setFunctionName(_a, "CONSTANTS"),
    _a.BRACES_OPEN = "{{ ",
    _a.BRACES_CLOSE = " }}",
    _a.BRACES_CHARS_NUMBER = 3,
    _a.INDEXOF_DIDNOT_MATCH = (-1),
    _a);
//# sourceMappingURL=TemplateParser.js.map