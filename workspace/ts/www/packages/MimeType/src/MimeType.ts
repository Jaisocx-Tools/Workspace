import { MimeTypeConstantsInterface } from "./mime_type_constants/MimeTypeConstantsInterface.js";
import { MimeTypeInterface } from "./MimeTypeInterface.js";



export class MimeType implements MimeTypeInterface {

  protected _mimeTypeConstantsInstance: MimeTypeConstantsInterface|null;
  protected _dataset: any;



  constructor() {
    this._mimeTypeConstantsInstance = null;
    this._dataset = new Object();
  }



  public setMimeTypesConstants ( inConstantsInstance: MimeTypeConstantsInterface ): MimeTypeInterface {
    this._mimeTypeConstantsInstance = inConstantsInstance;
    this._dataset = this._mimeTypeConstantsInstance.getMimeTypesObject();


    return this;
  }



  public getFilenameExtension (
    filename: string,
    maxDots: number
  ): string {
    let filenameSplittedByDots: string[] = filename.split ( "." );
    let filenameSplittedArrayLen: number = filenameSplittedByDots.length;
    let filenameSplittedArrayOffset: number = ( filenameSplittedArrayLen - maxDots );

    if ( filenameSplittedArrayOffset < 0 ) {
      filenameSplittedArrayOffset = 0;
    }

    let filenameExtensionArray: string[] = filenameSplittedByDots.slice ( filenameSplittedArrayOffset );

    let filenameExtension: string = filenameExtensionArray.join ( "." );


    return filenameExtension;

  }



  public getMimeTypeByFilenameExtension (
    filenameExtension: string
  ): string {
    let mimeType: string = "";
    mimeType = this._dataset[ filenameExtension ];

    if ( mimeType === undefined ) {
      mimeType = "";
    }


    return mimeType;
  }



  public getMimeTypeByFilename (
    filename: string,
    maxDots: number
  ): string {
    let filenameExtension: string = "";
    let mimeType: string = "";

    let i: number = 0;
    let secureCounter: number = 0;
    let secureMaxCounter: number = 5;
    i = maxDots;

    markerA: while ( i > 0 ) {
      secureCounter++;

      if ( secureCounter > secureMaxCounter ) {
        i = ( maxDots + 2 );
        break markerA;
      }

      filenameExtension = this.getFilenameExtension ( filename, i );
      mimeType = this.getMimeTypeByFilenameExtension ( filenameExtension );

      if ( ( mimeType !== undefined ) && ( mimeType.length !== 0 ) ) {
        break markerA;
      }

      i--;
    }


    return mimeType;
  }

}



