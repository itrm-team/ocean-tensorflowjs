import { Goal } from "./Goal";

export interface GoalBased<T, R> {
    getGoal(): Goal<T, R>;
    setGoal(goal: Goal<T, R>): void;
}