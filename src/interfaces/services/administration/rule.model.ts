import { Links, TrueFalse } from "src/types/types";

export interface Rule {
    id: number;
    entities_id: number;
    sub_type: string;
    ranking: number;
    name:string;
    description: null;
    match: string;
    is_active: TrueFalse;
    comment: null;
    date_mod: string;
    is_recursive: TrueFalse;
    uuid: string;
    condition: TrueFalse;
    date_creation: string;
    links: Links;
}