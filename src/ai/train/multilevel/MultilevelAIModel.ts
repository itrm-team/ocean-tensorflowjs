import { AIModel } from "../../AIModel";
import { DataParser } from "./DataParser";

export class MultilevelAIModel<D, R, I, O> implements AIModel<D, R> {
    public model: AIModel<I, O>;
    public parser: DataParser<D, R, I, O>;

    constructor(model: AIModel<I, O>, parser: DataParser<D, R, I, O>) {
        this.model = model;
        this.parser = parser;
    }

    public async apply(input: D): Promise<R> {
        return await this.parser.restoreOutputs(await this.model.apply(await this.parser.parseInputs(input)));
    }
}