import { Space } from "../../../search/space/Space";
import { AIModel } from "../../AIModel";
import { Function } from "../../../math/functions/Function";
import { TrainingGoal } from "../TrainingGoal";
import { MultilevelAIModel } from "./MultilevelAIModel";
import { Prospect } from "../Prospect";
import { DataParser } from "./DataParser";
import { Dataset } from "../Dataset";

export abstract class MultilevelTraining<D, R, I, O, P> extends Function<Space<AIModel<I, O>>, AIModel<D, R>> {
    protected goal: TrainingGoal<D, R, P>;
    protected parser: DataParser<D, R, I, O>;
    protected iters: number;

    constructor(
        goal: TrainingGoal<D, R, P>,
        parser: DataParser<D, R, I, O>,
        iters?: number,
        name?: string
    ) {
        super(name ?? 'MultilevelTraining', goal.deterministic);
        this.goal = goal;
        this.parser = parser;
        this.iters = iters ?? 30;
    }

    public async apply(space: Space<AIModel<I, O>>): Promise<AIModel<D, R>> {
        console.log("> runing training");
        this.goal.init();
        let models: Prospect<D, R, P>[] = [];
        for (let i = 1; i <= this.iters; i++) {
            console.log("> running iter", i);
            console.log("> getting training set");
            let dataset: Dataset<D, R> = this.goal.getTrainingSet();
            console.log("> training a new model");
            let model: AIModel<D, R> = new MultilevelAIModel<D, R, I, O> (await this.train(space, new Dataset<I, O>(
                await this.parser.parseInputs(dataset.inputs), await this.parser.parseOutputs(dataset.outputs)
            )), this.parser);
            console.log("> evaluating model");
            let performance: P = await this.goal.apply(model);
            let prospect: Prospect<D, R, P> = new Prospect<D, R, P>(i, model, performance, this.goal);
            console.log("> iter", i, "finished, a new model was trained, its performance is:", prospect.performance);
            models.push(prospect);
        }
        console.log("> results:");
        for (let i = 0; i < models.length; i++)
            console.log("> performance iter", (i + 1), ":", models[i].performance);
        return this.choose(models);
    }

    public abstract train(space: Space<AIModel<I, O>>, dataset: Dataset<I, O>): AIModel<I, O> | PromiseLike<AIModel<I, O>>;

    public choose(prospects: Prospect<D, R, P>[]): AIModel<D, R> {
        console.log("> choosing best model");
        let best = prospects[0];
        for (let prospect of prospects)
            if (prospect.compare(best) > 0)
                best = prospect;
        console.log("> best model: iter", best.iter);
        return best.model;
    }
}