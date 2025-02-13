

import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";


import { ImprovedTemplateRendererConstants } from "./ImprovedTemplateRendererConstants.js";
import { TemplatesConf } from "./types/TemplatesConf.js";
import { DataConf } from "./types/DataConf.js";
import { TemplateParser } from "./lib/TemplateParser.js";


export class ImprovedTemplateRenderer extends EventEmitter {

  EVENT_NAME__AFTER_RENDER: any;

  

  protected _templatesObject: any;
  protected _templatesConf: any;
  protected _dataConf: any[];



  // props for technique purposes.
  protected _preparedTemplatesObject: any;
  protected _renderedTemplatesTemporaryArray: any;
  protected _renderedHtmlArray: string[];
  protected _renderedHtml: string;

  protected _sumTemplatesSizes: number;


  protected templateParser: TemplateParser;
  protected charcodeConverter: CharcodeConverter;



  constructor() {
    super();

    this.EVENT_NAME__AFTER_RENDER = "afterRender";


    this._templatesObject = {};
    this._templatesConf = {};
    this._dataConf = [];


    // props for technique purposes.
    this._preparedTemplatesObject = {};
    this._renderedTemplatesTemporaryArray = [];
    this._renderedHtmlArray = [];
    this._renderedHtml = "";

    this._sumTemplatesSizes = 0;
  

    this.templateParser = TemplateParser.getInstance();
    this.charcodeConverter = CharcodeConverter.getInstance();
  }

  setDebug(debug: boolean): ImprovedTemplateRenderer {
    this.debug = debug;
    return this;
  }

  setTemplatesObject(templates: any): ImprovedTemplateRenderer {
    this._templatesObject = templates;
    return this;
  }

  setTemplatesConf(templatesConf: any): ImprovedTemplateRenderer {
    this._templatesConf = templatesConf;
    return this;
  }

  setDataConf(dataConf: any[]): ImprovedTemplateRenderer {
    this._dataConf = dataConf;
    return this;
  }


  render( inoutobj: any ): any {

    //@ready
    //@info   1. prepares placeolders to JPath objects 
    //        for fast handling placeholders 
    //        like {{ obj.prop1[2].someProp }}
    //        2. converts to Uint16Array
    this.prepareTemplates();


    // writes into this._renderedTemplatesTemporaryArray
    this.renderTemplates( inoutobj );


    const result: any = this.charcodeConverter.join (
      inoutobj
    );

    return result;
  }

  
  getDataconfByTemplateName( templateName: string ): DataConf {
    return this._dataConf.find( ( conf: DataConf ) => conf.template === templateName );
  }

  getOrderedTemplatesNames(): string[] {
    return [
      ...this._dataConf.map( ( conf: DataConf ) => conf.template )
    ];
  }



  //@info 
  //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
  //        2. split templates with placeholders.
  prepareTemplates(): undefined {

    const toAutoloadCharsets: number = 1;

    const orderedTemplatesNames: string[] = this.getOrderedTemplatesNames();

    let templateConf: TemplatesConf;
    let templateName: string = "";
    let templateHtml: string = "";
    let placeholderName: string|undefined|null = null;
    let preparedTemplate: any = null;

    for ( templateName of orderedTemplatesNames ) {
      templateConf = this._templatesConf[templateName];

      templateHtml = this._templatesObject[templateName];
      placeholderName = templateConf.placeholder;

      if ( placeholderName ) {
        preparedTemplate = this.templateParser.parse ( 
          templateHtml,
          placeholderName
        );
      } else {
        preparedTemplate = this.charcodeConverter.stringToArray ( 
          templateHtml,
          toAutoloadCharsets
        );
      }

      this._preparedTemplatesObject[templateName] = preparedTemplate;
    }
  }



  prepare(): any {

    const renderedTemplates: any = [];

    this._templatesConf;

    this._dataConf;

    const orderedTemplatesNames: string[] = this.getOrderedTemplatesNames();

    let templateConf: TemplatesConf;
    let templateName: string = "";
    let templateTag: string = "";
    let templateTagHolder: string = "";
    let renderedTemplate: any = null;

    for ( templateName of orderedTemplatesNames ) {
      templateConf = this._templatesConf[templateName];

      if ( templateConf.placeholder ) {

        if () {

        }
        
      } else {
        renderedTemplate = this._preparedTemplatesObject[templateName];
      }


    }

  }



