export class AnyClass {

  protected _prop: any;

  constructor() {
    this._prop = "";
  }

  public getProp(): any {
    return this._prop;
  }

  public getPropHTML(): any {
    return `<h1>${this._prop}</h1>`;
  }

  public setProp( inPropValue: any ): AnyClass {
    this._prop = inPropValue;

    return this;
  }

}



