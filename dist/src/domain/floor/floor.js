"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Floor = void 0;
class Floor {
    constructor(dimension) {
        this._dimension = dimension;
    }
    dimension() {
        return this._dimension.dimension();
    }
    width() {
        return this._dimension.width();
    }
    height() {
        return this._dimension.height();
    }
}
exports.Floor = Floor;
