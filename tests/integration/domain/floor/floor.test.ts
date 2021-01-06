import Floor from "../../../../src/domain/floor/Floor";

describe("Floor creation", () => {

    it('should create an Floor', function () {
        const floor = new Floor(200, 200);
        expect(floor).toBeInstanceOf(Floor);
    });

    it('should throw an error when pass invalid dimension', function () {
        expect(() => {
            new Floor(-200, -400);
        }).toThrow(Error);

        expect(() => {
            new Floor(0, 0);
        }).toThrow(Error);
    });

    it('should retrieve the floor dimensions correctly', function () {
        const floor = new Floor(400, 200);

        const dimension = floor.dimension();

        expect(dimension.width).toBe(400);
        expect(dimension.height).toBe(200);
    });

});