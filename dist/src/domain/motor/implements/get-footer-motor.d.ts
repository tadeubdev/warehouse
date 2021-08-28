import { IGenerateId } from "../../../infra/generate-id/igenerate-id";
import { Position } from "../../worker/position";
import { Size } from "../../worker/size";
import { MotorBase } from "../motor-base";
declare class GetFooterMotor extends MotorBase {
    constructor(position: Position, size: Size, generateIdHandler: IGenerateId);
    move(): void;
}
export { GetFooterMotor };
