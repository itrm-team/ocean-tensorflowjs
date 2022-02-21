import * as tf from '@tensorflow/tfjs-node';
import { SequentialDataParser } from "../../multilevel/SequentialDataParser";
export declare class MultilayerIOParser extends SequentialDataParser<number[][], number[][]> {
    protected outputSize: number;
    constructor(outputSize: number);
    parseInputs(inputs: number[][]): tf.Tensor | tf.Tensor[];
    parseOutputs(outputs: number[][]): tf.Tensor | tf.Tensor[];
    restoreOutputs(outputs: tf.Tensor | tf.Tensor[]): Promise<number[][]>;
}
