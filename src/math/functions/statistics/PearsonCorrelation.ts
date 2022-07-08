import { Function } from "../Function";
import { Average } from "./Average";

export class PearsonCorrelation extends Function<{ observed: number[], predictions: number[] }, number> {
    public apply(values: { observed: number[]; predictions: number[]; }): number {
        return PearsonCorrelation.apply(values.observed, values.predictions);
    }

    public static apply(observed: number[], predictions: number[]): number {
        let outputAvg: number = Average.apply(observed);
        let predictAvg: number = Average.apply(predictions);
        let upper: number = 0, leftLower: number = 0, rightLower: number = 0;
        for (let i = 0; i < observed.length; i++) {
            upper += (observed[i] - outputAvg) * (predictions[i] - predictAvg);
            leftLower += (observed[i] - outputAvg) * (observed[i] - outputAvg);
            rightLower += (predictions[i] - predictAvg) * (predictions[i] - predictAvg);
        }
        return upper / (Math.sqrt(leftLower) * Math.sqrt(rightLower));
    }
}