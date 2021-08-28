import {Position, PositionAttrs} from "../../../../src/domain/worker/position";
import {Size, SizeAttrs} from "../../../../src/domain/worker/size";
import {DimensionAttrs, DimensionBase} from "../../../../src/domain/floor/dimension-base";
import {SquareDimension} from "../../../../src/domain/floor/implements/square-dimension";

const positionAttrs: PositionAttrs = { top: 0, left: 0};
const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
const squareDimension: DimensionBase = new SquareDimension(dimensionAttrs);

const sizeAttrs: SizeAttrs = {width: 10, height: 10};
const size: Size = new Size(sizeAttrs);

let position: Position;

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(positionAttrs, squareDimension);
        expect(position).toBeInstanceOf(Position);
    });

    it('should set a mover correctly', function () {
        position.right(size.width);

        const positions = position.position();
        expect(positions.left).toBe(10);
    });

});