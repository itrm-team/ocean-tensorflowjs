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
exports.IterativePopulationSearch = void 0;
const PopulationSearch_1 = require("./PopulationSearch");
class IterativePopulationSearch extends PopulationSearch_1.PopulationSearch {
    constructor(terminationCondition, step, tracer) {
        super("IterativePopulationSearch");
        this.terminationCondition = terminationCondition;
        this.step = step;
        this.tracer = tracer;
    }
    init(space) {
        this.terminationCondition.init();
        return this.step.init(space);
    }
    pick(pop) {
        return this.step.pick(pop);
    }
    find(pop, space) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.tracer) === null || _a === void 0 ? void 0 : _a.trace(pop));
            while (this.terminationCondition.evaluate(pop)) {
                pop = yield this.step.find(pop, space);
                yield ((_b = this.tracer) === null || _b === void 0 ? void 0 : _b.trace(pop));
            }
            return pop;
        });
    }
    getGoal() {
        return this.step.getGoal();
    }
    setGoal(goal) {
        this.step.setGoal(goal);
    }
}
exports.IterativePopulationSearch = IterativePopulationSearch;
//# sourceMappingURL=IterativePopulationSearch.js.map