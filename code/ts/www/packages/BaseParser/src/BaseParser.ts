import { TextEncoder } from "node:util";
import { BaseParserInterface } from "./BaseParserInterface.js";

export class BaseParser implements BaseParserInterface {

  textEncoder: TextEncoder;

  constructor() {
    this.textEncoder = new TextEncoder();
  }

  public trimQuotes(str: string): string {
    return str.replace(
      /^['"]|['"]$/g, 
      "");
  }

  contentPreviewByRange (
    inBitsbuf: Uint8Array,
    inBitsfufRefs: number[][]  
  ): void {

    let textDecoder: TextDecoder = new TextDecoder( "utf-8" );

    let testRange: number[] = [];
    let refStart: number = 0;
    let refEnd: number = 0;
    let i: number = 0;

    for ( i = 0; i < inBitsfufRefs.length; i++ ) {  
      testRange = inBitsfufRefs[i];
      refStart = testRange[0];
      refEnd = testRange[1];

      let block: Uint8Array = inBitsbuf.subarray( 
        refStart, 
        refEnd );
      let blockText: string = textDecoder.decode( block );
      // console.log( commentBlock );
      console.log( blockText );
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
  public validBitsbufRefsRefine ( 
    inBitsbuf: Uint8Array,
    inBitsbufRefs: number[][], // datatype explained: [ [startRef: number, endRef: number], [startRef: number, endRef: number], ... ];
    bitsBufRefs_Refined: number[][],
    bitsBufRefs_ofTheTokenType: number[][],
    inTokens: { "setBegin": string[], "setEnd": string[] },
    maximalIterationsNumber: number
  ): void { // notice: return value, since this is the base method for thin seeing in the code subcalls.

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

    let startTokensSet: string[] = inTokens["setBegin"];
    let finishTokensSet: string[] = inTokens["setEnd"];
    
    let blockStartTokensSet: Uint8Array[] = [...startTokensSet].map( (token: string) => this.textEncoder.encode( token ) );
    let blockFinishTokensSet: Uint8Array[] = [...finishTokensSet].map( (token: string) => this.textEncoder.encode( token ) );

    let inBitsbufId: number = 0;
    let inBitsbufNumber: number = inBitsbufRefs.length;

    let counter: number = 0;
    let counterStop: number = ( maximalIterationsNumber === 0 ) ? 10 : maximalIterationsNumber;

    let EOF_pos: number = 0;

    let refinedBlockRef: number[] = [0,0];

    let blockRefClean: number[] = [0,0];

    let tokenStartMatchedRange: number[] = [0,0];
    let tokenEndMatchedRange: number[] = [0,0];

    let rangeOuter: number[] = [0,0];
    let rangeInner: number[] = [0,0];


    let startPos: number = 0;
    let endPos: number = 1;

    // collect blocks refs without blocks delimitered by tokens

    /**
     * @var positionOfACharInTheInBitsBuf: number
     * @description the position of a char in the inBitsbuf. the inBitsbuf is normally the file contents bits buffer, octets aligned, to be parsed.
     */
    let positionOfACharInTheInBitsBuf: number = 0;
    let lookupStart: number = 0;

    /**
     * @label for iteratingInRangesOfRefs
     */
    iteratingInRangesOfRefs: for ( inBitsbufId = 0; inBitsbufId < inBitsbufNumber; inBitsbufId++ ) {
      let inBitsBufRange: number[] = inBitsbufRefs[inBitsbufId]; // datatype explained: [startRef: number, endRef: number]

      if ( inBitsBufRange[startPos] === inBitsBufRange[endPos] ) {
        // the range is empty, no need to parse.
        continue iteratingInRangesOfRefs;
      }

      positionOfACharInTheInBitsBuf = inBitsBufRange[startPos];
      EOF_pos = inBitsBufRange[endPos];


      // securing counter enabling exit to prevent eternal loop. In this method the eternal loop is not the feature's algorythm.
      counter = 0;
      for ( counter = 0; counter < counterStop; counter++ ) {

        tokenStartMatchedRange = [...blockRefClean];
        lookupStart = positionOfACharInTheInBitsBuf;
        let lastCharOf_StartTokensSet_PositionInTheInBitsbuf: Number|false = this.getRangeOfTokensSetMatch (
          inBitsbuf,
          blockStartTokensSet,
          tokenStartMatchedRange,
          lookupStart,
          EOF_pos
        );
        
        // start block tokens set did not match,
        // trying to match the next range
        if ( lastCharOf_StartTokensSet_PositionInTheInBitsbuf === false ) {
          // no tokenized block was matched, the refined ranges array obtains exact the same range.
          if ( counter === 0 ) {
            bitsBufRefs_Refined.push( [...inBitsBufRange] );

          } else {
            refinedBlockRef[endPos] = ( inBitsBufRange[endPos] );
            bitsBufRefs_Refined.push( refinedBlockRef );
          }

          continue iteratingInRangesOfRefs;
        }

        rangeOuter = [...blockRefClean];
        rangeInner = [...blockRefClean];
        refinedBlockRef = [...blockRefClean];

        rangeOuter[startPos] = tokenStartMatchedRange[startPos];
        rangeInner[startPos] = tokenStartMatchedRange[endPos];

        refinedBlockRef[startPos] = positionOfACharInTheInBitsBuf;

        if ( rangeOuter[startPos] !== 0 ) {
          refinedBlockRef[endPos] = rangeOuter[startPos];
          bitsBufRefs_Refined.push( refinedBlockRef );
        }

        // this.contentPreviewByRange( inBitsbuf, bitsBufRefs_Refined );




        
        // HERE STARTING COMPARING BLOCK_FINISH TOKENS SEQUENCE.
        tokenEndMatchedRange = [...blockRefClean];
        lookupStart = rangeInner[startPos];
        let lastCharOf_EndTokensSet_PositionInTheInBitsbuf: Number|false = this.getRangeOfTokensSetMatch (
          inBitsbuf,
          blockFinishTokensSet,
          tokenEndMatchedRange,
          lookupStart,
          EOF_pos
        );

        if ( lastCharOf_EndTokensSet_PositionInTheInBitsbuf === false ) {
          throw new Error( "The file format is broken:\nThe start_block tokens set was deteced, however no end_block tokens set was detected." );
        }

        rangeInner[endPos] = tokenEndMatchedRange[startPos];
        rangeOuter[endPos] = tokenEndMatchedRange[endPos];

        // this.contentPreviewByRange( inBitsbuf, [rangeOuter] );
        // this.contentPreviewByRange( inBitsbuf, [rangeInner] );

        bitsBufRefs_ofTheTokenType.push( rangeInner );

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
   * @param tokenSetAsBitsbufs 
   * @param inOutBitsbufRefs 
   * @param lookupStartPos 
   * @returns 
   */
  public getRangeOfTokensSetMatch (
    inBitsbuf: Uint8Array,
    tokenSetAsBitsbufs: Uint8Array[],
    inOutRange: number[],
    lookupStartPos: number,
    lookupEndPos: number
  ): Number|false {

    let startPos: number = 0;
    let endPos: number = 1;

    let positionOfACharInTheInBitsBuf: number = lookupStartPos; // the first iteration is: inBitsBufRange[startPos]; however here is any step, not always just the first.

    let tokenMatched_LastChar_Pos: number = 0; // the position in the inBitsbuf, where the last char of the current token compared matched.

    // searching til the block starts
    let tokensSetPos: number = 0;
    let token: Uint8Array = tokenSetAsBitsbufs[tokensSetPos]; // to the token var assigned the first token in the tokens set

    let tokenMatched_FirstChar_Pos: Number|false = 0; // the position in the inBitsBuffer, where the matched token has the first char matched.
    let tokenFirstMatched: boolean = false;
    for ( tokensSetPos = 0; tokensSetPos < tokenSetAsBitsbufs.length; tokensSetPos++ ) {

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
      tokenMatched_FirstChar_Pos = this.firstIndexOf (
        inBitsbuf,
        token,
        positionOfACharInTheInBitsBuf, // inBitsBufRange[startPos], later iterations the next match.
        lookupEndPos
      );

      // if the comment block did not start, exit from searching in current range
      // if === false, EXIT TO HANDLE THE NEXT RANGE
      if ( tokenMatched_FirstChar_Pos === false ) {

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
      if ( tokenFirstMatched === false ) {
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
      tokenMatched_LastChar_Pos = ( tokenMatched_FirstChar_Pos.valueOf() + token.length );
      inOutRange[endPos] = tokenMatched_LastChar_Pos;

      // the start value to lookup from is the next after the token's last char pos in the inBitsbuf.
      positionOfACharInTheInBitsBuf = tokenMatched_LastChar_Pos;
    }

    if ( tokenFirstMatched === false ) {
      return false;
    }

    // the lposition in the inBitsbuf, where the last char of the tokens set matched.
    let inBitsbufTokensLastCharPos: number = tokenMatched_LastChar_Pos;

    return inBitsbufTokensLastCharPos;
  }




  public firstIndexOf ( 
    inBitsBuf: Uint8Array,
    inTokenBitsBuf: Uint8Array,
    inStartPos: number,
    inEndPos: number
  ): Number|false {

    // let tokenBitsBuf: Uint8Array = this.textEncoder.encode( inToken );
    let tokenLen: number = inTokenBitsBuf.byteLength;

    let iterationsNumber: number = ( inEndPos - inStartPos );
    if ( iterationsNumber < 1 ) {
      throw new Error("The end char position to lookup is not over the start position.");
    }

    if ( iterationsNumber < tokenLen ) {
      return false;
    }


    let matched: boolean = false;
    let ix: number = 0;
    let b: number = 0;
    let tokenFirstChar: number = inTokenBitsBuf[0];
    let tokenChar: number = 0;
    let matchNotStarted: boolean = true;
    let theFirstMatchIx: number = 0;

    // @var offset: the offset of an tokenChar: octet in the token inBitsBuf: Uint8Array.
    let offset: number = 0;
    for ( ix = inStartPos; ix < inEndPos; ix++ ) {

      // the char of the inBitsBuf: Uint8Array, to compare with the char in a token.
      b = inBitsBuf[ix];

      // did NOT match this next char in the inBitsBuf Uint8Array and the first char of a token.
      // we skip at once to the next char in the inBitsBuf to compare here again.
      if ( (matchNotStarted === true) && (b !== tokenFirstChar) ) {
        continue;
      }

      // here first chars of the token matched.
      // register to start all tokens symbols compare.
      // and skip to next step, since this symbol already compared.
      if ( matchNotStarted === true ) {
        offset = 1;
        matchNotStarted = false;

        // on the octet position = ix in the inBitsBuf, a char did match the first time the first char in the token.
        // this will be the start position of the matching token in the inBitsBuf.
        // and this value will be the result of this method,
        // if every char in the token will match the next chars, too, in the inBitsBuf after this octet position = ix;
        theFirstMatchIx = ix;

        if ( tokenLen === 1 ) {
          // the marker to tell matched true.
          matched = true;

          // exiting the loop, no need to compare in the next iteration, since this method .firstIndexOf() all done.
          break;

        } else {
          // here continue to next chars to compare, since the first char already did match.
          // and we did set the markers, these mean to compare not just the first char of the token, but every next one by one.
          continue;
        }
      }


      // the next char in the token is compared with the next char in the 
      tokenChar = inTokenBitsBuf[offset];
      if ( b === tokenChar ) {

        // @var offset: the offset of an tokenChar: octet in the token inBitsBuf: Uint8Array.
        // here the next chars both did match,
        // and we raise the next position of a char in the token to compare with the char in the inBitsBuf.
        offset++;

        // did reach the end of the being compared token,
        // set the marker means DID match true,
        // and exit the loop,
        // after the loop the marker will tell to return the first char position in the inBitsBuf, where after, too, the token did match entirely.
        if ( offset === tokenLen ) {

          // the marker to tell matched true.
          matched = true;

          // exiting the loop, no need to compare in the next iteration, since this method .firstIndexOf() all done.
          break;
        }

      } else {

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
    if ( !matched ) {
      return false;
    }

    // DID match true, the position of the first char in the token, matched in the inBitsBuf.
    return theFirstMatchIx;

  }

}



