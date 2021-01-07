import {Dimension} from "../../../../src/domain/floor/Dimension";

describe("Dimension creation", () => {

    it('should create an dimension', function () {
        const dimension = new Dimension(100, 100);
        expect(dimension).toBeInstanceOf(Dimension);
    });

    it('should retriever an error on invalid dimension', function () {
        expect(() => {
            new Dimension(-100, -100);
        }).toThrow(Error);

        expect(() => {
            new Dimension(0, 0);
        }).toThrow(Error);
    });

    it('should retriever correctly dimension values', function () {
        const dimension = new Dimension(100, 100);

        expect(dimension.dimension().width).toBe(100);
        expect(dimension.dimension().height).toBe(100);
    });

});