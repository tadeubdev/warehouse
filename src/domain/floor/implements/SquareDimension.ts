import {DimensionAttrs, DimensionBase} from "../DimensionBase";

class SquareDimension extends DimensionBase
{
    constructor(width: number, height: number) {
        super();
        this.setWidth(width);
        this.setHeight(height);
    }
}

export {SquareDimension};