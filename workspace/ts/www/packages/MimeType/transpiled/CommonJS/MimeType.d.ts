import { MimeTypeConstantsInterface } from "./mime_type_constants/MimeTypeConstantsInterface.js";
import { MimeTypeInterface } from "./MimeTypeInterface.js";
export declare class MimeType implements MimeTypeInterface {
    protected _mimeTypeConstantsInstance: MimeTypeConstantsInterface | null;
    protected _dataset: any;
    constructor();
    setMimeTypesConstants(inConstantsInstance: MimeTypeConstantsInterface): MimeTypeInterface;
    getFilenameExtension(filename: string, maxDots: number): string;
    getMimeTypeByFilenameExtension(filenameExtension: string): string;
    getMimeTypeByFilename(filename: string, maxDots: number): string;
}
//# sourceMappingURL=MimeType.d.ts.map