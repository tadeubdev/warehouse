var Size = require("../dist/src/domain/worker/size").Size;
var SquareDimension = require("../dist/src/domain/floor/implements/square-dimension").SquareDimension;
var Position = require("../dist/src/domain/worker/position").Position;
var TimestampId = require("../dist/src/infra/generate-id/implements/timestamp-id").TimestampId;
var MoveArroundOnceMotor = require("../dist/src/domain/motor/implements/").MoveArroundOnceMotor;

var sizeAttrs = {width: 10, height: 10};
var size = new Size(sizeAttrs);

var positionAttrs = {top: 0, left: 0};
var dimensionAttrs = {width: 100, height: 100};
var dimension = new SquareDimension(dimensionAttrs);
var position = new Position(positionAttrs, dimension);
var generateId = new TimestampId();

var motor = new MoveArroundOnceMotor(position, size, generateId);

while (motor.canMoveBottom()) {
    motor.move();
}

console.log(motor.topPosition()); // prints: 90