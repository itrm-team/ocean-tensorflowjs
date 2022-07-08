export interface AIModel<I, O> {
    apply(input: I): O | PromiseLike<O>;
}
