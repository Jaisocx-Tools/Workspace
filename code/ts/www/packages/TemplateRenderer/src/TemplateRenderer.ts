import { TextEncoder } from "node:util";
import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
import { BaseParser } from "@jaisocx/css-importer";
//import { FileWriter } from "@jaisocx/file-writer";



type TemplateRendererDataRecord = {
  id: number;
  textTemplate: string;
  dataForRendering: object;

  bitsbufTemplate: Uint8Array;
  optimizedBitsbufTemplate: Uint8Array[];
  optimizedPlaceholdersEntries: any;
  optimizedTemplate: OptimizedTemplateRecord[];
}



type OptimizedTemplateRecord  = {
  placeholderName: string;
  range: number[];
}



export class TemplateRenderer extends EventEmitter {
  EVENT_NAME__AFTER_RENDER: any;

  baseParser: BaseParser;
  //fileWriter: FileWriter;

  dataRecords: TemplateRendererDataRecord[];
  #activeDataRecordId: number;



  constructor() {
    super();

    this.EVENT_NAME__AFTER_RENDER = "afterRender";

    this.baseParser = new BaseParser();
    //this.fileWriter = new FileWriter();

    this.dataRecords = new Array() as TemplateRendererDataRecord[];
    this.#activeDataRecordId = 0;
  }



  initDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord = new Object() as TemplateRendererDataRecord;

    dataRecord.textTemplate = "";
    dataRecord.dataForRendering = new Object();

    dataRecord.bitsbufTemplate = new Uint8Array();
    dataRecord.optimizedBitsbufTemplate = new Array() as Uint8Array[];
    dataRecord.optimizedPlaceholdersEntries = new Object();
    dataRecord.optimizedTemplate = new Array() as OptimizedTemplateRecord[]; 

