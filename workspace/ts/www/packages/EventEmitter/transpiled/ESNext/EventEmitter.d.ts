import { EventHandlerReturnValue, EventEmitResult } from "./Types.js";
export declare class EventEmitter {
    eventsHandlersSetThisClass: any;
    debug: boolean;
    EventArtJSEvent: any;
    constructor();
    setDebug(inDebug: boolean): EventEmitter;
    isObjectEmpty(obj: object): boolean;
    addThisClassEventListener(eventName: any, eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue | null | undefined | void): EventEmitter;
    emitEvent(eventName: any, payload: any): EventEmitResult[];
}
//# sourceMappingURL=EventEmitter.d.ts.map