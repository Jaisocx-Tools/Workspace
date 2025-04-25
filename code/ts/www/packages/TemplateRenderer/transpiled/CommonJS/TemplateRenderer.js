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
const event_emitter_1 = require("@jaisocx/event-emitter");
const css_importer_1 = require("@jaisocx/css-importer");
class TemplateRenderer extends event_emitter_1.EventEmitter {
    constructor() {
        super();
        _TemplateRenderer_activeDataRecordId.set(this, void 0);
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this.baseParser = new css_importer_1.BaseParser();
        //this.fileWriter = new FileWriter();
        this.dataRecords = new Array();
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, 0, "f");
    }
    initDataRecord() {
        let dataRecord = new Object();
        dataRecord.textTemplate = "";
        dataRecord.dataForRendering = new Object();
        dataRecord.bitsbufTemplate = new Uint8Array();
        dataRecord.optimizedBitsbufTemplate = new Array();
        dataRecord.optimizedPlaceholdersEntries = new Object();
        dataRecord.optimizedTemplate = new Array();
        return dataRecord;
    }
    getActiveDataRecord() {
        let dataRecord;
        if (__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f") === 0) {
            let obj = new Object();
            this.dataRecords.push(obj);
            dataRecord = this.initDataRecord();
            this.dataRecords.push(dataRecord);
            __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, 1, "f");
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
    addNewDataRecord() {
        let dataRecord = this.initDataRecord();
        this.dataRecords.push(dataRecord);
        __classPrivateFieldSet(this, _TemplateRenderer_activeDataRecordId, (this.dataRecords.length - 1), "f");
        this.dataRecords[__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f")].id = __classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f");
        return this.dataRecords[__classPrivateFieldGet(this, _TemplateRenderer_activeDataRecordId, "f")];
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
        let renderedHtml = this.replaceTemplateRendererWithDataForRendering();
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
                textBlocks[i] = this.baseParser.textDecoder.decode(bitsbufElem);
            }
        }
        let renderedText = textBlocks.join("");
        return renderedText;
    }
    // the way to improve:
    // after optimization, create once dataRecord.optimizedBitsbufTemplate of texts, so not to decode to strings.
    renderOptimizedTextBlocks(templateDataRecordId, dataForRendering // { key: text }
    ) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        dataRecord.dataForRendering = dataForRendering;
        let bitsbufsArray = [...dataRecord.optimizedBitsbufTemplate];
        let textBlocks = new Array();
        let bitsbufElem = new Uint8Array();
        for (let i = 0; i < bitsbufsArray.length; i++) {
            bitsbufElem = bitsbufsArray[i];
            textBlocks[i] = this.baseParser.textDecoder.decode(bitsbufElem);
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
    optimize(templateDataRecordId) {
        let dataRecord = this.getDataRecordById(templateDataRecordId);
        if (dataRecord.bitsbufTemplate.byteLength === 0) {
            dataRecord.bitsbufTemplate = this.baseParser.textEncoder.encode(dataRecord.textTemplate);
        }
        let start = 0;
        let end = dataRecord.bitsbufTemplate.length;
        let inBitsBufRange = new Array(2);
        let tokenMatchedRange = [0, 0];
        inBitsBufRange[0] = 0;
        inBitsBufRange[1] = end;
        main: for (let placeholderName in dataRecord.dataForRendering) {
            const stringToReplace = `{{ ${placeholderName} }}`;
            let tokens = [this.baseParser.textEncoder.encode(stringToReplace)];
            let i = 0;
            let maxIterations = 120;
            start = 0;
            for (i = 0; i < maxIterations; i++) {
                let pos = this.baseParser.getRangeOfTokensSetMatch(dataRecord.bitsbufTemplate, inBitsBufRange, tokens, tokenMatchedRange, start, end);
                if (pos === false) {
                    break;
                }
                let templateRecord = new Object();
                templateRecord.range = [...tokenMatchedRange];
                templateRecord.placeholderName = placeholderName;
                dataRecord.optimizedTemplate.push(templateRecord);
                start = pos;
            }
        }
        let records = this.orderedRecords(dataRecord.optimizedTemplate);
        start = 0;
        let fixedTemplateRecord = new Object();
        let templateRange = [0, 0];
        for (let record of records) {
            templateRange = [start, 0];
            let matchedRangeStart = record.range[0];
            templateRange[1] = matchedRangeStart;
            start = record.range[1] + 1;
            fixedTemplateRecord = new Object();
            fixedTemplateRecord.placeholderName = "_";
            fixedTemplateRecord.range = templateRange;
            dataRecord.optimizedTemplate.push(fixedTemplateRecord);
        }
        templateRange = [start, end];
        fixedTemplateRecord = new Object();
        fixedTemplateRecord.placeholderName = "_";
        fixedTemplateRecord.range = templateRange;
        dataRecord.optimizedTemplate.push(fixedTemplateRecord);
        records = this.orderedRecords(dataRecord.optimizedTemplate);
        dataRecord.optimizedBitsbufTemplate = new Array(dataRecord.optimizedTemplate.length);
        dataRecord.optimizedPlaceholdersEntries = new Object();
        for (let placeholderName in dataRecord.dataForRendering) {
            dataRecord.optimizedPlaceholdersEntries[placeholderName] = new Array();
        }
        for (let i = 0; i < records.length; i++) {
            let record = records[i];
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
        dataRecord.optimizedTemplate = [...records];
        return 1;
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
}
exports.TemplateRenderer = TemplateRenderer;
_TemplateRenderer_activeDataRecordId = new WeakMap();
//# sourceMappingURL=TemplateRenderer.js.map