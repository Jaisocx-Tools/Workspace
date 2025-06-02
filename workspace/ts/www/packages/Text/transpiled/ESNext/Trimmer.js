export class Trimmer {
    SYMBOL_DOUBLE_QUOTE = "\"";
    SYMBOL_SINGLE_QUOTE = "'";
    SYMBOL_BACKSLASH_QUOTE = "`";
    SYMBOL_ROUND_BRACE_OPEN = "(";
    SYMBOL_ROUND_BRACE_CLOSE = ")";
    SYMBOL_SQUARE_BRACE_OPEN = "[";
    SYMBOL_SQUARE_BRACE_CLOSE = "]";
    SYMBOL_FIGURED_BRACE_OPEN = "{";
    SYMBOL_FIGURED_BRACE_CLOSE = "}";
    constructor() {
        this.SYMBOL_DOUBLE_QUOTE = "\"";
        this.SYMBOL_SINGLE_QUOTE = "'";
        this.SYMBOL_BACKSLASH_QUOTE = "`";
        this.SYMBOL_ROUND_BRACE_OPEN = "(";
        this.SYMBOL_ROUND_BRACE_CLOSE = ")";
        this.SYMBOL_SQUARE_BRACE_OPEN = "[";
        this.SYMBOL_SQUARE_BRACE_CLOSE = "]";
        this.SYMBOL_FIGURED_BRACE_OPEN = "{";
        this.SYMBOL_FIGURED_BRACE_CLOSE = "}";
    }
    trimSurroundingChars(inText, inSurroundingChars) {
        let sourceLen = inText.length;
        let i = 0;
        let trimmed = inText.trim();
        let trimmedLen = trimmed.length;
        let trimmedLastPos = 0;
        let trimmedFirstChar = 0;
        let trimmedLastChar = 0;
        let locSurroundingCharCodes = new Array(inSurroundingChars.length);
        let j = 0;
        let chars = new Array();
        let charCodes = new Array();
        let surroundingCharsLen = 0;
        let char = "";
        for (i = 0; i < inSurroundingChars.length; i++) {
            chars = inSurroundingChars[i];
            surroundingCharsLen = chars.length;
            locSurroundingCharCodes[i] = new Array(surroundingCharsLen);
            charCodes = locSurroundingCharCodes[i];
            for (j = 0; j < surroundingCharsLen; j++) {
                char = chars[j];
                charCodes[j] = char.charCodeAt(0);
            }
        }
        let symbolStart = 0;
        let symbolFinish = 0;
        let matched = (sourceLen !== trimmedLen);
        let tempText = "";
        for (i = 0; i < locSurroundingCharCodes.length; i++) {
            trimmedLen = trimmed.length;
            trimmedLastPos = trimmedLen - 1;
            trimmedFirstChar = trimmed.charCodeAt(0);
            trimmedLastChar = trimmed.charCodeAt(trimmedLastPos);
            let charCodes = locSurroundingCharCodes[i];
            if (charCodes.length === 1) {
                symbolStart = charCodes[0];
                symbolFinish = charCodes[0];
            }
            else {
                symbolStart = charCodes[0];
                symbolFinish = charCodes[1];
            }
            if ((trimmedFirstChar === symbolStart) &&
                (trimmedLastChar === symbolFinish)) {
                matched = true;
                tempText = trimmed.substring(1, trimmedLastPos);
                trimmed = tempText;
            }
        }
        if (matched === false) {
            return matched;
        }
        return trimmed;
    }
    trimQuotes(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_DOUBLE_QUOTE],
            [this.SYMBOL_SINGLE_QUOTE]
        ]);
        return retVal;
    }
    trimRoundBraces(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_ROUND_BRACE_OPEN, this.SYMBOL_ROUND_BRACE_CLOSE]
        ]);
        return retVal;
    }
    trimRoundBracesAndQuotesInside(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_ROUND_BRACE_OPEN, this.SYMBOL_ROUND_BRACE_CLOSE],
            [this.SYMBOL_DOUBLE_QUOTE],
            [this.SYMBOL_SINGLE_QUOTE]
        ]);
        return retVal;
    }
    trimSquareBraces(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_SQUARE_BRACE_OPEN, this.SYMBOL_SQUARE_BRACE_CLOSE]
        ]);
        return retVal;
    }
    trimSquareBracesAndQuotesInside(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_SQUARE_BRACE_OPEN, this.SYMBOL_SQUARE_BRACE_CLOSE],
            [this.SYMBOL_DOUBLE_QUOTE],
            [this.SYMBOL_SINGLE_QUOTE]
        ]);
        return retVal;
    }
    trimFiguredBraces(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_FIGURED_BRACE_OPEN, this.SYMBOL_FIGURED_BRACE_CLOSE]
        ]);
        return retVal;
    }
    trimFiguredBracesAndQuotesInside(inText) {
        let retVal = this.trimSurroundingChars(inText, [
            [this.SYMBOL_FIGURED_BRACE_OPEN, this.SYMBOL_FIGURED_BRACE_CLOSE],
            [this.SYMBOL_DOUBLE_QUOTE],
            [this.SYMBOL_SINGLE_QUOTE]
        ]);
        return retVal;
    }
}
//# sourceMappingURL=Trimmer.js.map