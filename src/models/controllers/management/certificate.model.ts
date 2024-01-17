import { Links, truefalse } from "../../glpi/glpi";

export interface Certificate {
    id: number;
    name: string;
    serial: string;
    otherserial: string;
    entities_id: number;
    is_recursive: truefalse;
    comment: string;
    is_deleted: truefalse;
    is_template: truefalse;
    template_name: string;
    certificatetypes_id: number;
    dns_name: string;
    dns_suffix: string;
    users_id_tech: number;
    groups_id_tech: number;
    locations_id: number;
    manufacturers_id: number;
    contact: string;
    contact_num: string;
    users_id: number;
    groups_id: number;
    is_autosign: truefalse;
    date_expiration: string;
    states_id: number;
    command: string;
    certificate_request: string;
    certificate_item: string;
    date_creation: string;
    date_mod: string;
    links: Links;
}