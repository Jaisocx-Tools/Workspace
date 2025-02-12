

import { NestedMultipleCallbackValue } from "./NestedMultipleCallbackValue.js";


export type NestedMultipleCallback = (
  templateDataElemKey: any,
  templateDataElemValue: any
) => NestedMultipleCallbackValue;




export const nestedMultipleCallback: NestedMultipleCallback = (
  templateDataElemKey: any,
  templateDataElemValue: any
) => {
  return new NestedMultipleCallbackValue (
    templateDataElemKey, 
    templateDataElemValue
  );
};


