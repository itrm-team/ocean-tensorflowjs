import { GoalBased } from "..";
import { Goal } from "./Goal";

export class BasicGoalBased<T, R> implements GoalBased<T, R> {
    protected goal: Goal<T, R>;

    constructor(goal: Goal<T, R>) {
        this.goal = goal;
    }

    getGoal(): Goal<T, R> {
        return this.goal;
    }

    setGoal(goal: Goal<T, R>): void {
        this.goal = goal;
    }
}