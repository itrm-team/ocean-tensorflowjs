import { GoalBased } from "..";
import { Goal } from "./Goal";
export declare class BasicGoalBased<T, R> implements GoalBased<T, R> {
    protected goal: Goal<T, R>;
    constructor(goal: Goal<T, R>);
    getGoal(): Goal<T, R>;
    setGoal(goal: Goal<T, R>): void;
}
