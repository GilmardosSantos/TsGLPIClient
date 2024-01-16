import { truefalse } from "../glpi/glpi";

export interface Contract {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    num: string;
    contracttypes_id: number;
    begin_date: string;
    duration: number;
    notice: number;
    periodicity: number;
    billing: number;
    comment: string;
    accounting_number: string;
    is_deleted: truefalse;
    week_begin_hour: string;
    week_end_hour: string;
    saturday_begin_hour: string;
    saturday_end_hour: string;
    use_saturday: number;
    sunday_begin_hour: string;
    sunday_end_hour: string;
    use_sunday: number;
    max_links_allowed: number;
    alert: number;
    renewal: number;
    template_name: string;
    is_template: number;
    states_id: number;
    date_mod: string;
    date_creation: string;
}