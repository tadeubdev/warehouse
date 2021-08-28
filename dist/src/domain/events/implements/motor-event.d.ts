import { EventPayload, IEvent } from "../ievent";
import { MotorBase } from "../../motor/motor-base";
declare class MotorEvent implements IEvent {
    private _motor;
    constructor(motor: MotorBase);
    notify(payload: EventPayload): void;
}
export { MotorEvent };
