import { IGenerateId } from "../../../infra/generate-id/igenerate-id";
import {Position} from "../../worker/position";
import {Size} from "../../worker/size";
import {MotorBase} from "../motor-base";

class GetFooterMotor extends MotorBase
{
    constructor(position: Position, size: Size, generateIdHandler: IGenerateId) {
        super(position, size, generateIdHandler);
    }

    move(): void {
        this._position.bottom(this._size.height);
    }
}

export {GetFooterMotor};