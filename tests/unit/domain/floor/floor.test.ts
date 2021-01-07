import {Floor} from "../../../../src/domain/floor/Floor";

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

});