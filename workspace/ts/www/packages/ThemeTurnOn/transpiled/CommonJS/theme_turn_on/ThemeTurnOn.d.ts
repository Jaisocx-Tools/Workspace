import { ThemeTurnOnConstantsInterface } from "../constants/ThemeTurnOnConstantsInterface.js";
import { ThemeTurnOnInterface } from "./ThemeTurnOnInterface.js";
export declare class ThemeTurnOn implements ThemeTurnOnInterface {
    _themeTurnOnConstants: ThemeTurnOnConstantsInterface;
    _currentButtonNodeClicked: HTMLElement | null;
    _keptCssClassnames: string[];
    constructor();
    setKeptCssClassnames(inCssClassnamesArray: string[]): ThemeTurnOnInterface;
    getKeptCssClassnames(): string[];
    setCurrentButtonClicked(inButtonClicked: HTMLElement): ThemeTurnOnInterface;
    getCurrentButtonClicked(): HTMLElement | null;
    btnThemeClickEventHandler(evt: Event): void;
    turnOnTheme(inButtonNodeClicked: HTMLElement): void;
    addThemeButtonsEventHandlers(inButtonsQuerySelectors: string[]): void;
}
//# sourceMappingURL=ThemeTurnOn.d.ts.map