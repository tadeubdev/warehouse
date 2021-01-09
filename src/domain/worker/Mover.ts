import {MotorBase} from "../motor/MotorBase";

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