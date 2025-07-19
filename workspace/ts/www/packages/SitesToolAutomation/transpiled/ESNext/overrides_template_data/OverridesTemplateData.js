export class OverridesTemplateData {
    _prop;
    constructor() {
        this._prop = "";
    }
    getProp() {
        return this._prop;
    }
    setProp(inPropValue) {
        this._prop = inPropValue;
        return this;
    }
    getUnchanged(_responsiveDatasetPropName, templateDataBase) {
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
    getTemplateDataOverridden(_responsiveDatasetPropName, templateDataBase) {
        templateDataBase["custom-css"] = "Hello World!";
        //@ts-ignore
        let responsiveData = this.responsiveDatasetBase.datasetBitsbufs[_responsiveDatasetPropName];
        //@ts-ignore
        let responsiveSizeName_withSitesToolName_Array = this.responsiveDatasetConstants
            .getResponsiveSizeName_withSitesToolName_ByBitsbufs(responsiveData["range_orderby_id"], responsiveData["art"], responsiveData["art_size"], templateDataBase["orientation"], templateDataBase["SitesToolName"], templateDataBase["SitesTool_ThemeName"]);
        let responsiveSizeArray = responsiveSizeName_withSitesToolName_Array.slice(4, 11);
        //@ts-ignore
        let responsiveSize = this.responsiveDatasetBase.fileWriter
            .concatUint8Arrays(responsiveSizeArray);
        templateDataBase["responsiveSize"] = responsiveSize;
        return templateDataBase;
    }
}
//# sourceMappingURL=OverridesTemplateData.js.map