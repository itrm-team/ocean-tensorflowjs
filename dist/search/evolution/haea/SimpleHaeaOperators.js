"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleHaeaOperators = void 0;
const HaeaOperators_1 = require("./HaeaOperators");
const SimpleHaeaOperatorsDescriptors_1 = require("./SimpleHaeaOperatorsDescriptors");
class SimpleHaeaOperators extends HaeaOperators_1.HaeaOperators {
    constructor(opers, generator) {
        super(generator, new SimpleHaeaOperatorsDescriptors_1.SimpleHaeaOperatorsDescriptors());
        this.opers = opers;
    }
    get(indIndex, operIndex) {
        return this.opers[operIndex];
    }
    numberOfOperatorsPerIndividual() {
        return this.opers.length;
    }
    numberOfOperators() {
        return this.opers.length;
    }
}
exports.SimpleHaeaOperators = SimpleHaeaOperators;
//# sourceMappingURL=SimpleHaeaOperators.js.map