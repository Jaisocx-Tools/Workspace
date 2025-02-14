import { TemplateConf } from "./types/TemplateConf.js";
import { RepeatDataCallbackValue } from "./types/RepeatDataCallbackValue.js";
export class ImprovedTemplateRendererConstants {
    static NestedMultipleCallback = (templateDataElemKey, templateDataElemValue) => {
        return new RepeatDataCallbackValue(templateDataElemKey, templateDataElemValue);
    };
    Defaults = class {
        templatesConf = new TemplateConf();
    };
}
//# sourceMappingURL=ImprovedTemplateRendererConstants.js.map