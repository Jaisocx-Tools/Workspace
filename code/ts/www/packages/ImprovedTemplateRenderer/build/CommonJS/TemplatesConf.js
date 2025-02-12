"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesConf = void 0;
// //@example: improvedTemplateRenderer
//   .setTemplates (
//      [
//        "recordsetTagStart": "<recordset>",
//        "aRecordTagStart": "<record>",
//        "fieldTagStart": "<cell>",
//        "fieldTagTextContent": "{{ value }}",
//        "fieldTagFinish": "</cell>",
//        "aRecordTagFinish": "</record>",
//        "recordsetTagFinish": "</recordset>",
//      ]
//   )
//   .setTemplatesConf (
//   {
//     "recordsetTagStart": {
//       "data": this.data,
//       "isWithPlaceholders": 0,
//       "multiple": 0,
//       "isWithNestedMultiple": 1,
//       "nestedNodesConf": { "nestedNodes_Tag": "aRecord", },
//       "dataType": "TableExampleDataInterface[]",
//       "placeholder": "",
//     },
//     "aRecordTagStart": {
//       "tag: "aRecord",
//       "multiple": 1,
//       "isWithPlaceholders": 0,
//       "isWithNestedMultiple": 1,
//       "nestedNodesConf": { "nestedNodes_Tag": "fieldValue", },
//       "dataType": "TableExampleDataInterface",
//     },
//     "fieldTagStart": {
//       "tag": "fieldValue",
//       "multiple": 1,
//       "isWithPlaceholders": 0,
//     },
//     "fieldTagTextContent": {
//       "tag": "fieldValue",
//       "multiple": 1,
//       "isWithPlaceholders": 1,
//       "placeholder": "value",
//       "dataType": "any",
//     },
//     "fieldTagFinish": {
//       "isWithPlaceholders": 0,
//       "multiple": 1,
//       "tag": "fieldValue",
//     },
//     "aRecordTagFinish": {
//       "tag: "aRecord",
//       "multiple": 1,
//       "isWithPlaceholders": 0,
//     },
//     "recordsetTagFinish": {
//       "isWithPlaceholders": 0,
//       "multiple": 0,
//     },
//   }
// )
//
// "dataType": "WellKnownCompany_RestApi_ResponseJsonDataInterface",
//
class TemplatesConf {
    constructor() {
        this.data = {};
        this.isWithPlaceholders = 1;
        this.multiple = 0;
        //props block nested nodes, rendered several times
        this.isWithNestedMultiple = 0;
        this.tag = null;
        this.nestedTag = null;
        this.nestedNodesConf = null;
        //props block @purpose documentation
        this.dataType = null;
        this.placeholder = null;
        //props block @calculated
        this.placeholdersNumber = 0;
        this.nestedNodesNumber = 0;
    }
}
exports.TemplatesConf = TemplatesConf;
//# sourceMappingURL=TemplatesConf.js.map