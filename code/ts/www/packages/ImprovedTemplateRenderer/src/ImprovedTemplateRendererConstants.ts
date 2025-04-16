
import { TemplateConf } from "./types/TemplateConf.js";
import { RepeatDataCallbackValue } from "./types/RepeatDataCallbackValue.js";


export class ImprovedTemplateRendererConstants {

  static NestedMultipleCallback = (templateDataElemKey: any, templateDataElemValue: any) => {
    return new RepeatDataCallbackValue(templateDataElemKey, templateDataElemValue);
  };

  Defaults = class {
    templatesConf: TemplateConf = new TemplateConf();
  };  
}


