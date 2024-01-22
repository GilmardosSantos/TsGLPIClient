import { Links, TrueFalse } from "src/types/types";

export interface Datacenter {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: 'TecDatabase';
    size: number;
    databaseinstances_id: number;
    is_onbackup: TrueFalse;
    is_active: TrueFalse;
    is_deleted: TrueFalse;
    is_dynamic: TrueFalse;
    date_creation: string;
    date_mod: string;
    date_update: string;
    date_lastbackup: string;
    links: Links;
}