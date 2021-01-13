import {Worker} from "../../../../src/domain/worker/Worker";
import {GetFooterMotor} from "../../../../src/domain/motor/implements/GetFooterMotor";
import {DimensionAttrs, DimensionBase} from "../../../../src/domain/floor/DimensionBase";
import {SquareDimension} from "../../../../src/domain/floor/implements/SquareDimension";
import {Position, PositionAttrs} from "../../../../src/domain/worker/Position";
import {Size, SizeAttrs} from "../../../../src/domain/worker/Size";

let worker: Worker;

describe("Workers tests", () => {

    beforeAll(() => {
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);

        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
        const position: Position = new Position(positionAttrs, dimension);

        const motor = new GetFooterMotor(position, size);

        worker = new Worker(motor);
    })

    it('can create an worker', function () {
        expect(worker).toBeInstanceOf(Worker);
    });

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