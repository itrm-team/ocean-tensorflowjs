import { SearchFunction } from "../SearchFunction";
import { Space } from "../space/Space";

export abstract class PopulationSearch<T, R> extends SearchFunction<T, R> {
    constructor(name: string, deterministic?: boolean | undefined) {
        super(name, deterministic);
    }

    public abstract init(space: Space<T>): T[] | PromiseLike<T[]>;
    public abstract pick(pop: T[]): T | PromiseLike<T>;
    public abstract find(pop: T[], space: Space<T>): T[] | PromiseLike<T[]>;
    
    public async solve(space: Space<T>): Promise<T> {
        return await this.pick(await this.find(await this.init(space), space))
    }
}