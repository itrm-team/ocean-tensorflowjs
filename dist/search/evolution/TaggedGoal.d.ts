import { Goal } from "../Goal";
export declare class TaggedGoal extends Goal<any, number> {
    private goal;
    constructor(goal: Goal<any, number>);
    init(): void;
    apply(x: any): Promise<number>;
}
