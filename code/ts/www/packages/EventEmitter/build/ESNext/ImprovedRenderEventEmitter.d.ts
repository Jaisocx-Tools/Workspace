import { EventEmitter } from "./EventEmitter.js";
import { EventEmitResult } from "./Types.js";
export declare class ImprovedRenderEventEmitter extends EventEmitter {
    eventsHandlersSetDom: any;
    mainHolderHtmlNode: HTMLElement | null;
    EventArtDOMEventOptimized: any;
    constructor();
    setDebug(debug: boolean): ImprovedRenderEventEmitter;
    addDomEventListeners(): ImprovedRenderEventEmitter;
    addDomEventListener(eventName: any, selector: any, eventHandler: CallableFunction): ImprovedRenderEventEmitter;
    emitDomEvent(eventName: any, payload: any): EventEmitResult[];
    optimizedDomEventHandler(event: Event): void;
}
//# sourceMappingURL=ImprovedRenderEventEmitter.d.ts.map