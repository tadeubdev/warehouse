import { MotorBase } from "../motor/motor-base";
declare class Mover {
    private readonly _motor;
    constructor(motor: MotorBase);
    move(): void;
}
export { Mover };
