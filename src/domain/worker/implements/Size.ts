class Size
{
    private readonly width: number;
    private readonly height: number;

    constructor(size: SizeAttrs) {
        Object.assign(this,  size);
    }

    size(): SizeAttrs {
        return {
            width: this.width,
            height: this.height,
        };
    }
}

interface SizeAttrs {
    width: number;
    height: number;
}

export {Size, SizeAttrs};