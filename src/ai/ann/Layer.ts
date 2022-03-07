export abstract class Layer<N, I, O> {
	protected neurons: N[];

	constructor(neurons: N[]) {
		this.neurons = neurons;
	}

	public abstract propagate(input: I): O;
	public abstract weightedInput(input: I): O;
	public abstract activate(weightedSum: O): O;

	public size() {
		return this.neurons.length;
	}
}