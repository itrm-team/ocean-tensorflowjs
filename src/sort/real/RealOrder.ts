import { Order } from "../Order";

export class RealOrder implements Order<number> {
    private minimize: boolean = false;

    constructor(minimize?: boolean) {
        this.minimize = minimize ?? true;
    }
    
    public compare(one: number, two: number): number {
        if (this.minimize)
            return Math.abs(one - two) < 1e-9 ? 0 : (one < two ? 1 : -1);
        return Math.abs(one - two) < 1e-9 ? 0 : (one < two ? -1 : 1);
    }

    public equals(one: number, two: number): boolean {
        return Math.abs(one - two) < 1e-9;
    }
}