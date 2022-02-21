export class Shuffle {
    public static apply(set: any[], indices?: number[]): any[] {
        let positions = indices ?? this.indices(set), result: any = [];
        for (let index of positions)
            result.push(set[index]);
        return result;
    }

    public static indices(set: any[]): number[] {
        let result: number[] = Array.from(Array(set.length).keys());
        for (let i = 0; i < result.length; i++) {
            let b: number = this.getRandomInt(result.length);
            let temp: number = result[i];
            result[i] = result[b];
            result[b] = temp;
        }
        return result;
    }

    public static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}