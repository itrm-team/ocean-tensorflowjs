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
exports.MultilevelSequentialTraining = void 0;
const MultilevelTraining_1 = require("../../train/multilevel/MultilevelTraining");
class MultilevelSequentialTraining extends MultilevelTraining_1.MultilevelTraining {
    constructor(goal, parser, compile, fit, iters) {
        super(goal, parser, iters, 'MultilevelSequentialTraining');
        this.fit = fit;
        this.compile = compile;
    }
    train(space, dataset) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("> generating model");
            let model = space.generate();
            console.log("> compiling model");
            model.model.compile(this.compile);
            console.log("> fitting model");
            yield model.model.fit(dataset.inputs, dataset.outputs, this.fit);
            return model;
        });
    }
}
exports.MultilevelSequentialTraining = MultilevelSequentialTraining;
//# sourceMappingURL=MultilevelSequentialTraining.js.map