  normalizeDataIterable( data: any ): { key: string, value: any }[] {
    // just normalizing arrays and objects to array of datatype [{key, value = .data[itemPos] }];

    let dataArray: any[] = [];
    if ( Array.isArray( data ) === true ) {
      dataArray = data.map( (value: any, index: number) => { return { key: index, 
        value: value, }; } );

    } else {
      const keys: any[] = Object.keys( data );
      dataArray = keys.map( (key: any) => { return { key: key, 
        value: data[key], }; } );

    }

    return dataArray;
  }


  repeatTaggedGroup (
    placeholderValue: any,
    dataConfIxStart: number,
    dataConfIxEnd: number,
    resultArray: any[],
    offsetInTheResultArray: number
  ): undefined {

    const converter: CharcodeConverter = CharcodeConverter.getInstance();


    


    // check for .isWithNestedTemplates))
    //@forEach info of the nestedTaggedGroup info.start info.end the range of the this._dataConf start - end, where nestedTaggedGroup resides.
    //              with one dataItem may times all templates in the nestedTaggedroup.

    // in the dataConf, representing tmplates lines in the right order,
    //      i is the pointer, form the start pos of this repeated group til the last pos in the array of templates.
    let i = 0;

    for ( i = dataConfIxStart; i < (dataConfIxStart + dataConfIxEnd ); i++ ) {

      //@moveToSubcall .renderOneTemplate
      const local_dataConfItem: any = this._dataConf[i];
      const local_templateName: string = local_dataConfItem[ "templateName" ];
      const local_templateConfig: TemplatesConf = this._templatesConf[local_templateName];

      // or assign as is to result array's item's pointer one single template Uint16Array.
      if ( local_dataConfItem.isWithPlaceholder === 1 ) {

        const templateSplitted: (Uint16Array|JPath)[] = this._templatesObject[local_templateName];

        let templateSplittedCounter: number = 0;
        let placeholdersCounter: number = 0;

        //@forEach the template with placeholders is splitted when prepared. 
        // to static Uint16Array 
        // and JPath with the parsed textual JPath expression 
        // to jpath array like "value.prop[0].anotherprop" => [ "prop", 0, "anotherProp" ];

        let template: Uint16Array|JPath;
        for ( template of templateSplitted ) { // the template can be JPath class to use with placeholder value, or Uint16Array

          //@task docblock here the Infos method line number, placing the templatesConfig prop placeholders offsets in the templateSplitted (Uint16Array|JPath)[].
          // if ( @optional this condition instead: ( typeof or instanceof (template) === JPath::class ) || @faster: templateSplittedCounter === local_templateConfig.placeholdersPositions[placeholdersCounter] ) {
          if ( templateSplittedCounter === local_templateConfig.placeholdersPositions[placeholdersCounter] ) {
            const placeholderValueField: any = template.hasJPath ? JPathHelper.getByJPath( 
              nestedTaggedGroupPlaceholderValue, 
              template.jpathArray ) : nestedTaggedGroupPlaceholderValue; // since no jpath, just as is.
            const renderedPlaceholder: Uint16Array = converter.stringToArray( 
              placeholderValueField, 
              0 );
            resultArray[offsetInTheResultArray] = renderedPlaceholder;
            placeholdersCounter++;

          } else {
            // the splittedTemplate elem without placeholder, static Uint16Array.
            resultArray[offsetInTheResultArray] = template; // was already converted, and was Uint16Array

          }
          templateSplittedCounter++;
          offsetInTheResultArray++;

        }

      
      } else {
        // just append the template as is to the target array.
        
        resultArray[offsetInTheResultArray] = this._templatesObject[local_templateName];

        
      }

    }
  }



