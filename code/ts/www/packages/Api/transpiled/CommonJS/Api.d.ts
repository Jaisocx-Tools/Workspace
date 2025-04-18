export declare class Api {
    protected _debug: boolean;
    protected _timestamps: any;
    constructor();
    setDebug(inDebug: boolean): Api;
    getNsTimestamp(): BigInt;
    fetchObjData(url: string, method: string, requestHeaders: any[]): Promise<any>;
    protected consoleLogTimestamps(): undefined;
}
//# sourceMappingURL=Api.d.ts.map