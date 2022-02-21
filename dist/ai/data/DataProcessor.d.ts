import { Dataset } from "./Dataset";
export interface DataProcessor<D, I, O, R> {
    process(data: D[]): Dataset<I, O>;
    restore(output: O[]): R[];
}
