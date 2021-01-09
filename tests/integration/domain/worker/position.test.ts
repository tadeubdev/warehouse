import {Position, PositionAttrs} from "../../../../src/domain/worker/Position";
import {Mover} from "../../../../src/domain/worker/Mover";
import {SizeAttrs} from "../../../../src/domain/worker/Size";

const positionAttrs: PositionAttrs = { top: 0, left: 0};
const sizeAttrs: SizeAttrs = { width: 100, height: 100 };
let position: Position;

const mover = new Mover(positionAttrs, sizeAttrs);

describe('Position creation', function () {

    it('should create a valid position', function () {
        position = new Position(positionAttrs);
        expect(position).toBeInstanceOf(Position);
    });

    it('should retriever an error before set a mover', function () {
        try {
            position.movements("top");
        } catch (e) {
            expect(e.message).toBe("The attr mover was not instantiated yet.");
        }
    });

    it('should set a mover correctly', function () {
        position.setMover(mover).movements("bottom");

        const positions = position.position();
        expect(positions.left).toBe(1);
    });

});