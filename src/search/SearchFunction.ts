import { GoalBased } from "./GoalBased";
import { Function } from "../math/functions/Function";
import { Space } from "./space/Space";
import { Goal } from "./Goal";

export abstract class SearchFunction<T, R> extends Function<Space<T>, T> implements GoalBased<T, R> {

    constructor(name: string, deterministic?: boolean) {
        super(name, deterministic ?? true);
    }

    public abstract solve(space: Space<T>): T;
    public abstract getGoal(): Goal<T, R>;
    public abstract setGoal(goal: Goal<T, R>): void;

    public apply(space: Space<T>): T {
        return this.solve(space);
    }
}