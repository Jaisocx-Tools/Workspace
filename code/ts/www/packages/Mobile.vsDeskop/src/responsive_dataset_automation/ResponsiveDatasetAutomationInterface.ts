export interface ResponsiveDatasetAutomationInterface {

  produceMediaCssFilesSet(): any; // this
  produceMediaCssFile( responsiveDatasetPropName: string ): any; // this

  produceResponsiveImportsCssFile(): any; // this
  produceResponsiveImportLine(): any; // the line in the imports file.






  setDataset(dataset: any): any; // this



  setWebpackAliasName( alias: string ): any; // this 
  setResponsiveImportsCssFilePath( path: string ): any; // this
  setResponsiveImportsCssFileContent( content: string ): any; // this





  getDataset(): object;

  getTemplateMediaCssFilePath(): any;
  getTemplateMediaCssFileName(): any;
  getTemplateMediaCssFileContent(): any;

  getMediaCssFilePath(): any;
  getMediaCssFileName(): any;
  getMediaCssFileContent(): any;





}









