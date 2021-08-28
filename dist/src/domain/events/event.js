"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    constructor() {
        this.events = [];
    }
    subscribe(event) {
        this.events.push(event);
    }
    unsubscribe(event) {
        const eventIndex = this.events.indexOf(event);
        if (eventIndex >= 0) {
            delete this.events[eventIndex];
        }
    }
    notify(payload) {
        this.events
            .filter(event => event instanceof payload.class)
            .forEach(event => event.notify(payload));
    }
}
exports.Event = Event;
