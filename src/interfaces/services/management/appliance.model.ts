import { Links, TrueFalse } from "src/types/types";

export interface Appliance {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    is_deleted: TrueFalse;
    appliancetypes_id: number;
    comment: string;
    locations_id: number;
    manufacturers_id: number;
    applianceenvironments_id: number;
    users_id: number;
    users_id_tech: number;
    groups_id: number;
    groups_id_tech: number;
    date_mod: string;
    states_id: number;
    externalidentifier: string;
    serial: string;
    otherserial: string;
    is_helpdesk_visible: TrueFalse;
    pictures: string;
    date_creation: string;
    links: Links;
}