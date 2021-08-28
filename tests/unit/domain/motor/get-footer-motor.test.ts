import { DimensionAttrs, DimensionBase } from "../../../../src/domain/floor/dimension-base";
import { SquareDimension } from "../../../../src/domain/floor/implements/square-dimension";
import { GetFooterMotor } from "../../../../src/domain/motor/implements/get-footer-motor";
import { PositionAttrs, Position } from "../../../../src/domain/worker/position";
import { SizeAttrs, Size } from "../../../../src/domain/worker/size";
import { IGenerateId } from "../../../../src/infra/generate-id/igenerate-id";
import { TimestampId } from "../../../../src/infra/generate-id/implements/timestamp-id";

describe("GetFooterMotor", () => {

    it('should move to the bottom of the footer', function () {
        const sizeAttrs: SizeAttrs = {width: 10, height: 10};
        const size: Size = new Size(sizeAttrs);

        const positionAttrs: PositionAttrs = {top: 0, left: 0};
        const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
        const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
        const position: Position = new Position(positionAttrs, dimension);
        const generateId: IGenerateId = new TimestampId();

        const motor = new GetFooterMotor(position, size, generateId);

        while (motor.canMoveBottom()) {
            motor.move();
        }

        const topPosition = motor.topPosition();

        expect(topPosition).toBe(90);
    });

});