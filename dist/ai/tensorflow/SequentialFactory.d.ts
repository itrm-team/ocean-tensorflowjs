import * as tf from '@tensorflow/tfjs-node';
import { AIFactory } from '../AIFactory';
import { SequentialModel } from './SequentialModel';
export declare class SequentialFactory implements AIFactory<tf.Tensor, Float32Array | Int32Array | Uint8Array> {
    protected layers: tf.layers.Layer[];
    constructor(layers: tf.layers.Layer[]);
    generate(): Promise<SequentialModel>;
    read(folder: string): Promise<SequentialModel>;
}
