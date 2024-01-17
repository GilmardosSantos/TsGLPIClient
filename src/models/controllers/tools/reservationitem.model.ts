import { Links, truefalse } from "../../glpi/glpi";

export interface ReservationItem {
    id: number;
    itemtype: string;
    entities_id: number;
    is_recursive: truefalse;
    items_id: number;
    comment: string;
    is_active: truefalse;
    links: Links;
}
