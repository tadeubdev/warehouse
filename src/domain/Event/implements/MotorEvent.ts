import {EventPayload, IEvent} from "../IEvent";
import {MotorBase} from "../../motor/MotorBase";

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