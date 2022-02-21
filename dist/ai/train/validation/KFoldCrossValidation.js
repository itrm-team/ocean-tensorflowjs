"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KFoldCrossValidation = void 0;
const __1 = require("../../..");
const Dataset_1 = require("../Dataset");
const TrainingGoal_1 = require("../TrainingGoal");
class KFoldCrossValidation extends TrainingGoal_1.TrainingGoal {
    constructor(k, goal) {
        super('KFoldCrossValidation', goal.dataset, goal.getOrder());
        this.trainingSets = [];
        this.testingSets = [];
        this.goal = goal;
        this.k = k;
        this.index = 0;
    }
    init() {
        this.createSets();
        let indices = __1.Shuffle.indices(this.dataset.inputs), piv = 0;
        for (let index of indices) {
            for (let i = 0; i < this.k; i++)
                if (i == piv)
                    this.add(this.testingSets[i], this.dataset.inputs[index], this.dataset.outputs[index]);
                else
                    this.add(this.trainingSets[i], this.dataset.inputs[index], this.dataset.outputs[index]);
            piv = (piv + 1) % this.k;
        }
        this.index = 0;
    }
    add(dataset, input, output) {
        dataset.inputs.push(input);
        dataset.outputs.push(output);
    }
    createSets() {
        this.trainingSets = [];
        this.testingSets = [];
        for (let i = 0; i < this.k; i++) {
            this.trainingSets.push(new Dataset_1.Dataset([], []));
            this.testingSets.push(new Dataset_1.Dataset([], []));
        }
    }
    getTrainingSet() {
        this.index = (this.index + 1) % this.k;
        this.goal.dataset = this.testingSets[this.index];
        return this.trainingSets[this.index];
    }
    evaluate(outputs, predictions) {
        return this.goal.evaluate(outputs, predictions);
    }
}
exports.KFoldCrossValidation = KFoldCrossValidation;
//# sourceMappingURL=KFoldCrossValidation.js.map