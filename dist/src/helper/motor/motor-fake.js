"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMotor = void 0;
const motor_base_1 = require("../../domain/motor/motor-base");
const size_1 = require("../../domain/worker/size");
const position_1 = require("../../domain/worker/position");
const square_dimension_1 = require("../../domain/floor/implements/square-dimension");
const generate_fake_id_1 = require("./generate-fake-id");
const makeMotor = () => {
    const sizeAttrs = { width: 10, height: 10 };
    const size = new size_1.Size(sizeAttrs);
    const positionAttrs = { top: 0, left: 0 };
    const dimensionAttrs = { width: 100, height: 100 };
    const dimension = new square_dimension_1.SquareDimension(dimensionAttrs);
    const position = new position_1.Position(positionAttrs, dimension);
    const generateId = generate_fake_id_1.makeGenerateId();
    class MotorFake extends motor_base_1.MotorBase {
        constructor(position, size) {
            super(position, size, generateId);
        }
        move() {
            this._position.bottom(this._size.height);
        }
    }
    return new MotorFake(position, size);
};
exports.makeMotor = makeMotor;
