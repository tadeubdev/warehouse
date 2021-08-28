declare class Size {
    width: number;
    height: number;
    constructor(size: SizeAttrs);
    size(): SizeAttrs;
}
interface SizeAttrs {
    width: number;
    height: number;
}
export { Size, SizeAttrs };
