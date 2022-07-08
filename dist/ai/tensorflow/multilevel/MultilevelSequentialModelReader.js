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
exports.MultilevelSequentialModelReader = void 0;
const SequentialModelReader_1 = require("../SequentialModelReader");
const MultilevelSequentialModel_1 = require("./MultilevelSequentialModel");
class MultilevelSequentialModelReader {
    constructor(reader) {
        this.reader = reader;
    }
    read(args) {
        return __awaiter(this, void 0, void 0, function* () {
            let model = yield SequentialModelReader_1.SequentialModelReader.read(args.folder);
            let parser = yield this.reader.read(args);
            return new MultilevelSequentialModel_1.MultilevelSequentialModel(model, parser);
        });
    }
}
exports.MultilevelSequentialModelReader = MultilevelSequentialModelReader;
//# sourceMappingURL=MultilevelSequentialModelReader.js.map