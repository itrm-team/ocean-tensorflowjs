import { DenseLayerArgs } from '@tensorflow/tfjs-layers/dist/layers/core';
import { SequentialSpace } from "../../SequentialSpace";
export declare interface MultilayerPercetronArgs {
    inputs: number;
    outputs: number;
    hidden: number[];
    args?: DenseLayerArgs;
}
export declare class MultiLayerPerceptronSpace extends SequentialSpace {
    constructor(args: MultilayerPercetronArgs);
}
