import { TrainingGoal, Dataset } from "oceanai-js";
import { ModelOrder } from "./ModelOrder";

// Class that defines which is the performance of a model
export class ModelGoal extends TrainingGoal<number[][], number[][], number[]> {
    constructor(inputs: number[][], outputs: number[][]) {
        super('ModelGoal', new Dataset(inputs, outputs), new ModelOrder());
    }

    getTrainingSet(): Dataset<number[][], number[][]> {
        return this.dataset;
    }

    // RMSE for each column
    evaluate(outputs: number[][], predictions: number[][]): number[] {
        let result = [];
        for (let i = 0; i < outputs[0].length; i++) {
            let sum = 0;
            for (let j = 0; j < outputs.length; j++)
                sum += (outputs[j][i] - predictions[j][i]) * (outputs[j][i] - predictions[j][i]);
            result.push(Math.sqrt(sum / outputs.length));
        }
        return result;
    }

    init(): void {}
}