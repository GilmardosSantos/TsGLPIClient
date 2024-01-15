import { Links, truefalse } from "../glpi/glpi";

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
    have_headset: truefalse;
    have_hp: truefalse;
    manufacturers_id: number;
    is_global: truefalse;
    is_deleted: truefalse;
    is_template: truefalse;
    template_name: string;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynamic: truefalse;
    uuid: string;
    autoupdatesystems_id: truefalse;
    date_creation: string;
    is_recursive: truefalse;
    last_inventory_update: string;
    links: Links
}