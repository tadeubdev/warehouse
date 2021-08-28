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
    positionTop() {
        return this._top;
    }
    positionLeft() {
        return this._left;
    }
    top(size) {
        this._top -= size;
        this.generateCanMoveVertically(size);
    }
    bottom(size) {
        this._top += size;
        this.generateCanMoveVertically(size);
    }
    left(size) {
        this._left -= size;
        this.generateCanMoveHorizontally(size);
    }
    right(size) {
        this._left += size;
        this.generateCanMoveHorizontally(size);
    }
    canMoveTop() {
        return this._canMove.top;
    }
    canMoveBottom() {
        return this._canMove.bottom;
    }
    canMoveLeft() {
        return this._canMove.left;
    }
    canMoveRight() {
        return this._canMove.right;
    }
    generateCanMoveHorizontally(width) {
        this._canMove.left = this._left >= width;
        this._canMove.right = this._left + width < this._dimension.width();
    }
    generateCanMoveVertically(height) {
        this._canMove.top = this._top >= height;
        this._canMove.bottom = this._top + height < this._dimension.height();
    }
}
exports.Position = Position;
;
