import { Links, truefalse } from "../../glpi/glpi";

export interface Datacenter {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: 'TecDatabase';
    size: number;
    databaseinstances_id: number;
    is_onbackup: truefalse;
    is_active: truefalse;
    is_deleted: truefalse;
    is_dynamic: truefalse;
    date_creation: string;
    date_mod: string;
    date_update: string;
    date_lastbackup: string;
    links: Links;
}