import { BasicGoalBased } from "../BasicGoalBased";
import { Goal } from "../Goal";
import { Selection } from "./Selection";
export declare abstract class GoalBasedSelection<T, R> extends BasicGoalBased<T, R> implements Selection<T> {
    constructor(goal: Goal<T, R>);
    abstract evaluate(n: number, x: R[]): number[] | PromiseLike<number[]>;
    abstract choose(x: R[]): number | PromiseLike<number>;
    quality(x: T[]): Promise<R[]>;
    apply(n: number, x: T[]): Promise<number[]>;
    chooseOne(x: T[]): Promise<number>;
    pick(n: number, x: T[]): Promise<T[]>;
}
