"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprovedTemplateRenderer = void 0;
const event_emitter_1 = require("@jaisocx/event-emitter");
class ImprovedTemplateRenderer extends event_emitter_1.EventEmitter {
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
exports.ImprovedTemplateRenderer = ImprovedTemplateRenderer;
//# sourceMappingURL=ImprovedTemplateRenderer.js.map