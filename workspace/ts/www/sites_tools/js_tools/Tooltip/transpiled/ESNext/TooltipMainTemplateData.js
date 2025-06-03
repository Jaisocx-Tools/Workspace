// this class here is to type hint the Json data for the TemplateRenderer
// to render the main tooltip html template
export class TooltipMainTemplateData {
    id;
    cssClasses;
    tooltipContent;
    constructor() {
        this.id = TooltipMainTemplateData.produceId();
        this.cssClasses = "";
        this.tooltipContent = "";
    }
    static produceId() {
        const id = "jaisocx_tooltip_" + Math.random() + (new Date()).getTime();
        return id;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    getCssClasses() {
        return this.cssClasses;
    }
    setCssClasses(cssClasses) {
        this.cssClasses = cssClasses;
        return this;
    }
    getTooltipContent() {
        return this.tooltipContent;
    }
    setTooltipContent(tooltipContent) {
        this.tooltipContent = tooltipContent;
        return this;
    }
}
//# sourceMappingURL=TooltipMainTemplateData.js.map