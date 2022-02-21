export interface DataProcessor<D, I, O, R> {
    process(data: D[]): {
        inputs: I[];
        outputs: O[];
    };
    restore(output: O): R;
}
