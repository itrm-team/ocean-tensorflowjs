import { SearchFunction } from "../SearchFunction";
import { Space } from "../space/Space";
export declare abstract class PopulationSearch<T, R> extends SearchFunction<T, R> {
    constructor(name: string, deterministic?: boolean | undefined);
    abstract init(space: Space<T>): T[] | PromiseLike<T[]>;
    abstract pick(pop: T[]): T | PromiseLike<T>;
    abstract find(pop: T[], space: Space<T>): T[] | PromiseLike<T[]>;
    solve(space: Space<T>): Promise<T>;
}
