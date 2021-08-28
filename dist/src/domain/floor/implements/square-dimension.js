"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareDimension = void 0;
const dimension_base_1 = require("../dimension-base");
class SquareDimension extends dimension_base_1.DimensionBase {
    constructor(dimension) {
        super();
        this.setWidth(dimension.width);
        this.setHeight(dimension.height);
    }
}
exports.SquareDimension = SquareDimension;
