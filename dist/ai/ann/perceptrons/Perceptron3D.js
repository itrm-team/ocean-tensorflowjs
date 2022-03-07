"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perceptron3D = void 0;
const Perceptron_1 = require("../Perceptron");
class Perceptron3D extends Perceptron_1.Perceptron {
    constructor(weights, beta, f) {
        super(weights, beta, f);
    }
    calculateWeightedInput(start, input) {
        let sum = 0.0;
        for (let i = 0; i < this.weights.length; i++)
            sum += this.weights[i].calculateWeightedInput(start, input[start.z + i]);
        return sum;
    }
    width() {
        return this.weights[0].width();
    }
    height() {
        return this.weights[0].height();
    }
    length() {
        return this.size();
    }
}
exports.Perceptron3D = Perceptron3D;
//# sourceMappingURL=Perceptron3D.js.map