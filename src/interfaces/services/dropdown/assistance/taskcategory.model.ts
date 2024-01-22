import { Links, TrueFalse } from "src/types/types";

export interface TaskCategory {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    taskcategories_id: number;
    name: string;
    completename: string;
    comment: string;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    is_active: TrueFalse;
    is_helpdeskvisible: TrueFalse;
    date_mod: string;
    date_creation: string;
    knowbaseitemcategories_id: number;
    links: Links;
}
