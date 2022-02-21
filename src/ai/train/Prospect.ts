import { Order } from "../../sort/Order";
import { AIModel } from "../AIModel";
import { TrainingGoal } from "./TrainingGoal";

export class Prospect<I, O, P> {
    public iter: number;
    public model: AIModel<I, O>;
    public performance: P;
    protected order: Order<P>;

    constructor(iter: number, model: AIModel<I, O>, performance: P, goal: TrainingGoal<I, O, P>) {
        this.iter = iter;
        this.model = model;
        this.performance = performance;
        this.order = goal.getOrder();
    }

    public compare(prospect: Prospect<I, O, P>) {
        return this.order.compare(this.performance, prospect.performance);
    }
}