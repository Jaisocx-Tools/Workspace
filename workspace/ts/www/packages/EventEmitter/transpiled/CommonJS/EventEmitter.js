"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() {
        this.eventsHandlersSetThisClass = {};
        this.debug = true;
        this.EventArtJSEvent = "JSEvent";
    }
    setDebug(inDebug) {
        this.debug = inDebug;
        return this;
    }
    isObjectEmpty(obj) {
        // Check if the object is null or undefined
        if (obj === undefined || obj === null) {
            return true;
        }
        // Check if the object is an actual object and not another type
        if (typeof obj !== "object") {
            return false;
        }
        // Check if the object has any own properties
        if (Object.keys(obj).length === 0) {
            return true;
        }
        // If all checks pass, the object is not undefined, null, or empty
        return false;
    }
    // this method just sets an event handler function by event name to an object,
    // and then all event handlers are executed on this.emitEvent method call.
    // this.emitEvent method call You can place inside Your js code,
    // where You wish to provide the interface of optional adding a custom event listener in Your JS class.
    addThisClassEventListener(eventName, eventHandler) {
        if (!this.eventsHandlersSetThisClass[eventName]) {
            this.eventsHandlersSetThisClass[eventName] = [];
        }
        this.eventsHandlersSetThisClass[eventName].push(eventHandler);
        return this;
    }
    // this.emitEvent method call You can place inside Your js code,
    // where You wish to provide the interface of optional adding a custom event listener in Your JS class.
    emitEvent(eventName, payload) {
        const eventEmitResults = [];
        if (this.debug) {
            console.log("event emitted", eventName);
        }
        if (this.isObjectEmpty(this.eventsHandlersSetThisClass)) {
            return eventEmitResults;
        }
        const eventHandlers = this.eventsHandlersSetThisClass[eventName];
        if (!eventHandlers || eventHandlers.length === 0) {
            if (this.debug) {
                console.log("no event handler for this event", eventName);
            }
            return eventEmitResults;
        }
        for (const eventHandler of eventHandlers) {
            if (this.debug) {
                console.log("got event handler", eventName);
            }
            if (!eventHandler || typeof eventHandler !== "function") {
                if (this.debug) {
                    console.log("event handler is not a function", eventName, eventHandler);
                }
                continue;
            }
            if (this.debug) {
                console.log("calling event handler", eventName, eventHandler);
            }
            const eventHandlerResult = eventHandler.call(this, eventName, payload);
            const thisClass = this;
            const eventEmitResult = new class {
                constructor() {
                    this.eventArt = thisClass.EventArtJSEvent;
                    this.selector = null;
                    this.eventName = eventName;
                    this.payload = payload;
                    this.result = eventHandlerResult;
                }
            };
            eventEmitResults.push(eventEmitResult);
            if (eventHandlerResult && eventHandlerResult.payloadReturned) {
                // @ts-ignore
                payload = eventHandlerResult.payloadReturned;
            }
        }
        return eventEmitResults;
    }
}
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map