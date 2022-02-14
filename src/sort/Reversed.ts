import { Order } from "./Order";

export class Reversed<T> implements Order<T> {
    protected original_order: Order<T>;

    constructor(original_order: Order<T>) {
        this.original_order = original_order;
    }

    public compare(one: T, two: T): number {
        return this.original_order.compare(two, one);
    }

    public equals(one: T, two: T): boolean {
        return this.original_order.equals(one, two);
    }
}