import { EventHandlerReturnValue, EventEmitResult } from "./Types.js";
export declare class EventEmitter {
    eventsHandlersSetThisClass: any;
    debug: boolean;
    EventArtJSEvent: string;
    constructor();
    setDebug(toDebug: boolean): EventEmitter;
    isObjectEmpty(obj: object): boolean;
    addThisClassEventListener(eventName: string, eventHandler: (eventName: string, payload: any) => EventHandlerReturnValue): EventEmitter;
    emitEvent(eventName: string, payload: any): EventEmitResult[];
}
//# sourceMappingURL=EventEmitter.d.ts.map