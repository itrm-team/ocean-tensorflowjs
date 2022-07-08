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
exports.MultilayerPerceptronTraining = void 0;
const MultilevelSequentialTraining_1 = require("../../multilevel/MultilevelSequentialTraining");
const MultilayerDatasetParser_1 = require("./MultilayerDatasetParser");
const MultiLayerPerceptronSpace_1 = require("./MultiLayerPerceptronSpace");
class MultilayerPerceptronTraining extends MultilevelSequentialTraining_1.MultilevelSequentialTraining {
    constructor(args, goal, compile, fit, iters) {
        super(goal, new MultilayerDatasetParser_1.MultilayerDatasetParser(args.outputs), compile, fit, iters);
        this.space = new MultiLayerPerceptronSpace_1.MultiLayerPerceptronSpace(args);
    }
    apply() {
        const _super = Object.create(null, {
            apply: { get: () => super.apply }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.apply.call(this, this.space);
        });
    }
}
exports.MultilayerPerceptronTraining = MultilayerPerceptronTraining;
//# sourceMappingURL=MultilayerPerceptronTraining.js.map