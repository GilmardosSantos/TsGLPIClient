import { Links, TrueFalse } from "src/types/types";


export interface SolutionTemplate {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    content: string;
    solutiontypes_id: number;
    comment: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}
