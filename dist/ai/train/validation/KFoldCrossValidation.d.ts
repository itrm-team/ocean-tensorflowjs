import { Dataset } from "../Dataset";
import { TrainingGoal } from "../TrainingGoal";
export declare class KFoldCrossValidation<I, O, P> extends TrainingGoal<I[], O[], P> {
    private goal;
    private trainingSets;
    private testingSets;
    private k;
    private index;
    constructor(k: number, goal: TrainingGoal<I[], O[], P>);
    init(): void;
    private add;
    private createSets;
    getTrainingSet(): Dataset<I[], O[]>;
    evaluate(outputs: O[], predictions: O[]): P | PromiseLike<P>;
}
