"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perceptron = void 0;
const Location_1 = require("../../utils/structures/Location");
class Perceptron {
    constructor(weights, beta, f) {
        this.weights = [];
        this.beta = 0.0;
        this.weights = weights;
        this.beta = beta;
        this.function = f;
    }
    weightedInput(input) {
        return this.calculateWeightedInput(new Location_1.Location(0, 0, 0), input);
    }
    propagate(input) {
        return this.activate(this.weightedInput(input));
    }
    activate(weightedSum) {
        return this.function.activate(weightedSum + this.beta);
    }
    propagateFromLocation(start, input) {
        return this.activate(this.calculateWeightedInput(start, input));
    }
    size() {
        return this.weights.length;
    }
}
exports.Perceptron = Perceptron;
//# sourceMappingURL=Perceptron.js.map