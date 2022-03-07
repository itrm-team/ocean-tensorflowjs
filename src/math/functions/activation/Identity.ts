import { ActivationFunction } from "../ActivationFunction";

export class Identity implements ActivationFunction {
	public activate(x: number) {
		return x;
	}

	public derivate(x: number) {
		return 1.0;
	}
}