export interface RandomGenerator<T> {
    next(): T;
    generate(total: number): T[];
}
