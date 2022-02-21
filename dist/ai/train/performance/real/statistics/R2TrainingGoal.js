"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R2TrainingGoal = void 0;
const R2_1 = require("../../../../../math/functions/statistics/R2");
const RealTrainingGoal_1 = require("../RealTrainingGoal");
class R2TrainingGoal extends RealTrainingGoal_1.RealTrainingGoal {
    constructor(dataset) {
        super('R2TrainingGoal', dataset, false);
    }
    getTrainingSet() {
        return this.dataset;
    }
    evaluate(outputs, predictions) {
        return R2_1.R2.apply(outputs, predictions);
    }
    init() { }
}
exports.R2TrainingGoal = R2TrainingGoal;
//# sourceMappingURL=R2TrainingGoal.js.map