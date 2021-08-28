import { IGenerateId } from "../igenerate-id";
declare class TimestampId implements IGenerateId {
    getId(): string;
}
export { TimestampId };
