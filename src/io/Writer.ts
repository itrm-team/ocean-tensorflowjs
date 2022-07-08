export interface Writer<A, O> {
    write(args: A): O | PromiseLike<O>;
}