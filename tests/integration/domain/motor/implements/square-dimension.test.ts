import {MotorBase} from "../../../../../src/domain/motor/MotorBase";
import {makeMotor} from "../../../../../src/helper/motor/motor-fake";

const motor: MotorBase = makeMotor()

describe('Test SquareDimension motor', function () {

    it('should retrieve the motor id', function () {
        expect(motor.id()).toBe("123456");
    });

    it('should move the motor for bottom', function () {
        while (motor.canMoveBottom()) {
            motor.move();
        }
        expect(motor.topPosition()).toBe(90);
    });

});