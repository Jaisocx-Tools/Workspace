import { CharcodeConverter } from "@jaisocx/charcode-converter";
import { JPath, JPathData } from "@jaisocx/workspace-tree-walker";


export class TemplateParser {

  public static CONSTANTS = class {
    public static BRACES_OPEN: string = "{{ ";
    public static BRACES_CLOSE: string = " }}";
    public static BRACES_CHARS_NUMBER: number = 3;
    public static INDEXOF_DIDNOT_MATCH: number = (-1);
  };

  public static instance: TemplateParser;

  public converter: CharcodeConverter;

  constructor() {
    this.converter = CharcodeConverter.getInstance();
  }

  public static getInstance(): TemplateParser {
    if ( !TemplateParser.instance ) {
      TemplateParser.instance = new TemplateParser();
    }

    return TemplateParser.instance;
  }

  public parse ( 
    template: string, 
    placeholderName: string 
  ): (Uint16Array|JPathData)[] {

    const parser: TemplateParser = TemplateParser.instance;


    const preparedTemplates: (Uint16Array|JPathData)[] = [];

    const placeholdersPositions: {bracesStart: number, bracesEnd: number, placeholderStart: number, placeholderEnd: number}[] = [];

    const templateLength: number = template.length;
    const templateLastCharPos: number = ( templateLength - 1 );

    let lookupOffset: number = 0;
    let matchedPosition = 0;
    let placeholderStart: number = 0;
    let placeholderEnd: number = 0;

    const noMatch: number = TemplateParser.CONSTANTS.INDEXOF_DIDNOT_MATCH;
    const braceOpen: string = TemplateParser.CONSTANTS.BRACES_OPEN;
    const braceClose: string = TemplateParser.CONSTANTS.BRACES_CLOSE;
    const braceLen: number = TemplateParser.CONSTANTS.BRACES_CHARS_NUMBER;

    let range: {bracesStart: number, bracesEnd: number, placeholderStart: number, placeholderEnd: number};

    while( matchedPosition > noMatch ) {

      range = {
        bracesStart: 0, 
        bracesEnd: 0, 
        placeholderStart: 0, 
        placeholderEnd: 0
      };


      matchedPosition = template.indexOf( 
        braceOpen, 
        lookupOffset );
      if ( matchedPosition === noMatch ) {
        break;
      }

      range.bracesStart = matchedPosition;
      range.placeholderStart = ( matchedPosition + braceLen );

      
      lookupOffset = ( range.placeholderStart + 1 );
      matchedPosition = template.indexOf( 
        braceClose, 
        lookupOffset );
      if ( matchedPosition === noMatch ) {
        throw new Error("Placeholders");
        break;
      }

      range.placeholderEnd = ( matchedPosition );
      range.bracesEnd = ( matchedPosition + braceLen );
      

      placeholdersPositions.push({...range});
      lookupOffset = ( range.bracesEnd + 1 );

      if ( lookupOffset > templateLastCharPos ) {
        break;
      }
    }


    let offset: number = 0;
    let staticTemplate: string = "";
    let staticTemplateToBitsBuffer: Uint16Array;
    let placeholder: string = "";
    let jpathData: JPathData;
    for ( range of placeholdersPositions ) {
      if ( range.bracesStart > offset ) {
        staticTemplate = template.substring( 
          offset, ( 
            range.bracesStart ) );

        if ( staticTemplate && staticTemplate.length > 0 ) {
          preparedTemplates.push(
            parser.converter.stringToArray( 
              staticTemplate, 
              0 )
          );
        }

        offset = range.placeholderStart;
      }

      placeholder = template.substring( 
        range.placeholderStart, 
        range.placeholderEnd );

      if ( placeholder.startsWith( placeholderName ) === true ) {
        placeholder = placeholder.substring( placeholderName.length );
      }

      jpathData = new JPathData();
      if ( placeholder && placeholder.length > 0 ) {
        
        jpathData.setJPathExpression( placeholder );
        jpathData.setJPath(
          JPath.parse( placeholder )
        );

        preparedTemplates.push(
          jpathData
        );

      } else if ( placeholder.length === 0 ) {
        jpathData.setIsPlaceholderValue( 1 );
        preparedTemplates.push(
          jpathData
        );

      }

      offset = range.bracesEnd;

    }

    staticTemplate = template.substring(  offset );

    if ( staticTemplate && staticTemplate.length > 0 ) {
      preparedTemplates.push (
        parser.converter.stringToArray( 
          staticTemplate, 
          0 )
      );
    }

    return preparedTemplates;
  }

}