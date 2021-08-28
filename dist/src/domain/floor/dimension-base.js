"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionBase = void 0;
class DimensionBase {
    constructor() {
        this._width = 0;
        this._height = 0;
    }
    width() {
        return this._width;
    }
    height() {
        return this._height;
    }
    dimension() {
        return {
            width: this._width,
            height: this._height,
        };
    }
    setWidth(width) {
        if (width <= 0) {
            throw new Error("The width must be greater than zero.");
        }
        this._width = width;
    }
    setHeight(height) {
        if (height <= 0) {
            throw new Error("The height must be greater than zero.");
        }
        this._height = height;
    }
}
exports.DimensionBase = DimensionBase;
