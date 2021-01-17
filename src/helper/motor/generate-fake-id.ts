import {IGenerateId} from "../../infra/generateId/IGenerateId";

export const makeGenerateId = (id: string = "123456"): IGenerateId => {
    class GenerateIdFake implements IGenerateId {
        getId(): string {
            return id
        }
    }
    return new GenerateIdFake()
}