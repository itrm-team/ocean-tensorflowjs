import { Function } from "../math/functions/Function";
import { Order } from "../sort/Order";
export declare abstract class Goal<T, R> extends Function<T, R> {
    protected order: Order<R>;
    constructor(name: string, order: Order<R>);
    getOrder(): Order<R>;
    abstract compute(x: T): R;
    compare(x: T, y: T): number;
    abstract init(): void;
}
