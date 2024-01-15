import { Links, truefalse } from "../glpi/glpi";

export interface ConsumableItem {
    id: number;
    entities_id: number;
    name: string;
    ref: string;
    locations_id: number;
    consumableitemtypes_id: number;
    manufacturers_id: number;
    users_id_tech: number;
    groups_id_tech: number;
    is_deleted: truefalse;
    comment: string;
    alarm_threshold: number;
    stock_target: number;
    date_mod: string;
    date_creation: string;
    otherserial: string;
    pictures: string;
    links: Links
}