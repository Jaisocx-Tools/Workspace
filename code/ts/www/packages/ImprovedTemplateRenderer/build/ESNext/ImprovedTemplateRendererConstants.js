import { TemplatesConf } from "./TemplatesConf.js";
import { NestedMultipleCallbackValue } from "./NestedMultipleCallbackValue.js";
export class ImprovedTemplateRendererConstants {
    static NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
        return new NestedMultipleCallbackValue(templateDataElemKey, templateDataElemValue);
    };
    Defaults = class {
        templatesConf = new TemplatesConf();
    };
}
//# sourceMappingURL=ImprovedTemplateRendererConstants.js.map