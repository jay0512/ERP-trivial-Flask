import { prop } from "@rxweb/reactive-form-validators";

export class ProductMovement {

    @prop()
    movement_id: number;

    @prop()
    timestamp: Date;

    @prop()
    from_location: number;

    @prop()
    to_location: number;

    @prop()
    product_id: number;

    @prop()
    qty: number;

    forname: string = '';

    toname: string = '';

    productname: string = '';

    constructor(
        movement_id: number,
        timestamp: Date,
        from_location: number,
        to_location: number,
        product_id: number,
        qty: number
    ) {
        this.movement_id = movement_id;
        this.timestamp = timestamp;
        this.from_location = from_location;
        this.to_location = to_location;
        this.product_id = product_id;
        this.qty = qty;

    }

}