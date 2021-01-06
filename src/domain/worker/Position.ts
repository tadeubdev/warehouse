import Move, {MoveAttrs} from "./Move";

class Position
{
    protected x: number;
    protected y: number;
    protected _move: Move;

    constructor(x: number, y: number, move: Move) {
        this.x = x;
        this.y = y;
        this._move = move;
    }

    movements = {
        bottom: () => this.toBottom(),
        top: () => this.toTop(),
        left: () => this.toLeft(),
        right: () => this.toRight(),
    };

    position(): PositionAttrs {
        return {
            x: this.x,
            y: this.y
        };
    }

    private toBottom(): MoveAttrs {
        this.y++;
        return this._move.move();
    }

    private toTop(): MoveAttrs {
        this.y--;
        return this._move.move();
    }

    private toLeft(): MoveAttrs {
        this.x--;
        return this._move.move();
    }

    private toRight(): MoveAttrs {
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