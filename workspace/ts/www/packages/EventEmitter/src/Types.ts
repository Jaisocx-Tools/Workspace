
// when extended EventEmitter,
// and added an event handler function,
// then this function
// has to accept input arg of this interface datatype EventHandlerInputArg
export interface EventHandlerInputArg {
  eventName: any;
  payload: any;
}


export interface EventHandlerReturnValue {
  payloadReturned: any;
  value: any;
}

export interface EventEmitResult {
  eventArt: any;
  selector: any|null;
  eventName: any;
  payload: any;
  result: EventHandlerReturnValue|null|undefined|void;
}

