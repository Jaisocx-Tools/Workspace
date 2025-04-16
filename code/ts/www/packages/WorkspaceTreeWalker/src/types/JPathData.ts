

import { JPath } from "../lib/JPath";



export class JPathData {

  protected _jpath: (string|number)[];
  protected _jpathExpression: string;
  protected _isPlaceholderValue: number;



  constructor() {
    this._jpath = [];
    this._jpathExpression = "";
    this._isPlaceholderValue = 0;
  }

  public isPlaceholderValue(): number {
    return this._isPlaceholderValue;
  }

  public setIsPlaceholderValue( isPlaceholder: number ): JPathData {
    this._isPlaceholderValue = isPlaceholder;

    return this;
  }

  public getJPath(): (string|number)[] {
    return this._jpath;
  }

  public setJPath( jpath: (string|number)[] ): JPathData {
    this._jpath = jpath;

    if ( !this._jpath || this._jpath.length === 0 ) {
      this._isPlaceholderValue = 1;

    } else {
      this._isPlaceholderValue = 0;

    }

    return this;
  }

  public getJPathExpression(): string {
    return this._jpathExpression;
  }

  public setJPathExpression( jpathExpression: string ): JPathData {
    this._jpathExpression = jpathExpression;

    return this;
  }

}



