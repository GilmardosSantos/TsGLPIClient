import { Links, truefalse } from "../glpi/glpi";

export interface SavedSearch {
    id: number;
    name: string;
    type: number;
    itemtype: string;
    users_id: number;
    is_private: truefalse;
    query: string;
    last_execution_time: string;
    do_count: number;
    last_execution_date: string;
    counter: number;
    links: Links;
}
