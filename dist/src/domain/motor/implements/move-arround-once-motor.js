"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveArroundOnceMotor = void 0;
const motor_base_1 = require("../motor-base");
class MoveArroundOnceMotor extends motor_base_1.MotorBase {
    constructor(position, size, generateIdHandler) {
        super(position, size, generateIdHandler);
        this.moved = {
            right: false,
            bottom: false,
            left: false,
            top: false,
        };
        this.movedArround = false;
    }
    canMove() {
        return this.movedArround === false;
    }
    move() {
        if (this._position.canMoveRight() && this.moved.right === false) {
            this._position.right(this._size.width);
            this.moved.right = this._position.canMoveRight() === false;
            return;
        }
        if (this._position.canMoveBottom() && this.moved.bottom === false) {
            this._position.bottom(this._size.height);
            this.moved.bottom = this._position.canMoveBottom() === false;
            return;
        }
        if (this._position.canMoveLeft() && this.moved.left === false) {
            this._position.left(this._size.width);
            this.moved.left = this._position.canMoveLeft() === false;
            return;
        }
        if (this._position.canMoveTop() && this.moved.top === false) {
            this._position.top(this._size.height);
            this.moved.top = this._position.canMoveTop() === false;
            return;
        }
        this.movedArround = true;
    }
}
exports.MoveArroundOnceMotor = MoveArroundOnceMotor;
