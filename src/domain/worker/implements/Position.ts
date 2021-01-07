import {Move} from "./Move";

class Position
{
    protected x: number;
    protected y: number;
    protected _move: Move;

    constructor(position: PositionAttrs) {
        Object.assign(this,  position);
    }

    setMove(move: Move): Position {
        this._move = move;
        return this;
    }

    private movementActions: PositionMovementAttrs = {
        bottom: () => this.toBottom(),
        top: () => this.toTop(),
        left: () => this.toLeft(),
        right: () => this.toRight(),
    };

    movements(direction: string = null): PositionMovementAttrs {
        if (!this._move) {
            throw new Error("The attr move was not instantiated yet.");
        }
        if (direction && this.movementActions[direction] !== undefined) {
            let movement = this.movementActions[direction];
            return movement();
        }
        return this.movementActions;
    };

    position(): PositionAttrs {
        return {
            x: this.x,
            y: this.y
        };
    }

    private toBottom(): PositionMovementAttrs {
        this.y++;
        return this._move.move();
    }

    private toTop(): PositionMovementAttrs {
        this.y--;
        return this._move.move();
    }

    private toLeft(): PositionMovementAttrs {
        this.x--;
        return this._move.move();
    }

    private toRight(): PositionMovementAttrs {
        this.x++;
        return this._move.move();
    }
}

interface PositionAttrs
{
    x: number;
    y: number;
};

interface PositionMovementAttrs
{
    bottom: () => PositionMovementAttrs;
    top: () => PositionMovementAttrs;
    left: () => PositionMovementAttrs;
    right: () => PositionMovementAttrs;
};

export { Position, PositionAttrs, PositionMovementAttrs };