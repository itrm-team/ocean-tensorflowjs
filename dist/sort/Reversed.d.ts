import { Order } from "./Order";
export declare class Reversed<T> implements Order<T> {
    protected original_order: Order<T>;
    constructor(original_order: Order<T>);
    compare(one: T, two: T): number;
    equals(one: T, two: T): boolean;
}
