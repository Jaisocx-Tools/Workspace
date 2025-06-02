import { expect, test } from "vitest";

import { JPath } from "../src/JPath";


test(
  "JPath.parse() method result", 
  () => {
    let jpathExpression: string = "tokens[startTokens][0][123].length";
    let jpathExpected: (string|number)[] = [ "tokens", "startTokens", 0, 123, "length" ];
    let jpath: (string|number)[] = JPath.parse( jpathExpression );
    
    console.debug( { "jpath.length": jpath.length } );
    expect( jpath.length ).toBe( jpathExpected.length );

    let i: number = 0;
    for ( i = 0; i < jpath.length; i++ ) {

      let debugProp: string = `jpath[${i}]`;
      console.debug( { [debugProp]: jpath[i] } );

      expect( jpath[i] ).toBe( jpathExpected[i] );
    }
  }
)

