import { AIModel } from "../AIModel";
import { Space } from "../../search/space/Space";
import { TrainingGoal } from "./TrainingGoal";
import { Dataset } from "./Dataset";
import { Prospect } from "./Prospect";
import { Function } from "../../math/functions/Function";
export declare abstract class Training<I, O, P> extends Function<Space<AIModel<I, O>>, AIModel<I, O>> {
    protected goal: TrainingGoal<I, O, P>;
    protected iters: number;
    constructor(goal: TrainingGoal<I, O, P>, iters?: number, name?: string);
    apply(space: Space<AIModel<I, O>>): Promise<AIModel<I, O>>;
    abstract train(space: Space<AIModel<I, O>>, dataset: Dataset<I, O>): AIModel<I, O> | PromiseLike<AIModel<I, O>>;
    choose(prospects: Prospect<I, O, P>[]): AIModel<I, O>;
}
