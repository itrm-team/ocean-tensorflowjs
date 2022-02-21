import { Dataset } from "../../../Dataset";
import { RealTrainingGoal } from "../RealTrainingGoal";
export declare class RSMETrainingGoal<I> extends RealTrainingGoal<I, number[]> {
    constructor(dataset: Dataset<I, number[]>);
    getTrainingSet(): Dataset<I, number[]>;
    evaluate(outputs: number[], predictions: number[]): number | PromiseLike<number>;
    init(): void;
}
