import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../AIModel';
export declare class SequentialModel implements AIModel<tf.Tensor, Float32Array | Int32Array | Uint8Array> {
    protected model: tf.LayersModel;
    constructor(model: tf.LayersModel);
    apply(input: tf.Tensor<tf.Rank>): Promise<Float32Array | Int32Array | Uint8Array>;
    save(folder: string): Promise<any>;
}
