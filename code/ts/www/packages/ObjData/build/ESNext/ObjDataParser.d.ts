import { ObjDataHelpingProps } from "./ObjDataTypes.js";
export declare class ObjDataParser {
    static parse(objDataByteBuf: Uint8Array): any;
    static parseProperty(objDataByteBuf: Uint8Array, offset: number, dataHelper: ObjDataHelpingProps, parentObject: any): any;
    static parsePropHeaders(byteBuf: Uint8Array, offset: number): ObjDataHelpingProps;
    static fetchData(url: any, method?: any, headers?: Record<string, string>): Promise<any>;
}
//# sourceMappingURL=ObjDataParser.d.ts.map