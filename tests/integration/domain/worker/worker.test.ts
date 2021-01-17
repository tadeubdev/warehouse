import {Worker} from "../../../../src/domain/worker/Worker";
import {DimensionAttrs, DimensionBase} from "../../../../src/domain/floor/DimensionBase";
import {SquareDimension} from "../../../../src/domain/floor/implements/SquareDimension";
import {Position, PositionAttrs} from "../../../../src/domain/worker/Position";
import {Size, SizeAttrs} from "../../../../src/domain/worker/Size";
import {MotorBase} from "../../../../src/domain/motor/MotorBase";

const makeMotor = (): MotorBase => {
    const sizeAttrs: SizeAttrs = {width: 10, height: 10};
    const size: Size = new Size(sizeAttrs);
    const positionAttrs: PositionAttrs = {top: 0, left: 0};
    const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
    const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
    const position: Position = new Position(positionAttrs, dimension);

    class MotorFake extends MotorBase {
        constructor(position: Position, size: Size) {
            super(position, size);
        }
        move(): void {
            this._position.bottom(this._size.height);
        }
    }
    return new MotorFake(position, size)
}

const makeWorker = (): Worker => {
    const motor: MotorBase = makeMotor()
    return new Worker(motor)
}

const worker: Worker = makeWorker();

describe("Workers tests", () => {
    it('should move one step to bottom', function () {
        worker.move();
        expect(worker.position().top).toBe(10);
    });

    it('should retrieve size', function () {
        const size = worker.size();
        expect(size.width).toBe(10);
        expect(size.height).toBe(10);
    });
});