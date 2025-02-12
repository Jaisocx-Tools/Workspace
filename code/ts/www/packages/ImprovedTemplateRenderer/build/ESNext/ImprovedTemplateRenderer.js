import { EventEmitter } from "@jaisocx/event-emitter";
export class ImprovedTemplateRenderer extends EventEmitter {
    EVENT_NAME__AFTER_RENDER;
    templatesObject;
    templatesConf;
    dataConf;
    data;
    // props for technique purposes.
    isStandardCallback;
    constructor() {
        super();
        this.EVENT_NAME__AFTER_RENDER = "afterRender";
        this.templatesObject = {};
        this.templatesConf = {};
        this.dataConf = [];
        this.data = {};
        // props for technique purposes.
        this.isStandardCallback = 1;
    }
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    setTemplatesObject(templates) {
        this.templatesObject = templates;
        return this;
    }
    setTemplatesConf(data) {
        this.data = data;
        return this;
    }
    setDataConf(data) {
        this.data = data;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    render() {
        // the result variable is declared.
        // the result is the rendered html,
        // all templates where placeholders replaced with the according data,
        // and the templates, these are thought to be repeated with data of datatype array,
        // are produced in the cycle, too.
        let renderedTemplatesHtml = "";
        let resultArrayFlat = [];
        let resultArrayRecursive = [];
        let preparedTaggedGroupsInfos = this.prepareTaggedGroupsInfos();
        let resultArrayRecursiveElemsNumber = 0;
        resultArrayRecursiveElemsNumber = this.calculateResultArrayRecursiveNumber();
        return renderedTemplatesHtml;
    }
}
//# sourceMappingURL=ImprovedTemplateRenderer.js.map