"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprovedTemplateRendererConstants = void 0;
const TemplatesConf_js_1 = require("./types/TemplatesConf.js");
const RepeatDataCallbackValue_js_1 = require("./types/RepeatDataCallbackValue.js");
class ImprovedTemplateRendererConstants {
    constructor() {
        this.Defaults = class {
            constructor() {
                this.templatesConf = new TemplatesConf_js_1.TemplatesConf();
            }
        };
    }
}
exports.ImprovedTemplateRendererConstants = ImprovedTemplateRendererConstants;
ImprovedTemplateRendererConstants.NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
    return new RepeatDataCallbackValue_js_1.NestedMultipleCallbackValue(templateDataElemKey, templateDataElemValue);
};
//# sourceMappingURL=ImprovedTemplateRendererConstants.js.map