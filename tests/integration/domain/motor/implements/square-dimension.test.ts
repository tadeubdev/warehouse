import {EverBottomMotor} from "../../../../../src/domain/motor/implements/EverBottomMotor";
import {SquareDimension} from "../../../../../src/domain/floor/implements/SquareDimension";
import {Position, PositionAttrs} from "../../../../../src/domain/worker/Position";
import {Size, SizeAttrs} from "../../../../../src/domain/worker/Size";
import {Event} from "../../../../../src/domain/Event/Event";
import {MotorBase} from "../../../../../src/domain/motor/MotorBase";

let motor: MotorBase;

describe('Test SquareDimension motor', function () {

    it('should move the motor', function () {
        const dimension = new SquareDimension(100, 100);
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);
        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const position = new Position(positionAttrs, dimension);

        motor = new EverBottomMotor(dimension, position, size);
        motor.move();

        expect(motor.position().top).toBe(10);
    });

    it('should move the motor for bottom', function () {
        const dimension = new SquareDimension(100, 100);
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);
        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const position = new Position(positionAttrs, dimension);

        motor = new EverBottomMotor(dimension, position, size);

        while (motor.canMoveBottom()) {
            motor.move();
        }

        expect(motor.position().top).toBe(90);
    });

});