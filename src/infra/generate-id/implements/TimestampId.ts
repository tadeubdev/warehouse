import {IGenerateId} from "../IGenerateId";

class TimestampId implements IGenerateId
{
    getId(): string {
        let date = new Date();
        return date.getTime().toString();
    }
}

export {TimestampId};