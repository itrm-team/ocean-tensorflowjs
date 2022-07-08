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
exports.TaggedGoal = void 0;
const Goal_1 = require("../Goal");
class TaggedGoal extends Goal_1.Goal {
    constructor(goal) {
        super(goal.name, goal.getOrder());
        this.goal = goal;
    }
    init() {
        this.goal.init();
    }
    apply(x) {
        return __awaiter(this, void 0, void 0, function* () {
            x[this.goal.name] = yield this.goal.apply(x);
            return x[this.goal.name];
        });
    }
}
exports.TaggedGoal = TaggedGoal;
//# sourceMappingURL=TaggedGoal.js.map