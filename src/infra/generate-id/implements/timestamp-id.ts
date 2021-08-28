import {IGenerateId} from "../igenerate-id";

class TimestampId implements IGenerateId
{
    getId(): string {
        let date = new Date();
        return date.getTime().toString();
    }
}

export {TimestampId};