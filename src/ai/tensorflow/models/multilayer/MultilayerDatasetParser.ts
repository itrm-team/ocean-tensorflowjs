import * as tf from '@tensorflow/tfjs-node';
import { SequentialDataParser } from "../../multilevel/SequentialDataParser";

export class MultilayerDatasetParser extends SequentialDataParser<number[][], number[][]> {
    protected outputSize: number;

    constructor(outputSize: number) {
        super();
        this.outputSize = outputSize;
    }

    public parseInputs(inputs: number[][]): tf.Tensor | tf.Tensor[] {
        return tf.tensor(inputs);
    }
    
    public parseOutputs(outputs: number[][]): tf.Tensor | tf.Tensor[] {
        return tf.tensor(outputs);
    }

    public async  restoreOutputs(outputs: tf.Tensor | tf.Tensor[]): Promise<number[][]> {
        let predictions = (await outputs as tf.Tensor).dataSync();
        let results: number[][] = [], index = 0;
        for (let value of predictions) {
            if (index % this.outputSize == 0)
                results.push([]);
            let row = Math.floor(index / this.outputSize);
            results[row].push(value);
            index++;
        }
        return results;
    }
}