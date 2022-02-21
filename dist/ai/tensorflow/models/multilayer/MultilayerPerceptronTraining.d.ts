import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../../../AIModel';
import { TrainingGoal } from "../../../train/TrainingGoal";
import { MultilevelSequentialTraining } from "../../multilevel/MultilevelSequentialTraining";
import { MultilayerPercetronArgs } from "./MultiLayerPerceptronSpace";
export declare class MultilayerPerceptronTraining extends MultilevelSequentialTraining<number[][], number[][], number[]> {
    private space;
    constructor(args: MultilayerPercetronArgs, goal: TrainingGoal<number[][], number[][], number[]>, compile: tf.ModelCompileArgs, fit?: tf.ModelFitArgs, iters?: number);
    apply(): Promise<AIModel<number[][], number[][]>>;
}
