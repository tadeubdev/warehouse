import { IGenerateId } from "../../../infra/generate-id/igenerate-id";
import {Position} from "../../worker/position";
import {Size} from "../../worker/size";
import {MotorBase} from "../motor-base";

class MoveArroundOnceMotor extends MotorBase {
    private moved = {
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

export {MoveArroundOnceMotor};