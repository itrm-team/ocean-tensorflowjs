export interface Tracer<T> {
    trace(values: T[]): void | PromiseLike<void>;
}