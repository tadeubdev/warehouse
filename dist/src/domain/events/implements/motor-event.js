"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorEvent = void 0;
class MotorEvent {
    constructor(motor) {
        this._motor = motor;
    }
    notify(payload) {
        if (payload.data.id === this._motor.id()) {
            this._motor.move();
        }
    }
}
exports.MotorEvent = MotorEvent;
