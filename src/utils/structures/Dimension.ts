export class Dimension {
    public width: number;
    public height: number;
    public length: number;

    constructor(width: number, height?: number, length?: number) {
        this.width = width;
        this.height = height ?? 0;
        this.length = length ?? 0;
    }
}