


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

//
// "dataType": "WellKnownCompany_RestApi_ResponseJsonDataInterface",
//

export class TemplateConf {

  //
  templateName: string;

  //@purpose 
  // name of the templates group 
  tag: string;



  //@purpose 
  // the name to the variable in the placeholder.
  // this variable value is equal with the prop "data" in the instance of this class.
  // then the placeholder "tableRecord" in the template e.g. like this: 
  // <any-html>{{ tableRecord.name }} {{ tableRecord.family_name }}</any-html>
  placeholder: string|undefined|null;



  startRepeat: boolean;
  repeatTagConfDataApplies: boolean;
  useRepeatCallback: boolean;
  repeatDataCallback: Function|undefined|null;




  branchRepeatTag: string|undefined|null;
 


  //@purpose
  // to minimize replace() invoke times,
  // when this prop set zero,
  // the template is not processed,
  // and just added it's ref to the resulting array of rendered to html templates.
  hasPlaceholders: boolean;



  //@requiredWhen .hasPlaceholders = true; 
  //@purpose
  // the placeholder's data placed into template when being rendered
  data: any|object|undefined|null;



  //@preparedResult
  info: any;



  //@calculated
  //@preprocessing
  //@info mark whether a placeholder's jpath expression was parsed,
  //          and the template is now array of datatype any[], 
  //          string html and JPath class instance where was placeholder.
  placeholdersPrepared: boolean;


  //@calculated
  //@preprocessing
  //@purpose
  // to know the number of placeholders, 
  // this is the .replace() or similar calls number
  // when rendering templates in a loop with very many elems.
  placeholdersNumber: number;

  

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












