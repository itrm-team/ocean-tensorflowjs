export declare class DisjointSetUnion {
    private parents;
    constructor(size: number);
    restart(size: number): void;
    find(v: number): number;
    join(a: number, b: number): void;
}
