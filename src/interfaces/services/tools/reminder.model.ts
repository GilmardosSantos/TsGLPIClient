import { Links, TrueFalse } from "src/types/types";

export interface Reminder {
    id: number;
    uuid: string;
    date: string;
    users_id: number;
    name: string;
    text: string;
    begin: string;
    end: string;
    is_planned: number;
    date_mod: string;
    state: number;
    begin_view_date: string;
    end_view_date: string;
    date_creation: string;
    links: Links;
}
