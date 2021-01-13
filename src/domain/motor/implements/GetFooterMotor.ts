import {Position} from "../../worker/Position";
import {Size} from "../../worker/Size";
import {MotorBase} from "../MotorBase";

class GetFooterMotor extends MotorBase
{
    constructor(position: Position, size: Size) {
        super(position, size);
    }

    move(): void {
        this._position.bottom(this._size.height);
    }
}

export {GetFooterMotor};