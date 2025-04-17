class RepeatDataCallbackValue {
  // this class is to type hint the return value of a callback function
  // of datatype NestedMultipleCallback in the file NestedMultipleCallback.js
  // this is the data for the nested nodes templates placeholder.
  // data item key.
  // when of an array, then index of datatype number,
  // when of an object, then of the datatype of the key of this object's property.
  key;
  // data item value.
  // when data is of dataype array, then the array item.
  // when of datatype object, then the value of an objects's property.
  value;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  getKey() {
    return this.key;
  }

  getValue() {
    return this.value;
  }

  setKey(key) {
    this.key = key;

    return this;
  }

  setValue(value) {
    this.value = value;

    return this;
  }
} 


