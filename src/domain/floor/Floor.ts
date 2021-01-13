import {SquareDimension} from "./implements/SquareDimension";
import {DimensionAttrs, DimensionBase} from "./DimensionBase";

class Floor
{
    private readonly _dimension: SquareDimension;

    constructor(dimension: DimensionBase) {
        this._dimension = dimension;
    }

    dimension(): DimensionAttrs {
        return this._dimension.dimension();
    }

    width(): number {
        return this._dimension.width();
    }

    height(): number {
        return this._dimension.height();
    }
}

export {Floor};