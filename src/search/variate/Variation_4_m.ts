import { Variation } from "./Variation";

export abstract class Variation_4_m<T> extends Variation<T> {
    public apply(pop: T[]): T[] {
        let result: T[] = [];
        for (let i = 0; i < pop.length; i += 4) {
            let next: T[] = this.variate(pop[i], pop[i + 1], pop[i + 2], pop[i + 3]);
            for (let j = 0; j < next.length; j++)
                result.push(next[j]);
        }
        return result;
    }

    public abstract variate(one: T, two: T, three: T, four: T): T[];

    public arity(): number {
        return 4;
    }
}