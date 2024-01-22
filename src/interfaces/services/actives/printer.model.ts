import { Links, TrueFalse } from "src/types/types";

export interface Printer {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    date_mod: string;
    contact: string;
    contact_num: string;
    users_id_tech: string;
    groups_id_tech: string;
    serial: string;
    otherserial: string;
    have_serial: TrueFalse;
    have_parallel: TrueFalse;
    have_usb: TrueFalse;
    have_wifi: TrueFalse;
    have_ethernet: TrueFalse;
    comment: string;
    memory_size: string;
    locations_id: number;
    networks_id: number;
    printertypes_id: number;
    printermodels_id: number;
    manufacturers_id: number;
    is_global: TrueFalse;
    is_deleted: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    init_pages_counter: number;
    last_pages_counter: number;
    uesrs_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynamic: number;
    uuid: string;
    date_creation: string;
    sysdescr: string;
    last_inventory_update: string;
    snmpcredentials_id: number;
    autoupdatesystems_id: number;
    links: Links

}