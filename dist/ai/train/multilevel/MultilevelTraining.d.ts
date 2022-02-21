import { Space } from "../../../search/space/Space";
import { AIModel } from "../../AIModel";
import { Function } from "../../../math/functions/Function";
import { TrainingGoal } from "../TrainingGoal";
import { Prospect } from "../Prospect";
import { DataParser } from "./DataParser";
import { Dataset } from "../Dataset";
export declare abstract class MultilevelTraining<D, R, I, O, P> extends Function<Space<AIModel<I, O>>, AIModel<D, R>> {
    protected goal: TrainingGoal<D, R, P>;
    protected parser: DataParser<D, R, I, O>;
    protected iters: number;
    constructor(goal: TrainingGoal<D, R, P>, parser: DataParser<D, R, I, O>, iters?: number, name?: string);
    apply(space: Space<AIModel<I, O>>): Promise<AIModel<D, R>>;
    abstract train(space: Space<AIModel<I, O>>, dataset: Dataset<I, O>): AIModel<I, O> | PromiseLike<AIModel<I, O>>;
    choose(prospects: Prospect<D, R, P>[]): AIModel<D, R>;
}
