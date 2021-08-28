"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Position = void 0;
class Position {
    constructor(position, dimension) {
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
    position() {
        return {
            top: this._top,
            left: this._left
        };
    }
    top(size) {
        this._top -= size;
        this.generateCanMove(size);
    }
    bottom(size) {
        this._top += size;
        this.generateCanMove(size);
    }
    left(size) {
        this._left -= size;
    }
    right(size) {
        this._left += size;
    }
    canMove() {
        return this._canMove;
    }
    generateCanMove(height) {
        this._canMove.bottom = this._dimension.height() > this._top + height;
    }
}
exports.Position = Position;
;
