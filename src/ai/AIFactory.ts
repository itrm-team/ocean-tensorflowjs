import { AIModel } from "./AIModel";
import { Training } from "./Training";

export interface AIFactory<I, O> {
    generate(): Promise<AIModel<I, O>>;
    read(path: string): Promise<AIModel<I, O>>;
    /*constructor(training: Training<I, O>) {
        this.training = training;
    }*/
    /*public object: AIObject<I, O>;

    constructor(object: AIObject<I, O>) {
        this.object = object;
    }*/

    /*save(): void;
    read(): void;
    apply(input: I): O;*/
    /*
    protected model: tf.Sequential;
    protected folder: string;

    constructor(folder: string, layers: tf.layers.Layer[]) {
        this.folder = 'file://' + folder.replace(/\\/g, '/').split(':')[1];
        this.model = tf.sequential({ layers: layers });
    }
    */

    /*public async read(folder: string): Promise<void> {
        console.log("> Reading model from", folder);
        this.model = await tf.loadLayersModel(folder + '/model.json');
    }*/
}
//tf.Sequential