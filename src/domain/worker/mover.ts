import {MotorBase} from "../motor/motor-base";

class Mover
{
    private readonly _motor: MotorBase;

    constructor(motor: MotorBase) {
        this._motor = motor;
    }

    move(): void {
        this._motor.move();
    }
}

export {Mover};