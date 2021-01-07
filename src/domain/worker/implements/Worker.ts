import {Move} from "./Move";
import {PositionAttrs, PositionMovementAttrs} from "./Position";
import {SizeAttrs} from "./Size";
import {IWorker} from "../IWorker";

class Worker implements IWorker
{
    protected _move: Move;

    constructor(position: PositionAttrs, size: SizeAttrs) {
        this._move = new Move(position, size);
    }

    move(direction?: string): PositionMovementAttrs {
        return this._move.move(direction);
    }

    size(): SizeAttrs {
        return this._move.size();
    }

    position(): PositionAttrs {
        return this._move.position();
    }
}

export {Worker};