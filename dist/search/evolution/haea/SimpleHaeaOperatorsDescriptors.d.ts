import { Descriptors } from "../../Descriptors";
import { HaeaOperators } from "./HaeaOperators";
export declare class SimpleHaeaOperatorsDescriptors<T> implements Descriptors<HaeaOperators<T>> {
    describe(operators: HaeaOperators<T>): number[];
}
