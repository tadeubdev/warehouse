# warehouse

For now, you can create some motor.

```ts
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

console.log(motor.topPosition()); // prints: 90
```