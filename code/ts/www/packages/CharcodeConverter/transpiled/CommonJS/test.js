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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xmldom_1 = __importDefault(require("xmldom"));
const fs = __importStar(require("node:fs"));
let globXmlDocUrl = "https://workspace.brightday.email/packages/CharcodeConverter/tmp_data/ucd.all.grouped.xml";
// let glob_IdTreeHtml  = "unicode_data_tree";
let glob_CharsNumbersArray_Expand = false;
let glob_TextDecoder = new TextDecoder();
async function loadDoc(url) {
    let response = await fetch(url);
    let responseText = await response.text();
    let parser = new xmldom_1.default();
    let doc = parser.parseFromString(responseText, "text/xml");
    return doc;
    // const name = xmlDoc.querySelector('name').textContent;
}
async function getDataFromXmlDoc(doc, in_CharsNumbersArray_Expand) {
    let querySelector = "group";
    let groupElements = doc.querySelectorAll(querySelector);
    let retVal = new Array(groupElements.length);
    let groupId = 0;
    let groupElement = new Object();
    let group_AttributesNamesArray = [
        "gc",
        "sc",
        // "scx",
        "bc",
        "blk"
    ];
    let gaId_group_Attribute = 0;
    let gaName_group_Attribute = "";
    let gaValue_group_Attribute = "";
    let cArray_charNodes = [];
    let cId_charNode = 0;
    let charNode = {};
    let char_NodeName = "char";
    let caName_char_Number16Base_AttributeName = "cp";
    let caValue_char_Number16Base_StringVal = "";
    let charNumVal = 0;
    let retValObj = new Object();
    for (groupId = 0; groupId < groupElements.length; groupId++) {
        retValObj = new Object();
        groupElement = groupElements[groupId];
        for (gaId_group_Attribute = 0; gaId_group_Attribute < group_AttributesNamesArray.length; gaId_group_Attribute++) {
            gaName_group_Attribute = group_AttributesNamesArray[gaId_group_Attribute];
            gaValue_group_Attribute = groupElement.getAttribute(gaName_group_Attribute);
            retValObj[gaName_group_Attribute] = gaValue_group_Attribute;
        }
        cArray_charNodes = groupElement.children;
        let nCharsArray = new Array(group_AttributesNamesArray.length);
        let nId_charId = 0;
        for (cId_charNode = 0; cId_charNode < cArray_charNodes.length; cId_charNode++) {
            charNode = cArray_charNodes[cId_charNode];
            caValue_char_Number16Base_StringVal = charNode.getAttribute(caName_char_Number16Base_AttributeName);
            charNumVal = parseInt(caValue_char_Number16Base_StringVal, 16);
            nCharsArray[nId_charId] = charNumVal;
            nId_charId++;
        }
        if (in_CharsNumbersArray_Expand === true) {
            retValObj["chars"] = nCharsArray;
        }
        else if (retValObj["gc"] === "Ll" && retValObj["bc"] === "L") {
            let buf = new Uint16Array(nCharsArray);
            let letters = glob_TextDecoder.decode(buf);
            retValObj["chars"] = letters;
        }
        else {
            retValObj["chars"] = JSON.stringify(nCharsArray);
        }
        retVal[groupId] = retValObj;
    }
    return retVal;
}
async function load() {
    let doc = await loadDoc(globXmlDocUrl);
    let obj = await getDataFromXmlDoc(doc, glob_CharsNumbersArray_Expand);
    fs.writeFileSync("test.json", JSON.stringify(obj, null, 2));
    return 1;
}
load().then(arg => { return 1; });
//# sourceMappingURL=test.js.map