//@ts-ignore
import * as fs from "node:fs";
//@ts-ignore
import * as path from "node:path";
export class ResponsiveSizesNames {
    responsiveDatasetConstants;
    responsiveDatasetBase;
    constructor(base, constants) {
        this.responsiveDatasetConstants = constants;
        this.responsiveDatasetBase = base;
    }
    setResponsiveDatasetBase(base) {
        this.responsiveDatasetBase = base;
        return this;
    }
    // RENAMED produceMediaConstantsCssFile( fileName: string ): Promise<number>;
    // SiteToolAutomation/MediaAndStyles/responsive/MediaConstants.css
    // .workspace {
    //     --style_e02_mobile_xs_portrait__width__min_width: 240px;
    //     --style_e02_mobile_xs_portrait__width__max_width: 320px;
    //
    //     --style_e02_mobile_xs_landscape__width__min_width: 320px;
    //     --style_e02_mobile_xs_landscape__width__max_width: 500px;
    //
    //   ...
    async produceCssFileWithResponsiveSizesConstants(fileBaseName, newLinesAmount, padding) {
        let retVal = 1;
        let fw = this.responsiveDatasetBase.fileWriter;
        let te = this.responsiveDatasetBase.fileWriter.textEncoder;
        let fileFolderPath = path.resolve(this.responsiveDatasetBase.templateProjectPath, "MediaAndStyles");
        let fileName = [fileBaseName, ".css"].join("");
        let filePath = path.resolve(fileFolderPath, fileName);
        // @ts-ignore
        let propNames = Object.keys(this.responsiveDatasetBase.datasetBitsbufs);
        let data = new Object();
        let responsiveDatasetPropName = "";
        let mediaConstantLinesSet = new Array(4);
        let mediaConstantLinesSet_Clone = new Array();
        let mediaConstantLinesSet_bitsbuf = new Uint8Array();
        let labelLineArray = new Array();
        let labelLine = new Uint8Array();
        let newLine = this.responsiveDatasetConstants.getNewLineBitsbuf();
        let linesAmount = newLinesAmount;
        let linesAmountLast = 1;
        let linesDelimiter = new Uint8Array(linesAmount);
        let linesDelimiterLast = new Uint8Array(linesAmountLast);
        linesDelimiter.fill(newLine[0], 0, linesAmount);
        linesDelimiterLast.fill(newLine[0], 0, linesAmountLast);
        let backgroundSpace = this.responsiveDatasetConstants.getBitsbufSymbolBackgroundSpace();
        let paddingBitsbuf = new Uint8Array(padding);
        paddingBitsbuf.fill(backgroundSpace[0], 0, padding);
        if (!fs.existsSync(fileFolderPath)) {
            //@ts-ignore
            let mkdirRetVal = fs.mkdirSync(fileFolderPath, { recursive: true });
        }
        retVal = await fw.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(filePath);
        let cssClassStartLine = te.encode(".workspace {\n\n");
        retVal = await fw.appendBitsbufToFile(cssClassStartLine);
        let propsNumber = propNames.length;
        let lastIterationId = propsNumber - 1;
        let iterationId = 0;
        for (iterationId = 0; iterationId < propsNumber; iterationId++) {
            responsiveDatasetPropName = propNames[iterationId];
            data = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];
            labelLineArray = this.responsiveDatasetConstants.getLabelLineArray(paddingBitsbuf, data["art"], data["art_size"]);
            labelLine = fw.concatUint8Arrays(labelLineArray);
            retVal = await fw.appendBitsbufToFile(labelLine);
            mediaConstantLinesSet = this.produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName, paddingBitsbuf);
            mediaConstantLinesSet_Clone = [...mediaConstantLinesSet];
            if (iterationId === lastIterationId) {
                linesDelimiter = linesDelimiterLast;
            }
            mediaConstantLinesSet_Clone.push(linesDelimiter);
            mediaConstantLinesSet_bitsbuf = fw.concatUint8Arrays(mediaConstantLinesSet_Clone);
            retVal = await fw.appendBitsbufToFile(mediaConstantLinesSet_bitsbuf);
        }
        let cssClassEndLine = te.encode("}\n\n");
        retVal = await fw.appendBitsbufToFile(cssClassEndLine);
        retVal = await fw.filehandleClose();
        return retVal;
    }
    // The subcall for the method produceMediaConstantsCssFile()
    // for the .css file
    // SiteToolAutomation/src/ResponsiveSizeNamesNew.ts
    // --s_56_16k_tv_vertical__min_width: 8641px; /* 16k TV */
    // --s_56_16k_tv_vertical__max_width: 9999px; /* 16k TV */
    //
    // --s_56_16k_tv_horizontal__min_width: 15361px; /* 16k TV */
    // --s_56_16k_tv_horizontal__max_width: 25360px; /* 16k TV */
    produceResponsiveSizesConstantsLinesSet(responsiveDatasetPropName, paddingBitsbuf) {
        let zeroLenBitsbuf = new Uint8Array(0);
        let responsiveSizesConstantLinesArray = new Array();
        let responsiveSizesConstantLine = new Array();
        let responsiveSizesConstantLine_bitsbuf = new Uint8Array();
        //@ts-ignore
        let data = this.responsiveDatasetBase
            .datasetBitsbufs[responsiveDatasetPropName];
        let dimensions = new Object();
        //@ts-ignore
        // let responsiveSizeName: Uint8Array = data["responsiveSizeName"];
        let maxOrMinArray = this.responsiveDatasetConstants.getMaxOrMinArray();
        let maxOrMin = new Uint8Array();
        let long_responsiveSizeNameOriented_BitsbufsArray = this.responsiveDatasetConstants
            .getResponsiveSizeNameOrientedBitsbufsArray(data["range_orderby_id"], data["art"], data["art_size"], zeroLenBitsbuf, this.responsiveDatasetBase.bitsbufSitesToolName, this.responsiveDatasetBase.bitsbufSitesTool_ThemeName);
        let responsiveSizeNameOriented_BitsbufsArray = new Array();
        let responsiveSizeNameOriented = new Uint8Array();
        let orientationValues = this.responsiveDatasetConstants.getOrientationKeywordsBitsbufs();
        let orientationValuesAsStrings = this.responsiveDatasetConstants.getOrientationKeywords();
        let orientationBitsbuf = new Uint8Array();
        let orientation = "";
        let mediaLinePos = 0;
        let maxOrMinId = 0;
        let newLine = this.responsiveDatasetConstants.getNewLineBitsbuf();
        let linesAmount = 2;
        let linesDelimiter = new Uint8Array(linesAmount);
        linesDelimiter.fill(newLine[0], 0, linesAmount);
        let sizesAsBitsbufs_true = true;
        let size = new Uint8Array();
        let orientationId = 0;
        for (orientationId = 0; orientationId < 2; orientationId++) {
            orientation = orientationValuesAsStrings[orientationId];
            orientationBitsbuf = orientationValues[orientationId];
            dimensions = this.responsiveDatasetBase.getSizesByOrientation(responsiveDatasetPropName, orientation, sizesAsBitsbufs_true);
            this.responsiveDatasetConstants
                .responsiveSizeName_setOrientation(orientationBitsbuf);
            responsiveSizeNameOriented_BitsbufsArray = this.responsiveDatasetConstants
                .getResponsiveSizeNameOriented(long_responsiveSizeNameOriented_BitsbufsArray);
            responsiveSizeNameOriented = this.responsiveDatasetBase
                .fileWriter.concatUint8Arrays(responsiveSizeNameOriented_BitsbufsArray);
            for (maxOrMinId = 0; maxOrMinId < 2; maxOrMinId++) {
                if (maxOrMinId === 0) {
                    size = dimensions["from"];
                }
                else {
                    size = dimensions["to"];
                }
                maxOrMin = maxOrMinArray[maxOrMinId];
                // "    --d_e04_mobile_s_portrait_max_width: 320px;"
                responsiveSizesConstantLine = this.responsiveDatasetConstants
                    .getResponsiveSizeConstantLine_size_BitsbufsArray(paddingBitsbuf, responsiveSizeNameOriented, maxOrMin, size);
                let lastElemPos = (responsiveSizesConstantLine.length - 1);
                // the several new lines are set after first two lines,
                // in the middle of group of 4 lines
                if ((orientationId === 0) && (maxOrMinId === 1)) {
                    responsiveSizesConstantLine[lastElemPos] = linesDelimiter;
                }
                else {
                    responsiveSizesConstantLine[lastElemPos] = newLine;
                }
                responsiveSizesConstantLine_bitsbuf = this.responsiveDatasetBase.fileWriter
                    .concatUint8Arrays(responsiveSizesConstantLine);
                responsiveSizesConstantLinesArray.push(responsiveSizesConstantLine_bitsbuf);
                mediaLinePos++;
            }
        }
        return responsiveSizesConstantLinesArray;
    }
}
//# sourceMappingURL=ResponsiveSizesNames.js.map