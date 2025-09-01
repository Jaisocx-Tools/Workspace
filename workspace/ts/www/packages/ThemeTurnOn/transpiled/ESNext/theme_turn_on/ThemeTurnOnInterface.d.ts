export interface ThemeTurnOnInterface {
    setKeptCssClassnames(inCssClassnamesArray: string[]): ThemeTurnOnInterface;
    getKeptCssClassnames(): string[];
    setCurrentButtonClicked(inButtonClicked: HTMLElement): ThemeTurnOnInterface;
    getCurrentButtonClicked(): HTMLElement | null;
    btnThemeClickEventHandler(evt: Event): void;
    turnOnTheme(inButtonNodeClicked: HTMLElement): void;
    addThemeButtonsEventHandlers(inButtonsQuerySelectors: string[]): void;
}
//# sourceMappingURL=ThemeTurnOnInterface.d.ts.map