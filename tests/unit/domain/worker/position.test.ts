import {Position, PositionAttrs} from "../../../../src/domain/worker/implements/Position";

const attrs: PositionAttrs = { x: 0, y: 0};
let position: Position;

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(attrs);
        expect(position).toBeInstanceOf(Position);
    });

    it('should retrieve positions correctly', function () {
        const positions = position.position();

        expect(positions.x).toBe(0);
        expect(positions.y).toBe(0);
    });

});