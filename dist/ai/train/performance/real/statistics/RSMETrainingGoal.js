"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSMETrainingGoal = void 0;
const RMSE_1 = require("../../../../../math/functions/statistics/RMSE");
const RealTrainingGoal_1 = require("../RealTrainingGoal");
class RSMETrainingGoal extends RealTrainingGoal_1.RealTrainingGoal {
    constructor(dataset) {
        super('RSMETrainingGoal', dataset, false);
    }
    getTrainingSet() {
        return this.dataset;
    }
    evaluate(outputs, predictions) {
        return RMSE_1.RMSE.apply(outputs, predictions);
    }
    init() { }
}
exports.RSMETrainingGoal = RSMETrainingGoal;
//# sourceMappingURL=RSMETrainingGoal.js.map