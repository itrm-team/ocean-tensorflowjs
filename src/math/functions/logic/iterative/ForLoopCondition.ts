import { Predicate } from "../Predicate";

export class ForLoopCondition<T> implements Predicate<T> {
    protected iter: number = -1;
    protected start: number = 0;
    protected end: number = 0;
    protected inc: number = 1;

    constructor(end: number, start?: number, inc?: number) {
        this.set(start ?? 0, end, inc ?? 1);
    }

    public set(start: number, end: number, inc: number) : void {
        this.start = start;
        this.end = end;
        this.inc = inc;
        this.iter = start - inc;
    }

    public evaluate(obj: T): boolean {
        this.iter += this.inc;
        return this.iter < this.end;
    }

    public init(): void {
        this.iter = this.start - this.inc;
    }

    public getIter(): number {
        return this.iter;
    }
}