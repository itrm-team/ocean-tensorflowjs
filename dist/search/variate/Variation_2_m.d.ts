import { Variation } from "./Variation";
export declare abstract class Variation_2_m<T> extends Variation<T> {
    apply(pop: T[]): T[];
    abstract variate(one: T, two: T): T[];
    arity(): number;
}
