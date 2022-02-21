import * as tf from '@tensorflow/tfjs-node';
import { Space } from '../../search/space/Space';
import { SequentialModel } from './SequentialModel';

export class SequentialSpace extends Space<SequentialModel> {
    protected layers: tf.layers.Layer[];

    constructor(layers: tf.layers.Layer[]) {
        super();
        this.layers = layers;
    }
    
    public isFeasible(model: SequentialModel): boolean {
        return true;
    }

    public feasibility(model: SequentialModel): number {
        return 1.0;
    }

    public restore(model: SequentialModel): SequentialModel {
        return model;
    }

    public generate(): SequentialModel {
        let model = tf.sequential({ layers: this.layers });
        return new SequentialModel(model);
    }
}