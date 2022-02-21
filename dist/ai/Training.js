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
class Training {
    constructor(settings, space, processor) {
        this.settings = settings;
        this.space = space;
        this.processor = processor;
    }
    apply(data, folder, iters) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("> stating a new model's training");
            let best = this.space.generate();
            for (let model of this.space.pick(iters)) {
                let result = yield this.train(model);
            }
            return best;
        });
    }
    train(model) {
        throw new Error("Method not implemented.");
    }
}
exports.Training = Training;
//# sourceMappingURL=Training.js.map