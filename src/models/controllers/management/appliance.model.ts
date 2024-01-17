import { Links, truefalse } from "../../glpi/glpi";
export interface Appliance {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    is_deleted: truefalse;
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
    is_helpdesk_visible: truefalse;
    pictures: string;
    date_creation: string;
    links: Links;
}