"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGenerateId = void 0;
const makeGenerateId = (id = "123456") => {
    class GenerateIdFake {
        getId() {
            return id;
        }
    }
    return new GenerateIdFake();
};
exports.makeGenerateId = makeGenerateId;
