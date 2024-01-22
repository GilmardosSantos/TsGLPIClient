import { TrueFalse } from "src/types/types";
export interface TicketRecurrent {
    id: number,
    name: string,
    comment: string,
    entities_id: number,
    is_recursive: TrueFalse,
    is_active: TrueFalse,
    tickettemplates_id: number,
    begin_date: string,
    periodicity: string,
    create_before: number,
    next_creation_date: string,
    calendars_id: number,
    end_date: string,
}