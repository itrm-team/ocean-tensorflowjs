"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaeaOperators = void 0;
const Roulette_1 = require("../../../math/random/integer/Roulette");
class HaeaOperators {
    constructor(generator, descriptors) {
        this.rates = [];
        this.sel_oper = [];
        this.size_offspring_sel_oper = [];
        this.roulette = new Roulette_1.Roulette([], generator);
        this.generator = generator;
        this.descriptors = descriptors;
    }
    choose(x) {
        this.roulette.setDensity(x);
        return this.roulette.next();
    }
    setSizeOffspring(indIndex, n) {
        this.size_offspring_sel_oper[indIndex] = n;
    }
    getSizeOffspring(indIndex) {
        return this.size_offspring_sel_oper[indIndex];
    }
    select(indIndex) {
        this.sel_oper[indIndex] = this.choose(this.rates[indIndex]);
        return this.sel_oper[indIndex];
    }
    unselect(indIndex) {
        this.sel_oper[indIndex] = -1;
    }
    rewardOperator(individualRates, operIndex) {
        if (operIndex >= 0) {
            individualRates[operIndex] *= 1 + this.generator.next();
            return this.normalize(individualRates);
        }
        return individualRates;
    }
    punishOperator(individualRates, operIndex) {
        if (operIndex >= 0) {
            individualRates[operIndex] *= 1 - this.generator.next();
            return this.normalize(individualRates);
        }
        return individualRates;
    }
    normalize(rates) {
        let sum = 0, result = [];
        for (let rate of rates)
            sum += rate;
        for (let rate of rates)
            result.push(rate / sum);
        return result;
    }
    reward(indIndex) {
        this.rates[indIndex] = this.rewardOperator(this.rates[indIndex], this.sel_oper[indIndex]);
    }
    punish(indIndex) {
        this.rates[indIndex] = this.punishOperator(this.rates[indIndex], this.sel_oper[indIndex]);
    }
    restart(indIndex) {
        let r = [], length = this.numberOfOperatorsPerIndividual();
        for (let i = 0; i < length; i++)
            r.push(1.0 / length);
        this.rates[indIndex] = r;
    }
    resize(newSize) {
        while (this.rates.length < newSize) {
            let r = [], length = this.numberOfOperatorsPerIndividual();
            for (let i = 0; i < length; i++)
                r.push(1.0 / length);
            this.rates.push(r);
            this.sel_oper.push(-1);
            this.size_offspring_sel_oper.push(1);
        }
        if (this.rates.length > newSize)
            this.rates = this.rates.slice(0, newSize);
    }
    getRates(indIndex) {
        return this.rates[indIndex];
    }
    getAllRates() {
        return this.rates;
    }
}
exports.HaeaOperators = HaeaOperators;
//# sourceMappingURL=HaeaOperators.js.map