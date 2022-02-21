export interface MultilevelMap<I, O> {
    encode(value: I): O;
    decode(value: O): I;
}
