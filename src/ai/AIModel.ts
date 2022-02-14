export interface AIModel<I, O> {
    apply(input: I): Promise<O>;
    save(path: string): Promise<any>;
}