import { GoalBasedSelection } from "./GoalBasedSelection";
export declare class Elitism<T, R> extends GoalBasedSelection<T, R> {
    protected elitePercentage: number;
    protected cullPercentage: number;
    evaluate(n: number, x: R[]): number[] | PromiseLike<number[]>;
    choose(x: R[]): number | PromiseLike<number>;
}
