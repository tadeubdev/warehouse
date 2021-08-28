declare abstract class DimensionBase {
    protected _width: number;
    protected _height: number;
    width(): number;
    height(): number;
    dimension(): DimensionAttrs;
    protected setWidth(width: number): void;
    protected setHeight(height: number): void;
}
interface DimensionAttrs {
    width: number;
    height: number;
}
export { DimensionBase, DimensionAttrs };
