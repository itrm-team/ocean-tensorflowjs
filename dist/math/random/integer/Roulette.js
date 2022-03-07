"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roulette = void 0;
const SimpleRandomGenerator_1 = require("../SimpleRandomGenerator");
class Roulette extends SimpleRandomGenerator_1.SimpleRandomGenerator {
    constructor(density, generator) {
        super();
        this.generator = generator;
        this.density = density;
        this.setDensity(density);
    }
    static buildStandardRoulette(size, generator) {
        let density = [];
        for (let i = 0; i < size; i++)
            density.push(1.0 / size);
        return new Roulette(density, generator);
    }
    setDensity(density) {
        this.density = [];
        for (let value of density)
            density.push(density.length == 0 ? value : value + density[density.length - 1]);
    }
    next() {
        let rnd = this.generator.next();
        for (let i = 0; i < this.density.length; i++)
            if (rnd < this.density[i])
                return i;
        return this.density.length - 1;
    }
}
exports.Roulette = Roulette;
//# sourceMappingURL=Roulette.js.map