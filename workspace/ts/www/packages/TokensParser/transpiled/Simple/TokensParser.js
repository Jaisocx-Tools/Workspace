class TokensParser {
    textEncoder;



    constructor() {
        this.textEncoder = new TextEncoder();
    }



    trimQuotes(str) {
        return str.replace(/^['"]|['"]$/g, "");
    }



    contentPreviewByRange(inBitsbuf, inBitsfufRefs) {
        let textDecoder = new TextDecoder("utf-8");
        let testRange = [];
        let refStart = 0;
        let refEnd = 0;
        let i = 0;

        for (i = 0; i < inBitsfufRefs.length; i++) {
            testRange = inBitsfufRefs[i];
            refStart = testRange[0];
            refEnd = testRange[1];
            let block = inBitsbuf.subarray(refStart, refEnd);
            let blockText = textDecoder.decode(block);


            // console.log( commentBlock );
            console.log(blockText);
        }
    }


    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @returns number of tokensSets matched.
     * @param inBitsbuf : Uint8Array
     * @param inBitsbufRanges: number[][] the ranges of the inBitsbuf, where to lookup for start and end tokens sets.
     * @param inSeveralTokensSets: string[][], // where every tokensSet is array of datatype string[]
     * @param inOutRanges_WithoutTokenizedAreas : number[][]
     * @param inOutRanges_TokensSetsMatched : number[][][]
     * @param maxIterationsNumber : number
     */



    parseAroundSeveralTokensSets(
        inBitsbuf,
        inBitsbufRanges,


        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        inSeveralTokensSets,


        // where one tokensSet is array of datatype string[]
        inOutRanges_WithoutTokenizedAreas,
        inOutRanges_TokensSetsMatched,
        maxIterationsNumber
    ) {
        let numberOfTokensSetsMatched = 0;
        let start = 0;
        let end = 1;
        let inBitsBufRange = new Array(2);
        let tokenMatchedRange = [0, 0];
        inBitsBufRange[0] = 0;
        inBitsBufRange[1] = end;
        let tokensSetId = 0;
        let tokenId = 0;
        let tokensSet = new Array();
        let severalTokensSets_AsUint8Array = new Array(inSeveralTokensSets.length);
        let tokensSet_AsUint8Array = new Array();
        let token_AsUint8Array = new Uint8Array();

        for (tokensSetId = 0; tokensSetId < inSeveralTokensSets.length; tokensSetId++) {
            tokensSet = inSeveralTokensSets[tokensSetId];
            tokensSet_AsUint8Array = new Array(tokensSet.length);
            tokenId = 0;

            for (let token of tokensSet) {
                token_AsUint8Array = this.textEncoder.encode(token);
                tokensSet_AsUint8Array[tokenId] = token_AsUint8Array;
                tokenId++;
            }
            severalTokensSets_AsUint8Array[tokensSetId] = tokensSet_AsUint8Array;
        }

        tokens: for (tokensSetId = 0; tokensSetId < severalTokensSets_AsUint8Array.length; tokensSetId++) {

            if (!inOutRanges_TokensSetsMatched[tokensSetId]) {
                inOutRanges_TokensSetsMatched[tokensSetId] = new Array();
            }
            tokensSet_AsUint8Array = severalTokensSets_AsUint8Array[tokensSetId];

            lookupRanges: for (let lookupRange of inBitsbufRanges) {
                let i = 0;
                start = lookupRange[0];

                for (i = 0; i < maxIterationsNumber; i++) {
                    tokenMatchedRange = [0, 0];
                    let pos = this.getRangeOfTokensSetMatch(
                        inBitsbuf,
                        tokensSet_AsUint8Array,
                        tokenMatchedRange,
                        start,
                        lookupRange[1]
                    );

                    if (pos === false) {
                        continue lookupRanges;
                    }
                    inOutRanges_TokensSetsMatched[tokensSetId].push(tokenMatchedRange);
                    start = pos;
                }
            }
        }
        let flatMatchedRanges = new Array();

        tokens: for (tokensSetId = 0; tokensSetId < severalTokensSets_AsUint8Array.length; tokensSetId++) {
            let tokensMatchedRanges = inOutRanges_TokensSetsMatched[tokensSetId];

            for (let tokenMatchedRangeId = 0; tokenMatchedRangeId < tokensMatchedRanges.length; tokenMatchedRangeId++) {
                flatMatchedRanges.push(tokensMatchedRanges[tokenMatchedRangeId]);
            }
        }
        let orderedMatchedRanges = flatMatchedRanges
            .sort((rangeA, rangeB) => {
                let startA = rangeA[0];
                let startB = rangeB[0];

                if (startA === startB) {
                    return (0);
                }
                else if (startA > startB) {
                    return (1);
                }
                else if (startA < startB) {
                    return (-1);
                }


                return 0;
            });
        let range_WithoutTokenizedAreas = new Array(2);
        range_WithoutTokenizedAreas[0] = 0;

        lookupRanges: for (let lookupRange of inBitsbufRanges) {

            for (let range of orderedMatchedRanges) {
                range_WithoutTokenizedAreas[1] = range[0];
                inOutRanges_WithoutTokenizedAreas.push(range_WithoutTokenizedAreas);
                range_WithoutTokenizedAreas = new Array(2);
                range_WithoutTokenizedAreas[0] = range[1];
            }
            range_WithoutTokenizedAreas[1] = lookupRange[1];
            inOutRanges_WithoutTokenizedAreas.push(range_WithoutTokenizedAreas);
        }
        numberOfTokensSetsMatched = orderedMatchedRanges.length;


        return numberOfTokensSetsMatched;
    }


    /**
     * @info based on method call .getRangeOfTokensSetMatch()
     * @returns number of tokenized areas matched.
     * @param inBitsbuf : Uint8Array
     * @param inBitsbufRanges: number[][] the ranges of the inBitsbuf, where to lookup for start and end tokens sets.
     * @param inTokens : { "setBegin": string[], "setEnd": string[] }
     * @param inOutRanges_WithoutTokenizedAreas : number[][]
     * @param inOutRanges_EnbracedByTokens_Outer : number[][]
     * @param inOutRanges_EnbracedByTokens_Inner : number[][]
     * @param maximalIterationsNumber : number
     */



    parseWithStartAndEndTokensSets(
        inBitsbuf,
        inBitsbufRanges,


        // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
        inTokens,
        inOutRanges_WithoutTokenizedAreas,
        inOutRanges_EnbracedByTokens_Outer,
        inOutRanges_EnbracedByTokens_Inner,
        maximalIterationsNumber
    ) {

        // POINTERS IN THE IN BUF, NORMALLY FILE CONTENTS.
        // refined inBitsbufRanges, same dataype as the inBitsbufRanges
        //  # let inOutRanges_WithoutTokenizedAreas: number[][] = [];
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
        let numberOfTokenizedAreasFound = 0;
        let startTokensSet = inTokens["setBegin"];
        let finishTokensSet = inTokens["setEnd"];
        let blockStartTokensSet = [...startTokensSet].map((token) => this.textEncoder.encode(token));
        let blockFinishTokensSet = [...finishTokensSet].map((token) => this.textEncoder.encode(token));
        let inBitsbufId = 0;
        let inBitsbufNumber = inBitsbufRanges.length;
        let counter = 0;
        let counterStop = (maximalIterationsNumber === 0) ? 10 : maximalIterationsNumber;
        let EOF_pos = 0;
        let refinedBlockRef = [0, 0];
        let blockRefClean = [0, 0];
        let tokenStartMatchedRange = [0, 0];
        let tokenEndMatchedRange = [0, 0];
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

        iteratingInRangesOfRefs: for (inBitsbufId = 0; inBitsbufId < inBitsbufNumber; inBitsbufId++) {
            let inBitsBufRange = inBitsbufRanges[inBitsbufId];


            // datatype explained: [startRef: number, endRef: number]
            if (inBitsBufRange[startPos] === inBitsBufRange[endPos]) {

                // the range is empty, no need to parse.
                continue iteratingInRangesOfRefs;
            }
            positionOfACharInTheInBitsBuf = inBitsBufRange[startPos];
            EOF_pos = inBitsBufRange[endPos];


            // securing counter enabling exit to prevent eternal loop. In this method the eternal loop is not the feature's algorythm.
            counter = 0;

            for (counter = 0; counter < counterStop; counter++) {
                tokenStartMatchedRange = [...blockRefClean];
                lookupStart = positionOfACharInTheInBitsBuf;
                let lastCharOf_StartTokensSet_PositionInTheInBitsbuf = this.getRangeOfTokensSetMatch(
                    inBitsbuf,
                    blockStartTokensSet,
                    tokenStartMatchedRange,
                    lookupStart,
                    EOF_pos
                );


                // start block tokens set did not match,
                // trying to match the next range
                if (lastCharOf_StartTokensSet_PositionInTheInBitsbuf === false) {

                    // no tokenized block was matched, the refined ranges array obtains exact the same range.
                    if (counter === 0) {
                        inOutRanges_WithoutTokenizedAreas.push([...inBitsBufRange]);
                    }
                    else {
                        refinedBlockRef[endPos] = (inBitsBufRange[endPos]);
                        inOutRanges_WithoutTokenizedAreas.push(refinedBlockRef);
                    }
                    continue iteratingInRangesOfRefs;
                }

                if (rangeOuter[0] !== 0 && rangeOuter[1] !== 0) {
                    inOutRanges_EnbracedByTokens_Outer.push(rangeOuter);
                    numberOfTokenizedAreasFound++;
                }
                rangeOuter = [...blockRefClean];
                rangeInner = [...blockRefClean];
                refinedBlockRef = [...blockRefClean];
                rangeOuter[startPos] = tokenStartMatchedRange[startPos];
                rangeInner[startPos] = tokenStartMatchedRange[endPos];
                refinedBlockRef[startPos] = positionOfACharInTheInBitsBuf;

                if (rangeOuter[startPos] !== 0) {
                    refinedBlockRef[endPos] = rangeOuter[startPos];
                    inOutRanges_WithoutTokenizedAreas.push(refinedBlockRef);
                }


                // this.contentPreviewByRange( inBitsbuf, inOutRanges_WithoutTokenizedAreas );
                // HERE STARTING COMPARING BLOCK_FINISH TOKENS SEQUENCE.
                tokenEndMatchedRange = [...blockRefClean];
                lookupStart = rangeInner[startPos];
                let lastCharOf_EndTokensSet_PositionInTheInBitsbuf = this.getRangeOfTokensSetMatch(
                    inBitsbuf,
                    blockFinishTokensSet,
                    tokenEndMatchedRange,
                    lookupStart,
                    EOF_pos
                );

                if (lastCharOf_EndTokensSet_PositionInTheInBitsbuf === false) {
                    throw new Error("The file format is broken:\nThe start_block tokens set was deteced, however no end_block tokens set was detected.");
                }
                rangeInner[endPos] = tokenEndMatchedRange[startPos];
                rangeOuter[endPos] = tokenEndMatchedRange[endPos];


                // this.contentPreviewByRange( inBitsbuf, [rangeOuter] );
                // this.contentPreviewByRange( inBitsbuf, [rangeInner] );
                inOutRanges_EnbracedByTokens_Inner.push(rangeInner);
                positionOfACharInTheInBitsBuf = rangeOuter[endPos];


                // refs of the block:
                refinedBlockRef = [...blockRefClean];


                // just used the reassigned variable,
                // since the name of this variable is explainatory.
                refinedBlockRef[startPos] = positionOfACharInTheInBitsBuf;
            }
        }


        return numberOfTokenizedAreasFound;
    }


    /**
     * @info based on method call .firstIndexOf()
     * @description this method writes into inOutRange the start position,
     *                where in the inBitsbuf the first char of the first token
     *                of several Unit8Array tokens have matched in normal order,
     *                and writes into inOutRange, too, the number,
     *                this is the position in the inBitsbuf, where the last char of the last token
     *                of several Unit8Array tokens have matched in normal order,
     *                plus 1.
     * @param inBitsbuf
     * @param tokenSetAsBitsbufs
     * @param inOutRange
     * @param lookupStartPos
     * @returns
     */



    getRangeOfTokensSetMatch(
        inBitsbuf,
        tokenSetAsBitsbufs,
        inOutRange,
        lookupStartPos,
        lookupEndPos
    ) {
        let startPos = 0;
        let endPos = 1;
        let positionOfACharInTheInBitsBuf = lookupStartPos;


        // the first iteration is: inBitsBufRange[startPos]; however here is any step, not always just the first.
        let tokenMatched_LastChar_Pos = 0;


        // the position in the inBitsbuf, where the last char of the current token compared matched.
        // searching til the block starts
        let tokensSetPos = 0;
        let token = tokenSetAsBitsbufs[tokensSetPos];


        // to the token var assigned the first token in the tokens set
        let tokenMatched_FirstChar_Pos = 0;


        // the position in the inBitsBuffer, where the matched token has the first char matched.
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
            tokenMatched_FirstChar_Pos = this.firstIndexOf(
                inBitsbuf,
                token,
                positionOfACharInTheInBitsBuf,


                // inBitsBufRange[startPos], later iterations the next match.
                lookupEndPos
            );


            // if the comment block did not start, exit from searching in current range
            // if === false, EXIT TO HANDLE THE NEXT RANGE
            if (tokenMatched_FirstChar_Pos === false) {

                // RESETTING THE MARKER, value false here means did NOT match.
                // after this loop, with this marker we may know, NO match in the entire loop.
                tokenFirstMatched = false;


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
            // the length of the token is 1 bytes ({0: "@"})
            // the last position of the token matched is the same first position = 0.
            // however, the range [0,0] like seems denoting a zero len range,
            // and the range indeed has 1 byte length.
            // I set the range then [0,1] and this invokes the impression of a one char long token,
            // however in the programming logics position 1 is the position of the next char,
            // and when the final char in the text of let's say 200 chars length matches,
            // then the range like [")", ";"] [198,200] matched, the real pos of symbol ";" is 199,
            // and the pos 200 is out of bounds in the text of 200 chars length.
            // just to notice this logics.
            // "end" keyword rather to interpret as "the next pos after the last char in the token matched".
            tokenMatched_LastChar_Pos = (tokenMatched_FirstChar_Pos.valueOf() + token.length);
            inOutRange[endPos] = tokenMatched_LastChar_Pos;


            // the start value to lookup from is the next after the token's last char pos in the inBitsbuf.
            positionOfACharInTheInBitsBuf = tokenMatched_LastChar_Pos;
        }

        if (tokenFirstMatched === false) {
            return false;
        }


        // the lposition in the inBitsbuf, where the last char of the tokens set matched.
        let inBitsbufTokensLastCharPos = tokenMatched_LastChar_Pos;


        return inBitsbufTokensLastCharPos;
    }


    /**
     *
     * @param inBitsBuf
     * @param inToken_Uint8Array
     * @param inStartPos
     * @param inEndPos
     * @returns false, when the inToken_Uint8Array was not found,
     *            or the offset in the inBitsBuf Uint8Array of datatype Number,
     *            where, on the entire token match,
     *            the first byte of the inToken_Uint8Array has matched.
     *          For example: the token in the Uint8Array representation, this.textEncoder.encode("@import")
     *          in the .css file like this: "@import url("@alias/styles.css"); "
     *          the token @import has matched entirely.
     *          and the first char matched "@" on the first char in the .css file has the offset 0.
     *          then, the retun value will be 0 of datatype Number.
     *          The return value Number 0 is not the same as the return value "false" of datatype boolean.
     *          The return value "false" means, there was no text, exact as the token, in the inBitsBuf.
     */



    firstIndexOf(
        inBitsBuf,
        inToken_Uint8Array,
        inStartPos,
        inEndPos
    ) {

        // let tokenBitsBuf: Uint8Array = this.textEncoder.encode( inToken );
        let tokenLen = inToken_Uint8Array.byteLength;
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
        let tokenFirstChar = inToken_Uint8Array[0];
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
            tokenChar = inToken_Uint8Array[offset];

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


