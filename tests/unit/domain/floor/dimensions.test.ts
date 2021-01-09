import {SquareDimension} from "../../../../src/domain/floor/implements/SquareDimension";

describe("Dimension creation", () => {

    it('should create an dimension', function () {
        const dimension = new SquareDimension(100, 100);
        expect(dimension).toBeInstanceOf(SquareDimension);
    });

    it('should retriever an error on invalid dimension', function () {
        expect(() => {
            new SquareDimension(-100, -100);
        }).toThrow(Error);

        expect(() => {
            new SquareDimension(0, 0);
        }).toThrow(Error);
    });

    it('should retriever correctly dimension values', function () {
        const dimension = new SquareDimension(100, 100);

        expect(dimension.dimension().width).toBe(100);
        expect(dimension.dimension().height).toBe(100);
    });

});