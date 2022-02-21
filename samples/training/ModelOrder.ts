import { Order } from "oceanai-js";

// This Class stablishes which model is better based on its performance (for this examble a list of RMSE)
export class ModelOrder implements Order<number[]> {
    compare(one: number[], two: number[]): number {
        let avg = [0, 0];
        for (let i = 0; i < one.length; i++) {
            avg[0] += one[i] / one.length;
            avg[1] += two[i] / two.length;
        }
        if (Math.abs(avg[0] - avg[1]) < 1e-9)
            return 0; // both models have a simmilar performance
        if (avg[0] < avg[1])
            return 1; // one is better than two
        return -1; // two is better than one
    }

    equals(one: number[], two: number[]): boolean {
        for (let i = 0; i < one.length; i++)
            if (Math.abs(one[i] - two[i]) > 1e-9)
                return false;
        return true;
    }
}