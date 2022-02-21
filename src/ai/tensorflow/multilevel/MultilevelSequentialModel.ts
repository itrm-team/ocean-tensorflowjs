import * as tf from '@tensorflow/tfjs-node';
import { MultilevelAIModel } from "../../train/multilevel/MultilevelAIModel";
import { SequentialDataParser } from './SequentialDataParser';
import { SequentialModel } from '../SequentialModel';

export class MultilevelSequentialModel<I, O> extends MultilevelAIModel<I, O, tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]> {
    constructor(model: SequentialModel, parser: SequentialDataParser<I, O>) {
        super(model, parser);
    }

    public static async read(folder: string, parser: SequentialDataParser<any, any>) : Promise<MultilevelSequentialModel<any, any>> {
        let model: SequentialModel = await SequentialModel.read(folder);
        return new MultilevelSequentialModel<any, any>(model, parser);
    }
}