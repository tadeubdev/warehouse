import {DimensionAttrs, DimensionBase} from "../dimension-base";

class SquareDimension extends DimensionBase
{
    constructor(dimension: DimensionAttrs) {
        super();
        this.setWidth(dimension.width);
        this.setHeight(dimension.height);
    }
}

export {SquareDimension};