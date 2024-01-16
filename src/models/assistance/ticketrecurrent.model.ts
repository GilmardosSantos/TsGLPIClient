import { truefalse } from "../glpi/glpi";
export interface TicketRecurrent {
    id: number,
    name: string,
    comment: string,
    entities_id: number,
    is_recursive: truefalse,
    is_active: truefalse,
    tickettemplates_id: number,
    begin_date: string,
    periodicity: string,
    create_before: number,
    next_creation_date: string,
    calendars_id: number,
    end_date: string,
}