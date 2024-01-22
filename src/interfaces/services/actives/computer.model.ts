import { Links, TrueFalse } from "src/types/types";


export interface Computer{
    id?: number;
    entities_id?: number;
    name?: string;
    serial?: string;
    otherserial?: string;
    contact?: string;
    contact_num?: string;
    users_id_tech?: number;
    groups_id_tech?: number;
    comment?: string;
    date_mod?: string;
    autoupdatesystem_id?: string;
    locations_id?: number;
    networks_id?: number;
    computermodels_id?: number;
    computertypes_id?: number;
    is_template?: TrueFalse;
    template_name?: string;
    manufacturers_id?: number;
    is_deleted?: TrueFalse;
    is_dynamic?: TrueFalse;
    users_id?: number;
    groups_id?: number;
    states_id?: number;
    ticket_tco?: string;
    uuid?: string;
    date_creation?: string;
    is_recursive?: number;
    last_inventory_update?: string;
    last_boot?: string;
    links?: Links
}
