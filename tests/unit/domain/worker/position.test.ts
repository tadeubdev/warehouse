import {Position, PositionAttrs} from "../../../../src/domain/worker/Position";

const attrs: PositionAttrs = { top: 0, left: 0};
let position: Position;

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(attrs);
        expect(position).toBeInstanceOf(Position);
    });

    it('should retrieve positions correctly', function () {
        const positions = position.position();

        expect(positions.top).toBe(0);
        expect(positions.left).toBe(0);
    });

});