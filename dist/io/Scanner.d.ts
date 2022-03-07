export declare class Scanner {
    line: string;
    index: number;
    constructor(line: string);
    readNextWord(): string;
    nextInt(): number;
    nextDouble(): number;
}
