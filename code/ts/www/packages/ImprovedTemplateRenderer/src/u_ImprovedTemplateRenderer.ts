

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

  prepareTaggedGroupsInfos() {

    // if the prop isWithNestedMultiple  = 1
    // lt's just filter they out.
    // we need start and end array index,
    // tag name,
    // amount is calculatable
    
    // for fast iteration array.
    // however we can note the arrays or infos with object's keys

    //@purpose documentation,
    //    since this datatype elems array
    //    is the resulting value of the subcall here in the flat for loop iterating each dataConf array elem.
    let helpingObjectNestedTagged = {
      holderTemplateName: "",
      tag: "",
      holderIndex: 0,
      nestedLevel: 0,
      nestedMultipleTaggedIndexes: {
        startIndex: 0,
        endIndex: 0,
      },
      nestedMultipleTaggedNames: ["templateLine1_Name, templateLine2_Name"],
      calculatedNumberOfNestedTemplatesIterations: 0,
      calculatedNumberOfNestedTemplates: 0
    };

    

    // every next array elem is in the same order,
    // these templates are in the dataConf.
    // the data conf index pointers of this repeatedly to render html group, and other descriptive props
    // are in these array elems props.
    let taggedInfosArray = [];


    firstLoopNextIterationStart: for ( let i=0; i < this.dataConf.length; i++ ) {

      let templateName = this.dataConf[i].templateName;
      let templateConfElem = this.templatesConf[templateName];
      
      if ( templateConfElem.isWithNestedMultiple === 0 ) {
        // skip to the next dataConf elem
        continue firstLoopNextIterationStart;
      }

      // here isWith nested multiple.
      // and we start the nested loop at the next index same dataConf or best a subcall

      let nextIterationIndex = i + 1;
      let nestedTag = templateConfElem.nestedTag;

      let infos: never[]|null = this.prepareTaggedNestedSubcallGetInfosOneGroup (
        i,
        nestedTag
      );

      if ( infos === null ) {
        // skip to the next dataConf elem
        continue firstLoopNextIterationStart;
      }

      taggedInfosArray.push ( ...infos );

      //@loopCounter var i:  set i = infos .last data conf array elem pointer offset.
      // then next iteration step.
      // i = infos[0].nestedMultipleTaggedIndexes.endIndex;
      //@ts-ignore
      i = infos[0].nestedMultipleTaggedIndexes.endIndex;
      


      // the flat for loop finishes.
    }

    return taggedInfosArray;
  }

  matchedTagName ( 
    tagToMatch: string, 
    templateConfTags: any 
  ): number {
    let taggedMatched: number = 1;

    if ( !templateConfTags || templateConfTags.length === 0 ) {
      taggedMatched = 0;

    } else if ( ( typeof ( templateConfTags ) ) === "string" ) {
      if ( templateConfTags !== tagToMatch ) {
        taggedMatched = 0;

      }

    } else {
      let foundMatchedTag: string|undefined|null = templateConfTags
        .find ( (tag: string) => ( tag === tagToMatch ) );
      
      if ( !foundMatchedTag ) {
        taggedMatched = 0;

      }
    }

    return taggedMatched;
  }


  prepareTaggedNestedSubcallGetInfosOneGroup (
    holderTemplateIndex: number,
    tagName: string
  ): any[] { // or empty, length = 0

    let loopIndexToStart: number = holderTemplateIndex + 1;

    let helpingObjectNestedTagged: any = {
      holderTemplateName: "",
      tag: tagName,
      holderIndex: holderTemplateIndex,
      nestedLevel: 0, //@I have to write here 
      nestedMultipleTaggedIndexes: {
        startIndex: 0,
        endIndex: 0,
      },
      nestedMultipleTaggedNames: ["templateLine1_Name, templateLine2_Name"],
      calculatedNumberOfNestedTemplatesIterations: 0,
      calculatedNumberOfNestedTemplates: 0
    };

    let taggedMatched: number = 0;
    let taggedMatchedNumber: number = 0;
    let taggedMatchedLastIndex: number = 0;

    let innerTaggedGroupMatchedNumber: number = 0;
    let innerTemplateNestedTagname: string = tagName;
    let innerTemplatesMaxLevel = 0; // this points, the inner level is the first.
    let innerLevelsInfoArray: any[] = []; // the first inner level tag name applied.

    loopLevelOne: for ( let i = loopIndexToStart; i < this.dataConf.length; i++ ) {

      let templateName = this.dataConf[i].templateName;
      let templateConfElem = this.templatesConf[templateName];
      let tagOrArrayOfTags: string|any[] = templateConfElem.tag;

      // check here all 3 times if statements before break; 
      // and same call set last index in the tagged group.

      
      if ( this.matchedTagName( tagName, tagOrArrayOfTags ) === 0 ) {
        taggedMatched = 0;

        break;
      }


      // not empty result. some templatConf rules matched the tag.
      taggedMatchedNumber++;
      taggedMatchedLastIndex = i;


      // on the first match then the new infos object.
      if ( taggedMatchedNumber === 1 ) {
        helpingObjectNestedTagged = {
          holderTemplateName: "",
          tag: innerTemplateNestedTagname,
          holderIndex: holderTemplateIndex,
          nestedLevel: 0, //@I have to write here 
          nestedMultipleTaggedIndexes: {
            startIndex: i,
            endIndex: 0,
          },
          calculatedNumberOfNestedTemplatesIterations: 0,
          calculatedNumberOfNestedTemplates: 0
        };

        //  first elem first level infos obj in this method
        innerLevelsInfoArray.push ( helpingObjectNestedTagged );

      }


      // here trying to prepare the multilevel nested templates.
      // when multilevel data applying to same level html,
      // e.g. when all fields of all records in the same level html,
      // this is the data handling, and can be done in the callback.
      // however in this TmplateRenderer html is multilevel,
      // and one holder html tmplate has one level nested html group.


      // 1. the next inner level holder html template starts.
      // 2. each next level increments the levelNumber,
      // 3. and when the current tagnam max level number not matched,
      // 4. the levelnumber subtracts 1.
      // 5. there can be the level number var declared outside the loop,
      // 6. and the array to save the tag at the array index equal level.
      if ( templateConfElem.isWithNestedMultiple === 1 ) {

        // 2. each next level increments the levelNumber,
        innerTemplatesMaxLevel++;

        innerTemplateNestedTagname = templateConfElem.nestedTag;

        continue loopLevelOne;


        if ( this.matchedTagName( innerTemplateNestedTagname, tagOrArrayOfTags ) === 0 ) {
          taggedMatched = 0;
  
          break;
        }


        // 6. and the array to save the tag at the array index equal level.
        innerLevelsInfoArray.push(  );

        // where to register the helpingObjectNestedTagged for every nested tagged group.
        // how do I need this data then.
        

      }

      if (this.matchedTagName ( innerTemplateNestedTagname, tagOrArrayOfTags ) === 1 ) {
        innerTaggedGroupMatchedNumber++;
  
      }
  





      // one level for loop finish.
    }


    // filling cumulated data before exiting this method.
    if (
      // normally finished the loop with the tagged group data,
      // since the number of elems with tagname matched is over zero.
      ( taggedMatchedNumber > 0 ) 
      // ( taggedMatched === 0 ) when reached templates last elem, can be tagged too. then this condition is not relevant.
    ) {
      innerLevelsInfoArray[0].nestedMultipleTaggedIndexes.endIndex = taggedMatchedLastIndex;

    } else if (
      // here deletes the infos object,
      // since no elem has matched the tagName.
      ( taggedMatchedNumber === 0 ) 
    ) {
      innerLevelsInfoArray = [];

    }


    return innerLevelsInfoArray;
  }


  calculateResultArrayRecursiveNumber(): number {

    let resultArrayRecursiveElemsNumber: number = 0;

    let templatesConfKeys: any[] = Object.keys( this.templatesConf );

    let objectToIterateOver: any[] = this.dataConf;

    let templatesAmount: number = objectToIterateOver.length;
    let templatesIndex: number = 0;
    let templateName: any = "";
    let tagName: any = "";
    let templateRule: TemplatesConf|null = null;
    //@improve write type hinting class
    let dataRule: any = {};

    let templateRuleMultiple: number = 0;
    let templateRuleMultipleNested: number = 0;

    let helpingObjectNestedTagged = {
      holderTemplateName: "",
      tag: "",
      holderIndex: 0,
      nestedMultipleTaggedIndexes: {
        startIndex: 0,
        endIndex: 0,
      },
      nestedMultipleTaggedNames: ["templateLine1_Name, templateLine2_Name"],
    };

    // iterating over array dataConf,
    // the dataConf are the rules how to apply data for a template elem.
    // the order in the dataConf is the order how the rendered html texts have to be added one after other.
    for (
      templatesIndex = 0;
      templatesIndex < templatesAmount;
      templatesIndex++
    ) {

      dataRule = objectToIterateOver[templatesIndex];
      templateName = dataRule.templateName;

      templateRule = this.templatesConf[templateName];

      templateRuleMultiple = templateRule.multiple;
      templateRuleMultipleNested = templateRule.isWithNestedMultiple;

      // logics:
      // 
      // . multiple no placeholder, data length set
      // . multiple with placeholder data set
      // multiple have to be groupped by tag.
      // the tag to group by applied in the templatesConf the holder html node template.
      // the prepare method  
      // to build arrays with tagged rules.
      // now I write this arrays builds easy til I know how to build a reusable method.
      if (
        ( templateRuleMultipleNested === 1 ) 
      )  {
        tagName = templateRule.nestedTag;

        if ( ( tagName.length > 0 ) ) {

          //array of filtered templatesConf ( the most rules except data rules )
          let arrayWithNestedaggedTemplates = [];

          //@rewrite!!
          // iterating over same array starting from the next.
          // I guess, instead, I set flag and local variables here 
          // and exit this iteration step with "continue" statement.
          // the iteration oes the number indexed array
          // this is the objectToIterateOver this.dataConf
          //  2 props: key to other 2 conf objects templateName, and prop data
          let j = templatesIndex + 1;

          helpingObjectNestedTagged = {
            holderTemplateName: templateName,
            tag: tagName,
            holderIndex: templatesIndex,
            nestedMultipleTaggedIndexes: {
              startIndex: j,
              endIndex: 0,
            },
            templatesNamesNestedMultipleTagged: ["templateLine1_Name, templateLine2_Name"],
          };

          // a tag can be an array.
          for ( let j0=j; j0 <  templatesAmount; j0++ ) {

            let taggedNestedDataRule = objectToIterateOver[j0];

            let tagOrTagsArray: any = taggedNestedDataRule.tag;
            if ( !tagOrTagsArray || tagOrTagsArray.length === 0 ) {

              break ; // have to iterate til the end of the html doc? No, til the first tmplatesConf rule doesn't have this tag name 
            }


          }

          arrayWithNestedaggedTemplates = 
          this.templatesConf
              .slice()
              .filter(
                //@improve dataConf rule .ts class typehinting
                ( rule: TemplatesConf ) => {

                }
              );

        }
      }

      if ( templateRuleMultiple === 1 ) {
        // here the preprocessing is good,
        // since here we have to get the corresponding dataConf
      }





    }

    return resultArrayRecursiveElemsNumber;

  }




