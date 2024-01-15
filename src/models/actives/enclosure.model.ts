import { Links, truefalse } from "../glpi/glpi";

export interface Enclosure {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: truefalse;
    locations_id: number;
    serial: string;
    otherserial: string;
    enclosuremodels_id: number;
    users_id_tech: number;
    groups_id_tech: number;
    is_template: truefalse;
    template_name: string;
    is_deleted: truefalse;
    orientation: string;
    power_supplies: number;
    states_id: number;
    comment: string;
    manufacturers_id: number;
    date_mod: string;
    date_creation: string;
    links: Links
}