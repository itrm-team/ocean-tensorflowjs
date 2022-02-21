import * as tf from '@tensorflow/tfjs-node';
import { SequentialDataParser } from "../../multilevel/SequentialDataParser";
export declare class SimpleIOParser extends SequentialDataParser<number[][], number[][]> {
    protected outputs: number;
    constructor(outputs: number);
    parseInputs(inputs: number[][]): tf.Tensor | tf.Tensor[];
    parseOutputs(outputs: number[][]): tf.Tensor | tf.Tensor[];
    restoreOutputs(outputs: tf.Tensor | tf.Tensor[]): Promise<number[][]>;
}
