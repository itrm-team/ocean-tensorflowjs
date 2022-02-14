import * as tf from '@tensorflow/tfjs-node';
import { AIFactory } from '../AIFactory';
import { SequentialModel } from './SequentialModel';

export class SequentialFactory implements AIFactory<tf.Tensor, Float32Array | Int32Array | Uint8Array> {
    protected layers: tf.layers.Layer[];

    constructor(layers: tf.layers.Layer[]) {
        this.layers = layers;
    }

    public async generate(): Promise<SequentialModel> {
        return new SequentialModel(tf.sequential({ layers: this.layers }));
    }

    public async read(folder: string): Promise<SequentialModel> {
        console.log("> Reading model from", folder);
        return new SequentialModel(await tf.loadLayersModel(folder + '/model.json'));
    }
}