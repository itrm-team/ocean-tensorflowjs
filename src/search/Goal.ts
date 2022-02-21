import { Function } from "../math/functions/Function";
import { Order } from "../sort/Order";

export abstract class Goal<T, P> extends Function<T, P> {
    protected order: Order<P>;

    constructor(name: string, order: Order<P>) {
        super(name);
        this.order = order;
    }

    public getOrder(): Order<P> {
        return this.order;
    }

    public async compare(x: T, y: T): Promise<number> {
        return this.order.compare(await this.apply(x), await this.apply(y));
    }

    public abstract init(): void;
}