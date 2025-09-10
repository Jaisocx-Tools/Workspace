"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MimeType = void 0;
class MimeType {
    constructor() {
        this._mimeTypeConstantsInstance = null;
        this._dataset = new Object();
    }
    setMimeTypesConstants(inConstantsInstance) {
        this._mimeTypeConstantsInstance = inConstantsInstance;
        this._dataset = this._mimeTypeConstantsInstance.getMimeTypesObject();
        return this;
    }
    getFilenameExtension(filename, maxDots) {
        let filenameSplittedByDots = filename.split(".");
        let filenameSplittedArrayLen = filenameSplittedByDots.length;
        let filenameSplittedArrayOffset = (filenameSplittedArrayLen - maxDots);
        if (filenameSplittedArrayOffset < 0) {
            filenameSplittedArrayOffset = 0;
        }
        let filenameExtensionArray = filenameSplittedByDots.slice(filenameSplittedArrayOffset);
        let filenameExtension = filenameExtensionArray.join(".");
        return filenameExtension;
    }
    getMimeTypeByFilenameExtension(filenameExtension) {
        let mimeType = "";
        mimeType = this._dataset[filenameExtension];
        if (mimeType === undefined) {
            mimeType = "";
        }
        return mimeType;
    }
    getMimeTypeByFilename(filename, maxDots) {
        let filenameExtension = "";
        let mimeType = "";
        let i = 0;
        let secureCounter = 0;
        let secureMaxCounter = 5;
        i = maxDots;
        markerA: while (i > 0) {
            secureCounter++;
            if (secureCounter > secureMaxCounter) {
                i = (maxDots + 2);
                break markerA;
            }
            filenameExtension = this.getFilenameExtension(filename, i);
            mimeType = this.getMimeTypeByFilenameExtension(filenameExtension);
            if ((mimeType !== undefined) && (mimeType.length !== 0)) {
                break markerA;
            }
            i--;
        }
        return mimeType;
    }
}
exports.MimeType = MimeType;
//# sourceMappingURL=MimeType.js.map