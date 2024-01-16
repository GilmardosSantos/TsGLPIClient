import { Links, truefalse } from "../glpi/glpi";

export interface Domain {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: truefalse;
    domaintypes_id: number;
    date_expiration: string;
    date_domaincreation: string;
    users_id_tech: number;
    groups_id_tech: number;
    is_deleted: truefalse;
    comment: string;
    is_template: truefalse;
    template_name: string;
    is_active: truefalse;
    date_mod: string;
    date_creation: string;
    link: Links;
}