import { Space } from "../space/Space";
export declare abstract class Variation<T> {
    abstract arity(): number;
    abstract rangeArity(): number;
    abstract apply(pop: T[]): T[];
    applySpace(space: Space<T>, pop: T[]): T[];
}
