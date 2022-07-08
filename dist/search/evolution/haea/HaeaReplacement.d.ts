import { BasicGoalBased } from "../../BasicGoalBased";
import { Goal } from "../../Goal";
import { PopulationReplacement } from "../../population/PopulationReplacement";
import { HaeaOperators } from "./HaeaOperators";
export declare class HaeaReplacement<T> extends BasicGoalBased<T, number> implements PopulationReplacement<T> {
    protected operators: HaeaOperators<T>;
    protected steady: boolean;
    constructor(goal: Goal<T, number>, operators: HaeaOperators<T>, steady?: boolean);
    getOperators(): HaeaOperators<T>;
    getGoal(): Goal<T, number>;
    setGoal(goal: Goal<T, number>): void;
    apply(current: T[], next: T[]): Promise<T[]>;
    init(): void;
}