  nestedTaggedGroupRepeatByIterableData( 
    templateConfItem: TemplatesConf,
    dataArray: { key: string|number, value: any }[] 
  ): undefined {

    //@moveBeforeForLoop
    // whether to handle with callback.
    // the callback is the prop of this templateConfItem.nestedNodesConf: TemplatesConfNested, .nestedNodes_Callback
    let callback: CallableFunction;
    let isWithCallback: number = 0;
    let nestedTaggedGroupPlaceholderValue: any = null;

    if ( templateConfItem.nestedNodesConf ) {
      callback = templateConfItem.nestedNodesConf.nestedNodes_Callback;
      isWithCallback = ( callback ) ? 1 : 0;
    }


    //@forEach ._templatesConf[currentTemplatName].data[] normalized before, the .data[] of the templateConfItem
    let dataItem: { key: string|number, value: any };
    for ( dataItem of dataArray ) {

      // customized data item via templatesConf[templateName].nestedConf.callback
      if ( isWithCallback === 1 ) {
        //@ts-ignore
        nestedTaggedGroupPlaceholderValue = callback.call( 
          this, 
          dataItem );

      } else {
        nestedTaggedGroupPlaceholderValue = dataItem;

      }

      const dataConfIxStart: number = 0;
      const dataConfIxEnd: number = 0;

      this.repeatTaggedGroup (
        nestedTaggedGroupPlaceholderValue,
        dataConfIxStart,
        dataConfIxEnd
      );

    }
  }


