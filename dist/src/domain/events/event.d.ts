import { EventPayload, IEvent } from "./ievent";
declare class Event {
    private readonly events;
    constructor();
    subscribe(event: IEvent): void;
    unsubscribe(event: IEvent): void;
    notify(payload: EventPayload): void;
}
export { Event };
