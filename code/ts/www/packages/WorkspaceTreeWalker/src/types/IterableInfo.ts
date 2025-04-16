export class IterableInfo {

  static DATATYPE_OBJECT: string = "object";
 
  datatype: string;
  isArray: boolean;
  keys: (number|string|any)[];
  length: number;

  constructor() {
    this.datatype = "";
    this.isArray = false;
    this.keys = [];
    this.length = 0;  
  }
}

