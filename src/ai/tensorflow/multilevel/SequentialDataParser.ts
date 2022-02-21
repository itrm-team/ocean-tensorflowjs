import * as tf from '@tensorflow/tfjs-node';
import { DataParser } from '../../train/multilevel/DataParser';

export abstract class SequentialDataParser<I, O> implements DataParser<I, O, tf.Tensor | tf.Tensor[], tf.Tensor | tf.Tensor[]> {
    public abstract parseInputs(inputs: I): tf.Tensor | tf.Tensor[] | PromiseLike<tf.Tensor | tf.Tensor[]>;
    public abstract parseOutputs(outputs: O): tf.Tensor | tf.Tensor[] | PromiseLike<tf.Tensor | tf.Tensor[]>;
    public abstract restoreOutputs(outputs: tf.Tensor | tf.Tensor[]): O | PromiseLike<O>;
}