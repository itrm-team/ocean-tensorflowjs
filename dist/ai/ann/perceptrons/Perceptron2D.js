"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perceptron2D = void 0;
const Perceptron_1 = require("../Perceptron");
class Perceptron2D extends Perceptron_1.Perceptron {
    constructor(weights, beta, f) {
        super(weights, beta, f);
    }
    calculateWeightedInput(start, input) {
        let sum = 0.0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += this.weights[i].calculateWeightedInput(start, input[start.y + i]);
        }
        return sum;
    }
    width() {
        return this.weights[0].size();
    }
    height() {
        return this.size();
    }
}
exports.Perceptron2D = Perceptron2D;
//# sourceMappingURL=Perceptron2D.js.map