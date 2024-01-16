import { truefalse } from "../glpi/glpi";

export interface RSSFeed {
    id: number;
    name: string;
    users_id: number;
    comment: string;
    url: string;
    refresh_rate: number;
    max_items: number;
    have_error: truefalse;
    is_active: truefalse;
    date_mod: string;
    date_creation: string;
}
