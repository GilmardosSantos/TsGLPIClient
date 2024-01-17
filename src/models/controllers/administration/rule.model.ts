import { Links, truefalse } from "../../glpi/glpi";

export interface Rule {
    id: number;
    entities_id: number;
    sub_type: string;
    ranking: number;
    name:string;
    description: null;
    match: string;
    is_active: truefalse;
    comment: null;
    date_mod: string;
    is_recursive: truefalse;
    uuid: string;
    condition: truefalse;
    date_creation: string;
    links: Links;
}