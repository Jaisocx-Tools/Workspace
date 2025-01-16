import { EventEmitter } from "./EventEmitter.js";
import { EventEmitResult } from "./Types.js";
export declare class ImprovedRenderEventEmitter extends EventEmitter {
    eventsHandlersSetDom: any;
    mainHolderHtmlNode: HTMLElement | null;
    EventArtDOMEventOptimized: string;
    constructor();
    setDebug(debug: boolean): ImprovedRenderEventEmitter;
    addDomEventListeners(): ImprovedRenderEventEmitter;
    addDomEventListener(eventName: string, selector: string, eventHandler: CallableFunction): ImprovedRenderEventEmitter;
    emitDomEvent(eventName: string, payload: any): EventEmitResult[];
    optimizedDomEventHandler(event: Event): void;
}
//# sourceMappingURL=ImprovedRenderEventEmitter.d.ts.map