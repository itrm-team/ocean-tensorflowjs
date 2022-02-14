export interface AIObject<I, O> {
    save(): void;
    read(): void;
    apply(input: I): O;
}
