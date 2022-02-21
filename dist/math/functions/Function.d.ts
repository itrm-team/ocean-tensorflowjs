export declare abstract class Function<S, T> {
    name: string;
    deterministic: boolean;
    constructor(name: string, deterministic?: boolean);
    abstract apply(x: S): T | PromiseLike<T>;
}
