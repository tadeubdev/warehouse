import {GetFooterMotor} from "../../../../../src/domain/motor/implements/GetFooterMotor";
import {SquareDimension} from "../../../../../src/domain/floor/implements/SquareDimension";
import {Position, PositionAttrs} from "../../../../../src/domain/worker/Position";
import {Size, SizeAttrs} from "../../../../../src/domain/worker/Size";
import {MotorBase} from "../../../../../src/domain/motor/MotorBase";
import {DimensionAttrs} from "../../../../../src/domain/floor/DimensionBase";

let motor: MotorBase;

describe('Test SquareDimension motor', function () {

    beforeAll(() => {
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);

        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension = new SquareDimension(dimensionAttrs);
        const position = new Position(positionAttrs, dimension);

        motor = new GetFooterMotor(position, size);
    });

    it('should retrieve the motor id', function () {
        expect(motor.id()).not.toBeNull();
    });

    it('should move the motor for bottom', function () {
        while (motor.canMoveBottom()) {
            motor.move();
        }
        expect(motor.topPosition()).toBe(90);
    });

});