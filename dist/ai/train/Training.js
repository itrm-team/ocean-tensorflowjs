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
exports.Training = void 0;
const Prospect_1 = require("./Prospect");
const Function_1 = require("../../math/functions/Function");
class Training extends Function_1.Function {
    constructor(goal, iters, name) {
        super(name !== null && name !== void 0 ? name : 'Training', goal.deterministic);
        this.goal = goal;
        this.iters = iters !== null && iters !== void 0 ? iters : 30;
    }
    apply(space) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("> runing training");
            this.goal.init();
            let models = [];
            for (let i = 1; i <= this.iters; i++) {
                console.log("> running iter", i);
                console.log("> getting training set");
                let dataset = this.goal.getTrainingSet();
                console.log("> training a new model");
                let model = yield this.train(space, dataset);
                console.log("> evaluating model");
                let performance = yield this.goal.apply(model);
                let prospect = new Prospect_1.Prospect(i, model, performance, this.goal);
                console.log("> iter", i, "finished, a new model was trained, its performance is:", prospect.performance);
                models.push(prospect);
            }
            console.log("> results:");
            for (let i = 0; i < models.length; i++)
                console.log("> performance iter", (i + 1), ":", models[i].performance);
            return this.choose(models);
        });
    }
    choose(prospects) {
        console.log("> choosing best model");
        let best = prospects[0];
        for (let prospect of prospects)
            if (prospect.compare(best) > 1)
                best = prospect;
        console.log("> best model: iter", best.iter);
        return best.model;
    }
}
exports.Training = Training;
//# sourceMappingURL=Training.js.map