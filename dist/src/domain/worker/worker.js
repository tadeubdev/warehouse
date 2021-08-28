"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const mover_1 = require("./mover");
class Worker {
    constructor(motor) {
        this._motor = motor;
        this._mover = new mover_1.Mover(motor);
    }
    move() {
        this._mover.move();
    }
    position() {
        return this._motor.position();
    }
    size() {
        return this._motor.size();
    }
}
exports.Worker = Worker;
