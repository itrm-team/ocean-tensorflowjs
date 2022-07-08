import { Goal } from "../Goal";

export class TaggedGoal extends Goal<any, number> {
    private goal: Goal<any, number>;

    constructor(goal: Goal<any, number>) {
        super(goal.name, goal.getOrder());
        this.goal = goal;
    }

    public init(): void {
        this.goal.init();
    }

    public async apply(x: any): Promise<number> {
        x[this.goal.name] = await this.goal.apply(x);
        return x[this.goal.name];
    }
}