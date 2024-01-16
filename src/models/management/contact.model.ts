import { Links, truefalse } from "../glpi/glpi";

export interface Contact {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    firstname: string;
    registration_number: string;
    phone: string;
    phone2: string;
    mobile: string;
    fax: string;
    email: string;
    contacttypes_id: number;
    comment: string;
    is_deleted: truefalse;
    usertitles_id: number;
    address: string;
    postcode: string;
    town: string;
    state: string;
    country: string;
    date_mod: string;
    date_creation: string;
    pictures: string;
    link: Links;
}