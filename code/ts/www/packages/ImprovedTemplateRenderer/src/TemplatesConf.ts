
import { TemplatesConfNested } from "./TemplatesConfNested.js";


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

export class TemplatesConf {

  //@requiredWhen .isWithPlaceholders = 1; 
  //@purpose
  // the placeholder's data placed into template when being rendered
  data: any|object|undefined|null;


  //@purpose
  // to minimize replace() invoke times,
  // when this prop set zero,
  // the template is not processed,
  // and just added it's pointer to the resulting array of rendered to html templates.
  isWithPlaceholders: number|null;


  //@purpose 
  // when not zero, 
  // and the .data is iterable, array or object, 
  // we iterate over .data and append several times this template rendered to html
  // to the resulting array of htmls to add to html.
  multiple: number|undefined|null;


  //@purpose whether this template when rendered has the nested html nodes, these are multiple times rendered in a loop
  //@forWhat the props: the nested multiple rendered nodes can have the placeholder data object, 
  //        obtaining as the return value from the callback invoked,
  //        when processing this template in the loop of the templatesObject set of templateHTML texts.
  //@default: 0
  isWithNestedMultiple: number|undefined|null;


  tag: string[]|string|undefined|null;


  //@requiredWhen IsWithNestedMultiple = 1; Then the default callback applies, elem of the data, of array or object's props.
  //@default: null
  nestedTag: string|undefined|null;


  //@requiredWhen IsWithNestedMultiple = 1; and need the custom callback other than just returning an elem of this template elem iterable property data of dataype array or object. 
  //@default: null
  nestedNodesConf: TemplatesConfNested|any|object|undefined|null;


  //@purpose documentation
  // the datatype of the data prop value
  dataType: any|object|undefined|null;


  //@purpose documentation
  // the name to the variable in the placeholder.
  // this variable value is equal with the prop "data" in the instance of this class.
  // then the placeholder "tableRecord" in the template e.g. like this: 
  // <any-html>{{ tableRecord.name }} {{ tableRecord.family_name }}</any-html>
  placeholder: string|undefined|null;


  //@calculated
  //@preprocessing
  //@purpose
  // to know the number of placeholders, 
  // this is the .replace() or similar calls number
  // when rendering templates in a loop with very many elems.
  placeholdersNumber: number;


  //@calculated
  //@preprocessing
  //@purpose
  // to know the number of nested nodes these hve to be rendered many times. 
  nestedNodesNumber: number;


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












