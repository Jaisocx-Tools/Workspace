

export class JPath {

  public static JPATH_EXPRESSION_MAX_SIZE: number = 8;

  protected _jpath: (string|number)[];
  protected _jpathExpression: string;
  protected _jpathExpressionMaxSize: number;

  constructor() {
    this._jpath = [];
    this._jpathExpression = "";
    this._jpathExpressionMaxSize = JPath.JPATH_EXPRESSION_MAX_SIZE;
  }

  public static getByJPath( 
    jpath: (string|number)[],
    value: any
  ): any {
    
    if ( !value ) {
      return null;
    }

    if ( !jpath || jpath.length === 0 ) {
      return value;
    }

    let targetValue: any = value;

    let jpathPropertyKey: (string|number) = "";
    let jpathPropLevel: number = 0;
    let jpathLevelMax: number = Math.min( jpath.length, JPath.JPATH_EXPRESSION_MAX_SIZE );

    for ( jpathPropLevel = 0; jpathPropLevel < jpathLevelMax; jpathPropLevel++ ) {
      if ( !targetValue ) {
        break;
      }

      jpathPropertyKey = jpath[jpathPropLevel];
      targetValue = value[jpathPropertyKey];

    }

    return targetValue;

  }

  public static parse( jpathExpression: string ): (string|number)[] {
    const jpath: (string|number)[] = [];

    const jpathSplittedByPoints: string[] = jpathExpression.split(".");
    let jpathSplitted: string = "";

    loopSplittedByPoints: for ( 
      jpathSplitted 
      of jpathSplittedByPoints 
    ) {

      const jpathSplittedLenth: number = jpathSplitted ? jpathSplitted.length : 0;

      if ( jpathSplittedLenth === 0 ) {
        continue;
      }

      let leftBracePosition: number = 0;
      let rightBracePosition: number = 0;
      let jpathKey: string = "";
      let jpathKeyNumeric: number = 0;


      while ( leftBracePosition !== (-1) ) {

        // in this while loop, 
        // when the next step is done, 
        // .indexOf searches from the rightBracePosition,
        // matched in the previous while iteration.
        leftBracePosition = jpathSplitted.indexOf("[", rightBracePosition);

        // if an opening brace was not matched,
        //        means, this jpath expression does not contain [] expression,
        //        and this key item 
        //        from the splitted by dots jpath 
        //        is pushed to the target value array,
        //        and continues to check the next jpath key item.
        if ( leftBracePosition === (-1) ) {
          jpath.push( jpathSplitted );
          continue loopSplittedByPoints;
        }

        rightBracePosition = jpathSplitted.indexOf("]", leftBracePosition);

        // here means, 
        //  when square braced key opened, 
        //  but the closing square brace not matched, 
        //  the JPath expression is wrong.
        if ( rightBracePosition === (-1) ) {
          throw new Error("JPathExpression synthax");
          break;
        }


        jpathKey = jpathSplitted.slice( (leftBracePosition + 1), (rightBracePosition - 1) );
        jpathKeyNumeric = +jpathKey;

        if ( Number.isInteger( jpathKeyNumeric ) === true ) {
          jpath.push( jpathKeyNumeric );
        } else {
          jpath.push( jpathKey );
        }

        rightBracePosition++;
        if ( rightBracePosition === jpathSplittedLenth ) {
          continue loopSplittedByPoints;
        }

      }

    }

    return jpath;
  }

  public setJPathExpression( jpathExpression: string ): JPath {
    this._jpathExpression = jpathExpression;

    return this;
  }

  public setJPathExpressionMaxSize( maxSize: number ): JPath {
    this._jpathExpressionMaxSize = maxSize;

    return this;
  }

  public getJPath(): (string|number)[] {
    return this._jpath;
  }

  public static getByJPathExpression( 
    jpathExpression: string,
    value: any
  ): any {
    const jpath: (string|number)[] = [];

    return JPath.getByJPath( jpath, value );
  }

}



