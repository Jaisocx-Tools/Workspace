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
    // RENAMED produceMediaConstantsCssFile( targetFileName: string ): Promise<number>;
    // SiteToolAutomation/MediaAndStyles/responsive/MediaConstants.css
    // .workspace {
    //     --style_e02_mobile_xs_portrait__width__min_width: 240px;
    //     --style_e02_mobile_xs_portrait__width__max_width: 320px;
    //
    //     --style_e02_mobile_xs_landscape__width__min_width: 320px;
    //     --style_e02_mobile_xs_landscape__width__max_width: 500px;
    //
    //   ...
    async produceCssFileWithResponsiveSizesConstants(targetFileBaseName, newLinesAmount, padding) {
        let retVal = 1;
        let fw = this.responsiveDatasetBase.fileWriter;
        let te = this.responsiveDatasetBase.fileWriter.textEncoder;
        let targetFileName = [targetFileBaseName, ".css"].join("");
        // @ts-ignore
        let propNames = Object.keys(this.responsiveDatasetBase.datasetBitsbufs);
        let data = new Object();
        let responsiveDatasetPropName = "";
        let mediaConstantLinesSet = new Array(4);
        let mediaConstantLinesSet_Clone = new Array();
        let mediaConstantLinesSet_bitsbuf = new Uint8Array();
        let labelLineArray = new Array();
        let labelLineArray2 = new Array();
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
        retVal = await fw.toAddToFileInLoop_CleanupFileAndGetNewFileHandle(path.resolve(this.responsiveDatasetBase.mediaAndStylesResponsiveFolderPath, targetFileName));
        let cssClassStartLine = te.encode(".workspace {\n\n");
        retVal = await fw.appendBitsbufToFile(cssClassStartLine);
        let propsNumber = propNames.length;
        let lastIterationId = propsNumber - 1;
        let iterationId = 0;
        for (iterationId = 0; iterationId < propsNumber; iterationId++) {
            responsiveDatasetPropName = propNames[iterationId];
            data = this.responsiveDatasetBase.datasetBitsbufs[responsiveDatasetPropName];
            labelLineArray = this.responsiveDatasetConstants.getLabelLineArrayByBitsbufs(data["art"], data["art_size"]);
            labelLineArray2 = [paddingBitsbuf, ...labelLineArray];
            labelLine = fw.concatUint8Arrays(labelLineArray2);
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
        let responsiveSizesConstantLinesArray = new Array();
        let responsiveSizesConstantLine = new Array();
        let responsiveSizesConstantLine_Clone = new Array();
        let responsiveSizesConstantLine_bitsbuf = new Uint8Array();
        //@ts-ignore
        let data = this.responsiveDatasetBase
            .datasetBitsbufs[responsiveDatasetPropName];
        let dimensions = new Object();
        //@ts-ignore
        let responsiveSizeName = data["responsiveSizeName"];
        let maxOrMinArray = this.responsiveDatasetConstants.getMaxOrMinArray();
        let maxOrMin = new Uint8Array();
        let responsiveSizeNameOrientedArray = new Array();
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
            responsiveSizeNameOrientedArray = this.responsiveDatasetConstants
                .getResponsiveSizeNameOrientedArrayByBitsbufs(responsiveSizeName, orientationBitsbuf);
            responsiveSizeNameOriented = this.responsiveDatasetBase
                .fileWriter.concatUint8Arrays(responsiveSizeNameOrientedArray);
            for (maxOrMinId = 0; maxOrMinId < 2; maxOrMinId++) {
                if (maxOrMinId === 0) {
                    size = dimensions["from"];
                }
                else {
                    size = dimensions["to"];
                }
                maxOrMin = maxOrMinArray[maxOrMinId];
                responsiveSizesConstantLine = this.responsiveDatasetConstants
                    .getResponsiveSizeConstantLine_size_ByBitsbufs(responsiveSizeNameOriented, maxOrMin, size);
                responsiveSizesConstantLine_Clone = [paddingBitsbuf, ...responsiveSizesConstantLine];
                // the several new lines are set after first two lines,
                // in the middle of group of 4 lines
                if ((orientationId === 0) && (maxOrMinId === 1)) {
                    responsiveSizesConstantLine_Clone.push(linesDelimiter);
                }
                else {
                    responsiveSizesConstantLine_Clone.push(newLine);
                }
                responsiveSizesConstantLine_bitsbuf = this.responsiveDatasetBase.fileWriter
                    .concatUint8Arrays(responsiveSizesConstantLine_Clone);
                responsiveSizesConstantLinesArray.push(responsiveSizesConstantLine_bitsbuf);
                mediaLinePos++;
            }
        }
        return responsiveSizesConstantLinesArray;
    }
}
//# sourceMappingURL=ResponsiveSizesNames.js.map