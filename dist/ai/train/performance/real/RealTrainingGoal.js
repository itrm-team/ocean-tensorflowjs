"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealTrainingGoal = void 0;
const RealOrder_1 = require("../../../../sort/real/RealOrder");
const TrainingGoal_1 = require("../../TrainingGoal");
class RealTrainingGoal extends TrainingGoal_1.TrainingGoal {
    constructor(name, dataset, minimize) {
        super(name, dataset, new RealOrder_1.RealOrder(minimize));
    }
}
exports.RealTrainingGoal = RealTrainingGoal;
//# sourceMappingURL=RealTrainingGoal.js.map