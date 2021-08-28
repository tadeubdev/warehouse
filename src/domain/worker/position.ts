import {DimensionBase} from "../floor/dimension-base";

class Position {
    private readonly _canMove: PositionCanMoveAttrs;
    protected _top: number;
    protected _left: number;
    private _dimension: DimensionBase;

    constructor(position: PositionAttrs, dimension: DimensionBase) {
        this._top = position.top;
        this._left = position.left;
        this._dimension = dimension;
        this._canMove = {
            top: false,
            bottom: true,
            left: false,
            right: true,
        };
    }

    position(): PositionAttrs {
        return {
            top: this._top,
            left: this._left
        };
    }

    top(size: number) {
        this._top -= size;
        this.generateCanMove(size);
    }

    bottom(size: number) {
        this._top += size;
        this.generateCanMove(size);
    }

    left(size: number) {
        this._left -= size;
    }

    right(size: number) {
        this._left += size;
    }

    canMove(): PositionCanMoveAttrs {
        return this._canMove;
    }

    private generateCanMove(height: number) {
        this._canMove.bottom = this._dimension.height() > this._top + height;
    }
}

interface PositionAttrs {
    top: number;
    left: number;
};

interface PositionCanMoveAttrs {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}

export {Position, PositionAttrs, PositionCanMoveAttrs};