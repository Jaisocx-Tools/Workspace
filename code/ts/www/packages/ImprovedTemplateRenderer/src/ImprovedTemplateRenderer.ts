import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";

export class ImprovedTemplateRenderer extends EventEmitter {
  EVENT_NAME__AFTER_RENDER: any;

  data: object;

  template: any;

  templatesObject: any;
  templatesConf: any;
  templatesDataArray: any[];
  nestedTemplatesDataPointersArrays: any;

  constructor() {
    super();

    this.EVENT_NAME__AFTER_RENDER = "afterRender";

    this.data = {};
    this.template = "";

    this.templatesObject = {};
    this.templatesConf = {};
    this.templatesDataArray = [];
    this.nestedTemplatesDataPointersArrays = {};

  }

  setDebug(debug: boolean): ImprovedTemplateRenderer {
    this.debug = debug;
    return this;
  }

  setData(data: object): ImprovedTemplateRenderer {
    this.data = data;
    return this;
  }

  setTemplate(template: any): ImprovedTemplateRenderer {
    this.template = template;
    return this;
  }

  setTemplatesObject(templates: any): ImprovedTemplateRenderer {
    this.templatesObject = templates;
    return this;
  }

  render(): any {
    let renderedHtml = this.replaceTemplateRendererWithDataForRendering(
      this.template,
      this.data
    );

    if (this.debug) {
      console.log(
        "renderedHtml before afterRender event emitted",
        renderedHtml
      );
    }

    const eventResult: EventEmitResult[] = this.emitEvent (
      this.EVENT_NAME__AFTER_RENDER,
      {
        html: renderedHtml,
        data: this.data,
      }
    );

    if (eventResult.length > 0) {
      const last: number = eventResult.length - 1;

      let payloadReturned: any = null;
      for ( let eventResultsStep = last; eventResultsStep > (-1); eventResultsStep-- ) {
        try {
          // @ts-ignore
          payloadReturned = eventResult[eventResultsStep].result.payloadReturned; 
        } catch (e) {}
        
        if ( !payloadReturned ) {
          continue;
        }

        renderedHtml = payloadReturned.html;
      }

      if (this.debug) {
        console.log(
          "renderedHtml before afterRender event emitted",
          eventResult,
          renderedHtml
        );
      }
    } else if (this.debug) {
      console.log("afterRender event did not change html");
    }
    
    return renderedHtml;
  }

  replaceTemplateRendererWithDataForRendering(
    template: any,
    dataForRendering: object
  ): any {
    let renderedHtml = template;

    for (const placeholderName in dataForRendering) {
      const stringToReplace = `{{ ${placeholderName} }}`;

      // @ts-ignore
      let valueToSet = dataForRendering[placeholderName];
      if (!valueToSet) {
        valueToSet = "";
      }

      renderedHtml = renderedHtml.replace(
        stringToReplace,
        valueToSet
      );
    }

    return renderedHtml;
  }

  nestedTemplatesRender ( 
    nestedPropName: string, 
    key, 
    value, 
    recordSet 
  ): any { 
            
    if ( !this.nestedTemplatesDataPointersArrays[nestedPropName] ) {
      this.nestedTemplatesDataPointersArrays[nestedPropName] = this.calculateNestedPropsTemplatesDataPointersArray( nestedPropName );
    }

    let renderedTemplates: any[] = [];

    const amountNestedPropsMatched: number = this.nestedTemplatesDataPointersArrays[nestedPropName].length;

    let templateDataArrayIndex: number = 0;

    let nestedTemplatesIndex: number = 0;
    let nestedTemplatesSize: number = amountNestedPropsMatched;
    let nestedTemplateData: any = {};
    let nestedTemplateName: string = "";
    let nestedTemplate: string = "";
    let renderedTemplate: any = null;
    let nestedTemplateConf: any = {};
    let nestedPropName2: string|undefined = "";

    for ( 
      nestedTemplatesIndex = 0; 
      nestedTemplatesIndex < nestedTemplatesSize; 
      nestedTemplatesIndex++ 
    ) {
      
      templateDataArrayIndex = this.nestedTemplatesDataPointersArrays[nestedPropName][nestedTemplatesIndex];
      nestedTemplateData = this.templatesDataArray[templateDataArrayIndex];
      nestedTemplateName = nestedTemplateData.templatesObjectPropertyName;
      nestedTemplate = this.templatesObject[nestedTemplateName];
      nestedTemplateConf = this.templatesConf[nestedTemplateName];
      nestedPropName2 = nestedTemplateConf["nestedProp"];
      if ( nestedPropName2 ) {

        for ( let i=0;  ) {

        }

        renderedTemplate = this
          .nestedTemplatesRender (
            nestedPropName2, 
            nestedTemplateConf, 
            value, 
            recordSet 
          );

        } else {
        renderedTemplate = this
        .setTemplate( nestedTemplate )
        .setData( value )
        .render();

      }
      
      renderedTemplates[nestedTemplatesIndex] = renderedTemplate;
    }

    return renderedTemplates;
  }


  calculateNestedPropsTemplatesDataPointersArray( nestedPropName: string ): Uint16Array {

    const nestedPropsTemplateObjectKeys = Object.keys( this.templatesObject )
      .filter( 
        ( templateName ) => {
          return this.templatesConf[templateName].prop === nestedPropName;
        }
      );
    const propsKeysLength = nestedPropsTemplateObjectKeys.length;
    
    let renderedTemplates = [];

    let templateDataArrayItem = {};
    let templateDataArrayIndex = 0;
    let templateDataArraySize = templateData_MainRenderMethod.length;
    let templateDataMatchingPropsPointers = new Uint16Array( propsKeysLength );
    let amountNestedPropsMatched = 0;
    let propName = "";
    
    for ( templateDataArrayIndex = 0; templateDataArrayIndex < templateDataArraySize; templateDataArrayIndex++ ) {
    
      if ( amountNestedPropsMatched > propsKeysLength ) {
        break;
      }

      templateDataArrayItem = templateData_MainRenderMethod[templateDataArrayIndex];
      propName = templateDataArrayItem.templatesObjectPropertyName;
    
      const entryMatched = nestedPropsTemplateObjectKeys
        .find( ( nestedPropKey ) => { return nestedPropKey === propName; } );

      if ( entryMatched ) {
        templateDataMatchingPropsPointers[amountNestedPropsMatched] = templateDataArrayIndex;
        amountNestedPropsMatched++;
      }

    }

    return templateDataMatchingPropsPointers;
  }

}
