import { Links, truefalse } from "../../glpi/glpi";

export interface KnowbaseItem {
    id: number;
    name: string;
    answer: string;
    is_faq: truefalse;
    users_id: number;
    view: number;
    date_creation: string;
    date_mod: string;
    begin_date: string;
    end_date: string;
    _categories: number[];
    links: Links;
}