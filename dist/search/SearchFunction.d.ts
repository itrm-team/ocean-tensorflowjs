import { GoalBased } from "./GoalBased";
import { Function } from "../math/functions/Function";
import { Space } from "./space/Space";
import { Goal } from "./Goal";
export declare abstract class SearchFunction<T, R> extends Function<Space<T>, T> implements GoalBased<T, R> {
    constructor(name: string, deterministic?: boolean);
    abstract solve(space: Space<T>): T | PromiseLike<T>;
    abstract getGoal(): Goal<T, R>;
    abstract setGoal(goal: Goal<T, R>): void;
    apply(space: Space<T>): T | PromiseLike<T>;
}
