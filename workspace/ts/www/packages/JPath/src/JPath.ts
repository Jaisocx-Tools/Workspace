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



  public static setByJPath (
    obj: any,
    jpath: (string|number)[],
    value: any
  ) {
    const jpathLen: number = jpath.length;
    let jpathLastIx: number = jpathLen - 1;
    let datatypeNode: string = "";
    let key: any = null;

    for ( key of jpath ) {
      datatypeNode = typeof key;

      if ( !obj[key] ) {

        if ( datatypeNode === "number" ) {
          obj[key] = new Array();
        } else {
          obj[key] = new Object();
        }
      }


      obj = obj[key];

    }


    //@ts-ignore
    obj[jpathLastIx] = value;

  }



  public static setByJPathWalkFlatRebuild (
    obj: any,
    jpath: (string|number)[],
    value: any,
    nameHolderId: string,
    nameId: string,
    branchName: string
  ) {
    const jpathLen: number = jpath.length;
    let jpathIx: number;
    let jpathLastIx: number = jpathLen - 1;
    let id: any = null;
    let holderId: any = jpath[0];
    let foundNode: any = null;
    let newItem: any = null;

    id = jpath[0];
    obj[nameId] = id;

    for ( jpathIx = 1; jpathIx < jpathLen; jpathIx++ ) {
      id = jpath[jpathIx];

      foundNode = false;

      let toGetById: any[] = [];

      if ( Array.isArray( obj ) ) {
        toGetById = obj;

      } else if ( obj[branchName] ) {
        toGetById = obj[branchName];

      } else if ( !obj[branchName] ) {
        obj[branchName] = new Array();
        toGetById = obj[branchName];

      }

      foundNode = toGetById.find (
        ( node: any ) => {
          const matches: boolean = ( node[nameId] === id );


          return matches;
        }
      );

      if ( !foundNode ) {

        if ( jpathIx === jpathLastIx ) {
          newItem = {
            ...value,
            [nameId]: id,
            [nameHolderId]: holderId
          };
        } else {
          newItem = {
            [nameId]: id,
            [nameHolderId]: holderId
          };
        }

        toGetById.push( newItem );
        obj[nameId] = holderId;

        const lastIx: number = ( toGetById.length - 1 );
        foundNode = toGetById[lastIx];

      }

      obj = foundNode;
      holderId = id;

    }

  }



  public static getByJPathExpression (
    jpathExpression: string,
    value: any
  ): any {
    const jpath: (string|number)[] = JPath.parse( jpathExpression );


    return JPath.getByJPath(
      jpath,
      value
    );
  }


  // faster than JPath.getByJPathExpression( jpathExpression: string, value: any );
  // recommended when the lookup more than once with the same jpathExpression,
  // or when You already at once build the jpath array variables to perform lookups
  // like this: let jpath: (string|number)[] = [ "tokens", "startTokens", 0, "length" ];
  //    let jpath = JPath.parse( "subtree[1].opened" ); => [ "subtree", 1, "opened" ]
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
  public static getByJPath (
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
    let jpathValueFound: any = {};

    let jpathPropertyKey: (string|number) = "";
    let jpathPropLevel: number = 0;
    let jpathLevelMax: number = Math.min(
      jpath.length,
      JPath.JPATH_EXPRESSION_MAX_SIZE
    );

    for ( jpathPropLevel = 0; jpathPropLevel < jpathLevelMax; jpathPropLevel++ ) {

      if ( !targetValue ) {
        break;
      }

      jpathPropertyKey = jpath[jpathPropLevel];
      jpathValueFound = targetValue[jpathPropertyKey];

      if ( typeof jpathValueFound === "object" ) {

        if ( Array.isArray( jpathValueFound ) === true ) {
          targetValue = [...jpathValueFound];
        } else {
          targetValue = {...jpathValueFound};
        }

      } else {
        targetValue = jpathValueFound;
      }

    }


    return targetValue;

  }


  // jpath string exression as "subtree[1].opened" => [ "subtree", 1, "opened" ]
  // with this art of array of properties names of javascript object tree
  //  it is easier to get the property value of any datatype in javascript objects and arrays.
  //  later usage of the jpath array:
  //    let jpath = JPath.parse( "subtree[1].opened" );
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
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

      let matchedFirstTime: boolean = false;
      let leftBracePosition: number = 0;
      let rightBracePosition: number = 0;
      let jpathKey: string = "";
      let jpathKeyNumeric: number = 0;


      // the loop to find arrays indexes in a property,
      // when looking for an item in multilevel arrays.
      // for example: "tokens[startTokens][0].length"
      // pushes to jpath array in the first iteration like this:
      //    jpath.push( "tokens" );
      //    jpath.push( "startTokens" ),
      //  then in the next iteration
      //    jpath.push( 0 );
      //  and then exits the cycle.
      //  the push of prop "length" is performed then
      //    in the next iteration of the "loopSplittedByPoints: for" cycle above
      while ( leftBracePosition !== (-1) ) {

        // in this while loop,
        // when the next step is done,
        // .indexOf searches from the rightBracePosition,
        // matched in the previous while iteration.
        leftBracePosition = jpathSplitted.indexOf(
          "[",
          rightBracePosition
        );


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

        rightBracePosition = jpathSplitted.indexOf(
          "]",
          leftBracePosition
        );


        // here means,
        //  when square braced key opened,
        //  but the closing square brace not matched,
        //  the JPath expression is wrong.
        if ( rightBracePosition === (-1) ) {
          throw new Error("JPathExpression synthax");
          break;
        }


        // the property name before opening square brace [ is being pushed to jpath array
        //  when the opening square brace [ is found first time.
        if ( matchedFirstTime === false ) {
          jpathKey = jpathSplitted.slice (
            0,
            leftBracePosition
          );

          jpath.push( jpathKey );

          matchedFirstTime = true;

        }

        jpathKey = jpathSplitted.slice( (
          leftBracePosition + 1),
        rightBracePosition
        );
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



  public setJPath( jpath: (string|number)[] ): JPath {
    this._jpath = jpath;


    return this;
  }



  public getJPath(): (string|number)[] {

    if (
      (
        ( this._jpathExpression !== null ) && ( this._jpathExpression.length !== 0 )
      ) &&
      ( this._jpath === null || this._jpath.length === 0 )
    ) {
      this._jpath = JPath.parse( this._jpathExpression );
    }


    return this._jpath;
  }



  public static getJPathName (
    jpathExpression: string,
    delimiter: string
  ): string {
    let jpath: (string|number)[] = JPath.parse( jpathExpression );
    let jpathName: string = jpath.join( delimiter );


    return jpathName;
  }

}



