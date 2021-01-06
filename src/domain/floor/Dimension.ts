class Dimension
{
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.setWidth(width);
        this.setHeight(height);
    }

    private setWidth(width: number) {
        if (width <= 0) {
            throw new Error("The width must be greater than zero.");
        }
        this.width = width;
    }

    private setHeight(height: number) {
        if (height <= 0) {
            throw new Error("The height must be greater than zero.");
        }
        this.height = height;
    }

    dimension(): DimensionAttrs {
        return {
            width: this.width,
            height: this.height,
        };
    }
}

export interface DimensionAttrs
{
    width: number;
    height: number;
};

export default Dimension;