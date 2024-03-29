import { DimensionBase } from "../floor/dimension-base";
declare class Position {
    private readonly _canMove;
    protected _top: number;
    protected _left: number;
    private _dimension;
    constructor(position: PositionAttrs, dimension: DimensionBase);
    position(): PositionAttrs;
    positionTop(): number;
    positionLeft(): number;
    top(size: number): void;
    bottom(size: number): void;
    left(size: number): void;
    right(size: number): void;
    canMoveTop(): boolean;
    canMoveBottom(): boolean;
    canMoveLeft(): boolean;
    canMoveRight(): boolean;
    private generateCanMoveHorizontally;
    private generateCanMoveVertically;
}
interface PositionAttrs {
    top: number;
    left: number;
}
interface PositionCanMoveAttrs {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}
export { Position, PositionAttrs, PositionCanMoveAttrs };
