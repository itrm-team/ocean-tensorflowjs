export interface Selection<T> {
    apply(n: number, x: T[]): number[] | PromiseLike<number[]>;
    chooseOne(x: T[]): number | PromiseLike<number>;
    pick(n: number, x: T[]): T[] | PromiseLike<T[]>;
}
