import { Links, TrueFalse } from "src/types/types";

export interface SoftwareLicenseType {
    id: number;
    name: string;
    comment: string;
    date_mod: string;
    date_creation: string;
    softwarelicensetypes_id: number;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    entities_id: number;
    is_recursive: TrueFalse;
    completename: string;
    links: Links;
}