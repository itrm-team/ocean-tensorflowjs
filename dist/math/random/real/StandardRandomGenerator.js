"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardRandomGenerator = void 0;
const SimpleRandomGenerator_1 = require("../SimpleRandomGenerator");
class StandardRandomGenerator extends SimpleRandomGenerator_1.SimpleRandomGenerator {
    next() {
        return Math.random();
    }
}
exports.StandardRandomGenerator = StandardRandomGenerator;
//# sourceMappingURL=StandardRandomGenerator.js.map