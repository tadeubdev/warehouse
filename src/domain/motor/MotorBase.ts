import {Position, PositionAttrs, PositionCanMoveAttrs} from "../worker/Position";
import {MotorEvent} from "../Event/implements/MotorEvent";
import {IEvent} from "../Event/IEvent";
import {TimestampId} from "../../infra/generate-id/implements/TimestampId";
import {IGenerateId} from "../../infra/generate-id/IGenerateId";
import {DimensionBase} from "../floor/DimensionBase";
import {Size} from "../worker/Size";

abstract class MotorBase
{
    private _event: IEvent;
    private _id: string;
    protected _dimension: DimensionBase;
    protected _position: Position;
    protected _size: Size;

    protected constructor(dimension: DimensionBase, position: Position, size: Size) {
        const generateIdHandler = new TimestampId();
        this.generateId(generateIdHandler);

        this._dimension = dimension;
        this._position = position;
        this._size = size;

        this._event = new MotorEvent(this);
    }

    id(): string {
        return this._id;
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

    position(): PositionAttrs {
        return this._position.position();
    }

    abstract move(): void;
}

export {MotorBase};