export class Dataset<I, O> {
    public inputs: I;
    public outputs: O;

    constructor(inputs: I, outputs: O) {
        this.inputs = inputs;
        this.outputs = outputs;
    }
}