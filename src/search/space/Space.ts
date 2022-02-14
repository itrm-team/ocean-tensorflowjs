export abstract class Space<T> {
    public abstract isFeasible(x: T): boolean;
    public abstract feasibility(x: T): number;
    public abstract restore(x: T): T;
    public abstract generate(): T;

    public pick(total: number): T[] {
        let result: T[] = [];
        for (let i = 0; i < total; i++)
            result.push(this.generate());
        return result;
    }

    public repair(pop: T[]): T[] {
        let result: T[] = [];
        for (let item of pop)
            result.push(this.restore(item));
        return result;
    }
}