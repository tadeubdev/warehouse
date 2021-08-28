import {Floor} from "../../../../src/domain/floor/floor";
import {DimensionAttrs, DimensionBase} from "../../../../src/domain/floor/dimension-base";
import {SquareDimension} from "../../../../src/domain/floor/implements/square-dimension";

describe("Floor dimensions", () => {

    it('should retrieve the floor dimensions correctly', function () {
        const dimensionAttrs: DimensionAttrs = {width: 400, height: 200};
        const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
        const floor = new Floor(dimension);

        expect(floor.width()).toBe(400);
        expect(floor.height()).toBe(200);
    });

});