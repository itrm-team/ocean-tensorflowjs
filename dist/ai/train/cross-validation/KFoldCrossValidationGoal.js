"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KFoldCrossValidationGoal = void 0;
const __1 = require("../../..");
const Dataset_1 = require("../Dataset");
const TrainingGoal_1 = require("../TrainingGoal");
class KFoldCrossValidationGoal extends TrainingGoal_1.TrainingGoal {
    constructor(k, goal) {
        super('CrossValidationGoal', goal.dataset, goal.getOrder());
        this.sets = [];
        this.index = 0;
        this.k = k;
        this.goal = goal;
    }
    getTrainingSet() {
        this.index = (this.index + 1) % this.sets.length;
        return this.generateTrainingSet();
    }
    generateTrainingSet() {
        let dataset = new Dataset_1.Dataset();
        for (let i = 0; i < this.sets.length; i++)
            if (i != this.index) {
                dataset.inputs = dataset.inputs.concat(this.sets[i].inputs);
                dataset.outputs = dataset.outputs.concat(this.sets[i].outputs);
            }
        return dataset;
    }
    init() {
        this.createSets();
        this.index = 0;
        let indices = __1.Shuffle.indices(this.dataset.inputs), piv = 0;
        for (let index of indices) {
            this.sets[piv].inputs.push(this.dataset.inputs[index]);
            this.sets[piv].outputs.push(this.dataset.outputs[index]);
            piv = (piv + 1) % this.sets.length;
        }
    }
    createSets() {
        this.sets = [];
        for (let i = 0; i < this.k; i++)
            this.sets.push(new Dataset_1.Dataset());
    }
    evaluate(outputs, predictions) {
        return this.goal.evaluate(outputs, predictions);
    }
}
exports.KFoldCrossValidationGoal = KFoldCrossValidationGoal;
//# sourceMappingURL=KFoldCrossValidationGoal.js.map