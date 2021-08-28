import { Position, PositionAttrs } from "../worker/position";
import { IGenerateId } from "../../infra/generate-id/igenerate-id";
import { Size, SizeAttrs } from "../worker/size";
declare abstract class MotorBase {
    private _event;
    private _id;
    protected _position: Position;
    protected _size: Size;
    protected constructor(position: Position, size: Size, generateIdHandler: IGenerateId);
    id(): string;
    position(): PositionAttrs;
    size(): SizeAttrs;
    canMoveTop(): boolean;
    canMoveBottom(): boolean;
    canMoveLeft(): boolean;
    canMoveRight(): boolean;
    private generateId;
    topPosition(): number;
    leftPosition(): number;
    abstract move(): void;
}
export { MotorBase };
