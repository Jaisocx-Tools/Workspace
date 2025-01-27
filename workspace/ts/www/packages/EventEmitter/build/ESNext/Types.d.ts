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
    selector: any | null;
    eventName: any;
    payload: any;
    result: EventHandlerReturnValue | null | undefined | void;
}
//# sourceMappingURL=Types.d.ts.map