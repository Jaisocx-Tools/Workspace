import { expect, test } from "vitest";

test(
  "Template for a ts package: testing example, get and set methods",
  () => {
    let value: any = "Hello World";
    let getValueExpected: any = value;

    expect( value ).toBe( getValueExpected );

  }
)

