import { MimeTypeConstantsInterface } from "./mime_type_constants/MimeTypeConstantsInterface.js";
export interface MimeTypeInterface {
    setMimeTypesConstants(inConstantsInstance: MimeTypeConstantsInterface): MimeTypeInterface;
    getFilenameExtension(filename: string, maxDots: number): string;
    getMimeTypeByFilenameExtension(filenameExtension: string): string | undefined;
    getMimeTypeByFilename(filename: string, maxDots: number): string | undefined;
}
//# sourceMappingURL=MimeTypeInterface.d.ts.map