export interface Predicate<T> {
    evaluate(obj: T): boolean;
    init(): void;
}