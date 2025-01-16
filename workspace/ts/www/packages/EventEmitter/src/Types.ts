
// when extended EventEmitter,
// and added an event handler function,
// then this function 
// has to accept input arg of this interface datatype EventHandlerInputArg
export interface EventHandlerInputArg {
  eventName: string;
  payload: any;
}


export interface EventHandlerReturnValue {
  payloadReturned: any;
  value: any;
}

export interface EventEmitResult {
  eventArt: string;
  selector: string|null;
  eventName: string;
  payload: any;
  result: EventHandlerReturnValue | null | undefined;
}

