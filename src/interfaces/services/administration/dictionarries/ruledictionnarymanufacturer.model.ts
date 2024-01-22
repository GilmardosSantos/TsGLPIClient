import { Links, TrueFalse } from "src/types/types";

export interface RuleDictionnaryManufacturer {
    id: number;
    entities_id: number;
    sub_type: string;
    ranking: number;
    name: string;
    description: string;
    match: string;
    is_active: TrueFalse;
    comment: string;
    date_mod: string;
    is_recursive: TrueFalse;
    uuid: string;
    condition: number;
    date_creation: string;
    links: Links;
}