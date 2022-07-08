import { AIModel } from "../../AIModel";
import { DataParser } from "./DataParser";
export declare class MultilevelAIModel<D, R, I, O> implements AIModel<D, R> {
    model: AIModel<I, O>;
    parser: DataParser<D, R, I, O>;
    constructor(model: AIModel<I, O>, parser: DataParser<D, R, I, O>);
    apply(input: D): Promise<R>;
}
