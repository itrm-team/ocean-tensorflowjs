import { Dimension } from "../../../utils/structures/Dimension";
import { Layer } from "../Layer";
import { Perceptron2D } from "../perceptrons/Perceptron2D";
export declare class ConvolutionalLayer extends Layer<Perceptron2D[], number[][], number[][]> {
    protected stride: Dimension;
    constructor(neurons: Perceptron2D[][], stride: Dimension);
    propagate(input: any): any;
    weightedInput(input: number[][]): number[][];
    activate(weightedSum: any): any;
    width(): number;
    height(): number;
}
