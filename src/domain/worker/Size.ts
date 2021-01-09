class Size
{
    width: number;
    height: number;

    constructor(size: SizeAttrs) {
        Object.assign(this,  size);
    }
}

interface SizeAttrs {
    width: number;
    height: number;
}

export {Size, SizeAttrs};