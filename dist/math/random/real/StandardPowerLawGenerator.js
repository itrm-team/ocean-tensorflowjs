"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardPowerLawGenerator = void 0;
const SimpleRandomGenerator_1 = require("../SimpleRandomGenerator");
class StandardPowerLawGenerator extends SimpleRandomGenerator_1.SimpleRandomGenerator {
    constructor(alpha, generator) {
        super();
        this.generator = generator;
        this.coarseAlpha = 1.0 / (1.0 - alpha);
    }
    next() {
        return Math.pow(1.0 - this.generator.next(), this.coarseAlpha);
    }
}
exports.StandardPowerLawGenerator = StandardPowerLawGenerator;
//# sourceMappingURL=StandardPowerLawGenerator.js.map