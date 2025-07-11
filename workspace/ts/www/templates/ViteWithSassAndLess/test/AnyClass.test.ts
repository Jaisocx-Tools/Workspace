import { expect, test } from "vitest";

import { AnyClass } from "../src";


test(
  "Template for a package built with Vite: testing example, get and set methods", 
  () => {
    let valueToSet: any = "Hu hu!";
    let getValueExpected: any = valueToSet;

    let anyClass: AnyClass = new AnyClass();
    anyClass.setProp( valueToSet );

    // the testing framework assertion.
    // ensuring, the get method returns the right value as expected 
    //  after have applied the value in set method.
    expect( anyClass.getProp() ).toBe( getValueExpected );

  }
)

