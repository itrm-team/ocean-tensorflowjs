import { RealOrder } from "../../../../sort/real/RealOrder";
import { Dataset } from "../../Dataset";
import { TrainingGoal } from "../../TrainingGoal";

export abstract class RealTrainingGoal<I, O> extends TrainingGoal<I, O, number> {
    constructor(name: string, dataset: Dataset<I, O>, minimize?: boolean) {
        super(name, dataset, new RealOrder(minimize));
    }
}