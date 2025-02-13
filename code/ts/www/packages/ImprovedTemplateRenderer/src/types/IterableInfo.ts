export class IterableInfo {

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

