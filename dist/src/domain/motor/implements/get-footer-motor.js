"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFooterMotor = void 0;
const motor_base_1 = require("../motor-base");
class GetFooterMotor extends motor_base_1.MotorBase {
    constructor(position, size, generateIdHandler) {
        super(position, size, generateIdHandler);
    }
    move() {
        this._position.bottom(this._size.height);
    }
}
exports.GetFooterMotor = GetFooterMotor;
