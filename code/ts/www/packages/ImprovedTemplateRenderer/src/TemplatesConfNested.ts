
import { NestedMultipleCallback, nestedMultipleCallback } from "./NestedMultipleCallback.js";


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


export class TemplatesConfNested {

  //@required
  //@whenIsHolder
  //@purpose to group nested nodes by this Tag value
  nestedNodes_Tag: string; 


  //@whenIsHolder
  //@purpose: documentation
  //@explained  just to note for documentation purposes, not used in the rendering multile nestedNodes_
  //        the variable name used in the placehlders in the nested templates. 
  //        Here in this template html the variableName used in the placeholder is the "tableRecord", 
  //        and in the nested templates, the variableName of the object, 
  //        used in the placeholders, will be the "columnConf",
  //        and the TemplateRenderer method, processing inner loops, 
  //        has to set the value of the datatype suitable to columnConf (this is a specific example)
  //        and has to call in the inner loop on nestedTemplates a specific callback, the prop will be here, too.))
  nestedNodes_PlaceholderName: string;


  //@whenIsHolder 
  //@purpose: type hinting
  //@explained to know whether when this template is the holder, 
  //        and invokes the callback for the nestedNodes_, 
  //        the callback return value matches the right datatype.
  //        the datatype of the data, set in the nested nodes templates placehlders, here nestedNodes_PlaceholderName = "columnConf";
  nestedNodes_PlaceholderDatatype: any|object|string|number;


  //@calculated
  //@whenIsHolder
  nestedNodes_Amount: number;


  //@whenIsHolder
  // The Nested Nodes Callback Function, Providing to the Nested Templates Placeholders the Json Data. The Json Data is used when rendering the Nested Templates.
  //@whyOptional since of great use when the holder temlate data for the placehlder is set dynamic possibly in a loop.
  //@purpose 
  //        example: when the holder's template placeholder's data is a table record:
  //                    each record is delivering dynamic in the loop,
  //                    and the next level loop templates data for the placeholders
  //                    is then the field value in this dynamic obtained in the loop record of the holderTemplate.
  //
  //        when there are the nested templates, 
  //        however there are no placeholders in the templates, 
  //        or in the nestedTemplates the placeholders data can be set not by the callback, 
  //        but just with .setTemplateData() method.
  //        the callback is for returning the value for the nestedTemplates their placehlders .data prop one same object, 
  //
  //        to set the function, that processes in loop this template prop value .data, 
  //        or even, an array elem of thisTemplate.data, 
  //        the callback to invoke in the standard impl of the method, 
  //        iterating for multiple nestedNodes_.
  nestedNodes_Callback: NestedMultipleCallback|undefined|null;


  constructor() {

    this.nestedNodes_Tag = ""; 
    this.nestedNodes_PlaceholderName = "";
    this.nestedNodes_PlaceholderDatatype = 0;
    this.nestedNodes_Amount = 0;
    this.nestedNodes_Callback = nestedMultipleCallback;

  }
}






