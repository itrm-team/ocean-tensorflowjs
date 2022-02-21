import { Function } from "../Function";
export declare class R2 extends Function<{
    observed: number[];
    predictions: number[];
}, number> {
    apply(values: {
        observed: number[];
        predictions: number[];
    }): number;
    static apply(observed: number[], predictions: number[]): number;
}
