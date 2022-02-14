import { Function } from "../math/functions/Function";
import { Order } from "../sort/Order";

export abstract class Goal<T, R> extends Function<T, R> {
    protected order: Order<R>;

    constructor(name: string, order: Order<R>) {
        super(name);
        this.order = order;
    }

    public getOrder(): Order<R> {
        return this.order;
    }

    public abstract compute(x: T): R;

    public compare(x: T, y: T) {
        return this.order.compare(this.apply(x), this.apply(y));
    }

    public abstract init(): void;
}