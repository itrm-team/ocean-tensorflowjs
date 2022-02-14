import { Order } from "./Order";
export declare class Sorted<T> {
    protected order: Order<T>;
    protected data: T[];
    constructor(order: Order<T>);
    add(datum: T): void;
    private findIndex;
    get(index: number): T;
    size(): number;
}
