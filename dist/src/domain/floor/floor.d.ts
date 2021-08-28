import { DimensionAttrs, DimensionBase } from "./dimension-base";
declare class Floor {
    private readonly _dimension;
    constructor(dimension: DimensionBase);
    dimension(): DimensionAttrs;
    width(): number;
    height(): number;
}
export { Floor };
