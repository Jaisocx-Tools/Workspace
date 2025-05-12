import DOMParser from "xmldom";
import * as fs from "node:fs";
let globXmlDocUrl = "https://workspace.brightday.email/packages/CharcodeConverter/tmp_data/ucd.all.grouped.xml";
// let glob_IdTreeHtml  = "unicode_data_tree";
let glob_CharsNumbersArray_Expand = false;
let glob_TextDecoder = new TextDecoder();
async function loadDoc(url) {
    let response = await fetch(url);
    let responseText = await response.text();
    let parser = new DOMParser();
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