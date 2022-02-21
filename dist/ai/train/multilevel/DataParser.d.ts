export interface DataParser<D, R, I, O> {
    parseInputs(inputs: D): I | PromiseLike<I>;
    parseOutputs(outputs: R): O | PromiseLike<O>;
    restoreOutputs(outputs: O): R | PromiseLike<R>;
}
