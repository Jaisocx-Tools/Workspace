import { TemplatesConf } from "./types/TemplatesConf.js";
import { NestedMultipleCallbackValue } from "./types/RepeatDataCallbackValue.js";
export class ImprovedTemplateRendererConstants {
    static NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
        return new NestedMultipleCallbackValue(templateDataElemKey, templateDataElemValue);
    };
    Defaults = class {
        templatesConf = new TemplatesConf();
    };
}
//# sourceMappingURL=ImprovedTemplateRendererConstants.js.map