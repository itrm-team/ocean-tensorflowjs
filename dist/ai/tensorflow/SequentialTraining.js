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
exports.SequentialTraining = void 0;
const Training_1 = require("../train/Training");
class SequentialTraining extends Training_1.Training {
    constructor(goal, compile, fit, iters) {
        super(goal, iters, 'SequentialTraining');
        this.compile = compile;
        this.fit = fit;
    }
    train(space, dataset) {
        return __awaiter(this, void 0, void 0, function* () {
            let model = space.generate();
            model.model.compile(this.compile);
            yield model.model.fit(dataset.inputs, dataset.outputs, this.fit);
            return model;
        });
    }
}
exports.SequentialTraining = SequentialTraining;
//# sourceMappingURL=SequentialTraining.js.map