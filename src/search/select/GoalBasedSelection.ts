import { BasicGoalBased } from "../BasicGoalBased";
import { Goal } from "../Goal";
import { Selection } from "./Selection";

export abstract class GoalBasedSelection<T, R> extends BasicGoalBased<T, R> implements Selection<T> {
    constructor(goal: Goal<T, R>) {
        super(goal);
    }

    public abstract evaluate(n: number, x: R[]): number[] | PromiseLike<number[]>;
    public abstract choose(x: R[]): number | PromiseLike<number>;

    public async quality(x: T[]): Promise<R[]> {
        let result: R[] = [];
        for (let value of x)
            result.push(await this.goal.apply(value));
        return result;
    }

    public async apply(n: number, x: T[]): Promise<number[]> {
        return this.evaluate(n, await this.quality(x));
    }

    public async chooseOne(x: T[]): Promise<number> {
        return this.choose(await this.quality(x));
    }

    public async pick(n: number, x: T[]): Promise<T[]> {
        let result: T[] = [];
        let indices: number[] = await this.apply(n, x);
        for (let index of indices)
            result.push(x[index]);
        return result;
    }
}