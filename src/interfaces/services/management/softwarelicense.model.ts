import { Links, TrueFalse } from "src/types/types";


export interface SoftwareLicense {
    id: number;
    softwares_id: number;
    softwarelicenses_id: number;
    completename: string;
    level: number;
    entities_id: number;
    is_recursive: TrueFalse;
    number: number;
    softwarelicensetypes_id: number;
    name: string;
    serial: string;
    otherserial: string;
    softwareversions_id_buy: number;
    softwareversions_id_use: number;
    expire: string;
    comment: string;
    date_mod: string;
    is_valid: TrueFalse;
    date_creation: string;
    is_deleted: TrueFalse;
    locations_id: number;
    users_id_tech: number;
    users_id: number;
    groups_id_tech: number;
    groups_id: number;
    is_helpdesk_visible: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    states_id: number;
    manufacturers_id: number;
    contact: string;
    contact_num: string;
    allow_overquota: number;
    pictures: string;
    links: Links
}