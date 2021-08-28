import { IGenerateId } from "../../../infra/generate-id/igenerate-id";
import { Position } from "../../worker/position";
import { Size } from "../../worker/size";
import { MotorBase } from "../motor-base";
declare class MoveArroundOnceMotor extends MotorBase {
    private moved;
    private movedArround;
    constructor(position: Position, size: Size, generateIdHandler: IGenerateId);
    canMove(): boolean;
    move(): void;
}
export { MoveArroundOnceMotor };
