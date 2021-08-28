import { IGenerateId } from "../igenerate-id";
declare class Uuid implements IGenerateId {
    getId(): string;
}
export { Uuid };
