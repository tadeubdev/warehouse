import {MotorBase} from "../../domain/motor/motor-base";
import {Size, SizeAttrs} from "../../domain/worker/size";
import {Position, PositionAttrs} from "../../domain/worker/position";
import {DimensionAttrs, DimensionBase} from "../../domain/floor/dimension-base";
import {SquareDimension} from "../../domain/floor/implements/square-dimension";
import {makeGenerateId} from "./generate-fake-id";

export const makeMotor = (): MotorBase => {
    const sizeAttrs: SizeAttrs = {width: 10, height: 10};
    const size: Size = new Size(sizeAttrs);
    const positionAttrs: PositionAttrs = {top: 0, left: 0};
    const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
    const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
    const position: Position = new Position(positionAttrs, dimension);

    const generateId = makeGenerateId();

    class MotorFake extends MotorBase {
        constructor(position: Position, size: Size) {
            super(position, size, generateId);
        }
        move(): void {
            this._position.bottom(this._size.height);
        }
    }
    return new MotorFake(position, size)
}