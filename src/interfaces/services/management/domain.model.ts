import { Links ,TrueFalse } from "src/types/types";

export interface Domain {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: TrueFalse;
    domaintypes_id: number;
    date_expiration: string;
    date_domaincreation: string;
    users_id_tech: number;
    groups_id_tech: number;
    is_deleted: TrueFalse;
    comment: string;
    is_template: TrueFalse;
    template_name: string;
    is_active: TrueFalse;
    date_mod: string;
    date_creation: string;
    link: Links;
}