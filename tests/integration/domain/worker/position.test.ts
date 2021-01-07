import {Position, PositionAttrs} from "../../../../src/domain/worker/implements/Position";
import {Move} from "../../../../src/domain/worker/implements/Move";
import {SizeAttrs} from "../../../../src/domain/worker/implements/Size";

const positionAttrs: PositionAttrs = { x: 0, y: 0};
const sizeAttrs: SizeAttrs = { width: 100, height: 100 };
let position: Position;

const move = new Move(positionAttrs, sizeAttrs);

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(positionAttrs);
        expect(position).toBeInstanceOf(Position);
    });

    it('should retriever an error before set a move', function () {
        try {
            position.movements("top");
        } catch (e) {
            expect(e.message).toBe("The attr move was not instantiated yet.");
        }
    });

    it('should set a move correctly', function () {
        position.setMove(move).movements("bottom");

        const positions = position.position();
        expect(positions.y).toBe(1);
    });

});