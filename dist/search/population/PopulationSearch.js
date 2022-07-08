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
exports.PopulationSearch = void 0;
const SearchFunction_1 = require("../SearchFunction");
class PopulationSearch extends SearchFunction_1.SearchFunction {
    constructor(name, deterministic) {
        super(name, deterministic);
    }
    solve(space) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pick(yield this.find(yield this.init(space), space));
        });
    }
}
exports.PopulationSearch = PopulationSearch;
//# sourceMappingURL=PopulationSearch.js.map