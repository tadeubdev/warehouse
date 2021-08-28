abstract class DimensionBase
{
    protected _width: number = 0;
    protected _height: number = 0;

    width(): number {
        return this._width;
    }

    height(): number {
        return this._height;
    }

    dimension(): DimensionAttrs {
        return {
            width: this._width,
            height: this._height,
        };
    }

    protected setWidth(width: number) {
        if (width <= 0) {
            throw new Error("The width must be greater than zero.");
        }
        this._width = width;
    }

    protected setHeight(height: number) {
        if (height <= 0) {
            throw new Error("The height must be greater than zero.");
        }
        this._height = height;
    }
}

interface DimensionAttrs
{
    width: number;
    height: number;
}

export {DimensionBase, DimensionAttrs};