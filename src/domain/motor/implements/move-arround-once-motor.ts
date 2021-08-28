import { IGenerateId } from "../../../infra/generate-id/igenerate-id";
import {Position} from "../../worker/position";
import {Size} from "../../worker/size";
import {MotorBase} from "../motor-base";

class MoveArroundOnceMotor extends MotorBase {
    private moved = {
        first: false,
        right: false,
        bottom: false,
        left: false,
        top: false,
    };
    private movedArround: boolean = false;

    constructor(position: Position, size: Size, generateIdHandler: IGenerateId) {
        super(position, size, generateIdHandler);
    }

    canMove(): boolean {
        return this.movedArround === false;
    }

    move(): void {
        if (this.moved.first === false) {
            this._position.right(this._size.width);
            this.moved.first = true;
            return;
        }
        if (this._position.canMoveRight() === false && this.moved.right === false) {
            this.moved.right = true;
        }
        if (this._position.canMoveBottom() === false && this.moved.bottom === false) {
            this.moved.bottom = true;
        }
        if (this._position.canMoveRight() === false && this.moved.right === false) {
            this.moved.right = true;
        }
        if (this._position.canMoveTop() === false && this.moved.top === false) {
            this.moved.top = true;
        }
        if (this._position.canMoveRight() && this.moved.right === false) {
            this._position.right(this._size.width);
            return;
        }
        if (this.moved.bottom === false && this._position.canMoveBottom() && this.moved.ribottomght === false) {
            this._position.bottom(this._size.height);
            return;
        }
        if (this._position.canMoveLeft() && this.moved.left === false) {
            this._position.left(this._size.width);
            return;
        }
        if (this._position.canMoveTop() && this.moved.top === false) {
            this._position.top(this._size.height);
            return;
        }
        this.movedArround = true;
    }
}

export {MoveArroundOnceMotor};