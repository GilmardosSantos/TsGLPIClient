import { Links, TrueFalse } from "src/types/types";

export interface RackType {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    comment: string;
    date_creation: string;
    date_mod: string;
    links: Links;
}