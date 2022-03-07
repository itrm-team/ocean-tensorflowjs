export declare abstract class Layer<N, I, O> {
    protected neurons: N[];
    constructor(neurons: N[]);
    abstract propagate(input: I): O;
    abstract weightedInput(input: I): O;
    abstract activate(weightedSum: O): O;
    size(): number;
}
