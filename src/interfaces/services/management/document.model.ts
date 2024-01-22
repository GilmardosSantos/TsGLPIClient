
import { Links, TrueFalse } from "src/types/types";
type MIMEType = ""

export interface Document {
    id: number;
    entities_id: number;
    is_recursive: TrueFalse;
    name: string;
    filename: string;
    filepath: string;
    documentcategories_id: number;
    mime: MIMEType;
    date_mod: string;
    comment: null;
    is_deleted: TrueFalse;
    link: null;
    users_id: number;
    tickets_id: number;
    sha1sum: string;
    is_blacklisted: TrueFalse;
    tag: string;
    date_creation: string;
    links: Links;
}