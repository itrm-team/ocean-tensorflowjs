import * as tf from '@tensorflow/tfjs-node';
import { Reader } from "../../io/Reader";
import { SequentialModel } from "./SequentialModel";

export class SequentialModelReader implements Reader<string, SequentialModel> {
    public async read(folder: string): Promise<SequentialModel> {
        console.log("> Reading model from", folder);
        return new SequentialModel(await tf.loadLayersModel(folder + '/model.json'));
    }

    public static async read(folder: string): Promise<SequentialModel> {
        console.log("> Reading model from", folder);
        return new SequentialModel(await tf.loadLayersModel(folder + '/model.json'));
    }
}