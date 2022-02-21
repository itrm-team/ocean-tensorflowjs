import { Goal } from "../../search/Goal";
import { Order } from "../../sort/Order";
import { AIModel } from "../AIModel";
import { Dataset } from "./Dataset";
export declare abstract class TrainingGoal<I, O, P> extends Goal<AIModel<I, O>, P> {
    dataset: Dataset<I, O>;
    constructor(name: string, dataset: Dataset<I, O>, order: Order<P>);
    abstract getTrainingSet(): Dataset<I, O>;
    apply(model: AIModel<I, O>): Promise<P>;
    abstract evaluate(outputs: O, predictions: O): P | PromiseLike<P>;
}
