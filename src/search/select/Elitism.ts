import { GoalBasedSelection } from "./GoalBasedSelection";

export class Elitism<T, R> extends GoalBasedSelection<T, R> {
    protected elitePercentage: number = 0.1;
    protected cullPercentage: number = 0.1;

    public evaluate(n: number, x: R[]): number[] | PromiseLike<number[]> {
        throw new Error("Method not implemented.");
    }
    public choose(x: R[]): number | PromiseLike<number> {
        throw new Error("Method not implemented.");
    }
}