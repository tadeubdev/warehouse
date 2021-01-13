import {GetFooterMotor} from "../../../../../src/domain/motor/implements/GetFooterMotor";
import {SquareDimension} from "../../../../../src/domain/floor/implements/SquareDimension";
import {Position, PositionAttrs} from "../../../../../src/domain/worker/Position";
import {Size, SizeAttrs} from "../../../../../src/domain/worker/Size";
import {MotorBase} from "../../../../../src/domain/motor/MotorBase";

let motor: MotorBase;

describe('Test SquareDimension motor', function () {

    it('should move the motor for bottom', function () {
        const dimension = new SquareDimension(100, 100);
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);
        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const position = new Position(positionAttrs, dimension);

        motor = new GetFooterMotor(dimension, position, size);

        while (motor.canMoveBottom()) {
            motor.move();
        }

        expect(motor.topPosition()).toBe(90);
    });

});