import { Links } from "src/types/types";

export interface CertificateType {
    id: number;
    entities_id: number;
    is_recursive: number;
    name: string;
    comment: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}