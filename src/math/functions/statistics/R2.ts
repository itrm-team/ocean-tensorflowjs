import { Function } from "../Function";
import { Average } from "./Average";

export class R2 extends Function<{ observed: number[], predictions: number[] }, number> {
    public apply(values: { observed: number[]; predictions: number[]; }): number {
        return R2.apply(values.observed, values.predictions);
    }

    public static apply(observed: number[], predictions: number[]): number {
        let avg: number = Average.apply(observed), ss_res: number = 0, ss_tot: number = 0;
        for (let i = 0; i < predictions.length; i++) {
            ss_res += Math.pow(observed[i] - predictions[i], 2);
            ss_tot +=  Math.pow(avg - observed[i], 2);
        }
        return 1.0 - (ss_res / ss_tot);
    }
}