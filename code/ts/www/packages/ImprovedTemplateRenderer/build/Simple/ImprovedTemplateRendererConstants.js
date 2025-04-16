class ImprovedTemplateRendererConstants {
  static NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
    return new RepeatDataCallbackValue(templateDataElemKey, templateDataElemValue);
  };
  Defaults = class {
    templatesConf = new TemplateConf();
  };
} 


