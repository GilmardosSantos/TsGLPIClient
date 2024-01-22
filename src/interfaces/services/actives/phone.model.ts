import { Links, TrueFalse } from "src/types/types";
export interface Phone {
    id: number;
    entities_id: number;
    name: string;
    date_mod: string;
    contact: string;
    contact_num: string;
    users_id_tech: number;
    groups_id_tech: number;
    comment: string;
    serial: string;
    otherserial: string;
    locations_id: number;
    phonetypes_id: number;
    phonemodels_id: number;
    brand: string;
    phonepowersupplies_id: number;
    number_line: string;
    have_headset: TrueFalse;
    have_hp: TrueFalse;
    manufacturers_id: number;
    is_global: TrueFalse;
    is_deleted: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynamic: TrueFalse;
    uuid: string;
    autoupdatesystems_id: TrueFalse;
    date_creation: string;
    is_recursive: TrueFalse;
    last_inventory_update: string;
    links: Links
}