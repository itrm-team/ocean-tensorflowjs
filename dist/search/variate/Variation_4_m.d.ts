import { Variation } from "./Variation";
export declare abstract class Variation_4_m<T> extends Variation<T> {
    apply(pop: T[]): T[];
    abstract variate(one: T, two: T, three: T, four: T): T[];
    arity(): number;
}
