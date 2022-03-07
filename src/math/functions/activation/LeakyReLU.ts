import { ActivationFunction } from "../ActivationFunction";

export class LeakyReLU implements ActivationFunction {
	private leak: number;

	constructor(leak: number) {
		this.leak = leak;
	}

	public activate(x: number): number {
		return x > 0 ? x : this.leak * x;
	}

	public derivate(x: number): number {
		return x > 0 ? 1 : this.leak;
	}
}