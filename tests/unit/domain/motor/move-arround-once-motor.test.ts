import { DimensionAttrs, DimensionBase } from "../../../../src/domain/floor/dimension-base";
import { SquareDimension } from "../../../../src/domain/floor/implements/square-dimension";
import { MoveArroundOnceMotor } from "../../../../src/domain/motor/implements/move-arround-once-motor";
import { PositionAttrs, Position } from "../../../../src/domain/worker/position";
import { SizeAttrs, Size } from "../../../../src/domain/worker/size";
import { IGenerateId } from "../../../../src/infra/generate-id/igenerate-id";
import { TimestampId } from "../../../../src/infra/generate-id/implements/timestamp-id";

describe("MoveArroundOnceMotor", () => {

    it('should move arround the floor once', function () {
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);

        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
        const position: Position = new Position(positionAttrs, dimension);
        const generateId: IGenerateId = new TimestampId();
        const motor = new MoveArroundOnceMotor(position, size, generateId);
        while (motor.canMove()) {
            motor.move();
        }
        const topPosition = motor.topPosition();
        const leftPosition = motor.leftPosition();
        expect(topPosition).toBe(0);
        expect(leftPosition).toBe(0);
    });

});