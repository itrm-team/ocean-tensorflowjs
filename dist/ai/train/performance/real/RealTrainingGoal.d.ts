import { Dataset } from "../../Dataset";
import { TrainingGoal } from "../../TrainingGoal";
export declare abstract class RealTrainingGoal<I, O> extends TrainingGoal<I, O, number> {
    constructor(name: string, dataset: Dataset<I, O>, minimize?: boolean);
}
