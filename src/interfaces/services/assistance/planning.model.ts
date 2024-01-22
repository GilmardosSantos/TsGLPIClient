import { Links, TrueFalse } from "src/types/types";
export interface Planning {
    id: number,
    uuid: string,
    planningexternaleventtemplates_id: number,
    entities_id: number,
    is_recursive: TrueFalse,
    date: string,
    users_id: number,
    users_id_guests: number[],
    groups_id: number,
    name: string,
    text: string,
    begin: string,
    end: string,
    rrule: string,
    state: number,
    planningeventcategories_id: number,
    background: number,
    date_mod: string,
    date_creation: string,
    links: Links
}