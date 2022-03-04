import { RandomGenerator } from "./RandomGenerator";

export abstract class SimpleRandomGenerator<T> implements RandomGenerator<T> {
    public abstract next(): T;

    generate(total: number): T[] {
        let result: T[] = [];
        for (let i = 0; i < total; i++)
            result.push(this.next());
        return result;
    }
}