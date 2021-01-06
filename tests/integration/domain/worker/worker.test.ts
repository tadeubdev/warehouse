import Worker from "../../../../src/domain/worker/Worker";
const worker = new Worker();

describe("Workers tests", () => {

    it('can create an worker', function () {
        expect(worker).toBeInstanceOf(Worker);
    });

    it('should move one step to bottom', function () {
        worker.move().bottom();
        expect(worker.position().y).toBe(1);
    });

    it('should move one step to top', function () {
        worker.move().top();
        expect(worker.position().y).toBe(0);
    });

    it('should move two steps to the right', function () {
        worker.move().right().right();
        expect(worker.position().x).toBe(2);
    });

    it('should move two steps to the left', function () {
        worker.move().left().left();
        expect(worker.position().x).toBe(0);
    });

    it('should pass movement to move method', function () {
        worker.move("right");
        expect(worker.position().x).toBe(1);
    });

});