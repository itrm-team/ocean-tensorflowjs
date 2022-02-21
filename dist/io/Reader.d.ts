export interface Reader<A, O> {
    read(args: A): O | PromiseLike<O>;
}
