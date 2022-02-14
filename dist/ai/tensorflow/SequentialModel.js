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
exports.SequentialModel = void 0;
class SequentialModel {
    constructor(model) {
        this.model = model;
    }
    apply(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.predict(input).dataSync();
        });
    }
    save(folder) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("> Saving model in", folder);
            return yield this.model.save(folder);
        });
    }
}
exports.SequentialModel = SequentialModel;
//# sourceMappingURL=SequentialModel.js.map