export declare class JPath {
    static JPATH_EXPRESSION_MAX_SIZE: number;
    protected _jpath: (string | number)[];
    protected _jpathExpression: string;
    protected _jpathExpressionMaxSize: number;
    constructor();
    static getByJPath(jpath: (string | number)[], value: any): any;
    static parse(jpathExpression: string): (string | number)[];
    setJPathExpression(jpathExpression: string): JPath;
    setJPathExpressionMaxSize(maxSize: number): JPath;
    getJPath(): (string | number)[];
    static getByJPathExpression(jpathExpression: string, value: any): any;
}
//# sourceMappingURL=JPath.d.ts.map