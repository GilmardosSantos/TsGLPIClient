import { Links, TrueFalse } from "src/types/types";


export interface ReservationItem {
    id: number;
    itemtype: string;
    entities_id: number;
    is_recursive: TrueFalse;
    items_id: number;
    comment: string;
    is_active: TrueFalse;
    links: Links;
}
