import { Links, TrueFalse } from "src/types/types";


export interface RSSFeed {
    id: number;
    name: string;
    users_id: number;
    comment: string;
    url: string;
    refresh_rate: number;
    max_items: number;
    have_error: TrueFalse;
    is_active: TrueFalse;
    date_mod: string;
    date_creation: string;
}
