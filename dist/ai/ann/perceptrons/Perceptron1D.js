"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perceptron1D = void 0;
const Perceptron_1 = require("../Perceptron");
class Perceptron1D extends Perceptron_1.Perceptron {
    constructor(weights, beta, f) {
        super(weights, beta, f);
    }
    calculateWeightedInput(start, input) {
        let sum = 0.0;
        for (let i = 0; i < this.weights.length; i++)
            sum += this.weights[i] * input[start.x + i];
        return sum;
    }
}
exports.Perceptron1D = Perceptron1D;
//# sourceMappingURL=Perceptron1D.js.map