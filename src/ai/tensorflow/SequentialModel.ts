import * as tf from '@tensorflow/tfjs-node';
import { AIModel } from '../AIModel';

export class SequentialModel implements AIModel<tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]> {
    public model: tf.LayersModel;

    constructor(model: tf.LayersModel) {
        this.model = model;
    }

    public apply(input: tf.Tensor | tf.Tensor[], args?: tf.ModelPredictConfig): tf.Tensor | tf.Tensor[] {
        return this.model.predict(input, args);
    }

    public getTensorflowModel(): tf.LayersModel {
        return this.model;
    }

    public async save(folder: string): Promise<any> {
        console.log("> Saving model in", folder);
        return await this.model.save(folder);
    }

    public static async read(folder: string): Promise<SequentialModel> {
        console.log("> Reading model from", folder);
        return new SequentialModel(await tf.loadLayersModel(folder + '/model.json'));
    }
}