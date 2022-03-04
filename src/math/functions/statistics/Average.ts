import { Function } from "../Function";

export class Average extends Function<number[], number> {
    public apply(values: number[]): number {
        return Average.apply(values);
    }

    public static apply(values: number[]): number {
        let avg: number = 0;
        for (let value of values)
            avg += value / values.length;
        return avg;
    }
}