import {SquareDimension} from "./implements/SquareDimension";
import {DimensionAttrs} from "./DimensionBase";

class Floor
{
    private readonly _dimension: SquareDimension;

    constructor(width: number, height: number) {
        this._dimension = new SquareDimension(width, height);
    }

    dimension(): DimensionAttrs {
        return this._dimension.dimension();
    }
}

export {Floor};