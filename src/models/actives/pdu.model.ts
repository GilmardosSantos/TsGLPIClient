import { Links, truefalse } from "../glpi/glpi";

export interface PDU {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: truefalse;
    locations_id: number;
    serial: string;
    otherserial: string;
    pdumodels_id: number;
    users_id_tech: number;
    groups_id_tech: number;
    is_template: truefalse;
    template_name: string;
    is_deleted: truefalse;
    states_id: number;
    comment: string;
    manufacturers_id: number;
    pdutypes_id: number;
    date_mod: string;
    date_creation: string;
    links: Links;
}