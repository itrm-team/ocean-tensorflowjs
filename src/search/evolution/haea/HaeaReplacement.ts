import { Order } from "../../../sort/Order";
import { BasicGoalBased } from "../../BasicGoalBased";
import { Goal } from "../../Goal";
import { PopulationReplacement } from "../../population/PopulationReplacement";
import { TaggedGoal } from "../TaggedGoal";
import { HaeaOperators } from "./HaeaOperators";

export class HaeaReplacement<T> extends BasicGoalBased<T, number> implements PopulationReplacement<T> {
    protected operators: HaeaOperators<T>;
    protected steady: boolean;

    constructor(goal: Goal<T, number>, operators: HaeaOperators<T>, steady?: boolean) {
        super(goal.deterministic ? new TaggedGoal(goal) : goal);
        this.operators = operators;
        this.steady = steady ?? true;
    }

    public getOperators(): HaeaOperators<T> {
        return this.operators;
    }

    getGoal(): Goal<T, number> {
        return this.goal;
    }

    setGoal(goal: Goal<T, number>): void {
        this.goal = goal.deterministic ? new TaggedGoal(goal) : goal;
    }
    
    public async apply(current: T[], next: T[]): Promise<T[]> {
        let order: Order<number> = this.goal.getOrder();
        let buffer: T[] = [], index = 0;
        for (let i = 0; i < current.length; i++) {
            let best = index;
            let qs: number = await this.goal.apply(next[index++]);
            for (let j = 1; j < this.operators.getSizeOffspring(i); j++) {
                let qk: number = await this.goal.apply(next[index]);
                if (order.compare(qk, qs) > 0) {
                    best = index;
                    qs = qk;
                }
                index++;
            }
            let qi: number = await this.goal.apply(current[i]);
            if (order.compare(qi, qs) < 0)
                this.operators.reward(i);
            else
                this.operators.punish(i);
            buffer[i] = (!this.steady || order.compare(qi, qs) <= 0) ? next[best] : current[i];
        }
        return buffer;
    }

    public init(): void { }
}