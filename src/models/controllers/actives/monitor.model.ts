import { Links, truefalse } from "../../glpi/glpi";

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
    have_micro: truefalse;
    have_speaker: truefalse;
    have_subd: truefalse;
    have_bnc: truefalse;
    have_dvi: truefalse;
    have_pivot: truefalse;
    have_hdmi: truefalse;
    have_displayport: truefalse;
    locations_id: number;
    monitortypes_id: number;
    monitormodels_id: number;
    manufacturers_id: number;
    is_global: truefalse;
    is_deleted: truefalse;
    is_template: truefalse;
    template_name: string;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    is_dynam: number;
    uuid: string;
    autoupdatesystem_id: number;
    date_creation: string;
    is_recursive: truefalse;
    links: Links
}