import { TextEncoder, TextDecoder } from "node:util";
import { EventEmitter } from "@jaisocx/event-emitter";
import { TokensParser } from "@jaisocx/tokens-parser";
export class TemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER;
    tokensParser;
    dataRecords;
    #activeDataRecordId;
    textEncoder;
    textDecoder;
    constructor() {
        super();
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this.tokensParser = new TokensParser();
        this.dataRecords = new Array();
        this.#activeDataRecordId = 0;
        this.textEncoder = new TextEncoder();
        this.textDecoder = new TextDecoder("utf8");
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
        this.#activeDataRecordId = (this.dataRecords.length - 1);
        this.dataRecords[this.#activeDataRecordId].id = this.#activeDataRecordId;
        return this.dataRecords[this.#activeDataRecordId];
    }
    getActiveDataRecord() {
        let dataRecord;
        if (this.#activeDataRecordId === 0) {
            let obj = new Object();
            this.dataRecords.push(obj);
            dataRecord = this.addNewDataRecord();
        }
        else {
            dataRecord = this.dataRecords[this.#activeDataRecordId];
        }
        return dataRecord;
    }
    getActiveDataRecordId() {
        return this.#activeDataRecordId;
    }
    getDataRecordById(id) {
        return this.dataRecords[id];
    }
    setActiveRecordId(id) {
        this.#activeDataRecordId = id;
        return this.dataRecords[id];
    }
    setActiveDataRecord(dataRecord) {
        if (this.#activeDataRecordId === 0) {
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
        this.#activeDataRecordId = id;
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
        if (this.#activeDataRecordId === 0) {
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
//# sourceMappingURL=TemplateRenderer.js.map