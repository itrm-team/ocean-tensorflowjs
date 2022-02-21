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
exports.MultilevelSequentialModel = void 0;
const MultilevelAIModel_1 = require("../../train/multilevel/MultilevelAIModel");
const SequentialModel_1 = require("../SequentialModel");
class MultilevelSequentialModel extends MultilevelAIModel_1.MultilevelAIModel {
    constructor(model, parser) {
        super(model, parser);
    }
    static read(folder, parser) {
        return __awaiter(this, void 0, void 0, function* () {
            let model = yield SequentialModel_1.SequentialModel.read(folder);
            return new MultilevelSequentialModel(model, parser);
        });
    }
}
exports.MultilevelSequentialModel = MultilevelSequentialModel;
//# sourceMappingURL=MultilevelSequentialModel.js.map