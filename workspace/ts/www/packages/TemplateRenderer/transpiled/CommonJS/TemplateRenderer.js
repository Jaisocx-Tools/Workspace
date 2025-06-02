"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TemplateRenderer_activeDataRecordId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRenderer = void 0;
const node_util_1 = require("node:util");
const event_emitter_1 = require("@jaisocx/event-emitter");
const tokens_parser_1 = require("@jaisocx/tokens-parser");
class TemplateRenderer extends event_emitter_1.EventEmitter {
    constructor() {
        super();
        _TemplateRenderer_activeDataRecordId.set(this, void 0);
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this.tokensParser = new tokens_parser_1.TokensParser();
        this.dataRecords = new Array();
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, 0, "f");
        this.textEncoder = new node_util_1.TextEncoder();
        this.textDecoder = new node_util_1.TextDecoder("utf8");
    }
    initDataRecord() {
        let dataRecord = new Object();
        dataRecord.isOptimized = false;
        dataRecord.textTemplate = "";
        dataRecord.dataForRendering = new Object();
        dataRecord.bitsbufTemplate = new Uint8Array();
        dataRecord.optimizedBitsbufTemplate = new Array();
        dataRecord.optimizedPlaceholdersEntries = new Object();
        dataRecord.optimizedTemplate = new Array();
        return dataRecord;
    }
    addNewDataRecord() {
        let dataRecord = this.initDataRecord();
        this.dataRecords.push(dataRecord);
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, (this.dataRecords.length - 1), "f");
        this.dataRecords[__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f")].id = __classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f");
        return this.dataRecords[__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f")];
    }
    getActiveDataRecord() {
        let dataRecord;
        if (__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f") === 0) {
            let obj = new Object();
            this.dataRecords.push(obj);
            dataRecord = this.addNewDataRecord();
        }
        else {
            dataRecord = this.dataRecords[__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f")];
        }
        return dataRecord;
    }
    getActiveDataRecordId() {
        return __classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f");
    }
    getDataRecordById(id) {
        return this.dataRecords[id];
    }
    setActiveRecordId(id) {
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, id, "f");
        return this.dataRecords[id];
    }
    setActiveDataRecord(dataRecord) {
        if (__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f") === 0) {
            let obj = new Object();
            this.dataRecords.push(obj);
        }
        let id = dataRecord.id;
        if (id === 0) {
            id = this.dataRecords.length;
            dataRecord.id = id;
            this.dataRecords.push(dataRecord);
        }
        else {
            id = dataRecord.id;
            this.dataRecords[id] = dataRecord;
        }
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, id, "f");
        return id;
    }
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    setTemplate(template) {
        let dataRecord = this.getActiveDataRecord();
        dataRecord.textTemplate = template;
        return this;
    }
    setData(dataForRendering) {
        let dataRecord = this.getActiveDataRecord();
        dataRecord.dataForRendering = dataForRendering;
        return this;
    }
    render() {
        if (__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f") === 0) {
            throw new Error("No template neither data were set.");
        }
        let dataRecord = this.getActiveDataRecord();
        if (dataRecord.isOptimized === false) {
            this.optimize(dataRecord.id);
            dataRecord = this.dataRecords[dataRecord.id];
        }
        let renderedHtml = this.renderOptimizedToStringDataText(dataRecord.id, dataRecord.dataForRendering);
        if (this.debug) {
            console.log("renderedHtml before afterRender event emitted", renderedHtml);
        }
        const eventResult = this.emitEvent(this.EVENT_NAME__AFTER_RENDER, {
            html: renderedHtml,
            data: dataRecord.dataForRendering
        });
        if (eventResult.length > 0) {
            const last = eventResult.length - 1;
            let payloadReturned = null;
            for (let eventResultsStep = last; eventResultsStep > (-1); eventResultsStep--) {
                try {
                    // @ts-ignore
                    payloadReturned = eventResult[eventResultsStep].result.payloadReturned;
                }
                catch (e) { }
                if (!payloadReturned) {
                    continue;
                }
                renderedHtml = payloadReturned.html;
            }
            if (this.debug) {
                console.log("renderedHtml before afterRender event emitted", eventResult, renderedHtml);
            }
        }
        else if (this.debug) {
            console.log("afterRender event did not change html");
        }
        return renderedHtml;
    }
    // the faster method.
    renderOptimizedDataBitsbufs(templateDataRecordId, dataForRendering) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        dataRecord.dataForRendering = dataForRendering;
        let bitsbufsArray = [...dataRecord.optimizedBitsbufTemplate];
        for (let placeholderName in dataRecord.dataForRendering) {
            let placeholderEntries = dataRecord.optimizedPlaceholdersEntries[placeholderName];
            // @ts-ignore
            let placehoder = dataRecord.dataForRendering[placeholderName];
            for (let i of placeholderEntries) {
                bitsbufsArray[i] = placehoder;
            }
        }
        return bitsbufsArray;
    }
    renderOptimizedToStringDataText(templateDataRecordId, dataForRendering) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        dataRecord.dataForRendering = dataForRendering;
        let textBlocks = this.renderOptimizedTextBlocks(templateDataRecordId, dataRecord.dataForRendering);
        let renderedText = textBlocks.join("");
        return renderedText;
    }
    renderOptimizedToStringDataBitsbufs(templateDataRecordId, dataForRendering) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        dataRecord.dataForRendering = dataForRendering;
        let bitsbufsArray = this.renderOptimizedDataBitsbufs(templateDataRecordId, dataRecord.dataForRendering);
        let bitsbufsArrayLen = bitsbufsArray.length;
        let textBlocks = new Array(bitsbufsArrayLen);
        let i = 0;
        for (i = 0; i < bitsbufsArrayLen; i++) {
            let bitsbufElem = bitsbufsArray[i];
            if (typeof bitsbufElem === "string") {
                textBlocks[i] = bitsbufElem;
            }
            else {
                textBlocks[i] = this.textDecoder.decode(bitsbufElem);
            }
        }
        let renderedText = textBlocks.join("");
        return renderedText;
    }
    // the way to improve:
    // after optimization, create once dataRecord.optimizedBitsbufTemplate of texts, so not to decode to strings.
    renderOptimizedTextBlocks(templateDataRecordId, dataForRendering
    // { key: text }
    ) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        dataRecord.dataForRendering = dataForRendering;
        let bitsbufsArray = [...dataRecord.optimizedBitsbufTemplate];
        let textBlocks = new Array();
        let bitsbufElem = new Uint8Array();
        for (let i = 0; i < bitsbufsArray.length; i++) {
            bitsbufElem = bitsbufsArray[i];
            textBlocks[i] = this.textDecoder.decode(bitsbufElem);
        }
        for (let placeholderName in dataRecord.dataForRendering) {
            let placeholderEntries = dataRecord.optimizedPlaceholdersEntries[placeholderName];
            // @ts-ignore
            let placehoder = dataRecord.dataForRendering[placeholderName];
            for (let i of placeholderEntries) {
                textBlocks[i] = placehoder;
            }
        }
        return textBlocks;
    }
    optimize(templateDataRecordId) {
        let maxIterationsNumber = 1200;
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        if (dataRecord.bitsbufTemplate.byteLength === 0) {
            dataRecord.bitsbufTemplate = this.tokensParser.textEncoder.encode(dataRecord.textTemplate);
        }
        let end = dataRecord.bitsbufTemplate.length;
        let templateLookupRange = [0, end];
        let placeholdersNames = Object.keys(dataRecord.dataForRendering);
        let severalTokensSets = placeholdersNames.map((placeholderName) => {
            let placeholderMarkup = ["{{ ", placeholderName, " }}"].join("");
            return [placeholderMarkup];
        });
        let bitsbufsRanges = new Array(1);
        bitsbufsRanges[0] = templateLookupRange;
        let inOutRanges_WithoutTokenizedAreas = new Array();
        let inOutRanges_TokensSetsMatched = new Array(placeholdersNames.length);
        let numberOfPlaceholdersMatched = this.tokensParser
            .parseAroundSeveralTokensSets(dataRecord.bitsbufTemplate, bitsbufsRanges, 
        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        severalTokensSets, 
        // where one tokensSet is array of datatype string[]
        inOutRanges_WithoutTokenizedAreas, inOutRanges_TokensSetsMatched, maxIterationsNumber);
        for (let placeholderId = 0; placeholderId < placeholdersNames.length; placeholderId++) {
            let placeholderName = placeholdersNames[placeholderId];
            let tokensMatchedRanges = inOutRanges_TokensSetsMatched[placeholderId];
            for (let tokenId = 0; tokenId < tokensMatchedRanges.length; tokenId++) {
                let templateRecord = new Object();
                templateRecord.range = [...tokensMatchedRanges[tokenId]];
                templateRecord.placeholderName = placeholderName;
                dataRecord.optimizedTemplate.push(templateRecord);
            }
        }
        let fixedTemplateRecord = new Object();
        for (let templateRange of inOutRanges_WithoutTokenizedAreas) {
            fixedTemplateRecord = new Object();
            fixedTemplateRecord.range = templateRange;
            fixedTemplateRecord.placeholderName = "_";
            dataRecord.optimizedTemplate.push(fixedTemplateRecord);
        }
        dataRecord.optimizedPlaceholdersEntries = new Object();
        for (let placeholderId = 0; placeholderId < placeholdersNames.length; placeholderId++) {
            let placeholderName = placeholdersNames[placeholderId];
            dataRecord.optimizedPlaceholdersEntries[placeholderName] = new Array();
        }
        let optimizedRecords = this.orderedRecords(dataRecord.optimizedTemplate);
        dataRecord.optimizedBitsbufTemplate = new Array(optimizedRecords.length);
        for (let i = 0; i < optimizedRecords.length; i++) {
            let record = optimizedRecords[i];
            let placeholderName = record.placeholderName;
            let bitsbuf = new Uint8Array();
            if (placeholderName === "_") {
                bitsbuf = dataRecord.bitsbufTemplate.subarray(record.range[0], record.range[1]);
                dataRecord.optimizedBitsbufTemplate[i] = bitsbuf;
            }
            else {
                dataRecord.optimizedPlaceholdersEntries[placeholderName].push(i);
            }
        }
        dataRecord.optimizedTemplate = [...optimizedRecords];
        dataRecord.isOptimized = true;
        return numberOfPlaceholdersMatched;
    }
    orderedRecords(inRecords) {
        let records = inRecords.sort((recordA, recordB) => {
            let startA = recordA.range[0];
            let startB = recordB.range[0];
            if (startA === startB) {
                return (0);
            }
            else if (startA > startB) {
                return (1);
            }
            else {
                return (-1);
            }
        });
        return [...records];
    }
    // old method String.replace() in loop over all charrs of the template every loop iterations.
    replaceTemplateRendererWithDataForRendering() {
        let dataRecord = this.getActiveDataRecord();
        let renderedHtml_1 = "";
        let renderedHtml_2 = dataRecord.textTemplate;
        for (const placeholderName in dataRecord.dataForRendering) {
            renderedHtml_1 = renderedHtml_2;
            const stringToReplace = `{{ ${placeholderName} }}`;
            // @ts-ignore
            let valueToSet = dataRecord.dataForRendering[placeholderName];
            if (!valueToSet) {
                valueToSet = "";
            }
            renderedHtml_2 = renderedHtml_1.replace(stringToReplace, valueToSet);
        }
        return renderedHtml_2;
    }
}
exports.TemplateRenderer = TemplateRenderer;
_TemplateRenderer_activeDataRecordId = new WeakMap();
//# sourceMappingURL=TemplateRenderer.js.map