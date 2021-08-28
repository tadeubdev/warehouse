const { SquareDimension } = require("../src/domain/floor/implements/square-dimension");
const { GetFooterMotor } = require("../src/domain/motor/implements/get-footer-motor");
const { Position } = require("../src/domain/worker/position");
const { Size } = require("../src/domain/worker/size");
const { TimestampId } = require("../src/infra/generate-id/implements/timestamp-id");

const sizeAttrs = {width: 10, height: 10};
const size = new Size(sizeAttrs);

const positionAttrs = {top: 0, left: 0};
const dimensionAttrs = {width: 100, height: 100};
const dimension = new SquareDimension(dimensionAttrs);
const position = new Position(positionAttrs, dimension);
const generateId = new TimestampId();

const motor = new GetFooterMotor(position, size, generateId);

while (motor.canMoveBottom()) {
    motor.move();
}

console.log(motor.topPosition()); // prints: 90