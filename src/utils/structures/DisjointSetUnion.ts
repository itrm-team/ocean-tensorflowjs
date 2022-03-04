export class DisjointSetUnion {
    private parents: number[];

    constructor(size: number) {
        this.parents = [];
        for (let i = 0; i < size; i++)
            this.parents.push(i);
    }

    public restart(size: number): void {
        this.parents = [];
        for (let i = 0; i < size; i++)
            this.parents.push(i);
    }

    public find(v: number): number {
        if (v == this.parents[v])
            return v;
        return this.find(this.parents[v]);
    }

    public join(a: number, b: number): void {
        let pa: number = this.find(a);
        let pb: number = this.find(b);
        if (pa != pb)
            this.parents[pa] = pb;
    }
}