"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
class Uuid {
    getId() {
        return uuid_1.v4();
    }
}
exports.Uuid = Uuid;
