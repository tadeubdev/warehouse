import {Floor} from "../../../../src/domain/floor/Floor";
import {DimensionAttrs} from "../../../../src/domain/floor/DimensionBase";
import {SquareDimension} from "../../../../src/domain/floor/implements/SquareDimension";

describe("Floor creation", () => {

    it('should create an Floor', function () {
        const dimensionAttrs: DimensionAttrs = {width: 200, height: 200};
        const dimension = new SquareDimension(dimensionAttrs);
        const floor = new Floor(dimension);
        expect(floor).toBeInstanceOf(Floor);
    });

    it('should throw an error when pass invalid dimension', function () {
        expect(() => {
            const dimensionAttrs: DimensionAttrs = {width: -200, height: -400};
            const dimension = new SquareDimension(dimensionAttrs);
            new Floor(dimension);
        }).toThrow(Error);

        expect(() => {
            const dimensionAttrs: DimensionAttrs = {width: 0, height: 0};
            const dimension = new SquareDimension(dimensionAttrs);
            new Floor(dimension);
        }).toThrow(Error);
    });

});