import {Position, PositionAttrs} from "../../worker/Position";
import {Size} from "../../worker/Size";
import {DimensionBase} from "../../floor/DimensionBase";
import {MotorBase} from "../MotorBase";

class EverBottomMotor extends MotorBase
{
    constructor(dimension: DimensionBase, position: Position, size: Size) {
        super(dimension, position, size);
    }

    move(): void {
        this._position.bottom(this._size.height);
    }
}

export {EverBottomMotor};