export interface FileProducerByTemplateInterface {

  setDebug( debug: boolean ): FileProducerByTemplateInterface;

  setFilePath( path: string ): FileProducerByTemplateInterface;
  getFilePath(): string;

  readTemplateFile( path: string ): FileProducerByTemplateInterface;
  getTemplatePath(): string;

  setTemplateText( template: string ): FileProducerByTemplateInterface;
  getTemplateText(): string;

  setTemplateData( data: object ): FileProducerByTemplateInterface;
  getTemplateData(): object;


  validate(): boolean;

  produce(): number;

}


