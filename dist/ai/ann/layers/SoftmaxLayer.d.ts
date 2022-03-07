import { Layer } from "../Layer";
import { Perceptron1D } from "../perceptrons/Perceptron1D";
export declare class SoftmaxLayer extends Layer<Perceptron1D, number[], number[]> {
    constructor(neurons: Perceptron1D[]);
    propagate(input: number[]): number[];
    weightedInput(input: number[]): number[];
    activate(weightedSum: number[]): number[];
}
