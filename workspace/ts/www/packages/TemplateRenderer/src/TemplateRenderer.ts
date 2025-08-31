import { TextEncoder, TextDecoder } from "node:util";

import { EventEmitter, EventEmitResult } from "@jaisocx/event-emitter";
import { TokensParser } from "@jaisocx/tokens-parser";

import { OptimizedTemplateRecord, TemplateRendererDataRecord } from "./types/TemplateRendererTypes.js";
import { TemplateRendererInterface } from "./TemplateRendererInterface.js";



export class TemplateRenderer extends EventEmitter implements TemplateRendererInterface {
  EVENT_NAME__AFTER_RENDER: any;

  tokensParser: TokensParser;

  dataRecords: TemplateRendererDataRecord[];
  #activeDataRecordId: number;

  textEncoder: TextEncoder;
  textDecoder: TextDecoder;



  constructor() {
    super();

    this.EVENT_NAME__AFTER_RENDER = "afterRender";

    this.tokensParser = new TokensParser();

    this.dataRecords = new Array() as TemplateRendererDataRecord[];
    this.#activeDataRecordId = 0;

    this.textEncoder = new TextEncoder();
    this.textDecoder = new TextDecoder( "utf8" );
  }



  initDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord = new Object() as TemplateRendererDataRecord;

    dataRecord.isOptimized = false;
    dataRecord.textTemplate = "";
    dataRecord.dataForRendering = new Object();

    dataRecord.bitsbufTemplate = new Uint8Array();
    dataRecord.optimizedBitsbufTemplate = new Array() as Uint8Array[];
    dataRecord.optimizedPlaceholdersEntries = new Object();
    dataRecord.optimizedTemplate = new Array() as OptimizedTemplateRecord[];


