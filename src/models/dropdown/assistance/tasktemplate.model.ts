import { Links, truefalse } from "../../glpi/glpi";

export interface TaskTemplate {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    content: string;
    taskcategories_id: number;
    actiontime: number;
    comment: string;
    date_mod: string;
    date_creation: string;
    state: number;
    is_private: truefalse;
    users_id_tech: number;
    groups_id_tech: number;
    links: Links;
}
