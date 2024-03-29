import { Links } from "../../glpi/glpi";

export interface SolutionType {
    id: number;
    name: string;
    comment: string;
    entities_id: number;
    is_recursive: number;
    date_mod: string;
    date_creation: string;
    links: Links;
}