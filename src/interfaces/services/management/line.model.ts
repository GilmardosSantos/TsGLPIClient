import { Links, TrueFalse } from "src/types/types";


export interface Line { 
    id: number;
    name: string;
    entities_id: number;
    is_recursive: TrueFalse;
    is_deleted: TrueFalse;
    caller_num: number;
    caller_name: number;
    users_id: number;
    groups_id: number;
    lineoperators_id: number;
    locations_id: number;
    states_id: number;
    linetypes_id: number;
    date_creation: string;
    date_mod: string;
    comment: string;
    link: Links;
}