import { AIModel } from "../AIModel";
import { Space } from "../../search/space/Space";
import { TrainingGoal } from "./TrainingGoal";
import { Dataset } from "./Dataset";
import { Prospect } from "./Prospect";
import { Function } from "../../math/functions/Function";

export abstract class Training<I, O, P> extends Function<Space<AIModel<I, O>>, AIModel<I, O>> {
    protected goal: TrainingGoal<I, O, P>;
    protected iters: number;

    constructor(
        goal: TrainingGoal<I, O, P>,
        iters?: number,
        name?: string
    ) {
        super(name ?? 'Training', goal.deterministic);
        this.goal = goal;
        this.iters = iters ?? 30;
    }

    public async apply(space: Space<AIModel<I, O>>): Promise<AIModel<I, O>> {
        console.log("> runing training");
        this.goal.init();
        let models: Prospect<I, O, P>[] = [];
        for (let i = 1; i <= this.iters; i++) {
            console.log("> running iter", i);
            console.log("> getting training set");
            let dataset: Dataset<I, O> = this.goal.getTrainingSet();
            console.log("> training a new model");
            let model: AIModel<I, O> = await this.train(space, dataset);
            console.log("> evaluating model");
            let performance: P = await this.goal.apply(model);
            let prospect: Prospect<I, O, P> = new Prospect<I, O, P>(i, model, performance, this.goal);
            console.log("> iter", i, "finished, a new model was trained, its performance is:", prospect.performance);
            models.push(prospect);
        }
        console.log("> results:");
        for (let i = 0; i < models.length; i++)
            console.log("> performance iter", (i + 1), ":", models[i].performance);
        return this.choose(models);
    }

    public abstract train(space: Space<AIModel<I, O>>, dataset: Dataset<I, O>): AIModel<I, O> | PromiseLike<AIModel<I, O>>;

    public choose(prospects: Prospect<I, O, P>[]): AIModel<I, O> {
        console.log("> choosing best model");
        let best = prospects[0];
        for (let prospect of prospects)
            if (prospect.compare(best) > 1)
                best = prospect;
        console.log("> best model: iter", best.iter);
        return best.model;
    }
}