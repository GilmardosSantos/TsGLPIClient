import { Links, truefalse } from "../../glpi/glpi";

export interface Budget {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: truefalse;
    comment: string;
    is_deleted: truefalse;
    begin_date: string;
    end_date: string;
    value: string;
    is_template: truefalse;
    template_name: string;
    date_mod: string;
    date_creation: string;
    locations_id: number;
    budgettypes_id: number;
    links: Links;
}