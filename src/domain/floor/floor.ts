import {SquareDimension} from "./implements/square-dimension";
import {DimensionAttrs, DimensionBase} from "./dimension-base";

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