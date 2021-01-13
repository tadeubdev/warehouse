# warehouse

For now, you can create some motor.

```ts
const sizeAttrs: SizeAttrs = {width: 10, height: 10};
const size: Size = new Size(sizeAttrs);

const positionAttrs: PositionAttrs = {top: 0, left: 0};
const dimensionAttrs: DimensionAttrs = {width: 100, height: 100};
const dimension: DimensionBase = new SquareDimension(dimensionAttrs);
const position: Position = new Position(positionAttrs, dimension);

const motor = new GetFooterMotor(position, size);
motor.start();

console.log(motor.topPosition()); // prints: 90
```