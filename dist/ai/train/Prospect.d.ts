import { Order } from "../../sort/Order";
import { AIModel } from "../AIModel";
import { TrainingGoal } from "./TrainingGoal";
export declare class Prospect<I, O, P> {
    iter: number;
    model: AIModel<I, O>;
    performance: P;
    protected order: Order<P>;
    constructor(iter: number, model: AIModel<I, O>, performance: P, goal: TrainingGoal<I, O, P>);
    compare(prospect: Prospect<I, O, P>): number;
}
