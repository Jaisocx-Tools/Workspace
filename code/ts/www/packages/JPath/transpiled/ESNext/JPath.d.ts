export declare class JPath {
    static JPATH_EXPRESSION_MAX_SIZE: number;
    protected _jpath: (string | number)[];
    protected _jpathExpression: string;
    protected _jpathExpressionMaxSize: number;
    constructor();
    static setByJPath(obj: any, jpath: (string | number)[], value: any): void;
    static setByJPathWalkFlatRebuild(obj: any, jpath: (string | number)[], value: any, nameHolderId: string, nameId: string, branchName: string): void;
    static getByJPathExpression(jpathExpression: string, value: any): any;
    static getByJPath(jpath: (string | number)[], value: any): any;
    static parse(jpathExpression: string): (string | number)[];
    setJPathExpression(jpathExpression: string): JPath;
    setJPathExpressionMaxSize(maxSize: number): JPath;
    setJPath(jpath: (string | number)[]): JPath;
    getJPath(): (string | number)[];
    static getJPathName(jpathExpression: string, delimiter: string): string;
}
//# sourceMappingURL=JPath.d.ts.map