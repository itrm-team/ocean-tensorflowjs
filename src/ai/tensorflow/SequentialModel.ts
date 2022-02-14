import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../AIModel';

export class SequentialModel implements AIModel<tf.Tensor, Float32Array | Int32Array | Uint8Array> {
    protected model: tf.LayersModel;

    constructor(model: tf.LayersModel) {
        this.model = model;
    }

    public async apply(input: tf.Tensor<tf.Rank>): Promise<Float32Array | Int32Array | Uint8Array> {
        return (this.model.predict(input) as tf.Tensor).dataSync();
    }

    public async save(folder: string): Promise<any> {
        console.log("> Saving model in", folder);
        return await this.model.save(folder);
    }
}