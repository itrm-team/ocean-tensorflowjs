import * as tf from '@tensorflow/tfjs-node';
import { Dataset } from '../train/Dataset';
import { Training } from "../train/Training";
import { TrainingGoal } from '../train/TrainingGoal';
import { SequentialModel } from './SequentialModel';
import { SequentialSpace } from './SequentialSpace';
export declare class SequentialTraining<P> extends Training<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[], P> {
    protected compile: tf.ModelCompileArgs;
    protected fit: tf.ModelFitArgs | undefined;
    constructor(goal: TrainingGoal<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[], P>, compile: tf.ModelCompileArgs, fit?: tf.ModelFitArgs, iters?: number);
    train(space: SequentialSpace, dataset: Dataset<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]>): Promise<SequentialModel>;
}
