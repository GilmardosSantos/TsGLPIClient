import { Links, truefalse } from "../../glpi/glpi";

export interface TaskCategory {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    taskcategories_id: number;
    name: string;
    completename: string;
    comment: string;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    is_active: truefalse;
    is_helpdeskvisible: truefalse;
    date_mod: string;
    date_creation: string;
    knowbaseitemcategories_id: number;
    links: Links;
}
