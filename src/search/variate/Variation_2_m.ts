import { Variation } from "./Variation";

export abstract class Variation_2_m<T> extends Variation<T> {
    public apply(pop: T[]): T[] {
        let result: T[] = [];
        for (let i = 0; i < pop.length; i += 2) {
            let next: T[] = this.variate(pop[i], pop[i + 1]);
            for (let j = 0; j < next.length; j++)
                result.push(next[j]);
        }
        return result;
    }

    public abstract variate(one: T, two: T): T[];

    public arity(): number {
        return 2;
    }
}