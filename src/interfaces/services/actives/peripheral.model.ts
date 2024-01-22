import { Links, TrueFalse } from "src/types/types";
export interface Peripheral {
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
    peripheraltypes_id: number;
    peripheralmodels_id: number;
    brand: string;
    manufacturers_id: number;
    is_global: TrueFalse;
    is_deleted: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    users_id: string;
    groups_id: string;
    ticket_tco: string;
    is_dynamic: TrueFalse;
    date_creation: string;
    is_recursive: number;
    links: Links
}