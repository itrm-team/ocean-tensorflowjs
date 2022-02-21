import * as tf from '@tensorflow/tfjs-node';
import { DenseLayerArgs } from '@tensorflow/tfjs-layers/dist/layers/core' 
import { SequentialSpace } from "../../SequentialSpace";

export declare interface MultilayerPercetronArgs {
    inputs: number,
    outputs: number,
    hidden: number[],
    args?: DenseLayerArgs
}

export class MultiLayerPerceptronSpace extends SequentialSpace {
    constructor(args: MultilayerPercetronArgs) {
        let layers: tf.layers.Layer[] = [
            tf.layers.dense({ ...args.args, units: args.inputs, inputShape: [ args.inputs ] })
        ];
        for (let size of args.hidden)
            layers.push(tf.layers.dense({ ...args, units: size }));
        layers.push(tf.layers.dense({ ...args, units: args.outputs }));
        super(layers);
    }
}