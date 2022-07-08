"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaeaReplacement = void 0;
const BasicGoalBased_1 = require("../../BasicGoalBased");
const TaggedGoal_1 = require("../TaggedGoal");
class HaeaReplacement extends BasicGoalBased_1.BasicGoalBased {
    constructor(goal, operators, steady) {
        super(goal.deterministic ? new TaggedGoal_1.TaggedGoal(goal) : goal);
        this.operators = operators;
        this.steady = steady !== null && steady !== void 0 ? steady : true;
    }
    getOperators() {
        return this.operators;
    }
    getGoal() {
        return this.goal;
    }
    setGoal(goal) {
        this.goal = goal.deterministic ? new TaggedGoal_1.TaggedGoal(goal) : goal;
    }
    apply(current, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let order = this.goal.getOrder();
            let buffer = [], index = 0;
            for (let i = 0; i < current.length; i++) {
                let best = index;
                let qs = yield this.goal.apply(next[index++]);
                for (let j = 1; j < this.operators.getSizeOffspring(i); j++) {
                    let qk = yield this.goal.apply(next[index]);
                    if (order.compare(qk, qs) > 0) {
                        best = index;
                        qs = qk;
                    }
                    index++;
                }
                let qi = yield this.goal.apply(current[i]);
                if (order.compare(qi, qs) < 0)
                    this.operators.reward(i);
                else
                    this.operators.punish(i);
                buffer[i] = (!this.steady || order.compare(qi, qs) <= 0) ? next[best] : current[i];
            }
            return buffer;
        });
    }
    init() { }
}
exports.HaeaReplacement = HaeaReplacement;
//# sourceMappingURL=HaeaReplacement.js.map