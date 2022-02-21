import * as tf from '@tensorflow/tfjs-node';
import { Dataset } from '../../train/Dataset';
import { MultilevelTraining } from '../../train/multilevel/MultilevelTraining';
import { TrainingGoal } from '../../train/TrainingGoal';
import { SequentialDataParser } from './SequentialDataParser';
import { SequentialModel } from "../SequentialModel";
import { SequentialSpace } from "../SequentialSpace";

export class MultilevelSequentialTraining<I, O, P> extends MultilevelTraining<I, O, tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[], P> {
    protected compile: tf.ModelCompileArgs;
    protected fit: tf.ModelFitArgs | undefined;

    constructor(
        goal: TrainingGoal<I, O, P>,
        parser: SequentialDataParser<I, O>,
        compile: tf.ModelCompileArgs,
        fit?: tf.ModelFitArgs | undefined,
        iters?: number
    ) {
        super(goal, parser, iters, 'MultilevelSequentialTraining');
        this.fit = fit;
        this.compile = compile;
    }

    public async train(space: SequentialSpace, dataset: Dataset<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]>): Promise<SequentialModel> {
        console.log("> generating model");
        let model = space.generate();
        console.log("> compiling model");
        model.model.compile(this.compile);
        console.log("> fitting model");
        await model.model.fit(dataset.inputs, dataset.outputs, this.fit);
        return model;
    }
}