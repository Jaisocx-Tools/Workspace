

import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { WorkspaceTreeWalker, JPath, JPathData, IterableInfo, WorkspaceTreeWalkerPayload } from "@jaisocx/workspace-tree-walker";


import { ImprovedTemplateRendererConstants } from "./ImprovedTemplateRendererConstants.js";
import { TemplateConf } from "./types/TemplateConf.js";
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

  setTemplateConf(templatesConf: any): ImprovedTemplateRenderer {
    this._templatesConf = templatesConf;
    return this;
  }

  setDataConf(dataConf: any[]): ImprovedTemplateRenderer {
    this._dataConf = dataConf;
    return this;
  }


  render( 
    inoutobj: any, 
    mainTemplateConfigTag: string ): any {

    //@ready
    //@info   1. prepares placeolders to JPath objects 
    //        for fast handling placeholders 
    //        like {{ obj.prop1[2].someProp }}
    //        2. converts to Uint16Array
    this.prepareTemplates();

    this.templatesConfigTreeWalk( mainTemplateConfigTag );

    inoutobj.retVal = this._renderedHtmlArray.join("");

    // writes into this._renderedTemplatesTemporaryArray
    //this.renderTemplates( inoutobj );
    
    // inoutobj.bufs = this._renderedTemplatesTemporaryArray;

    // const result: any = this.charcodeConverter.join (
    //   inoutobj.bufs
    // );

    //return result;
  }

  
  getDataconfByTemplateName( templateName: string ): DataConf {
    return this._dataConf.find( ( conf: DataConf ) => conf.template === templateName );
  }

  getOrderedTemplatesNames(): string[] {
    return [
      ...this._dataConf.map( ( conf: DataConf ) => conf.template )
    ];
  }


  //@ready
  //@info 
  //        1. if no placeholder, templatesObject[templateName] = CharcodeConverter.toArray()
  //        2. split templates with placeholders.
  prepareTemplates(): undefined {

    const toAutoloadCharsets: number = 1;

    const orderedTemplatesNames: string[] = this.getOrderedTemplatesNames();

    let templateConf: TemplateConf;
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



  templatesConfigTreeWalk( mainTemplateConfigTag: string ): any {

    const renderedTemplates: any = [];

    this._templatesConf;

    this._dataConf;

    const orderedTemplatesNames: string[] = this.getOrderedTemplatesNames();
    const templatesConf: any[] = [
      ...orderedTemplatesNames
        .map(
          ( templateName: string ) => {
            const conf: TemplateConf = this._templatesConf[templateName];
            return {
              ...conf,
              templateName
            };
          }
        )
    ];

    const callbackWalkRepeated: Function = (
      inOutPayload: WorkspaceTreeWalkerPayload
    ): undefined => {
      console.log ( inOutPayload );

      // const templateConf: TemplateConf = ( treeData as TemplateConf );

      // if ( templateConf.placeholder ) {
      //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );

      //   const placeholderData: any = dataConf.placeholderData;
      //   const preparedTemplate: any[] = this._preparedTemplatesObject[templateConf.templateName];

      //   for ( let template of preparedTemplate ) {
      //     if ( template instanceof Uint16Array ) {
      //       //@advanced this._renderedTemplatesTemporaryArray.push( template );

      //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( template, 0 ) );

      //     } else if ( template instanceof JPathData ) {
      //       const jpathObj: JPathData = ( template as JPathData );
      //       const placeholderDataByJpath: any = JPath.getByJPath ( 
      //         jpathObj.getJPath(), 
      //         placeholderData );

      //       //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
      //       //   placeholderDataByJpath, 
      //       //   0 );
      //       // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 

      //       this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( placeholderDataByJpath, 0 ) );
      //     }
      //   }
      // }

      // if ( templateConf.startRepeat ) {
      //   const dataConf: DataConf = this._dataConf.find( ( conf: DataConf ) => ( conf.template === templateConf.templateName ) );

      //   const placeholderData: any = dataConf.placeholderData;
      // }

      let templateConf: TemplateConf = inOutPayload.dataElem as TemplateConf;
      let templateName: string = templateConf.templateName;
      //let templateConf: TemplateConf = this._templatesConf[templateName];

      if ( !templateName ) {
        return;
      }

      //@temp test block
      let dataConf: DataConf|Object = this._dataConf.find ( 
        ( conf: DataConf ) => { 
          const matches: boolean = ( conf.template === templateConf.templateName ); 
          return matches;
        } 
      );

      let repeatData: any = null;
      let repeatDataNormalized: any[] = [];
      //@ts-ignore
      let repeatDataInfo: IterableInfo = {};

      if ( templateConf.startRepeat === true ) {

        if ( templateConf.repeatTagConfDataApplies === true ) {
          repeatData = ( dataConf  as DataConf ).repeatTagData;
        } else {
          repeatData = inOutPayload.repeatDataElem;
        }

        repeatDataInfo = WorkspaceTreeWalker.getNodeInfo ( repeatData );

        if ( repeatDataInfo.isArray === true ) {
          inOutPayload.repeatData = repeatData;

        } else {
          repeatDataNormalized = WorkspaceTreeWalker.normalizeNodes ( 
            repeatData, 
            repeatDataInfo );

          inOutPayload.repeatData = repeatDataNormalized;

        }

        inOutPayload.repeatTimes = inOutPayload.repeatData.length;

      }

      let placeholderData: any = ( dataConf  as DataConf ).placeholderData;

      if ( !placeholderData && ( templateConf.placeholder ) && inOutPayload.repeatDataElem ) {
        placeholderData = inOutPayload.repeatDataElem;

      }

      const placeholderName: string|undefined|null = templateConf.placeholder;
      const preparedTemplate: (Uint16Array|JPathData)[]|Uint16Array<ArrayBufferLike> = this._preparedTemplatesObject[templateConf.templateName];
      
      if ( preparedTemplate instanceof Uint16Array ) {
        this._renderedHtmlArray.push( this.charcodeConverter.arrayToString( 
          preparedTemplate, 
          0 ) );

      } else {

        for ( let template of preparedTemplate ) {

          if ( template instanceof Uint16Array ) {
            this._renderedHtmlArray.push( this.charcodeConverter.arrayToString ( 
              template, 
              0 ) );

          } else if ( ( templateConf.placeholder ) && ( template instanceof JPathData ) ) {

            const jpathData: JPathData = ( template as JPathData );
            let placeholderDataByJpath: any = []; 

            if ( jpathData.isPlaceholderValue() ) {
              placeholderDataByJpath = placeholderData;

            } else {
              placeholderDataByJpath = JPath.getByJPath ( 
                jpathData.getJPath(), 
                placeholderData );

            }

            const placeholderInfo: IterableInfo = WorkspaceTreeWalker.getNodeInfo ( placeholderDataByJpath );
            if ( placeholderInfo.datatype === WorkspaceTreeWalker.DATATYPE_OBJECT ) {
              placeholderDataByJpath = JSON.stringify( placeholderDataByJpath );
            }
            
            //@advanced const placeholderDataBitsbuf: Uint16Array = this.charcodeConverter.stringToArray( 
            //   placeholderDataByJpath, 
            //   0 );
            // this._renderedTemplatesTemporaryArray.push( placeholderDataBitsbuf ); 

            this._renderedHtmlArray.push( placeholderDataByJpath );
          }
        }

      }

    };



    const treeWalker: WorkspaceTreeWalker = new WorkspaceTreeWalker();

    let inOutPayload: WorkspaceTreeWalkerPayload = new WorkspaceTreeWalkerPayload();
    inOutPayload.dataset = templatesConf;

    inOutPayload.parentId = mainTemplateConfigTag;
    inOutPayload.id = "main";
    inOutPayload.parentIdForNestedNodes = "branchRepeatTag";
    inOutPayload.parentIdProperyName = "tag";
    inOutPayload.idProperyName = "branchRepeatTag";


    treeWalker.walkFlatRepeating (
      inOutPayload,
      callbackWalkRepeated
    );
  
    console.log( "TREE WALKER RESULT" );
    console.log( inOutPayload );

  }

  getFieldValue (
    dataElem: any
  ): any {
    const info: IterableInfo = WorkspaceTreeWalker.getNodeInfo( dataElem );
    const normalizedRecord: any[] = WorkspaceTreeWalker.normalizeNodes (
      dataElem,
      info
    );

    return normalizedRecord;
  }

}




