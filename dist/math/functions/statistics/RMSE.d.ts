import { Function } from "../Function";
export declare class RMSE extends Function<{
    observed: number[];
    predictions: number[];
}, number> {
    apply(values: {
        observed: number[];
        predictions: number[];
    }): number;
    static apply(observed: number[], predictions: number[]): number;
}
