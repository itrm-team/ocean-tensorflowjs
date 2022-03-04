import { Space } from "../space/Space";

export abstract class Variation<T> {
    public abstract arity(): number;
    public abstract rangeArity(): number;
    public abstract apply(pop: T[]): T[];

    public applySpace(space: Space<T>, pop: T[]) {
        return space.repair(this.apply(pop));
    }
}