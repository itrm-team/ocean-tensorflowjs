"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer1D = void 0;
const Layer_1 = require("../Layer");
class Layer1D extends Layer_1.Layer {
    constructor(neurons) {
        super(neurons);
    }
    propagate(input) {
        let result = [];
        for (let i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].propagate(input));
        return result;
    }
    weightedInput(input) {
        let result = [];
        for (let i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].weightedInput(input));
        return result;
    }
    activate(weightedSum) {
        let result = [];
        for (let i = 0; i < this.neurons.length; i++)
            result.push(this.neurons[i].activate(weightedSum[i]));
        return result;
    }
}
exports.Layer1D = Layer1D;
//# sourceMappingURL=Layer1D.js.map