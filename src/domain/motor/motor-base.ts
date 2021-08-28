import {Position, PositionAttrs} from "../worker/position";
import {MotorEvent} from "../events/implements/motor-event";
import {IEvent} from "../events/ievent";
import {IGenerateId} from "../../infra/generate-id/igenerate-id";
import {Size, SizeAttrs} from "../worker/size";

abstract class MotorBase
{
    private _event: IEvent;
    private _id: string;
    protected _position: Position;
    protected _size: Size;

    protected constructor(position: Position, size: Size, generateIdHandler: IGenerateId) {
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
        return this._position.canMoveTop();
    }

    canMoveBottom(): boolean {
        return this._position.canMoveBottom();
    }

    canMoveLeft(): boolean {
        return this._position.canMoveLeft();
    }

    canMoveRight(): boolean {
        return this._position.canMoveRight();
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