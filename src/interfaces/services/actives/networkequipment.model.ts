import { Links, TrueFalse } from "src/types/types";

export interface NetworkEquipment {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    ram: string;
    serial: string;
    otherserial: string;
    contact: string;
    contact_num: string;
    users_id_tech: number;
    groups_id_tech: number;
    date_mod: string;
    comment: string;
    locations_id: number;
    networks_id: number;
    networkequipmenttypes_id: number;
    networkequipmentmodels_id: number;
    manufacturers_id: number;
    is_deleted: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynamic: TrueFalse;
    uuid: string;
    date_creation: string;
    autoupdatesystems_id: number;
    sysdescr: string;
    cpu: number;
    uptime: string;
    last_inventory_update: string;
    snmpcredentials_id: number;
    links: Links;
}