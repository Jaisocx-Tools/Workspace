export class OverridesTemplateData {

  protected _prop: any;



  constructor() {
    this._prop = "";
  }



  public getProp(): any {
    return this._prop;
  }



  public setProp( inPropValue: any ): OverridesTemplateData {
    this._prop = inPropValue;


    return this;
  }



  public getUnchanged (
    _responsiveDatasetPropName: string,
    templateDataBase: any
  ): any {

    /*
    the first arg _responsiveDatasetPropName: the key of the json object in json dataset.
    Example: mobile_xs

    json dataset path:
    ${SitesToolAutomation}/data/ResponsiveSizes/ResponsiveSizes.json

    available for You on url:
    https://sandbox.brightday.emal/packages/SitesToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json

    {
      ...
      ...
      "data": {
        "mobile_xs": {
          "range_orderby_id": "e02",
          "width": {
            "from": 240,
            "to": 320
          },
          "height": {
            "from": 320,
      ...
      ...
    */


    // Example use of _responsiveDatasetPropName:
    // //@ts-ignore
    // let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[_responsiveDatasetPropName];
    return templateDataBase;
  }



  public getTemplateDataOverridden (
    _responsiveDatasetPropName: string,
    templateDataBase: any
  ): any {
    templateDataBase["custom-css"] = "Hello World!";


    //@ts-ignore
    let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[_responsiveDatasetPropName];


    //@ts-ignore
    let responsiveSizeName_withSitesToolName_Array: Uint8Array[] = this.responsiveDatasetConstants
      .getResponsiveSizeName_withSitesToolName_ByBitsbufs (
        responsiveData["range_orderby_id"],
        responsiveData["art"],
        responsiveData["art_size"],
        templateDataBase["orientation"],
        templateDataBase["SitesToolName"],
        templateDataBase["SitesTool_ThemeName"]
      );


    let responsiveSizeArray: Uint8Array[] = responsiveSizeName_withSitesToolName_Array.slice( 4, 11 );


    //@ts-ignore
    let responsiveSize: Uint8Array = this.responsiveDatasetBase.fileWriter
      .concatUint8Arrays( responsiveSizeArray );


    templateDataBase["responsiveSize"] = responsiveSize;


    return templateDataBase;

  }

}



