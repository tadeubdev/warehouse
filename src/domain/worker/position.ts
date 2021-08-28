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

    positionTop(): number {
        return this._top;
    }

    positionLeft(): number {
        return this._left;
    }

    top(size: number) {
        this._top -= size;
        this.generateCanMoveVertically(size);
    }

    bottom(size: number) {
        this._top += size;
        this.generateCanMoveVertically(size);
    }

    left(size: number) {
        this._left -= size;
        this.generateCanMoveHorizontally(size);
    }

    right(size: number) {
        this._left += size;
        this.generateCanMoveHorizontally(size);
    }

    canMoveTop(): boolean {
        return this._canMove.top;
    }

    canMoveBottom(): boolean {
        return this._canMove.bottom;
    }

    canMoveLeft(): boolean {
        return this._canMove.left;
    }

    canMoveRight(): boolean {
        return this._canMove.right;
    }

    private generateCanMoveHorizontally(width: number) {
        this._canMove.left = this._left >= width;
        this._canMove.right = this._left + width < this._dimension.width();
    }

    private generateCanMoveVertically(height: number) {
        this._canMove.top = this._top >= height;
        this._canMove.bottom = this._top + height < this._dimension.height();
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