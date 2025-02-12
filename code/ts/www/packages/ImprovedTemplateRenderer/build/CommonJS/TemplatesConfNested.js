"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesConfNested = void 0;
const NestedMultipleCallback_js_1 = require("./NestedMultipleCallback.js");
// This Class Type is to type hint the templates array elems,
// these are generated in the loop, 
// by the iterable data.
// this iterable data can be deliered by the callback, set here.
// and this callback function is being invoked in the method,
// iterating in the templates array ImprovedTemplateRenderer class property,
// when reached the template elem,
// that is the html holder elem of the nested html nodes.
// the holder html node templates array elem is noted with a tag,
// and the nested nodes are noted with equal value tag, groupping they.
// I set in the props names lodash symbol,
// for the nice reading of the json, set in the templates conf array,
// when defined the rules to render the NestedNodes.
// This will optique show the namespace hint for this class,
// when serialized to json text, 
// and even more, when the json is optimized by clearing up all background spaces.
//@required_example
// "confNested": { "nestedNodes_Tag": "", }
//@all_props_example
// "confNested": { "nestedNodes_PlaceholderName": "tableRecordJsonData", "nestedNodes_Tag": "recordFields", "nestedNodes_PlaceholderDatatype": "TableExampleDataInterface", "nestedNodes_Callback": aFunctionName or (( record ) => record) }
//
// "confNested": { 
//   "nestedNodes_PlaceholderName": "tableRecordJsonData", 
//   "nestedNodes_Tag": "recordFields", 
//   "nestedNodes_PlaceholderDatatype": "TableExampleDataInterface", 
//   "nestedNodes_Callback": ( ( dataElem ) => dataItem ) 
// }
//
// "nestedNodes_Callback": this.getRecordFromTheRecordset_AndPreprocessTheRecord.bind(this),
// 
//@explained TableExampleDataInterface 
// in the typescript programming, and Angular Framework, 
// for type hinting purposes, 
// classes and interfaces are set to define the json structure, 
// this json is sent in https responses by RestAPI endpoints urls.
// Then this is normal to expect, the calass or interface already exists in a Project, coded with Typescript.
//
//@explained nestedNodes_Callback
//(( record ) => record)
// when holderHtmlNode template elem data prop set recordset of an sql query to a table in an sql database,
// and the nestedNodes data callback is iterating always when the data is iterable,
// and the input arg of the callback is always each elem in the loop.
// this arrow func accepts record input arg and the result of the callback is this record. this can be the default value of this prop. (dataElem) => dataElem;
// ths is just the simpliest example, when an elem of the iterable data is not processed and no other actions in the callback.
// but the callback prop to enable here allows programming in the callback funcs on demand.
class TemplatesConfNested {
    constructor() {
        this.nestedNodes_Tag = "";
        this.nestedNodes_PlaceholderName = "";
        this.nestedNodes_PlaceholderDatatype = 0;
        this.nestedNodes_Amount = 0;
        this.nestedNodes_Callback = NestedMultipleCallback_js_1.nestedMultipleCallback;
    }
}
exports.TemplatesConfNested = TemplatesConfNested;
//# sourceMappingURL=TemplatesConfNested.js.map