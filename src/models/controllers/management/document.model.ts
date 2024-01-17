import { MIMEType } from "util";
import { Links, truefalse } from "../../glpi/glpi";
import { MimeTypes } from "../../../enum/mimetype";

export interface Document {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    filename: string;
    filepath: string;
    documentcategories_id: number;
    mime: MimeTypes;
    date_mod: string;
    comment: null;
    is_deleted: truefalse;
    link: null;
    users_id: number;
    tickets_id: number;
    sha1sum: string;
    is_blacklisted: truefalse;
    tag: string;
    date_creation: string;
    links: Links;
}