"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
class Size {
    constructor(size) {
        Object.assign(this, size);
    }
    size() {
        return {
            width: this.width,
            height: this.height,
        };
    }
}
exports.Size = Size;
