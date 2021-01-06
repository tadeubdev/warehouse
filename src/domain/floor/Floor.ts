import Dimension, {DimensionAttrs} from "./Dimension";

class Floor
{
    private readonly _dimension: Dimension;

    constructor(width: number, height: number) {
        this._dimension = new Dimension(width, height);
    }

    dimension(): DimensionAttrs {
        return this._dimension.dimension();
    }
}

export default Floor;