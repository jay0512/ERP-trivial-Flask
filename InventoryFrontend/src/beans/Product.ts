import { prop, required } from "@rxweb/reactive-form-validators";

export class Product {

    @prop()
    product_id: number;

    @required()
    name: string;

    @prop()
    description: string;

    constructor(
        product_id: number,
        name: string,
        description: string,
    ) {
        this.product_id = product_id;
        this.name = name;
        this.description = description;

    }

}