import {Worker} from "../../../../src/domain/worker/Worker";
import {makeWorker} from "../../../../src/helper/worker/workerFake";

const worker: Worker = makeWorker();

describe("Workers tests", () => {
    it('should move one step to bottom', function () {
        worker.move();
        expect(worker.position().top).toBe(10);
    });

    it('should retrieve size', function () {
        const size = worker.size();
        expect(size.width).toBe(10);
        expect(size.height).toBe(10);
    });
});