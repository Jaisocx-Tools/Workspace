"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesConf = void 0;
// //@example: improvedTemplateRenderer
//   .setTemplates         let templatesConf = {
/*
          "tableOpen":                {
            "isWithPlaceholders": 0,
            "multiple": 0,
            "isWithNestedMultiple": 0,
            "placeholder": "tableCssClasses",
            "dataType": "text"
},
"colsLabelsHolderOpen":       {
              "isWithPlaceholders": 0,
              "multiple": 0,
              "isWithNestedMultiple": 1,
              "nestedTag": "columnLabels",
              "dataType": "any[]"
},
"colLabelOpen":                 {
                "tag": "columnLabels",
                "multiple": 1,
                "isWithPlaceholders": 0
},
"colLabelRendered":               {
                  "tag": "columnLabels",
                  "multiple": 1,
                  "isWithPlaceholders": 1,
                  "placeholder": "columnLabelInfo",
                  "dataType": "any"
},
"colLabelClose":                {
                "tag": "columnLabels",
                "multiple": 1,
                "isWithPlaceholders": 0
},
"colsLabelsHolderClose":      { "isWithPlaceholders": 0 },
"recordsHolderOpen":          {
              "isWithPlaceholders": 0,
              "multiple": 0,
              "isWithNestedMultiple": 1,
              "nestedTag": "record",
              "dataType": "any[]"
},
"recordOpen":                   {
                "tag": "record",
                "isWithPlaceholders": 0,
                "multiple": 1,
                "isWithNestedMultiple": 1,
                "nestedTag": "fieldValue",
                "dataType": "any[]"
},
"fieldOpen":                      {
                  "tag": [ "record", "fieldValue" ],
                  "multiple": 1,
                  "isWithPlaceholders": 0
},
"fieldRendered":                    {
                    "tag": [ "record", "fieldValue" ],
                    "multiple": 1,
                    "isWithPlaceholders": 1,
                    "placeholder": "value",
                    "dataType": "any"
},
"fieldClose":                     {
                  "tag": [ "record", "fieldValue" ],
                  "multiple": 1,
                  "isWithPlaceholders": 0
},
"recordClose":                  {
                "tag": "record",
                "multiple": 1,
                "isWithPlaceholders": 0
},
"recordsHolderClose":         { "isWithPlaceholders": 0 },
"tableClose":               { "isWithPlaceholders": 0 }
};
*/
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
        //@preparedResult
        this.info = null;
        //props block @calculated
        this.placeholdersPrepared = 0;
        this.placeholdersNumber = 0;
        this.nestedNodesNumber = 0;
    }
}
exports.TemplatesConf = TemplatesConf;
//# sourceMappingURL=TemplatesConf.js.map