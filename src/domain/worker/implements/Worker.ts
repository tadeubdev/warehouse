import {Mover} from "../Mover";
import {Position} from "../Position";
import {Size} from "../Size";
import {IWorker} from "../IWorker";
import MotorBase from "../../motor/MotorBase";

class Worker implements IWorker
{
    private readonly _mover: Mover;
    private readonly _position?: Position;
    private readonly _size?: Size;

    constructor(motor?: MotorBase, position?: Position, size?: Size) {
        this._mover = new Mover(motor);
        this._position = position;
        this._size = size;
    }

    move(): void {
        this._mover.move(this._position, this._size);
    }
}

export {Worker};