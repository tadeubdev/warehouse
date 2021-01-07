import {PositionAttrs, PositionMovementAttrs} from "./implements/Position";
import {SizeAttrs} from "./implements/Size";

interface IWorker
{
    move(direction?: string): PositionMovementAttrs;

    size(): SizeAttrs;

    position(): PositionAttrs;
}

export {IWorker};