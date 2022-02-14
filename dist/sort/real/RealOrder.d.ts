import { Order } from "../Order";
export declare class RealOrder implements Order<number> {
    private minimize;
    constructor();
    compare(one: number, two: number): number;
    equals(one: number, two: number): boolean;
}
