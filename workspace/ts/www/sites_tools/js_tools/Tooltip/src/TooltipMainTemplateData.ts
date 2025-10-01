
// this class here is to type hint the Json data for the TemplateRenderer
// to render the main tooltip html template
export class TooltipMainTemplateData {
  id: any;
  cssClasses: any;
  tooltipContent: any;



  constructor() {
    this.id = TooltipMainTemplateData.produceId();
    this.cssClasses = "";
    this.tooltipContent = "";
  }



  static produceId(): any {
    const id: any = "jaisocx_tooltip_" + Math.random() + (new Date()).getTime();


    return id;
  }



  getId(): any {
    return this.id;
  }



  setId( id: any ): any {
    this.id = id;


    return this;
  }



  getCssClasses(): any {
    return this.cssClasses;
  }



  setCssClasses( cssClasses: any ): TooltipMainTemplateData {
    this.cssClasses = cssClasses;


    return this;
  }



  getTooltipContent(): any {
    return this.tooltipContent;
  }



  setTooltipContent( tooltipContent: any ): TooltipMainTemplateData {
    this.tooltipContent = tooltipContent;


    return this;
  }
}