    return dataRecord;
  }



  addNewDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord = this.initDataRecord();
    this.dataRecords.push( dataRecord );
    this.#activeDataRecordId = ( this.dataRecords.length - 1 );
    this.dataRecords[this.#activeDataRecordId].id = this.#activeDataRecordId;


    return this.dataRecords[this.#activeDataRecordId];
  }



  getActiveDataRecord(): TemplateRendererDataRecord {
    let dataRecord: TemplateRendererDataRecord;

    if ( this.#activeDataRecordId === 0 ) {
      let obj: TemplateRendererDataRecord = new Object() as TemplateRendererDataRecord;
      this.dataRecords.push( obj );

      dataRecord = this.addNewDataRecord();
    } else {
      dataRecord = this.dataRecords[this.#activeDataRecordId];
    }


    return dataRecord;
  }



  getActiveDataRecordId(): number {
    return this.#activeDataRecordId;
  }



  getDataRecordById( id: number ): TemplateRendererDataRecord {
    return this.dataRecords[id];
  }



  setActiveRecordId( id: number ): TemplateRendererDataRecord {
    this.#activeDataRecordId = id;


    return this.dataRecords[id];
  }



  setActiveDataRecord( dataRecord: TemplateRendererDataRecord ): number {
    if ( this.#activeDataRecordId === 0 ) {
      let obj: TemplateRendererDataRecord = new Object() as TemplateRendererDataRecord;
      this.dataRecords.push( obj );
    }

    let id: number = dataRecord.id;

    if ( id === 0 ) {
      id = this.dataRecords.length;
      dataRecord.id = id;
      this.dataRecords.push( dataRecord );

    } else {
      id = dataRecord.id;
      this.dataRecords[id] = dataRecord;

    }

    this.#activeDataRecordId = id;


    return id;
  }



  setDebug(debug: boolean): TemplateRendererInterface {
    this.debug = debug;


    return this;
  }



  setTemplate( template: string ): TemplateRendererInterface {
    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();
    dataRecord.textTemplate = template;


    return this;
  }



  setData( dataForRendering: object ): TemplateRendererInterface {
    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();
    dataRecord.dataForRendering = dataForRendering;


    return this;
  }



  render(): any {

    if ( this.#activeDataRecordId === 0 ) {
      throw new Error( "No template neither data were set." );
    }

    let dataRecord: TemplateRendererDataRecord = this.getActiveDataRecord();

    if ( dataRecord.isOptimized === false ) {
      this.optimize( dataRecord.id );
      dataRecord = this.dataRecords[ dataRecord.id ];
    }

    let renderedHtml = this.renderOptimizedToStringDataText (
      dataRecord.id,
      dataRecord.dataForRendering
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
        textBlocks[i] = this.textDecoder.decode( bitsbufElem );
      }
    }

    let renderedText: any = textBlocks.join("");


    return renderedText;
  }


  // the way to improve:
  // after optimization, create once dataRecord.optimizedBitsbufTemplate of texts, so not to decode to strings.
  renderOptimizedTextBlocks (
    templateDataRecordId: number,
    dataForRendering: any


    // { key: text }
  ): string[] {
    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById( templateDataRecordId );
    dataRecord.dataForRendering = dataForRendering;

    let bitsbufsArray: Uint8Array[] = [...dataRecord.optimizedBitsbufTemplate];
    let textBlocks: string[] = new Array() as string[];

    let bitsbufElem: Uint8Array = new Uint8Array();

    for ( let i = 0; i < bitsbufsArray.length; i++ ) {
      bitsbufElem = bitsbufsArray[i];
      textBlocks[i] = this.textDecoder.decode( bitsbufElem );
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



  optimize ( templateDataRecordId: number ): number {
    let maxIterationsNumber: number = 1200;

    let dataRecord: TemplateRendererDataRecord = this.getDataRecordById( templateDataRecordId );

    if ( dataRecord.bitsbufTemplate.byteLength === 0 ) {
      dataRecord.bitsbufTemplate = this.tokensParser.textEncoder.encode( dataRecord.textTemplate );
    }


    let end: number = dataRecord.bitsbufTemplate.length;
    let templateLookupRange: number[] = [0, end];

    let placeholdersNames: string[] = Object.keys( dataRecord.dataForRendering );
    let severalTokensSets: string[][] = placeholdersNames.map(
      ( placeholderName: string ) => {
        let placeholderMarkup: string = [ "{{ ", placeholderName, " }}" ].join("");


        return [ placeholderMarkup ];
      }
    );

    let bitsbufsRanges: number[][] = new Array(1) as number[][];
    bitsbufsRanges[0] = templateLookupRange;

    let inOutRanges_WithoutTokenizedAreas: number[][] = new Array() as number[][];
    let inOutRanges_TokensSetsMatched: number[][][] = new Array( placeholdersNames.length ) as number[][][];

    let numberOfPlaceholdersMatched: number = this.tokensParser
      .parseAroundSeveralTokensSets (
        dataRecord.bitsbufTemplate,
        bitsbufsRanges,


        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        severalTokensSets,


        // where one tokensSet is array of datatype string[]
        inOutRanges_WithoutTokenizedAreas,
        inOutRanges_TokensSetsMatched,
        maxIterationsNumber
      );

    for ( let placeholderId = 0; placeholderId < placeholdersNames.length; placeholderId++ ) {
      let placeholderName: string = placeholdersNames[placeholderId];

      let tokensMatchedRanges: number[][] = inOutRanges_TokensSetsMatched[placeholderId];

      for ( let tokenId = 0; tokenId < tokensMatchedRanges.length; tokenId++ ) {
        let templateRecord: OptimizedTemplateRecord = new Object() as OptimizedTemplateRecord;
        templateRecord.range = [...tokensMatchedRanges[tokenId]];
        templateRecord.placeholderName = placeholderName;
        dataRecord.optimizedTemplate.push( templateRecord );
      }
    }

    let fixedTemplateRecord: OptimizedTemplateRecord = new Object() as OptimizedTemplateRecord;

    for ( let templateRange of inOutRanges_WithoutTokenizedAreas ) {
      fixedTemplateRecord = new Object() as OptimizedTemplateRecord;
      fixedTemplateRecord.range = templateRange;
      fixedTemplateRecord.placeholderName = "_";

      dataRecord.optimizedTemplate.push( fixedTemplateRecord );
    }

    dataRecord.optimizedPlaceholdersEntries = new Object();

    for ( let placeholderId = 0; placeholderId < placeholdersNames.length; placeholderId++ ) {
      let placeholderName: string = placeholdersNames[placeholderId];

      dataRecord.optimizedPlaceholdersEntries[placeholderName] = new Array() as number[];
    }

    let optimizedRecords: OptimizedTemplateRecord[] = this.orderedRecords( dataRecord.optimizedTemplate );
    dataRecord.optimizedBitsbufTemplate = new Array( optimizedRecords.length ) as Uint8Array[];

    for ( let i = 0; i < optimizedRecords.length; i++ ) {
      let record: OptimizedTemplateRecord = optimizedRecords[i];
      let placeholderName: string = record.placeholderName;
      let bitsbuf: Uint8Array = new Uint8Array();

      if ( placeholderName === "_" ) {
        bitsbuf = dataRecord.bitsbufTemplate.subarray (
          record.range[0],
          record.range[1]
        );
        dataRecord.optimizedBitsbufTemplate[i] = bitsbuf;
      } else {
        dataRecord.optimizedPlaceholdersEntries[placeholderName].push( i );
      }

    }

    dataRecord.optimizedTemplate = [...optimizedRecords];
    dataRecord.isOptimized = true;


    return numberOfPlaceholdersMatched;
  }



  orderedRecords( inRecords: OptimizedTemplateRecord[] ): OptimizedTemplateRecord[] {
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


  // old method String.replace() in loop over all charrs of the template every loop iterations.
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

}




