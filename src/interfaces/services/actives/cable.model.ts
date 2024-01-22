import { Links, TrueFalse } from "src/types/types";

export type Cable = {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: TrueFalse;
    itemtype_endpoint_a: string;
    itemtype_endpoint_b: string;
    items_id_endpoint_a: number;
    items_id_endpoint_b: number;
    socketmodels_id_endpoint_a: number;
    socketmodels_id_endpoint_b: number;
    cablestrands_id: number;
    color: string;
    otherserial: string;
    states_id: number;
    users_id_tech: number;
    cablestype_id: number;
    comment: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}