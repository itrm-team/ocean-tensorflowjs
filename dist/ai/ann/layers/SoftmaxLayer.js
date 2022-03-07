"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftmaxLayer = void 0;
const Exponential_1 = require("../../../math/functions/activation/Exponential");
const Layer_1 = require("../Layer");
class SoftmaxLayer extends Layer_1.Layer {
    constructor(neurons) {
        let activationFunction = new Exponential_1.Exponential();
        for (let i = 0; i < neurons.length; i++)
            neurons[i].function = activationFunction;
        super(neurons);
    }
    propagate(input) {
        let result = [], sum = 0.0;
        for (let i = 0; i < this.neurons.length; i++) {
            let value = this.neurons[i].propagate(input);
            result.push(value);
            sum += value;
        }
        for (let i = 0; i < result.length; i++)
            result[i] /= sum;
        return result;
    }
    weightedInput(input) {
        let result = [];
        for (let i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].weightedInput(input));
        return result;
    }
    activate(weightedSum) {
        let result = [], sum = 0.0;
        for (let i = 0; i < this.neurons.length; i++) {
            let value = this.neurons[i].propagate(weightedSum[i]);
            result.push(value);
            sum += value;
        }
        for (let i = 0; i < result.length; i++)
            result[i] /= sum;
        return result;
    }
}
exports.SoftmaxLayer = SoftmaxLayer;
//# sourceMappingURL=SoftmaxLayer.js.map