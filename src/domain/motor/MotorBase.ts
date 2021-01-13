import {Position, PositionAttrs} from "../worker/Position";
import {MotorEvent} from "../Event/implements/MotorEvent";
import {IEvent} from "../Event/IEvent";
import {TimestampId} from "../../infra/generate-id/implements/TimestampId";
import {IGenerateId} from "../../infra/generate-id/IGenerateId";
import {DimensionBase} from "../floor/DimensionBase";
import {Size, SizeAttrs} from "../worker/Size";

abstract class MotorBase
{
    private _event: IEvent;
    private _id: string;
    protected _position: Position;
    protected _size: Size;

    protected constructor(position: Position, size: Size) {
        const generateIdHandler = new TimestampId();
        this.generateId(generateIdHandler);

        this._position = position;
        this._size = size;

        this._event = new MotorEvent(this);
    }

    id(): string {
        return this._id;
    }

    position(): PositionAttrs {
        return this._position.position();
    }

    size(): SizeAttrs {
        return this._size.size();
    }

    canMoveTop(): boolean {
        return this._position.canMove().top;
    }

    canMoveBottom(): boolean {
        return this._position.canMove().bottom;
    }

    canMoveLeft(): boolean {
        return this._position.canMove().left;
    }

    canMoveRight(): boolean {
        return this._position.canMove().right;
    }

    private generateId(handler: IGenerateId) {
        this._id = handler.getId();
    }

    topPosition(): number {
        return this._position.position().top;
    }

    leftPosition(): number {
        return this._position.position().left;
    }

    abstract move(): void;
}

export {MotorBase};