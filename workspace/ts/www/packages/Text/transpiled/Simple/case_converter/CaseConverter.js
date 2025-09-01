class CaseConverter {
    _debug;
    #symbolZero;
    #symbolNine;
    #symbolA;
    #symbolZ;
    #symbolAlower;
    #symbolZlower;
    rangesANumLatin;
    static clsInstance;



    constructor() {
        this._debug = false;
        this.#symbolZero = 48;
        this.#symbolNine = 57;
        this.#symbolA = 65;
        this.#symbolZ = 90;
        this.#symbolAlower = 97;
        this.#symbolZlower = 122;
        this.rangesANumLatin = [
            [this.#symbolZero, this.#symbolNine],
            [this.#symbolA, this.#symbolZ],
            [this.#symbolAlower, this.#symbolZlower]
        ];
    }



    static getInstance() {

        if (CaseConverter.clsInstance === null) {
            CaseConverter.clsInstance = new CaseConverter();
        }


        return CaseConverter.clsInstance;
    }



    setDebug(inDebug) {
        this._debug = inDebug;


        return this;
    }


    /** Core public API (static convenience) */



    static camel(input) {
        return CaseConverter.getInstance().toCamel(input);
    }



    static pascal(input) {
        return CaseConverter.getInstance().toPascal(input);
    }



    static snake(input) {
        return CaseConverter.getInstance().toSnake(input);
    }



    static kebab(input) {
        return CaseConverter.getInstance().toKebab(input);
    }



    static constant(input) {
        return CaseConverter.getInstance().toConstant(input);
    }



    static title(input) {
        return CaseConverter.getInstance().toTitle(input);
    }



    static sentence(input) {
        return CaseConverter.getInstance().toSentence(input);
    }



    static dot(input) {
        return CaseConverter.getInstance().toDelimited(input, ".");
    }



    static path(input) {
        return CaseConverter.getInstance().toDelimited(input, "/");
    }



    static train(input) {
        return CaseConverter.getInstance().toTrain(input);
    }


    /** Instance methods */



    toCamel(input) {
        const t = this.tokens(input);

        if (t.length === 0)


            return "";
        const [head, ...tail] = t;


        return head.toLowerCase() +
            tail.map(this.cap.bind(this)).join("");
    }



    toPascal(input) {
        return this.tokens(input).map(this.cap.bind(this)).join("");
    }



    toSnake(input) {
        return this.toDelimited(input, "_");
    }



    toKebab(input) {
        return this.toDelimited(input, "-");
    }



    toConstant(input) {
        return this.tokens(input).map(t => t.toUpperCase()).join("_");
    }



    toTitle(input) {
        const SMALL = new Set([
            "a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "vs", "via"
        ]);
        const toks = this.tokens(input);


        return toks.map((t, i) => {
            const lower = t.toLowerCase();

            if (i !== 0 && i !== toks.length - 1 && SMALL.has(lower))


                return lower;


            return this.cap(t);
        }).join(" ");
    }



    toSentence(input) {
        const s = this.tokens(input).join(" ");

        if (!s)


            return "";


        return this.cap(s.toLowerCase());
    }



    toTrain(input) {
        return this.tokens(input).map(this.cap.bind(this)).join("-");
    }



    toDelimited(input, delimiter) {
        return this.tokens(input).map(t => t.toLowerCase()).join(delimiter);
    }



    cap(t) {

        if (!t)


            return t;
        const lower = t.toLowerCase();


        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }



    tokens(inp) {
        let retVal_splitted = new Array();
        let bitsbuf = (new TextEncoder()).encode(inp);
        let inpLength = bitsbuf.byteLength;
        let bitsbufReplaced = new Uint8Array(inpLength);
        let aChar = 0;
        let charPos = 0;
        let isAlphaNum_aChar = true;
        let char_BACKGROUND_SPACE = (" ").charCodeAt(0);
        let backgroundSpacesPositions = new Array();
        let secureCounter = 1;
        let secureMaxCounter = 256;

        marker1: while (charPos < inpLength) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                charPos = (inpLength + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            aChar = bitsbuf[charPos];
            isAlphaNum_aChar = this.isAlphaNumLatin(aChar);

            if (this._debug === true) {
                console.log(
                    "charCodeAt",
                    inp.charAt(charPos),
                    charPos,
                    aChar,
                    isAlphaNum_aChar
                );
            }

            if (isAlphaNum_aChar) {

                //@ts-ignore
                bitsbufReplaced.set([aChar], charPos);
            }
            else {

                //@ts-ignore
                bitsbufReplaced.set(
                    [char_BACKGROUND_SPACE],
                    charPos
                );
                backgroundSpacesPositions.push(charPos);
            }
            charPos++;
        }
        let buf = new Uint8Array(0);
        secureCounter = 1;
        let backgroundSpacePos = 0;
        let spacesArrayLen = backgroundSpacesPositions.length;
        let prevCharPos = 0;
        let charPosA = 0;


        // let charPosB: number = 0;
        backgroundSpacePos = (-1);

        marker2: while (backgroundSpacePos < spacesArrayLen) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                backgroundSpacePos = (spacesArrayLen + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker2;
            }
            prevCharPos = charPosA;
            backgroundSpacePos++;
            charPosA = backgroundSpacesPositions[backgroundSpacePos];
            buf = bitsbufReplaced.slice(prevCharPos, charPosA);
            retVal_splitted.push((new TextDecoder()).decode(buf));
            charPosA++;


            // backgroundSpacePos++;
            // if ( backgroundSpacePos >= spacesArrayLen ) {
            //   buf = bitsbufReplaced.slice ( (
            //     charPosA + 1 ),
            //   bitsbufReplaced.byteLength
            //   );
            //   retVal_splitted.push ( ( new TextDecoder() ).decode( buf ) );
            //   backgroundSpacePos = ( spacesArrayLen + 128 );
            //   secureCounter = ( secureMaxCounter + 128 );
            //   break marker2;
            // }
            // charPosB = backgroundSpacesPositions[ backgroundSpacePos ];
        }


        // if ( this._debug === true ) {
        console.log({
            retVal_splitted,
            backgroundSpacesPositions
        });


        // }
        return retVal_splitted;
    }



    matchesRanges(aNum, inRanges) {
        let retVal_didMatch = true;
        let numRanges = inRanges.length;
        let rangeId = 0;
        let aRange = new Array(0);
        let secureCounter = 1;
        let secureMaxCounter = 28;

        marker1: while (rangeId < numRanges) {
            secureCounter++;

            if (secureCounter > secureMaxCounter) {
                rangeId = (numRanges + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            aRange = inRanges[rangeId];
            retVal_didMatch = ((aRange[0] <= aNum) && (aNum <= aRange[1]));

            if (this._debug === true) {
                console.log(
                    "matchingRanges",
                    {
                        inRanges,
                        aRange,
                        aNum,
                        less: (aRange[0] <= aNum),
                        more: (aNum <= aRange[1]),
                        retVal_didMatch
                    }
                );
            }

            if (retVal_didMatch === true) {
                rangeId = (numRanges + 128);
                secureCounter = (secureMaxCounter + 128);
                break marker1;
            }
            rangeId++;
        }


        return retVal_didMatch;
    }



    isAlphaNumLatin(charCode) {
        let retVal_didMatch = true;
        retVal_didMatch = this.matchesRanges(
            charCode,
            this.rangesANumLatin
        );


        return retVal_didMatch;
    }
}


