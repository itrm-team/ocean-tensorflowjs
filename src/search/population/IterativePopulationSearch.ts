import { Predicate } from "../../math/functions/logic/Predicate";
import { Goal } from "../Goal";
import { Space } from "../space/Space";
import { PopulationSearch } from "./PopulationSearch";
import { Tracer } from "../Tracer";

export class IterativePopulationSearch<T, R> extends PopulationSearch<T, R> {
    protected terminationCondition: Predicate<T[]>;
    protected step: PopulationSearch<T, R>;
    protected tracer: Tracer<T> | undefined;

    constructor(terminationCondition: Predicate<T[]>, step: PopulationSearch<T, R>, tracer?: Tracer<T>) {
        super("IterativePopulationSearch", );
        this.terminationCondition = terminationCondition;
        this.step = step;
        this.tracer = tracer;
    }

    public init(space: Space<T>): T[] | PromiseLike<T[]> {
        this.terminationCondition.init();
        return this.step.init(space);
    }

    public pick(pop: T[]): T | PromiseLike<T> {
        return this.step.pick(pop);
    }

    public async find(pop: T[], space: Space<T>): Promise<T[]> {
        await this.tracer?.trace(pop);
        while (this.terminationCondition.evaluate(pop)) {
            pop = await this.step.find(pop, space);
            await this.tracer?.trace(pop);
        }
        return pop;
    }

    public getGoal(): Goal<T, R> {
        return this.step.getGoal();
    }

    public setGoal(goal: Goal<T, R>): void {
        this.step.setGoal(goal);
    }
}