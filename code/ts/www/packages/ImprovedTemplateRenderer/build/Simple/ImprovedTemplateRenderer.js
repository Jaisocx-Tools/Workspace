class ImprovedTemplateRenderer extends EventEmitter {
  EVENT_NAME__AFTER_RENDER;
  data;
  template;
  templatesObject;
  templatesConf;
  templatesDataArray;
  nestedTemplatesDataPointersArrays;

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

  setDebug(debug) {
    this.debug = debug;

    return this;
  }

  setData(data) {
    this.data = data;

    return this;
  }

  setTemplate(template) {
    this.template = template;

    return this;
  }

  setTemplatesObject(templates) {
    this.templatesObject = templates;

    return this;
  }
}
//# sourceMappingURL=ImprovedTemplateRenderer.js.map