//@outdated
//@code_snippet
    renderEarlierVer(): any {
      let renderedHtml = this.replaceTemplateRendererWithDataForRendering (
        this.template,
        this.data
      );

      if (this.debug) {
        console.log(
          "renderedHtml before afterRender event emitted",
          renderedHtml
        );
      }

      const eventResult: EventEmitResult[] = this.emitEvent (
        this.EVENT_NAME__AFTER_RENDER,
        {
          html: renderedHtml,
          data: this.data,
        }
      );

      if (eventResult.length > 0) {
        const last: number = eventResult.length - 1;

        let payloadReturned: any = null;
        for ( let eventResultsStep = last; eventResultsStep > (-1); eventResultsStep-- ) {
          try {
            // @ts-ignore
            payloadReturned = eventResult[eventResultsStep].result.payloadReturned; 
          } catch (e) {}
        
          if ( !payloadReturned ) {
            continue;
          }

          renderedHtml = payloadReturned.html;
        }

        if (this.debug) {
          console.log(
            "renderedHtml before afterRender event emitted",
            eventResult,
            renderedHtml
          );
        }
      } else if (this.debug) {
        console.log("afterRender event did not change html");
      }
    
      return renderedHtml;
    }



    replaceTemplateRendererWithDataForRendering(
      template: any,
      dataForRendering: object
    ): any {
      let renderedHtml = template;

      for (const placeholderName in dataForRendering) {
        const stringToReplace = `{{ ${placeholderName} }}`;

        // @ts-ignore
        let valueToSet = dataForRendering[placeholderName];
        if (!valueToSet) {
          valueToSet = "";
        }

        renderedHtml = renderedHtml.replace(
          stringToReplace,
          valueToSet
        );
      }

      return renderedHtml;
    }

    nestedTemplatesRender ( 
      nestedPropName: string, 
      key, 
      value, 
      recordset 
    ): any { 
            
      if ( !this.nestedTemplatesDataPointersArrays[nestedPropName] ) {
        this.nestedTemplatesDataPointersArrays[nestedPropName] = this.calculateNestedPropsTemplatesDataPointersArray( nestedPropName );
      }

      let renderedTemplates: any[] = [];

      const amountNestedPropsMatched: number = this.nestedTemplatesDataPointersArrays[nestedPropName].length;

      let templateDataArrayIndex: number = 0;

      let nestedTemplatesIndex: number = 0;
      let nestedTemplatesSize: number = amountNestedPropsMatched;
      let nestedTemplateData: any = {};
      let nestedTemplateName: string = "";
      let nestedTemplate: string = "";
      let renderedTemplate: any = null;
      let nestedTemplateConf: any = {};
      let nestedPropName2: string|undefined = "";

      for ( 
        nestedTemplatesIndex = 0; 
        nestedTemplatesIndex < nestedTemplatesSize; 
        nestedTemplatesIndex++ 
      ) {
      
        templateDataArrayIndex = this.nestedTemplatesDataPointersArrays[nestedPropName][nestedTemplatesIndex];
        nestedTemplateData = this.templatesDataArray[templateDataArrayIndex];
        nestedTemplateName = nestedTemplateData.templatesObjectPropertyName;
        nestedTemplate = this.templatesObject[nestedTemplateName];
        nestedTemplateConf = this.templatesConf[nestedTemplateName];
        nestedPropName2 = nestedTemplateConf["nestedProp"];
        if ( nestedPropName2 ) {

          for ( let i=0;  ) {

          }

          renderedTemplate = this
            .nestedTemplatesRender (
              nestedPropName2, 
              nestedTemplateConf, 
              value, 
              recordset 
            );

          } else {
          renderedTemplate = this
          .setTemplate( nestedTemplate )
          .setData( value )
          .render();

        }
      
        renderedTemplates[nestedTemplatesIndex] = renderedTemplate;
      }

      return renderedTemplates;
    }


    calculateNestedPropsTemplatesDataPointersArray( nestedPropName: string ): Uint16Array {

      const nestedPropsTemplateObjectKeys = Object.keys( this.templatesObject )
        .filter( 
          ( templateName ) => {
            return this.templatesConf[templateName].prop === nestedPropName;
          }
        );
      const propsKeysLength = nestedPropsTemplateObjectKeys.length;
    
      let renderedTemplates = [];

      let templateDataArrayItem = {};
      let templateDataArrayIndex = 0;
      let templateDataArraySize = templateData_MainRenderMethod.length;
      let templateDataMatchingPropsPointers = new Uint16Array( propsKeysLength );
      let amountNestedPropsMatched = 0;
      let propName = "";
    
      for ( templateDataArrayIndex = 0; templateDataArrayIndex < templateDataArraySize; templateDataArrayIndex++ ) {
    
        if ( amountNestedPropsMatched > propsKeysLength ) {
          break;
        }

        templateDataArrayItem = templateData_MainRenderMethod[templateDataArrayIndex];
        propName = templateDataArrayItem.templatesObjectPropertyName;
    
        const entryMatched = nestedPropsTemplateObjectKeys
          .find( ( nestedPropKey ) => { return nestedPropKey === propName; } );

        if ( entryMatched ) {
          templateDataMatchingPropsPointers[amountNestedPropsMatched] = templateDataArrayIndex;
          amountNestedPropsMatched++;
        }

      }

      return templateDataMatchingPropsPointers;
    }



    function recordRenderSubcall ( 
      propName, 
      propValue, 
      templatesObject, 
      templateData
    ) {

      const amountOfIterations = templateData_RecordRender_Subcall.length;
      const renderedTemplates = new Array ( amountOfIterations );
      
      for ( let i = 0; i < amountOfIterations; i++ ) {
        const templatesObjectKey = templateData["templatesObjectPropertyName"];
        const templateHtml = templatesObject[templatesObjectKey];

        renderedTemplates[i] = templateRenderer
              .setTemplate ( templatesObject[ data.templatesObjectPropertyName ] )
              .setData ( rpropValue )
              .render();

      }


      const templateData_RecordRender_Subcall = [
        { templateName: "fieldOpen", recordField: recordField },
        { templateName: "fieldRendered", recordField: recordField },
        { templateName: "fieldClose", recordField: recordField },
      ];


      return renderedTemplates;
    }


    function charBufferWorkaround_Example () {

      const charBuffer = new Array(20); 

      // Assign characters at specific positions
      charBuffer[0] = "H";
      charBuffer[1] = "e";
      charBuffer[2] = "l";
      charBuffer[3] = "l";
      charBuffer[4] = "o";

      // Convert the array back to a string
      const finalString = charBuffer.join("");

      console.log(finalString); // Output: "Hello"

      const charCodes = new Uint16Array(20); // Fixed size array (stores UTF-16 character codes)

      // Store character codes
      charCodes[0] = "H".charCodeAt(0);
      charCodes[1] = "e".charCodeAt(0);
      charCodes[2] = "l".charCodeAt(0);
      charCodes[3] = "l".charCodeAt(0);
      charCodes[4] = "o".charCodeAt(0);

      // Convert to string
      const finalString = String.fromCharCode(...charCodes);

      console.log(finalString.trim()); // Output: "Hello"

    }

    const COMMON_HIGHEST_CHAR_VALUE = 2047;
    
    const charsTable = new Uint16Array( COMMON_HIGHEST_CHAR_VALUE );

    const charsCodeRanges = {
        "LatinBasic": [32, 127],
        "Latin1": [160, 255],
        "LatinExtendedA": [256, 383],
        "LatinExtendedB": [384, 591],
        "Cyrillic": [1024, 1279],
        "CyrillicExtraRare":	[1280, 1327],
        "Other": [1328, 2047]
    };

    function getTheCharsTable() {

      // filling at once the basic always used textual chars.
      let charsCodeRange = charsCodeRanges["LatinBasic"];
      const charCodeHigh = charsCodeRange[1];
      const charCodeLow = charsCodeRange[0];
      const loopCounterLowerThan = charCodeHigh + 1;
      const loopCount = charCodeHigh - charCodeLow;
      let charCode = charCodeLow;

      for ( charCode = charCodeLow; charCode < loopCounterLowerThan; charCode++ ) {
        charsTable[charCode] = String.fromCharCode( charCode );
      }

    }

    function whenNoCharThenFillCharsCodeRange( inputArgCharCode ) {

      let charsCodeRangesKeys = Object.keys( charsCodeRanges );
      let charsCodeRangesKey = "";
      let charsCodeRange = [];
      let charCodeHigh = 0;
      let charCodeLow = 0;
      let charCode = 0;

      for ( charsCodeRangesKey of charsCodeRangesKeys ) {

        charsCodeRange = charsCodeRangesKeys[charsCodeRangesKey];
        charCodeHighToCompare = charsCodeRange[1] + 1;
        charCodeLowToCompare = charsCodeRange[0] - 1;

        if (
          ( charCodeLowToCompare < inputArgCharCode ) && 
          ( inputArgCharCode < charCodeHigh )
        ) {
          break;
        }
      }

      if ( charsCodeRangesKey.length === 0 ) {
        return;
      }

      let charCodeHighLoopStop = charCodeHighToCompare;
      for ( charCode = charCodeLow; charCode < charCodeHighLoopStop; charCode++ ) {
        charsTable[charCode] = String.fromCharCode( charCode );
      }

      return;
    }


}




