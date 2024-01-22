import { Links, TrueFalse } from "src/types/types";

export interface TaskTemplate {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    content: string;
    taskcategories_id: number;
    actiontime: number;
    comment: string;
    date_mod: string;
    date_creation: string;
    state: number;
    is_private: TrueFalse;
    users_id_tech: number;
    groups_id_tech: number;
    links: Links;
}
