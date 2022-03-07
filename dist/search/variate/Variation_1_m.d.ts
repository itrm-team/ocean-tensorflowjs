import { Variation } from "./Variation";
export declare abstract class Variation_1_m<T> extends Variation<T> {
    apply(pop: T[]): T[];
    abstract variate(one: T): T[];
    arity(): number;
}
