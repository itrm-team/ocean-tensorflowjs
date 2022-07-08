import { Average } from "../../../math/functions/statistics/Average";
import { Descriptors } from "../../Descriptors";
import { HaeaOperators } from "./HaeaOperators";

export class SimpleHaeaOperatorsDescriptors<T> implements Descriptors<HaeaOperators<T>> {
    describe(operators: HaeaOperators<T>): number[] {
        let rates: number[][] = operators.getAllRates();
        let result: number[] = [];
        for (let i = 0; i < rates[0].length; i++) {
            let values: number[] = [];
            for (let rate of rates)
                values.push(rate[i]);
            values.push(Average.apply(values));
        }
        return result;
    }
}