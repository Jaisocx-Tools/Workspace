import { MimeTypeConstantsInterface } from "./MimeTypeConstantsInterface.js";



export class SitesPreloaderMimeTypeConstants implements MimeTypeConstantsInterface {

  protected _mimeTypesObject: any;



  constructor() {
    this._mimeTypesObject = {
      "ico": "image/x-icon",
      "bmp": "image/x-ms-bmp",
      "gif": "image/gif",
      "png": "image/png",
      "jpeg": "image/jpeg",
      "jpg": "image/jpeg",
      "webp": "image/webp",
      "js": "text/javascript",
      "json": "application/json",
      "json5": "application/json5",
      "jsonld": "application/ld+json",
      "jsonml": "application/jsonml+json",
      "od": "application/object-data",
      "ttc": "font/collection",
      "ttf": "font/ttf",
      "woff": "font/woff",
      "woff2": "font/woff2"
    };
  }



  public getMimeTypesObject(): any {
    return this._mimeTypesObject;
  }

}



