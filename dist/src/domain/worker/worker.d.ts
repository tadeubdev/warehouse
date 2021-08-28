import { MotorBase } from "../motor/motor-base";
import { PositionAttrs } from "./position";
import { SizeAttrs } from "./size";
declare class Worker {
    private readonly _mover;
    private readonly _motor;
    constructor(motor: MotorBase);
    move(): void;
    position(): PositionAttrs;
    size(): SizeAttrs;
}
export { Worker };
