import Move, {MoveAttrs} from "./Move";
import {PositionAttrs} from "./Position";

class Worker
{
    protected _move: Move;

    constructor() {
        this._move = new Move();
    }

    move(direction: string = null): MoveAttrs {
        return this._move.move(direction);
    }

    position(): PositionAttrs {
        return this._move.position();
    }
}

export default Worker;