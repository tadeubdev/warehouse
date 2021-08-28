"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mover = void 0;
class Mover {
    constructor(motor) {
        this._motor = motor;
    }
    move() {
        this._motor.move();
    }
}
exports.Mover = Mover;
