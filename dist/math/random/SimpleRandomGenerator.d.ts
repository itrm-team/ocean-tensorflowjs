import { RandomGenerator } from "./RandomGenerator";
export declare abstract class SimpleRandomGenerator<T> implements RandomGenerator<T> {
    abstract next(): T;
    generate(total: number): T[];
}
