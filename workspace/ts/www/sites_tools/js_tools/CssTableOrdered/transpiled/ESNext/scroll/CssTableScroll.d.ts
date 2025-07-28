import { CssTableScrollInterface } from "./CssTableScrollInterface.js";
export declare class CssTableScroll implements CssTableScrollInterface {
    #private;
    _tableRecordsHolderSelector: string;
    _fixedLabelsHolderCssClassName: string;
    constructor();
    onTableScroll(inEvent: Event): void;
    addScrollEventHandlers(): void;
}
//# sourceMappingURL=CssTableScroll.d.ts.map