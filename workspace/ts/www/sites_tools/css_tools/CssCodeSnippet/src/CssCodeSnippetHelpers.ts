export class CssCodeSnippetHelpers {

  public static linesNumbersTextToConsole(linesNumber: number): undefined {
    console.log ( 
      `Custom lines numbers ( ${linesNumber} ) text generated to use with lines-numbers-variables`, 
      { "linesNumbers": CssCodeSnippetHelpers.getLinesNumbersString( linesNumber ) } 
    );
  }
  
  public static getLinesNumbersString(linesNumber: number): any {
    const numberToUnicode: any = {
      "0": "\\0030",
      "1": "\\0031",
      "2": "\\0032",
      "3": "\\0033",
      "4": "\\0034",
      "5": "\\0035",
      "6": "\\0036",
      "7": "\\0037",
      "8": "\\0038",
      "9": "\\0039"
    };

    const whiteSpaceEncoded: string = "\\00a";
    
    let retValue: string = "";
    const numbers: number[] = [];
    for (let i=1; i <= linesNumber; i++ ) {
      numbers.push(i);
    }
    retValue = numbers
      .reduce(
        (previousVaue, currentValue) => {
          let lineNumberString: string = "" + currentValue;
          let lineNumberStringEncoded: string = "";
          for (let i=0; i < lineNumberString.length; i++) {
            lineNumberStringEncoded += numberToUnicode[lineNumberString[i]];
          }
          previousVaue += lineNumberStringEncoded + whiteSpaceEncoded;
          return previousVaue;
        },
        ""
      );
      
    return (retValue);
  }

}

