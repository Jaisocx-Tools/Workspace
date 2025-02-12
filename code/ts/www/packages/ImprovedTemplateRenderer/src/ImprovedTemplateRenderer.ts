

import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";


import { ImprovedTemplateRendererConstants } from "./ImprovedTemplateRendererConstants.js";
import { TemplatesConf } from "./TemplatesConf.js";


export class ImprovedTemplateRenderer extends EventEmitter {

  EVENT_NAME__AFTER_RENDER: any;


  templatesObject: any;
  templatesConf: any;
  dataConf: any[];
  data: any;


  // props for technique purposes.
  isStandardCallback: number;


  constructor() {
    super();


    this.EVENT_NAME__AFTER_RENDER = "afterRender";


    this.templatesObject = {};
    this.templatesConf = {};
    this.dataConf = [];
    this.data = {};


    // props for technique purposes.
    this.isStandardCallback = 1;

  }

  setDebug(debug: boolean): ImprovedTemplateRenderer {
    this.debug = debug;
    return this;
  }

  setTemplatesObject(templates: any): ImprovedTemplateRenderer {
    this.templatesObject = templates;
    return this;
  }

  setTemplatesConf(data: object): ImprovedTemplateRenderer {
    this.data = data;
    return this;
  }

  setDataConf(data: object): ImprovedTemplateRenderer {
    this.data = data;
    return this;
  }

  setData(data: object): ImprovedTemplateRenderer {
    this.data = data;
    return this;
  }

  render(): any {

    // the result variable is declared.
    // the result is the rendered html,
    // all templates where placeholders replaced with the according data,
    // and the templates, these are thought to be repeated with data of datatype array,
    // are produced in the cycle, too.
    let renderedTemplatesHtml: any = "";

    let resultArrayFlat: any[] = [];

    let resultArrayRecursive: any[] = [];

    let preparedTaggedGroupsInfos: any[] = this.prepareTaggedGroupsInfos();



    let resultArrayRecursiveElemsNumber: number = 0;

    resultArrayRecursiveElemsNumber = this.calculateResultArrayRecursiveNumber();


    return renderedTemplatesHtml;

  }


