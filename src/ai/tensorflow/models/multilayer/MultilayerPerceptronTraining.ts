import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../../../AIModel';
import { TrainingGoal } from "../../../train/TrainingGoal";
import { MultilevelSequentialTraining } from "../../multilevel/MultilevelSequentialTraining";
import { MultilayerDatasetParser } from "./MultilayerDatasetParser";
import { MultiLayerPerceptronSpace, MultilayerPercetronArgs } from "./MultiLayerPerceptronSpace";

export class MultilayerPerceptronTraining extends MultilevelSequentialTraining<number[][], number[][], number[]> {
    private space: MultiLayerPerceptronSpace;

    constructor(
        args: MultilayerPercetronArgs,
        goal: TrainingGoal<number[][], number[][], number[]>,
        compile: tf.ModelCompileArgs,
        fit?: tf.ModelFitArgs,
        iters?: number
    ) {
        super(goal, new MultilayerDatasetParser(args.outputs), compile, fit, iters);
        this.space = new MultiLayerPerceptronSpace(args);
    }

    public async apply(): Promise<AIModel<number[][], number[][]>> {
        return super.apply(this.space);
    }
}