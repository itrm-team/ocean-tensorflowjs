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
exports.GoalBasedSelection = void 0;
const BasicGoalBased_1 = require("../BasicGoalBased");
class GoalBasedSelection extends BasicGoalBased_1.BasicGoalBased {
    constructor(goal) {
        super(goal);
    }
    quality(x) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            for (let value of x)
                result.push(yield this.goal.apply(value));
            return result;
        });
    }
    apply(n, x) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.evaluate(n, yield this.quality(x));
        });
    }
    chooseOne(x) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.choose(yield this.quality(x));
        });
    }
    pick(n, x) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            let indices = yield this.apply(n, x);
            for (let index of indices)
                result.push(x[index]);
            return result;
        });
    }
}
exports.GoalBasedSelection = GoalBasedSelection;
//# sourceMappingURL=GoalBasedSelection.js.map