  renderTemplates( inoutObj: any ): any {
    // let resultArrayRecursive: any = [];

    const converter: CharcodeConverter = CharcodeConverter.getInstance();
    const CHARSETS_AUTOLOAD_TRUE = 1;
    const CHARSETS_AUTOLOAD_FALSE = 0;

    //@foreach _dataConf = templates lines
    for ( let dataConfItem of this._dataConf ) {

      const templateName = dataConfItem[ "templateName" ];
      const templateConfItem: TemplatesConf = this._templatesConf[templateName];
      const template: any = this._templatesObject[templateName]; // ( Uint16Array | array of (Uint16Array|JPath)[] )
      let renderedTemplate: string = "";
      let renderedTemplateCharBuf: Uint16Array|null = null;


      // will repeat nestedTaggedGroup by this templateConf .data[] in loop
      if ( templateConfItem.isWithNestedMultiple === 1 ) {
        // 1. if with placeholders, apply. 
        // 2. add to array template or rendered template if was with placeholders.
        // subcall: render multiple templates block.

        // Info Item to this templateConfItem: const info: Info = infos.find ( i => i.nestedTag === templateConfItem.nestedTag );
        // const dataConfIxStart: number = info.dataConfIxStart;
        // const dataConfIxEnd: number = info.dataConfIxEnd;
        /*


        //@notReady Infos summarizing all iterations number to declare the flat array. dataype = Uint16Array[].
        // const allNestedItemsNumber: number = info.sumNestedTemplates;
        // const array: any[] = new Array(allNestedItemsNumber);
        // inoutObj.buf[u] = array;

        // let counter: number = 0;


        const data: { key: string|number, value: any }[] = this.normalizeDataIterable( templateConfItem.data );


        this.nestedTaggedGroupRepeatByIterableData( data );

        //@moveToSubcall
        //@forEach ._templatesConf[currentTemplatName].data[] normalized before, the .data[] of the templateConfItem
        for ( let dataItem of dataArray ) {


          //@moveBeforeForLoop
          // whether to handle with callback.
          // the callback is the prop of this templateConfItem.nestedNodesConf: TemplatesConfNested, .nestedNodes_Callback
          let nestedTaggedGroupPlaceholderValue: any = null;
          if ( templateConfItem.isStandardCallback === 1 ) {
            nestedTaggedGroupPlaceholderValue = dataItem;
          } else {
            nestedTaggedGroupPlaceholderValue = templateConfItem.nestedNodesConf.nestedNodes_Callback.call( this, dataItem );
          }


          //@moveToSubcall, and, too, check for .isWithNestedTemplates))
          //@forEach info of the nestedTaggedGroup info.start info.end the range of the this._dataConf start - end, where nestedTaggedGroup resides.
          //              with one dataItem may times all templates in the nestedTaggedroup.
          for ( i = dataConfIxStart; i < (dataConfIxStart + dataConfIxEnd ); i++ ) {

            //@moveToSubcall .renderOneTemplate
            const local_dataConfItem: any = this._dataConf[i];
            const local_templateName: string = local_dataConfItem[ "templateName" ];
            const local_templateConfig: TemplateConfig = this._templatesConf[local_templateName];

            // or assign as is to result array's item's pointer one single template Uint16Array.
            if ( local_dataConfItem.isWithPlaceholder === 1 ) {

              const templateSplitted: (Uint16Array|JPath)[] = this._templatesObject[local_templateName];

              let templateSplittedCounter: number = 0;
              let placeholdersCounter: number = 0;

              //@forEach the template with placeholders is splitted when prepared. 
              // to static Uint16Array 
              // and JPath with the parsed textual JPath expression 
              // to jpath array like "value.prop[0].anotherprop" => [ "prop", 0, "anotherProp" ];
              for ( template of templateSplitted ) { // the template can be JPath class to use with placeholder value, or Uint16Array

                //@task docblock here the Infos method line number, placing the templatesConfig prop placeholders offsets in the templateSplitted (Uint16Array|JPath)[].
                if ( @optional this condition instead: ( typeof or instanceof (template) === JPath::class ) || @faster: templateSplittedCounter === local_templateConfig.placeholdersPositions[placeholdersCounter] ) {
                  const placeholderValueField: any = template.hasJPath ? JPathHelper.getByJPath( nestedTaggedGroupPlaceholderValue, template.jpathArray ) : nestedTaggedGroupPlaceholderValue; // since no jpath, just as is.
                  const renderedPlaceholder: Uint16Array = converter.stringToArray( placeholderValueField, 0 );
                  array[counter] = renderedPlaceholder;
                  placeholdersCounter++;

                } else {
                    // the splittedTemplate elem without placeholder, static Uint16Array.
                    array[counter] = template; // was already converted, and was Uint16Array

                }
                templateSplittedCounter++;
                counter++;

              }

            
            } else {
              // just append the template as is to the target array.
              
              array[counter] = this._templatesObject[local_templateName];

              
            }

          }

        }



        
        
        
        */

        // for template of this.templatesConigs[ infos.find ( i => i.nestedTag === templateConfItem.nestedTag ).
      }

      if ( templateConfItem.multiple === 1 ) { // if not tagged, then, if data iterable, then good. if not, no groupping.  lookup in holder templatesConf item for data and the callback to invoke and get result for each iteration.
        // logic is this: if dataConf.data is iterable, iterate, however all taggedGroup items in one data iteration step.

        // where and how to get the info? eve n when prepared))
        const info : any = {};
        const holderTemplateConf: TemplatesConf = this._templatesConf[info.holderTemplateName];
        
        let iterable: any = holderTemplateConf.data;
        let dataArray: any[] = [];
        if ( Array.isArray( iterable ) === true ) {
          dataArray = iterable.map( (value: any, index: number) => { return { key: index, 
            value: value, }; } );

        } else {
          const keys: any[] = Object.keys( iterable );
          dataArray = keys.map( (key: any) => { return { key: key, 
            value: iterable[key], }; } );

        }

        // can be the object datatype TemplatesConfNested
        const taggedGroupTagname: string = holderTemplateConf.nestedTag;
        // infos.find( info => info.tag.contains( taggedGroupTagname ) )
        // 
        

      }

      if ( templateConfItem.isWithPlaceholders === 1 ) {
        // here means is prepared, 
        // and is array, 
        // and placeholder is JPath class instance
        // then foreach

        // for ( elem of templateSplittedPrepared ) {}

        //@rewrite 
        renderedTemplate = ( converter.arrayToString(
          template, 
          CHARSETS_AUTOLOAD_FALSE) ).replaceAll( 
          `{{ ${templateConfItem.placeholder} }}`, 
          dataConfItem.data );
        
        //@rewrite 
        renderedTemplateCharBuf = converter.stringToArray( 
          renderedTemplate, 
          CHARSETS_AUTOLOAD_FALSE );


      } else {
        renderedTemplateCharBuf = template;


      }

      inoutObj.bufs.push( renderedTemplateCharBuf );
    }


    return 1;
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
    const loop_1_dataConf_length: number = this._dataConf.length;

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

      dataConfItem = this._dataConf[ loop_1_dataConf_Step ];
      templateName = dataConfItem[ "templateName" ];
      templateConfItem = this._templatesConf[ templateName ];

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
                calculatedNumberOfNestedTemplates: 0,
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




