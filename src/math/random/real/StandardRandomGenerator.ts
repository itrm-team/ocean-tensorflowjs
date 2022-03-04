import { SimpleRandomGenerator } from "../SimpleRandomGenerator";

export class StandardRandomGenerator extends SimpleRandomGenerator<number> {
    public next(): number {
        return Math.random();
    }
}