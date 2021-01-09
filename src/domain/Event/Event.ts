import {EventPayload, IEvent} from "./IEvent";

class Event
{
    private readonly events: Array<IEvent>;

    constructor() {
        this.events = [];
    }

    subscribe(event: IEvent) {
        this.events.push(event);
    }

    unsubscribe(event: IEvent) {
        const eventIndex = this.events.indexOf(event);
        if (eventIndex >= 0) {
            delete this.events[eventIndex];
        }
    }

    notify(payload: EventPayload) {
        this.events
            .filter(event => event instanceof payload.class)
            .forEach(event => event.notify(payload));
    }
}

export {Event};