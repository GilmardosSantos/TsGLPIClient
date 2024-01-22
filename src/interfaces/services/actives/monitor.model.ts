import { Links, TrueFalse } from "src/types/types";

export interface Monitor {
    id: number;
    entities_id: number;
    name: string;
    date_mod: string;
    contact: string;
    contact_num: string;
    users_id_tech: number;
    groups_id_tech: number;
    comment: string;
    serial: string;
    otherserial: string;
    size: string;
    have_micro: TrueFalse;
    have_speaker: TrueFalse;
    have_subd: TrueFalse;
    have_bnc: TrueFalse;
    have_dvi: TrueFalse;
    have_pivot: TrueFalse;
    have_hdmi: TrueFalse;
    have_displayport: TrueFalse;
    locations_id: number;
    monitortypes_id: number;
    monitormodels_id: number;
    manufacturers_id: number;
    is_global: TrueFalse;
    is_deleted: TrueFalse;
    is_template: TrueFalse;
    template_name: string;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynam: number;
    uuid: string;
    autoupdatesystem_id: number;
    date_creation: string;
    is_recursive: TrueFalse;
    links: Links
}