    return dataRecord;
  }

  protected getActiveDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord;

    if ( this.#activeDataRecordId === 0 ) {
      let obj: TemplateRendererDataRecord = new Object() as TemplateRendererDataRecord;
      this.dataRecords.push( obj );

      dataRecord = this.initDataRecord();
      this.dataRecords.push( dataRecord );
      this.#activeDataRecordId = 1;
    } else {
      dataRecord = this.dataRecords[this.#activeDataRecordId];
    }

    return dataRecord;
  }

  getActiveDataRecordId(): number {
    return this.#activeDataRecordId;
  }

  getDataRecordById( id: number ) {
    return this.dataRecords[id];
  }

  setActiveRecordId( id: number ): TemplateRendererDataRecord {
    this.#activeDataRecordId = id;

    return this.dataRecords[id];
  }

  addNewDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord = this.initDataRecord();
    this.dataRecords.push( dataRecord );
    this.#activeDataRecordId = ( this.dataRecords.length - 1 );
    this.dataRecords[this.#activeDataRecordId].id = this.#activeDataRecordId;

    return this.dataRecords[this.#activeDataRecordId];
  }

  setDebug(debug: boolean): TemplateRenderer {
    this.debug = debug;
    return this;
  }

  setTemplate( template: string ): TemplateRenderer {
    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();
    dataRecord.textTemplate = template;

    return this;
  }

  setData( dataForRendering: object ): TemplateRenderer {
    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();
    dataRecord.dataForRendering = dataForRendering;

    return this;
  }



  render(): any {
    if ( this.#activeDataRecordId === 0 ) {
      throw new Error( "No template neither data were set." );
    }

    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();

    let renderedHtml = this.replaceTemplateRendererWithDataForRendering();

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
        data: dataRecord.dataForRendering
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


  replaceTemplateRendererWithDataForRendering(): any {

    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();

    let renderedHtml_1 = "";
    let renderedHtml_2 = dataRecord.textTemplate;

    for (const placeholderName in dataRecord.dataForRendering) {
      renderedHtml_1 = renderedHtml_2;

      const stringToReplace = `{{ ${placeholderName} }}`;

      // @ts-ignore
      let valueToSet = dataRecord.dataForRendering[placeholderName];
      if (!valueToSet) {
        valueToSet = "";
      }

      renderedHtml_2 = renderedHtml_1.replace (
        stringToReplace,
        valueToSet
      );
    }

    return renderedHtml_2;
  }



  renderOptimizedToStringDataText ( 
    templateDataRecordId: number, 
    dataForRendering: any 
  ): string {

    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById ( templateDataRecordId );
    dataRecord.dataForRendering = dataForRendering;

    let textBlocks: string[] = this.renderOptimizedTextBlocks ( 
      templateDataRecordId,
      dataRecord.dataForRendering 
    );

    let renderedText: any = textBlocks.join("");

    return renderedText;
  }


  renderOptimizedToStringDataBitsbufs ( 
    templateDataRecordId: number, 
    dataForRendering: any 
  ): string {

    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById ( templateDataRecordId );
    dataRecord.dataForRendering = dataForRendering;

    let bitsbufsArray: (Uint8Array|string)[] = this.renderOptimizedDataBitsbufs ( 
      templateDataRecordId,
      dataRecord.dataForRendering 
    );

    let bitsbufsArrayLen: number = bitsbufsArray.length;
    let textBlocks: string[] = new Array( bitsbufsArrayLen ) as string[];
    let i: number = 0;

    for ( i = 0; i < bitsbufsArrayLen; i++ ) {

      let bitsbufElem: (Uint8Array|string) = bitsbufsArray[i];
      if ( typeof bitsbufElem === "string" ) {
        textBlocks[i] = bitsbufElem;
      } else {
        textBlocks[i] = this.baseParser.textDecoder.decode( bitsbufElem );
      }
    }

    let renderedText: any = textBlocks.join("");

    return renderedText;
  }



  // the way to improve:
  // after optimization, create once dataRecord.optimizedBitsbufTemplate of texts, so not to decode to strings.
  renderOptimizedTextBlocks (
    templateDataRecordId: number, 
    dataForRendering: any // { key: text }
  ): string[] {
    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById( templateDataRecordId );
    dataRecord.dataForRendering = dataForRendering;

    let bitsbufsArray: Uint8Array[] = [...dataRecord.optimizedBitsbufTemplate];
    let textBlocks: string[] = new Array() as string[];

    let bitsbufElem: Uint8Array = new Uint8Array(); 
    for ( let i = 0; i < bitsbufsArray.length; i++ ) {
      bitsbufElem = bitsbufsArray[i];
      textBlocks[i] = this.baseParser.textDecoder.decode( bitsbufElem );
    }

    for ( let placeholderName in dataRecord.dataForRendering ) {
      let placeholderEntries: number[] = dataRecord.optimizedPlaceholdersEntries[placeholderName] as number[];
      // @ts-ignore
      let placehoder: string = dataRecord.dataForRendering[placeholderName];
   
      for ( let i of placeholderEntries ) {
        textBlocks[i] = placehoder;
      }
    }

    return textBlocks;
  }

  

  // the faster method.
  renderOptimizedDataBitsbufs ( 
    templateDataRecordId: number, 
    dataForRendering: any 
  ): Uint8Array[] {
    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById( templateDataRecordId );
    dataRecord.dataForRendering = dataForRendering;

    let bitsbufsArray: Uint8Array[] = [...dataRecord.optimizedBitsbufTemplate];

    for ( let placeholderName in dataRecord.dataForRendering ) {
      let placeholderEntries: number[] = dataRecord.optimizedPlaceholdersEntries[placeholderName] as number[];
      // @ts-ignore
      let placehoder: Uint8Array = dataRecord.dataForRendering[placeholderName];
   
      for ( let i of placeholderEntries ) {
        bitsbufsArray[i] = placehoder;
      }
    }

    return bitsbufsArray;
  }



  optimize ( templateDataRecordId: number ): number {

    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById( templateDataRecordId );

    if ( dataRecord.bitsbufTemplate.byteLength === 0 ) {
      dataRecord.bitsbufTemplate = this.baseParser.textEncoder.encode( dataRecord.textTemplate );
    }


    let start: number = 0;
    let end: number = dataRecord.bitsbufTemplate.length;
    let inBitsBufRange: number[] = new Array(2) as number[];
    let tokenMatchedRange: number[] = [0,0];

    inBitsBufRange[0] = 0;
    inBitsBufRange[1] = end;


    main: for ( let placeholderName in dataRecord.dataForRendering ) {

      const stringToReplace = `{{ ${placeholderName} }}`;
  
      let tokens: Uint8Array[] = [this.baseParser.textEncoder.encode( stringToReplace )];
  
      let i: number = 0;
      let maxIterations: number = 120;
      start = 0;

      for ( i = 0; i < maxIterations; i++ ) {

        let pos: Number|false = this.baseParser.getRangeOfTokensSetMatch ( 
          dataRecord.bitsbufTemplate,
          inBitsBufRange,
          tokens,
          tokenMatchedRange,
          start,
          end
        );

        if ( pos === false ) {
          break;
        }

        let templateRecord: OptimizedTemplateRecord = new Object() as OptimizedTemplateRecord;
        templateRecord.range = [...tokenMatchedRange];
        templateRecord.placeholderName = placeholderName;
        dataRecord.optimizedTemplate.push( templateRecord );

        start = pos as number;
      }

    }



    let records: OptimizedTemplateRecord[] = this.orderedRecords( dataRecord.optimizedTemplate );

    start = 0;
    let fixedTemplateRecord: OptimizedTemplateRecord = new Object() as OptimizedTemplateRecord;
    let templateRange: number[] = [0, 0];

    for ( let record of records ) {
      templateRange = [start,0];

      let matchedRangeStart: number = record.range[0];
      templateRange[1] = matchedRangeStart;

      start = record.range[1] + 1;

      fixedTemplateRecord = new Object() as OptimizedTemplateRecord;
      fixedTemplateRecord.placeholderName = "_";
      fixedTemplateRecord.range = templateRange;

      dataRecord.optimizedTemplate.push( fixedTemplateRecord );
    }

    templateRange = [start, end];
    fixedTemplateRecord = new Object() as OptimizedTemplateRecord;
    fixedTemplateRecord.placeholderName = "_";
    fixedTemplateRecord.range = templateRange;
    dataRecord.optimizedTemplate.push( fixedTemplateRecord );

    records = this.orderedRecords( dataRecord.optimizedTemplate );



    dataRecord.optimizedBitsbufTemplate = new Array(dataRecord.optimizedTemplate.length) as Uint8Array[];
    dataRecord.optimizedPlaceholdersEntries = new Object();

    for ( let placeholderName in dataRecord.dataForRendering ) {
      dataRecord.optimizedPlaceholdersEntries[placeholderName] = new Array() as number[];
    }



    for ( let i = 0; i < records.length; i++ ) {

      let record: OptimizedTemplateRecord = records[i];
      let placeholderName: string = record.placeholderName;
      let bitsbuf: Uint8Array = new Uint8Array();

      if ( placeholderName === "_" ) {
        bitsbuf = dataRecord.bitsbufTemplate.subarray( 
          record.range[0], 
          record.range[1] );
        dataRecord.optimizedBitsbufTemplate[i] = bitsbuf;
      } else {
        dataRecord.optimizedPlaceholdersEntries[placeholderName].push( i );
      }

    }

    dataRecord.optimizedTemplate = [...records];


    return 1;
  }



  protected orderedRecords( inRecords: OptimizedTemplateRecord[] ): OptimizedTemplateRecord[] {

    let records: OptimizedTemplateRecord[] = inRecords.sort (
      (recordA: OptimizedTemplateRecord, recordB: OptimizedTemplateRecord) => {

        let startA: number = recordA.range[0];
        let startB: number = recordB.range[0];

        if ( startA === startB ) {
          return (0);
        } else if ( startA > startB ) {
          return (1);
        } else {
          return (-1);
        }
      }
    );

    return [...records];
  }

}




