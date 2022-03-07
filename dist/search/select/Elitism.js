"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elitism = void 0;
const GoalBasedSelection_1 = require("./GoalBasedSelection");
class Elitism extends GoalBasedSelection_1.GoalBasedSelection {
    constructor() {
        super(...arguments);
        this.elitePercentage = 0.1;
        this.cullPercentage = 0.1;
    }
    evaluate(n, x) {
        throw new Error("Method not implemented.");
    }
    choose(x) {
        throw new Error("Method not implemented.");
    }
}
exports.Elitism = Elitism;
//# sourceMappingURL=Elitism.js.map