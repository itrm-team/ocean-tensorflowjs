import { Predicate } from "../../math/functions/logic/Predicate";
import { Goal } from "../Goal";
import { Space } from "../space/Space";
import { PopulationSearch } from "./PopulationSearch";
import { Tracer } from "../Tracer";
export declare class IterativePopulationSearch<T, R> extends PopulationSearch<T, R> {
    protected terminationCondition: Predicate<T[]>;
    protected step: PopulationSearch<T, R>;
    protected tracer: Tracer<T> | undefined;
    constructor(terminationCondition: Predicate<T[]>, step: PopulationSearch<T, R>, tracer?: Tracer<T>);
    init(space: Space<T>): T[] | PromiseLike<T[]>;
    pick(pop: T[]): T | PromiseLike<T>;
    find(pop: T[], space: Space<T>): Promise<T[]>;
    getGoal(): Goal<T, R>;
    setGoal(goal: Goal<T, R>): void;
}
