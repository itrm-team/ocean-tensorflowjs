import { Function } from "../Function";

export class RMSE extends Function<{ observed: number[], predictions: number[] }, number> {
    public apply(values: { observed: number[]; predictions: number[]; }): number {
        return RMSE.apply(values.observed, values.predictions);
    }

    public static apply(observed: number[], predictions: number[]): number {
        let sum: number = 0;
        for (let i = 0; i < predictions.length; i++) {
            let value: number = predictions[i] - observed[i];
            sum += value * value;
        }
        return Math.sqrt(sum / predictions.length);
    }
}