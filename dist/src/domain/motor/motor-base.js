"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorBase = void 0;
const motor_event_1 = require("../events/implements/motor-event");
class MotorBase {
    constructor(position, size, generateIdHandler) {
        this.generateId(generateIdHandler);
        this._position = position;
        this._size = size;
        this._event = new motor_event_1.MotorEvent(this);
    }
    id() {
        return this._id;
    }
    position() {
        return this._position.position();
    }
    size() {
        return this._size.size();
    }
    canMoveTop() {
        return this._position.canMove().top;
    }
    canMoveBottom() {
        return this._position.canMove().bottom;
    }
    canMoveLeft() {
        return this._position.canMove().left;
    }
    canMoveRight() {
        return this._position.canMove().right;
    }
    generateId(handler) {
        this._id = handler.getId();
    }
    topPosition() {
        return this._position.position().top;
    }
    leftPosition() {
        return this._position.position().left;
    }
}
exports.MotorBase = MotorBase;
