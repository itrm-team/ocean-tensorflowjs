export declare abstract class Space<T> {
    abstract isFeasible(x: T): boolean;
    abstract feasibility(x: T): number;
    abstract restore(x: T): T;
    abstract generate(): T;
    pick(total: number): T[];
    repair(pop: T[]): T[];
}
