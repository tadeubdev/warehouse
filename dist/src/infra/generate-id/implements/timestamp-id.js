"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampId = void 0;
class TimestampId {
    getId() {
        let date = new Date();
        return date.getTime().toString();
    }
}
exports.TimestampId = TimestampId;
