"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseParser = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_buffer_1 = require("node:buffer");
const CssImporterConstants_js_1 = require("./CssImporterConstants.js");
class BaseParser {
    constructor() {
        this.cssImporterConstants = new CssImporterConstants_js_1.CssImporterConstants();
        this.webpackAliases = {};
        this.textEncoder = new TextEncoder();
        this.textDecoder = new TextDecoder("utf-8");
        this.cssTokens = this.cssImporterConstants.getCssTokens();
    }
    setWebpackAliases(aliasesObject, packageRoot) {
        this.webpackAliases = aliasesObject;
        let webpackAliasVariableNamePackageRoot = this.cssImporterConstants.getWebpackAliasVariableNamePackageRoot();
        let alias = "";
        let aliasValue = "";
        for (alias in this.webpackAliases) {
            aliasValue = this.webpackAliases[alias];
            aliasValue = aliasValue.replace(webpackAliasVariableNamePackageRoot, packageRoot);
            this.webpackAliases[alias] = aliasValue;
        }
        return this;
    }
    getWebpackAliases() {
        return this.webpackAliases;
    }
    trimQuotes(str) {
        return str.replace(/^['"]|['"]$/g, "");
    }
    readFileContentsAsBitsBuf(filePath) {
        let fileContentsBitsBuf = node_fs_1.default.readFileSync(filePath);
        return fileContentsBitsBuf;
    }
    readFileContentsAsString(filePath, inCharsetName) {
        let locCharsetName = "ascii";
        if (inCharsetName !== undefined && inCharsetName.length !== 0) {
            locCharsetName = inCharsetName;
        }
        let fileContentsBuffer = this.readFileContentsAsBitsBuf(filePath);
        let decoder = new TextDecoder(locCharsetName);
        let fileContents = decoder.decode(fileContentsBuffer);
        // console.log( fileContentsBuffer ); 
        console.log(fileContents);
        return fileContents;
    }
    /**
     *
     * @param inBitsbuf
     * @param filePathTextRefs
     * @param webpackAliases the object, read from the file webpack.aliases.json
     * @returns
     */
    resolveUrlBitsbufWithWebpackAlias(inBitsbuf, filePathTextRefs, webpackAliases) {
        let filePathBitsbuf = inBitsbuf.subarray(filePathTextRefs[0], filePathTextRefs[1]);
        let filePathUntrimmed = this.textDecoder.decode(filePathBitsbuf);
        let filePathTrimmed = filePathUntrimmed.trim();
        let filePathAliased = this.trimQuotes(filePathTrimmed);
        let urlResolved = false;
        let alias = "";
        let filePathResolved = "";
        for (alias in webpackAliases) {
            if (filePathAliased.startsWith(alias)) {
                filePathResolved = filePathAliased.replace(alias, webpackAliases[alias]);
                filePathResolved = node_path_1.default.resolve(filePathResolved);
                urlResolved = true;
                break;
            }
        }
        if (urlResolved === false) {
            let aliasesJson = JSON.stringify(webpackAliases, null, 2);
            let errMsg = `The @import statement url in the css file:\n${filePathAliased}\nwas not prefixed with no of webpack aliases: \n${aliasesJson}`;
            throw new Error(errMsg);
        }
        if (node_fs_1.default.existsSync(filePathResolved) === false) {
            let errMsg = `The file path resolved with webpack alias does not exist:\n${filePathResolved}`;
            throw new Error(errMsg);
        }
        return filePathResolved;
    }
    contentPreviewByRange(inBitsbuf = new Uint8Array(), inBitsfufRefs) {
        let testRange = [];
        let refStart = 0;
        let refEnd = 0;
        let i = 0;
        for (i = 0; i < inBitsfufRefs.length; i++) {
            testRange = inBitsfufRefs[i];
            refStart = testRange[0];
            refEnd = testRange[1];
            let block = inBitsbuf.subarray(refStart, refEnd);
            let blockText = this.textDecoder.decode(block);
            // console.log( commentBlock );
            console.log(blockText);
        }
    }
    async readFileToBuffer(filePath) {
        let fileToImportStats = await node_fs_1.default.promises.stat(filePath);
        let fileToImportSize = fileToImportStats.size;
        let importedFileBuf = node_buffer_1.Buffer.alloc(fileToImportSize);
        let fileToImportFilehandle = await node_fs_1.default.promises.open(filePath, "r");
        try {
            await fileToImportFilehandle.read(importedFileBuf);
        }
        catch (err) { }
        try {
            await fileToImportFilehandle.close();
        }
        catch (err) { }
        return new Uint8Array(importedFileBuf.buffer, importedFileBuf.byteOffset, importedFileBuf.byteLength);
    }
    async appendToFile(fd, bitsbuf, range) {
        let isError = false;
        try {
            await fd.appendFile(bitsbuf.subarray(range[0], range[1]));
        }
        catch (err) {
            isError = true;
            console.log("Error: ", err);
        }
        if (isError === true) {
            try {
                await fd.close();
            }
            catch (err) { }
            throw new Error("Error writing file");
        }
    }
    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @param inBitsbuf
     * @param inBitsbufRefs
     * @param bitsBufRefs_Refined
     * @param bitsBufRefs_ofTheTokenType
     * @param inTokens
     * @param maximalIterationsNumber
     */
    validBitsbufRefsRefine(inBitsbuf, inBitsbufRefs, // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
    bitsBufRefs_Refined, bitsBufRefs_ofTheTokenType, inTokens, maximalIterationsNumber) {
        // POINTERS IN THE IN BUF, NORMALLY FILE CONTENTS.
        // refined inBitsbufRefs, same dataype as the inBitsbufRefs
        //  # let bitsBufRefs_Refined: number[][] = [];
        // POINTERS IN THE IN BUF, NORMALLY FILE CONTENTS.
        // the refs, where the block, marked by parser, resides.
        // the marked block is delimitered in the file content with the start tokens set and the end tokens set.
        // For example: 
        //        @import url( "https://url" );   \r\n
        //        @import url (https://url);\n
        // never sure, whether a background space somewhere or several, and whether surrounded with quotes symbols.
        // that is why we can relay on tokens sets, like this: 
        //      the css import statement start denoted by tokens set: [ "@import", " url", "(" ]
        //              fnish of this line is denoted by tokens set: [ ")", ";" ]
        // since some formats are not too strict, and I in this method wanted to provide the way 
        //    to relay on the very standard keywords and symbols in the formats.
        // The handling background spaces may be performed in the extending class.
        // this class gathers refs, to avoid strings copies by value when parsing, and when concatenating.
        // the css pack task here has to do several hundreds of copies and concatenations of css files each KBs long.
        // we save up several Mio. chars of css files hardcopying tasks.
        // this is for sure the workaround just with browsers' JavaScript,
        // since the String object for better work with texts was designed to copy by value.
        // to avoid, when assigning the text to another variable,
        // mistakely changed symbols in the origin var with text.
        // no bad for sure. I like this feature too.
        //  # let bitsBufRefs_ofTheTokenType: number[][] = [];
        let startTokensSet = inTokens["setBegin"];
        let finishTokensSet = inTokens["setEnd"];
        let blockStartTokensSet = [...startTokensSet].map((token) => this.textEncoder.encode(token));
        let blockFinishTokensSet = [...finishTokensSet].map((token) => this.textEncoder.encode(token));
        let inBitsbufId = 0;
        let inBitsbufNumber = inBitsbufRefs.length;
        let counter = 0;
        let counterStop = (maximalIterationsNumber === 0) ? 10 : maximalIterationsNumber;
        let EOF_pos = 0;
        let refinedBlockRef = [0, 0];
        let blockRefClean = [0, 0];
        let tokenMatchedRange = [0, 0];
        let rangeOuter = [0, 0];
        let rangeInner = [0, 0];
        let startPos = 0;
        let endPos = 1;
        // collect blocks refs without blocks delimitered by tokens
        /**
         * @var positionOfACharInTheInBitsBuf: number
         * @description the position of a char in the inBitsbuf. the inBitsbuf is normally the file contents bits buffer, octets aligned, to be parsed.
         */
        let positionOfACharInTheInBitsBuf = 0;
        let lookupStart = 0;
        /**
         * @label for iteratingInRangesOfRefs
         */
        iteratingInRangesOfRefs: for (inBitsbufId = 0; inBitsbufId < inBitsbufNumber; inBitsbufId++) {
            let inBitsBufRange = inBitsbufRefs[inBitsbufId]; // datatype explained: [startRef: number, endRef: number]
            if (inBitsBufRange[startPos] === inBitsBufRange[endPos]) {
                // the range is empty, no need to parse.
                continue iteratingInRangesOfRefs;
            }
            positionOfACharInTheInBitsBuf = inBitsBufRange[startPos];
            EOF_pos = inBitsBufRange[endPos];
            // securing counter enabling exit to prevent eternal loop. In this method the eternal loop is not the feature's algorythm.
            counter = 0;
            for (counter = 0; counter < counterStop; counter++) {
                tokenMatchedRange = [...blockRefClean];
                lookupStart = positionOfACharInTheInBitsBuf;
                let lastCharOf_StartTokensSet_PositionInTheInBitsbuf = this.getRangeOfTokensSetMatch(inBitsbuf, inBitsBufRange, // datatype explained: [startRef: number, endRef: number];
                blockStartTokensSet, tokenMatchedRange, lookupStart, EOF_pos);
                // start block tokens set did not match,
                // trying to match the next range
                if (lastCharOf_StartTokensSet_PositionInTheInBitsbuf === false) {
                    // no tokenized block was matched, the refined ranges array obtains exact the same range.
                    if (counter === 0) {
                        bitsBufRefs_Refined.push([...inBitsBufRange]);
                    }
                    else {
                        refinedBlockRef[endPos] = (inBitsBufRange[endPos] + 1);
                        bitsBufRefs_Refined.push([...refinedBlockRef]);
                    }
                    continue iteratingInRangesOfRefs;
                }
                rangeOuter = [...blockRefClean];
                rangeInner = [...blockRefClean];
                refinedBlockRef = [...blockRefClean];
                rangeOuter[startPos] = tokenMatchedRange[startPos];
                rangeInner[startPos] = (tokenMatchedRange[endPos] + 1);
                refinedBlockRef[startPos] = positionOfACharInTheInBitsBuf;
                if (rangeOuter[startPos] !== 0) {
                    refinedBlockRef[endPos] = (rangeOuter[startPos] - 1);
                    bitsBufRefs_Refined.push([...refinedBlockRef]);
                }
                // this.contentPreviewByRange( inBitsbuf, bitsBufRefs_Refined );
                // HERE STARTING COMPARING BLOCK_FINISH TOKENS SEQUENCE.
                tokenMatchedRange = [...blockRefClean];
                lookupStart = (rangeInner[startPos] + 1);
                let lastCharOf_EndTokensSet_PositionInTheInBitsbuf = this.getRangeOfTokensSetMatch(inBitsbuf, inBitsBufRange, // datatype explained: [startRef: number, endRef: number];
                blockFinishTokensSet, tokenMatchedRange, lookupStart, EOF_pos);
                if (lastCharOf_EndTokensSet_PositionInTheInBitsbuf === false) {
                    throw new Error("The file format is broken:\nThe start_block tokens set was deteced, however no end_block tokens set was detected.");
                }
                rangeInner[endPos] = tokenMatchedRange[startPos];
                rangeOuter[endPos] = tokenMatchedRange[endPos] + 1;
                // this.contentPreviewByRange( inBitsbuf, [rangeOuter] );
                // this.contentPreviewByRange( inBitsbuf, [rangeInner] );
                bitsBufRefs_ofTheTokenType.push([...rangeInner]);
                positionOfACharInTheInBitsBuf = rangeOuter[endPos];
                // refs of the block:
                refinedBlockRef = [...blockRefClean];
                // just used the reassigned variable,
                // since the name of this variable is explainatory.
                refinedBlockRef[startPos] = positionOfACharInTheInBitsBuf;
            }
        }
    }
    /**
     * @info based on method call .firstIndexOf()
     * @param inBitsbuf
     * @param inBitsBufRange the start and end refs in the inBitsbuf, normally the file contents bits buffer.
     * @param tokenSetAsBitsbufs
     * @param inOutBitsbufRefs
     * @param lookupStartPos
     * @returns
     */
    getRangeOfTokensSetMatch(inBitsbuf, inBitsBufRange, // datatype explained: [startRef: number, endRef: number];
    tokenSetAsBitsbufs, inOutRange, lookupStartPos, lookupEndPos) {
        let startPos = 0;
        let endPos = 1;
        let positionOfACharInTheInBitsBuf = lookupStartPos; // the first iteration is: inBitsBufRange[startPos]; however here is any step, not always just the first.
        let EOF = false;
        let tokenMatched_LastChar_Pos = 0; // the position in the inBitsbuf, where the last char of the current token compared matched.
        // searching til the block starts
        let tokensSetPos = 0;
        let token = tokenSetAsBitsbufs[tokensSetPos]; // to the token var assigned the first token in the tokens set
        let tokenMatched_FirstChar_Pos = 0; // the position in the inBitsBuffer, where the matched token has the first char matched.
        let tokenFirstMatched = false;
        for (tokensSetPos = 0; tokensSetPos < tokenSetAsBitsbufs.length; tokensSetPos++) {
            // the next token of the tokens charsets denoting start of some block in the text when parsing.
            token = tokenSetAsBitsbufs[tokensSetPos];
            // trying to match the next token.
            // once the next token did not match, 
            // means the entire tokens set did not match,
            // means no match.
            // then starting to match the very first token again,
            // until number of tries variable counterStop: number.
            // when still no match til the end of a bitsbuf of a Range,
            // means no block encountered, this we wanted to find and to exclude from the valid blocks in the inBitsbuf.
            // means the entire block parsed, is valid.
            tokenMatched_FirstChar_Pos = this.firstIndexOf(inBitsbuf, token, positionOfACharInTheInBitsBuf, // inBitsBufRange[startPos], later iterations the next match.
            lookupEndPos);
            // if the comment block did not start, exit from searching in current range
            // if === false, EXIT TO HANDLE THE NEXT RANGE
            if (tokenMatched_FirstChar_Pos === false) {
                // RESETTING THE MARKER, value false here means did NOT match.
                // after this loop, with this marker we may know, NO match in the entire loop.
                tokenFirstMatched = false;
                EOF = true;
                // no match, setting values to -1, means no match.
                inOutRange[startPos] = (-1);
                inOutRange[endPos] = (-1);
                // exiting to return false.
                break;
            }
            // todo: check tokens have just one token. then matched, and skip for good))
            // first token in set matched, initializing markers.
            // before, the marker was set false
            // if === false, SET MARKERS AND CONTINUING NEXT TOKEN COMPARE SAME TOKENS SEQUENCE.
            if (tokenFirstMatched === false) {
                tokenFirstMatched = true;
                inOutRange[startPos] = tokenMatched_FirstChar_Pos.valueOf();
            }
            // here we handle the logics, where the start token was matched.
            // just increasing the offset to lookup the next start token in the next iteration
            // on he next position of a character in the inBitsbuf
            // first comment token matched on the start of the file, pos = 0.
            // the length of the token is 2 bytes ({0: "/", 1: "*"})
            // the last position of the token matched = 1.
            // then, last pos = tokenMatched_FirstChar_Pos + token.length - 1;
            tokenMatched_LastChar_Pos = (tokenMatched_FirstChar_Pos.valueOf() + token.length - 1);
            if (inOutRange[startPos] === 0 && token.length === 1) {
                inOutRange[endPos] = 0;
            }
            else {
                inOutRange[endPos] = tokenMatched_LastChar_Pos;
            }
            // the start value to lookup from is the next after the token's last char pos in the inBitsbuf.
            positionOfACharInTheInBitsBuf = (tokenMatched_LastChar_Pos + 1);
        }
        if (tokenFirstMatched === false) {
            return false;
        }
        // the lposition in the inBitsbuf, where the last char of the tokens set matched.
        let inBitsbufTokensLastCharPos = tokenMatched_LastChar_Pos;
        return inBitsbufTokensLastCharPos;
    }
    firstIndexOf(inBitsBuf, inTokenBitsBuf, inStartPos, inEndPos) {
        // let tokenBitsBuf: Uint8Array = this.textEncoder.encode( inToken );
        let tokenLen = inTokenBitsBuf.byteLength;
        let iterationsNumber = (inEndPos - inStartPos);
        if (iterationsNumber < 1) {
            throw new Error("The end char position to lookup is not over the start position.");
        }
        if (iterationsNumber < tokenLen) {
            return false;
        }
        let matched = false;
        let ix = 0;
        let b = 0;
        let tokenFirstChar = inTokenBitsBuf[0];
        let tokenChar = 0;
        let matchNotStarted = true;
        let theFirstMatchIx = 0;
        // @var offset: the offset of an tokenChar: octet in the token inBitsBuf: Uint8Array.
        let offset = 0;
        for (ix = inStartPos; ix < inEndPos; ix++) {
            // the char of the inBitsBuf: Uint8Array, to compare with the char in a token.
            b = inBitsBuf[ix];
            // did NOT match this next char in the inBitsBuf Uint8Array and the first char of a token.
            // we skip at once to the next char in the inBitsBuf to compare here again.
            if ((matchNotStarted === true) && (b !== tokenFirstChar)) {
                continue;
            }
            // here first chars of the token matched.
            // register to start all tokens symbols compare.
            // and skip to next step, since this symbol already compared.
            if (matchNotStarted === true) {
                offset = 1;
                matchNotStarted = false;
                // on the octet position = ix in the inBitsBuf, a char did match the first time the first char in the token.
                // this will be the start position of the matching token in the inBitsBuf.
                // and this value will be the result of this method,
                // if every char in the token will match the next chars, too, in the inBitsBuf after this octet position = ix;
                theFirstMatchIx = ix;
                if (tokenLen === 1) {
                    // the marker to tell matched true.
                    matched = true;
                    // exiting the loop, no need to compare in the next iteration, since this method .firstIndexOf() all done.
                    break;
                }
                else {
                    // here continue to next chars to compare, since the first char already did match.
                    // and we did set the markers, these mean to compare not just the first char of the token, but every next one by one.
                    continue;
                }
            }
            // the next char in the token is compared with the next char in the 
            tokenChar = inTokenBitsBuf[offset];
            if (b === tokenChar) {
                // @var offset: the offset of an tokenChar: octet in the token inBitsBuf: Uint8Array.
                // here the next chars both did match,
                // and we raise the next position of a char in the token to compare with the char in the inBitsBuf.
                offset++;
                // did reach the end of the being compared token,
                // set the marker means DID match true,
                // and exit the loop,
                // after the loop the marker will tell to return the first char position in the inBitsBuf, where after, too, the token did match entirely.
                if (offset === tokenLen) {
                    // the marker to tell matched true.
                    matched = true;
                    // exiting the loop, no need to compare in the next iteration, since this method .firstIndexOf() all done.
                    break;
                }
            }
            else {
                // not all chars in the token matched.
                // the marker resets,
                // and in the next iterations,
                // just the first char of the token will be compared
                // with the every next char in the inBitsBuf.
                matchNotStarted = true;
                // just resetting the position of the first char in the token.
                offset = 0;
            }
        }
        // the only exit outside of the loop before was on did match true.
        // otherwise, all chars were compared til EOF, and the marker matched not set,
        // means NO match.
        if (!matched) {
            return false;
        }
        // DID match true, the position of the first char in the token, matched in the inBitsBuf.
        return theFirstMatchIx;
    }
}
exports.BaseParser = BaseParser;
//# sourceMappingURL=BaseParser.js.map