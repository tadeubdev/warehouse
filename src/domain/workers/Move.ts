import Position from "./Position";

class Move extends Position
{
    constructor() {
        super(0, 0);
        this._move = this;
    }

    private movements = {
        bottom: () => this.toBottom(),
        top: () => this.toTop(),
        left: () => this.toLeft(),
        right: () => this.toRight(),
    };

    move(direction: string = null): MoveAttrs {
        if (direction && this.movements[direction] !== undefined) {
            let movement = this.movements[direction];
            return movement();
        }
        return this.movements;
    }
}

export interface MoveAttrs
{
    move?: () => MoveAttrs;
    bottom: () => MoveAttrs;
    top: () => MoveAttrs;
    left: () => MoveAttrs;
    right: () => MoveAttrs;
};

export default Move;