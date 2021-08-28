import {Worker} from "../../domain/worker/worker";
import {MotorBase} from "../../domain/motor/motor-base";
import {makeMotor} from "../motor/motor-fake";

export const makeWorker = (): Worker => {
    const motor: MotorBase = makeMotor()
    return new Worker(motor)
}