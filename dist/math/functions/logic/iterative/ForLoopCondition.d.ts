import { Predicate } from "../Predicate";
export declare class ForLoopCondition<T> implements Predicate<T> {
    protected iter: number;
    protected start: number;
    protected end: number;
    protected inc: number;
    constructor(end: number, start?: number, inc?: number);
    set(start: number, end: number, inc: number): void;
    evaluate(obj: T): boolean;
    init(): void;
    getIter(): number;
}
