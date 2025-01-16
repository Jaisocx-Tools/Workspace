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
    selector: string | null;
    eventName: string;
    payload: any;
    result: EventHandlerReturnValue | null | undefined;
}
//# sourceMappingURL=Types.d.ts.map