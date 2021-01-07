import {Position, PositionAttrs, PositionMovementAttrs} from "./Position";
import {Size, SizeAttrs} from "./Size";

class Move
{
    private _position: Position;
    private _size: Size;

    constructor(position: PositionAttrs, size: SizeAttrs) {
        this._position = new Position(position);
        this._position.setMove(this);

        this._size = new Size(size);
    }

    position(): PositionAttrs {
        return this._position.position();
    }

    size(): SizeAttrs {
        return this._size.size();
    }

    move(direction: string = null): PositionMovementAttrs {
        return this._position.movements(direction);
    }
}

export {Move};