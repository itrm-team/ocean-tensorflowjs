import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../AIModel';
export declare class SequentialModel implements AIModel<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]> {
    model: tf.LayersModel;
    constructor(model: tf.LayersModel);
    apply(input: tf.Tensor | tf.Tensor[], args?: tf.ModelPredictConfig): tf.Tensor | tf.Tensor[];
    getTensorflowModel(): tf.LayersModel;
}
