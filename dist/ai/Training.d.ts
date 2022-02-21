import { AIModel } from "./AIModel";
import { Space } from "../search/space/Space";
import { DataProcessor } from "./DataProcessor";
export declare abstract class Training<S, I, O, D, R> {
    protected settings: S;
    protected space: Space<AIModel<I, O>>;
    protected processor: DataProcessor<D, I, O, R>;
    constructor(settings: S, space: Space<AIModel<I, O>>, processor: DataProcessor<D, I, O, R>);
    apply(data: D[], folder: string, iters: number): Promise<AIModel<I, O>>;
    train(model: AIModel<I, O>): AIModel<I, O> | PromiseLike<AIModel<I, O>>;
}
