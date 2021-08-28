import {IGenerateId} from "../igenerate-id";
import { v4 as uuidv4 } from "uuid";

class Uuid implements IGenerateId
{
    getId(): string {
        return uuidv4();
    }
}

export {Uuid};