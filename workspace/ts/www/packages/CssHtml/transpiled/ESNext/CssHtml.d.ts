export declare class CssHtml {
    KEYWORD_HTML_UC: string;
    KEYWORD_HTML_LC: string;
    KEYWORD_BODY_UC: string;
    KEYWORD_BODY_LC: string;
    KEYWORD_REM: string;
    KEYWORD_PX: string;
    KEYWORD_VAR: string;
    KEYWORD_CSS_VARIABLE_START: string;
    CSS_FONT_SIZE: string;
    constructor();
    escapeHTML(str: string): string;
    unescapeHTML(str: string): string;
    concatClassNames(node: HTMLElement, delimiter: string): string;
    getRemBasePxValue(): number;
    remToPx(remValue: string, inRemBasePxValue: number): string | false;
    remToPxAllValues(cssPropertyValue: string): string | false;
    getVariableValue(element: HTMLElement, variableName: string): string;
    resolveCssValueIfVariable(element: HTMLElement, cssValue: string): string | false;
    getCssPropertiesNames_ofCSSStyleRule(cssStyleRule: CSSStyleRule): string[];
    getBrowserTabDimensions(): {
        width: number;
        height: number;
    };
}
//# sourceMappingURL=CssHtml.d.ts.map