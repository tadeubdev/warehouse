import {Mover} from "./Mover";
import {MotorBase} from "../motor/motor-base";
import {PositionAttrs} from "./position";
import {SizeAttrs} from "./size";

class Worker
{
    private readonly _mover: Mover;
    private readonly _motor: MotorBase;

    constructor(motor: MotorBase) {
        this._motor = motor;
        this._mover = new Mover(motor);
    }

    move(): void {
        this._mover.move();
    }

    position(): PositionAttrs {
        return this._motor.position();
    }

    size(): SizeAttrs {
        return this._motor.size();
    }
}

export {Worker};