import { Order } from "./Order";

export class Sorted<T> {
    protected order: Order<T>;
    protected data: T[] = [];

    constructor(order: Order<T>) {
        this.order = order;
    }

    public add(datum: T): void {
        if (this.data.length > 0) {
            let index: number = this.findIndex(datum);
            this.data.splice(index, 0, datum);
        } else
            this.data.push(datum);
    }

    private findIndex(datum: T): number {
        let li: number = 0, lo: number = this.data.length - 1;
        while (li < lo) {
            let mid: number = Math.floor((li + lo) / 2.0);
            if (this.order.compare(datum, this.data[mid]) >= 0)
                li = mid + 1;
            else
                lo = mid;
        }
        return (li == this.data.length - 1) ? (this.order.compare(datum, this.data[this.data.length - 1]) > 0 ? li + 1 : li) : li;
    }

    public get(index: number): T {
        return this.data[index];
    }

    public size(): number {
        return this.data.length;
    }
}