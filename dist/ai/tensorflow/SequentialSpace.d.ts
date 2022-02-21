import * as tf from '@tensorflow/tfjs-node';
import { Space } from '../../search/space/Space';
import { SequentialModel } from './SequentialModel';
export declare class SequentialSpace extends Space<SequentialModel> {
    protected layers: tf.layers.Layer[];
    constructor(layers: tf.layers.Layer[]);
    isFeasible(model: SequentialModel): boolean;
    feasibility(model: SequentialModel): number;
    restore(model: SequentialModel): SequentialModel;
    generate(): SequentialModel;
}
