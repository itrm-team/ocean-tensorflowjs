"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossValidationGoal = void 0;
const TrainingGoal_1 = require("../TrainingGoal");
class CrossValidationGoal extends TrainingGoal_1.TrainingGoal {
    constructor(k, dataset, order) {
        super('CrossValidationGoal', dataset, order);
        this.trainingSets = [];
        this.testingSets = [];
        this.index = 0;
    }
    getTrainingSet() {
        throw new Error("Method not implemented.");
    }
    init() {
    }
    apply(x) {
        throw new Error("Method not implemented.");
    }
}
exports.CrossValidationGoal = CrossValidationGoal;
//# sourceMappingURL=CrossValidationGoal.js.map