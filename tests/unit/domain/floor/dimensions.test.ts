import {SquareDimension} from "../../../../src/domain/floor/implements/square-dimension";
import {DimensionAttrs, DimensionBase} from "../../../../src/domain/floor/dimension-base";

describe("Dimension creation", () => {

    it('should create an dimension', function () {
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension = new SquareDimension(dimensionAttrs);
        expect(dimension).toBeInstanceOf(SquareDimension);
    });

    it('should retriever an error on invalid dimension', function () {
        expect(() => {
            const dimensionAttrs: DimensionAttrs = {width: -100, height: -100};
            new SquareDimension(dimensionAttrs);
        }).toThrow(Error);

        expect(() => {
            const dimensionAttrs: DimensionAttrs = {width: 0, height: 0};
            new SquareDimension(dimensionAttrs);
        }).toThrow(Error);
    });

    it('should retriever correctly dimension values', function () {
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension = new SquareDimension(dimensionAttrs);

        expect(dimension.dimension().width).toBe(100);
        expect(dimension.dimension().height).toBe(100);
    });

});