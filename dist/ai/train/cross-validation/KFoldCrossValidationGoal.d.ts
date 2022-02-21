import { Dataset } from "../Dataset";
import { TrainingGoal } from "../TrainingGoal";
export declare class KFoldCrossValidationGoal<I, O, P> extends TrainingGoal<I, O, P> {
    protected sets: Dataset<I, O>[];
    protected index: number;
    protected k: number;
    protected goal: TrainingGoal<I, O, P>;
    constructor(k: number, goal: TrainingGoal<I, O, P>);
    getTrainingSet(): Dataset<I, O>;
    protected generateTrainingSet(): Dataset<I, O>;
    init(): void;
    private createSets;
    evaluate(outputs: O[], predictions: O[]): P | PromiseLike<P>;
}
