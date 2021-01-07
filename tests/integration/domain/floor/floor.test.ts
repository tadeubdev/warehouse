import {Floor} from "../../../../src/domain/floor/Floor";

describe("Floor dimensions", () => {

    it('should retrieve the floor dimensions correctly', function () {
        const floor = new Floor(400, 200);

        const dimension = floor.dimension();

        expect(dimension.width).toBe(400);
        expect(dimension.height).toBe(200);
    });

});