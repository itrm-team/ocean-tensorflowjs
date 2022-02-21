import { Function } from "../Function";

export class R2 extends Function<{ observed: number[], predictions: number[] }, number> {
    public apply(values: { observed: number[]; predictions: number[]; }): number {
        return R2.apply(values.observed, values.predictions);
    }

    public static apply(observed: number[], predictions: number[]): number {
        let avg: number = 0, ss_res: number = 0, ss_tot: number = 0;
        for (let i = 0; i < predictions.length; i++)
            avg += observed[i];
        avg /= predictions.length;
        for (let i = 0; i < predictions.length; i++) {
            ss_res += Math.pow(predictions[i] - predictions[i], 2);
            ss_tot +=  Math.pow(avg - predictions[i], 2);
        }
        return 1.0 - (ss_res / ss_tot);
    }
}