import { Goal } from "../../search/Goal";
import { Order } from "../../sort/Order";
import { AIModel } from "../AIModel";
import { Dataset } from "./Dataset";

export abstract class TrainingGoal<I, O, P> extends Goal<AIModel<I, O>, P> {
    public dataset: Dataset<I, O>;

    constructor(name: string, dataset: Dataset<I, O>, order: Order<P>) {
        super(name, order);
        this.dataset = dataset;
    }

    public abstract getTrainingSet(): Dataset<I, O>;

    public async apply(model: AIModel<I, O>): Promise<P> {
        let predictions = await model.apply(this.dataset.inputs);
        return await this.evaluate(this.dataset.outputs, predictions);
    }

    public abstract evaluate(outputs: O, predictions: O): P | PromiseLike<P>;
}