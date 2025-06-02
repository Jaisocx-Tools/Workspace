export declare class JPathData {
    protected _jpath: (string | number)[];
    protected _jpathExpression: string;
    protected _isPlaceholderValue: number;
    constructor();
    isPlaceholderValue(): number;
    setIsPlaceholderValue(isPlaceholder: number): JPathData;
    getJPath(): (string | number)[];
    setJPath(jpath: (string | number)[]): JPathData;
    getJPathExpression(): string;
    setJPathExpression(jpathExpression: string): JPathData;
}
//# sourceMappingURL=JPathData.d.ts.map