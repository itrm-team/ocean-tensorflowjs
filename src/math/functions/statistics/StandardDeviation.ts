import { Average } from './Average';
import { Function } from "../Function";

export class StandardDeviation extends Function<number[], number> {
    public apply(values: number[]): number {
        return StandardDeviation.apply(values);
    }

    public static apply(values: number[]): number {
        let avg: number = Average.apply(values), sum: number = 0;
        for (let value of values)
            sum += (value - avg) * (value - avg);
        return Math.sqrt(sum / (values.length - 1));
    }
}