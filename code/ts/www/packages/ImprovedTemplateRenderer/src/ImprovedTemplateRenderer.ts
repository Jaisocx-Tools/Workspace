

import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";


import { ImprovedTemplateRendererConstants } from "./ImprovedTemplateRendererConstants.js";
import { TemplatesConf } from "./TemplatesConf.js";
import { TemplatesConfNested } from "./TemplatesConfNested.js";


export class ImprovedTemplateRenderer extends EventEmitter {

  EVENT_NAME__AFTER_RENDER: any;


  protected _templatesObject: any;
  protected _templatesConf: any;
  protected _dataConf: any[];


  // props for technique purposes.
  protected _renderedTemplatesTemporaryArray: any;




  isStandardCallback: number;


  constructor() {
    super();


    this.EVENT_NAME__AFTER_RENDER = "afterRender";


    this._templatesObject = {};
    this._templatesConf = {};
    this._dataConf = [];


    // props for technique purposes.
    this._renderedTemplatesTemporaryArray = [];
    this.isStandardCallback = 1;

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


  render( inoutobj: any ): number {

    // the result variable is declared.
    // the result is the rendered html,
    // all templates where placeholders replaced with the according data,
    // and the templates, these are thought to be repeated with data of datatype array,
    // are produced in the cycle, too.
    let renderedTemplatesHtml: any = "";

    let resultArrayFlat: any[] = [];

    let resultArrayRecursive: any = [];

    //@info   1. prepares placeolders to JPath objects 
    //        for fast handling placeholders 
    //        like {{ obj.prop1[2].someProp }}
    //        2. converts to Uint16Array
    this.prepareTemplates();


    //let preparedTaggedGroupsInfos: any[] = this.prepareTaggedGroupsInfos();



    let resultArrayRecursiveElemsNumber: number = 0;

    //resultArrayRecursiveElemsNumber = this.calculateResultArrayRecursiveNumber();


    // writes into this._renderedTemplatesTemporaryArray
    this.renderTemplates( inoutobj );


    //@rewrite
    //  resultArrayFlat = resultArrayRecursive;

    // const obj: any = { bufs: resultArrayFlat, retVal: {} };
    // inoutobj.bufs = resultArrayFlat;


    const renderedHtmlSize: number = this.workaroundJoin (
      inoutobj
    );

    return renderedHtmlSize;
  }


  //@tasks: 
  //          1. to move to CharcodeConverter
  //          2. inout obj class Datatype .ts file, too
  workaroundJoin ( 
    inoutObj: any 
  ): number { // length bytes of the entire rendered html text in the inoutobj.retVal, .join('') once.

    const converter: CharcodeConverter = CharcodeConverter.getInstance();
    const autoload: number = 0;


    // flat array sum of bitsbuffers items sizes: += Uint16Array.length;
    let resultStringLength: number = 0;
    for ( let bitsbuf of inoutObj.bufs) {
      resultStringLength += bitsbuf.length;
    }


    // string[] with size of the entire html rendered doc chars amount.
    // one elem of string[] is one char.
    // to .join('') later to targetValue.
    const resultStringArray: string[] = new Array<string>( resultStringLength );
  

    // gets one char by charcode form the lookup tables, very fast via bitsbuffer pointer.
    let implGetChar: CallableFunction = autoload ? converter.getCharAndAutoload.bind(converter) : converter.getChar.bind(converter);
  


    let charcode: number = 0;
    let char: string = "";
    let resultStringIndex: number = 0;
  

    let bufSize: number = 0;
    let resultOffset: number = 0;
    let loopFinish: number = 0;


    // loop Uint16Array[] of rendered templates, stored as bitsbufs of charcodes.
    for ( let bitsbuf of inoutObj.bufs) {
      bufSize = bitsbuf.length;
      // loopFinish = resultOffset + bufSize;

      for (
        resultStringIndex = 0;
        resultStringIndex < bufSize;
        resultStringIndex++
      ) {
  
        charcode = bitsbuf[resultStringIndex];
        char = implGetChar( charcode );
    
        resultStringArray[resultOffset] = char;
        resultOffset++;
      }

    }
    
    const EMPTY_STRING: string = (new String("")).valueOf();
    inoutObj.retVal = resultStringArray.join(EMPTY_STRING);
  
    return resultStringLength;
  }


  normalizeDataIterable( data: any ): { key: string, value: any }[] {
    // just normalizing arrays and objects to array of datatype [{key, value = .data[itemPos] }];

    let dataArray: any[] = [];
    if ( Array.isArray( data ) === true ) {
      dataArray = data.map( (value: any, index: number) => { return { key: index, value: value }; } );

    } else {
      const keys: any[] = Object.keys( data );
      dataArray = keys.map( (key: any) => { return { key: key, value: data[key] }; } );

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
              const placeholderValueField: any = template.hasJPath ? JPathHelper.getByJPath( nestedTaggedGroupPlaceholderValue, template.jpathArray ) : nestedTaggedGroupPlaceholderValue; // since no jpath, just as is.
            const renderedPlaceholder: Uint16Array = converter.stringToArray( placeholderValueField, 0 );
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
            nestedTaggedGroupPlaceholderValue = callback.call( this, dataItem );

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
          dataArray = iterable.map( (value: any, index: number) => { return { key: index, value: value }; } );

        } else {
          const keys: any[] = Object.keys( iterable );
          dataArray = keys.map( (key: any) => { return { key: key, value: iterable[key] }; } );

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


  renderSingleTemplate() {

  }


  //@info 
  //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
  //        2. split templates with placeholders.
  prepareTemplates(): undefined {

    const converter: CharcodeConverter = CharcodeConverter.getInstance();


    for ( let templateName in this._templatesObject ) {

      const templateText: string = this._templatesObject[templateName];
      const templateConfItem: TemplatesConf = this._templatesConf[templateName];

      this._templatesObject[templateName] = converter.stringToArray( 
        templateText, 
        0 );
      continue;

      // if with placeholders, poduces JPath array for faster placeholders' data processing and applying to rendered html templates Uint16Array[]
      if ( templateConfItem.isWithPlaceholders === 1 ) {
        // subcall let templatesPrepared: string[] = this.splitTemplateText( templateText );
        //        1. while(): .indexOf("{{ "); .indexOf(" }}") + 3; result.push( .substring() ); if indexOf, result.push( new JPath( .substring() ) );
        //        2. JPath.constructor( jpathExpessionText ) { this.jpathArray = JPath.parse( jpathExpressionText ) }
        // subcall const jPathArray: any[] = helper.parseJpath( placeholderJpathExpressionText );

        // replace current templateText: this.templatesObject[templateName] = templatesPrepared; 
        // later, this.templatesObject prop can be of type string or any[], when with placeholders. 
        // the templatesConf item can have prop .placeholdersParsed = 1 | 0;
      }

    }
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




