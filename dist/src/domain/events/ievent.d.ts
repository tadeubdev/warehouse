interface IEvent {
    notify(payload: EventPayload): void;
}
interface EventPayloadData {
    id: string;
}
interface EventPayload {
    class: any;
    data: EventPayloadData;
}
export { IEvent, EventPayload };
