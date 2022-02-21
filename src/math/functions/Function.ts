export abstract class Function<S, T> {
    public name: string;
    public deterministic: boolean;

    constructor(name: string, deterministic?: boolean) {
        this.name = name;
        this.deterministic = deterministic ?? true;
    }

    public abstract apply(x: S): T | PromiseLike<T>;
}