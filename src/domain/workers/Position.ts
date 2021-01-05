import Move, {MoveAttrs} from "./Move";

class Position
{
    protected x: number;
    protected y: number;
    protected _move: Move;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    position(): PositionAttrs {
        return {
            x: this.x,
            y: this.y
        };
    }

    protected toBottom(): MoveAttrs {
        this.y++;
        return this._move.move();
    }

    protected toTop(): MoveAttrs {
        this.y--;
        return this._move.move();
    }

    protected toLeft(): MoveAttrs {
        this.x--;
        return this._move.move();
    }

    protected toRight(): MoveAttrs {
        this.x++;
        return this._move.move();
    }
}

export interface PositionAttrs
{
    x: number;
    y: number;
};

export default Position;