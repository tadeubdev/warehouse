"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWorker = void 0;
const worker_1 = require("../../domain/worker/worker");
const motor_fake_1 = require("../motor/motor-fake");
const makeWorker = () => {
    const motor = motor_fake_1.makeMotor();
    return new worker_1.Worker(motor);
};
exports.makeWorker = makeWorker;
