# warehouse

For now, you can create some motor.

```ts
const dimension = new SquareDimension(100, 100);
const sizeAttrs: SizeAttrs = {width: 10, height: 10};
const size: Size = new Size(sizeAttrs);
const positionAttrs: PositionAttrs = {top: 0, left: 0};
const position = new Position(positionAttrs, dimension);

const motor = new GetFooterMotor(dimension, position, size);
motor.start();

console.log(motor.topPosition()); // prints: 90
```