  // r.1 render() method first task 
  // to gather infos and statistics on nested templates, 
  // to plan the render tasks flow 
  // and to know the target arrays sizes.
  prepareTaggedGroupsInfos(): any[] {

    // int incs on first match attr "tag" with the LATEST_NESTED_TAGNAME attr for level1 since the step before.
    // decs on first time, there was no the tag in the attr "tag" or did not match the  LATEST_NESTED_TAGNAME
    let methodStatus_CurrentNestedLevel: number = 0; 
    let methodStatus_CurrentInfosIndex: number = 0; 

    // attr.nestedTag is set at once, when the node attr "nestedTag" exists. 
    let methodStatus_CurrentTagName: string = "";
    let methodStatus_CurrentTagNameOnceMatched: number = 0;

    let methodStatus_CurrentTagNamesArray: string[] = [];


    //@target 
    // OR OBJ just cumulating. no deletions or replaces. 
    let methodStatus_TargetResult_InfosArray: any[] = [];


    // dataConf loop, the order the templates will be appended to result html.
    let loop_1_dataConf_Step: number = 0;
    const loop_1_dataConf_length: number = this.dataConf.length;

    // same key in objects: templatesObject and templateConf
    let templateName: string = "";

    // html with placeholder(s)
    let template: string = "";

    // conf
    let templateConfItem: TemplatesConf;

    // data for template, to replace placeholder by value 
    let dataConfItem: any = {};

    // maybe to create the first INFOS Item for the entire html doc.

    for_1: for (
      loop_1_dataConf_Step = 0;
      loop_1_dataConf_Step < loop_1_dataConf_length;
      loop_1_dataConf_Step++
    ) {

      dataConfItem = this.dataConf[ loop_1_dataConf_Step ];
      templateName = dataConfItem[ "templateName" ];
      templateConfItem = this.templatesConf[ templateName ];

      // procesing nested templates,
      if ( methodStatus_CurrentNestedLevel !== 0 ) {
        const currentTemplate_Tags: string[]|string|undefined|null = templateConfItem[ "tag" ];

        // if no tag, coul be the level 0, and finishes taggedGroup
        if ( !currentTemplate_Tags || currentTemplate_Tags.length === 0 ) {
          // finish tagged group!
          // subcall out of the tagged group one level up.

          methodStatus_CurrentNestedLevel = 0;
          methodStatus_CurrentInfosIndex = 0;
          methodStatus_CurrentTagName = "";
          methodStatus_CurrentTagNameOnceMatched = 0;
          methodStatus_CurrentTagNamesArray = [];

          // the first level INFOS item updates the end numeric key in the templates object.
          // methodStatus_TargetResult_InfosArray[0].end = loop_1_dataConf_Step;


        } else {
          // templatesConf item.tag was not null or empty.

          // matching the methodStatus_CurrentTagName
          let tagMatches: number = 0;

          // dataConfItem.tag can be a string or string[] array of tags.
          if ( typeof( currentTemplate_Tags ) === "string" ) {
            tagMatches = ( currentTemplate_Tags === methodStatus_CurrentTagName ) ? 1 : 0;

          } else if ( Array.isArray( currentTemplate_Tags ) === true ) {
            tagMatches = ( currentTemplate_Tags.find( (tag: string) => tag === methodStatus_CurrentTagName ) ) ? 1 : 0;

          }
          

          if ( tagMatches ) {

            
            if ( methodStatus_CurrentTagNameOnceMatched === 1 ) {
              


              
            } else {
              // tag matches, but once matched is 0,
              // means, the tag is matched by the first template in this tagedGroup the first time,
              // 

              // if the first time, INFOS set start
              const info: any = {
                holderTemplateName: "",
                tag: methodStatus_CurrentTagName,
                holderIndex: 0,
                nestedLevel: methodStatus_CurrentNestedLevel,
                nestedMultipleTaggedIndexes: {
                  startIndex: loop_1_dataConf_Step,
                  endIndex: loop_1_dataConf_Step,
                },
                nestedMultipleTaggedNames: [],
                calculatedNumberOfNestedTemplatesIterations: 0,
                calculatedNumberOfNestedTemplates: 0
              };



              // next nested level.
              // when had INFO nested level, index = 5.
              // out of the nested level, methodStatus_CurrentInfosIndex--; length of the ONFOS remains same.
              // when a level inside the new nested group,
              // not methodStatus_CurrentInfosIndex++;
              // since the length plus one, and the prev pos was already minus one. now plus 2 or what? 
              // just the last array elem index. length - 1;
              // .push returns the new .length
              methodStatus_CurrentInfosIndex = methodStatus_TargetResult_InfosArray.push( info ) - 1;

              // set status 1 since this step created Infos obja and added to array.
              methodStatus_CurrentTagNameOnceMatched = 1;
            }

            // every next time, INFOS update end. 
            // //@rewrite later, when tested on unhandled exceptions, so that the .end never unset when a for loop broke.



          } else {
            // this template is went out of the taggedGroup 
            methodStatus_CurrentNestedLevel--;
            methodStatus_CurrentInfosIndex--;
            methodStatus_CurrentTagNamesArray.pop();
            methodStatus_CurrentTagName = methodStatus_CurrentTagNamesArray[ ( methodStatus_CurrentTagNamesArray.length - 1 ) ];

          }

        }

      }



      // logics: when attr nestedTag,
      // set to vars outside the loop, and continue.
      // here we don't need setting INFOS props, 
      // since INFOS props are set just when processing nested templates.
      const nestedTag: string|undefined|null = templateConfItem.nestedTag;

      if ( nestedTag ) {
        // set nested tag, 
        methodStatus_CurrentTagName = nestedTag;
        methodStatus_CurrentTagNamesArray.push( nestedTag );
        methodStatus_CurrentTagNameOnceMatched = 0;


        // inc neted level
        methodStatus_CurrentNestedLevel++;

        // continue
        continue for_1;
      }

      continue for_1;
      // forLevel_1 loop code block finish.
    }

    return methodStatus_TargetResult_InfosArray;
  }


}




