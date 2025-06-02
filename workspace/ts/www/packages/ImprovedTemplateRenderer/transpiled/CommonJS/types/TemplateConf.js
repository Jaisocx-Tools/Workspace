"use strict";
// //@example: improvedTemplateRenderer
//   .setTemplates         let templatesConf = {
/*
          "tableOpen":                {
            "tag": "main",
            "placeholder": "tableCssClasses"
          },
"colsLabelsHolderOpen":       {
              "tag": "main",
              "branch-repeat-tag": "columnLabels"
            },
"colLabelOpen":                 {
                "tag": "columnLabels",
                "start-repeat": true
              },
"colLabelRendered":               {
                  "tag": "columnLabels",
                  "placeholder": "columnLabelInfo"
                },
"colLabelClose":                {
                "tag": "columnLabels"
              },
"colsLabelsHolderClose":      {
              "tag": "main"
            },
"recordsHolderOpen":          {
              "tag": "main"
            },
"recordOpen":                   {
                "tag": "record",
                "start-repeat": true
              },
"fieldOpen":                      {
                  "tag": "fieldValue",
                  "start-repeat": true
                },
"fieldRendered":                    {
                    "tag": "fieldValue",
                    "placeholder": "value"
                  },
"fieldClose":                     {
                  "tag": "fieldValue"
                },
"recordClose":                  {
                "tag": "record"
              },
"recordsHolderClose":         {
              "tag": "main"
            },
"tableClose":               {
            "tag": "main"
          }
};
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateConf = void 0;
//
// "dataType": "WellKnownCompany_RestApi_ResponseJsonDataInterface",
//
class TemplateConf {
    constructor() {
        this.templateName = "";
        this.tag = "";
        this.placeholder = null;
        this.startRepeat = false;
        this.repeatTagConfDataApplies = false;
        this.useRepeatCallback = false;
        this.repeatDataCallback = null;
        this.branchRepeatTag = null;
        this.hasPlaceholders = false;
        this.data = null;
        this.info = null;
        this.placeholdersPrepared = false;
        this.placeholdersNumber = 0;
    }
}
exports.TemplateConf = TemplateConf;
//# sourceMappingURL=TemplateConf.js.map