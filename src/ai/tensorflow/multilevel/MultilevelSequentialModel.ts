import * as tf from '@tensorflow/tfjs-node';
import { MultilevelAIModel } from "../../train/multilevel/MultilevelAIModel";
import { SequentialDataParser } from './SequentialDataParser';
import { SequentialModel } from '../SequentialModel';

export class MultilevelSequentialModel<I, O> extends MultilevelAIModel<I, O, tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]> {
    constructor(model: SequentialModel, parser: SequentialDataParser<I, O>) {
        super(model, parser);
    }
}