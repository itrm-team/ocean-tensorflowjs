import { Order } from "../../../sort/Order";
import { AIModel } from "../../AIModel";
import { Dataset } from "../../data/Dataset";
import { TrainingGoal } from "../TrainingGoal";
export declare class CrossValidationGoal<I, O, P> extends TrainingGoal<I, O, P> {
    protected trainingSets: Dataset<I, O>[];
    protected testingSets: Dataset<I, O>[];
    protected index: number;
    constructor(k: number, dataset: Dataset<I, O>, order: Order<P>);
    getTrainingSet(): Dataset<I, O>;
    init(): void;
    apply(x: AIModel<I, O>): P | PromiseLike<P>;
}
