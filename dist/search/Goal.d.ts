import { Function } from "../math/functions/Function";
import { Order } from "../sort/Order";
export declare abstract class Goal<T, P> extends Function<T, P> {
    protected order: Order<P>;
    constructor(name: string, order: Order<P>);
    getOrder(): Order<P>;
    compare(x: T, y: T): Promise<number>;
    abstract init(): void;
}
