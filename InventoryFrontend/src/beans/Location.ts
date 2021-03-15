import { prop, required } from "@rxweb/reactive-form-validators";

export class Location {

    @prop()
    location_id: number;

    @required()
    name: string;

    @prop()
    description: string;

    constructor(
        location_id: number,
        name: string,
        description: string,
    ) {
        this.location_id = location_id;
        this.name = name;
        this.description = description;

    }

}