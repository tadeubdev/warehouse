# warehouse

For now, you can create some worker.

```ts
const position: PositionAttrs = { x: 0, y: 0 };
const size: SizeAttrs = { width: 100, height: 100 };

const worker = new Worker(position, size);
worker.move().left();
worker.move().bottom();
worker.move().bottom();

console.log(worker.position()); // prints: { x: 1, y: 2 }
```