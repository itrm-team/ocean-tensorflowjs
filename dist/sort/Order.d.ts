export interface Order<T> {
    compare(one: T, two: T): number;
    equals(one: T, two: T): boolean;
}
