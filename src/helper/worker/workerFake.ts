import {Worker} from "../../domain/worker/Worker";
import {MotorBase} from "../../domain/motor/MotorBase";
import {makeMotor} from "../motor/motorFake";

export const makeWorker = (): Worker => {
    const motor: MotorBase = makeMotor()
    return new Worker(motor)
}