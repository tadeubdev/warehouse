import {Move} from "./Move";
import {PositionAttrs, PositionMovementAttrs} from "./Position";
import {SizeAttrs} from "./Size";
import {IWorker} from "../IWorker";

class WorkerAutoCreated implements IWorker
{
    protected _move: Move;

    constructor() {
        const position: PositionAttrs = { x: 0, y: 0 };
        const size: SizeAttrs = { width: 100, height: 100 };

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

export {WorkerAutoCreated};