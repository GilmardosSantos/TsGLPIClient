import { Links, truefalse } from "../glpi/glpi";

export interface CartridgeItem {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    ref: string;
    locations_id: number;
    cartridgeitemtypes_id: number;
    manufacturers_id: number;
    users_id_tech: number;
    groups_id_tech: number;
    is_deleted: truefalse;
    comment: string;
    alarm_threshold: number;
    stock_target: number;
    date_mod: string;
    date_creation: string;
    picture: string;
    links: Links
}