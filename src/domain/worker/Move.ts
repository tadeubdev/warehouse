import Position, {PositionAttrs} from "./Position";

class Move
{
    private _position: Position;

    constructor() {
        this._position = new Position(0, 0, this);
    }

    position(): PositionAttrs {
        return this._position.position();
    }

    move(direction: string = null): MoveAttrs {
        if (direction && this._position.movements[direction] !== undefined) {
            let movement = this._position.movements[direction];
            return movement();
        }
        return this._position.movements;
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