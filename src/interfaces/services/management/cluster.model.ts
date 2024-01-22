import { Links, TrueFalse } from "src/types/types";

export interface Cluster {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    uuid: string;
    version: string;
    users_id_tech: number;
    groups_id_tech: number;
    is_deleted: TrueFalse;
    states_id: number;
    comment: string;
    clustertypes_id: number;
    autoupdatesystems_id: number;
    date_mod: string;
    date_creation: string;
    link: Links;
}