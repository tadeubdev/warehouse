import {EventPayload, IEvent} from "../ievent";
import {MotorBase} from "../../motor/motor-base";

class MotorEvent implements IEvent
{
    private _motor: MotorBase;

    constructor(motor: MotorBase) {
        this._motor = motor;
    }

    notify(payload: EventPayload): void {
        if (payload.data.id === this._motor.id()) {
            this._motor.move();
        }
    }
}

export {MotorEvent};