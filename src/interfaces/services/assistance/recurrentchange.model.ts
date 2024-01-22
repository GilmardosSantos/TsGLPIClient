import { Links, TrueFalse } from "src/types/types";
export interface RecurrentChange {
    id: number;
    name: string;
    comment: string;
    entities_id: number;
    is_recursive: TrueFalse;
    is_active: TrueFalse;
    changetemplates_id: number;
    begin_date: string;
    periodicity: string;
    create_before: string;
    next_creation_date: string;
    calendars_id: string;
    end_date: string;
    link: Links;
}