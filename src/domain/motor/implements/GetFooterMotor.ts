import {Position} from "../../worker/Position";
import {Size} from "../../worker/Size";
import {DimensionBase} from "../../floor/DimensionBase";
import {MotorBase} from "../MotorBase";

class GetFooterMotor extends MotorBase
{
    constructor(dimension: DimensionBase, position: Position, size: Size) {
        super(dimension, position, size);
    }

    start(): void {
        while (this.canMoveBottom()) {
            this._position.bottom(this._size.height);
        }
    }
}

export {GetFooterMotor};