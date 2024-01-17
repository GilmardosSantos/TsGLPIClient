import { Links, truefalse } from "../../glpi/glpi"

export interface SolutionTemplate {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    content: string;
    solutiontypes_id: number;
    comment: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}
