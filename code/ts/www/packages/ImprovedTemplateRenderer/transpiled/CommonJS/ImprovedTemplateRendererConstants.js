"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImprovedTemplateRendererConstants = void 0;
const TemplateConf_js_1 = require("./types/TemplateConf.js");
const RepeatDataCallbackValue_js_1 = require("./types/RepeatDataCallbackValue.js");
class ImprovedTemplateRendererConstants {
    constructor() {
        this.Defaults = class {
            constructor() {
                this.templatesConf = new TemplateConf_js_1.TemplateConf();
            }
        };
    }
}
exports.ImprovedTemplateRendererConstants = ImprovedTemplateRendererConstants;
ImprovedTemplateRendererConstants.NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
    return new RepeatDataCallbackValue_js_1.RepeatDataCallbackValue(templateDataElemKey, templateDataElemValue);
};
//# sourceMappingURL=ImprovedTemplateRendererConstants.js.map