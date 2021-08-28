import {Position, PositionAttrs} from "../../../../src/domain/worker/position";
import {DimensionBase} from "../../../../src/domain/floor/dimension-base";


const makeDimension = (): DimensionBase => {
    class DimensionFake extends DimensionBase {
        constructor() {
            super();
            this.setWidth(100);
            this.setHeight(100);
        }
    }
    return new DimensionFake()
}

const squareDimension: DimensionBase = makeDimension()
const positionAttrs: PositionAttrs = { top: 0, left: 0};
let position: Position;

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(positionAttrs, squareDimension);
        expect(position).toBeInstanceOf(Position);
    });

    it('should retrieve positions correctly', function () {
        const positions = position.position();

        expect(positions.top).toBe(0);
        expect(positions.left).toBe(0);
    });

});