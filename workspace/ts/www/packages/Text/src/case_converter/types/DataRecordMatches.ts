export class DataRecordMatches {

  groups_positions:            number[][];

  prev_CharTypeEnum:           number;
  current_CharTypeEnum:        number;

  currentGroupOfCharType_charsAmount: number;



  constructor() {
    this.groups_positions          = new Array() as number[][];

    this.prev_CharTypeEnum         = 0;
    this.current_CharTypeEnum      = 0;

    this.currentGroupOfCharType_charsAmount = 0;
  }
}

