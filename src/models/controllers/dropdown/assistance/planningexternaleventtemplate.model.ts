import { Links } from "../../glpi/glpi";

export interface PlanningExternalEventTemplate {
    id: number;
    entities_id: number;
    name: string;
    text: string;
    comment: string;
    duration: number
    before_time: number;
    rrule: string;
    state: number;
    planningeventcategories_id: number;
    background: number;
    date_mod: string;
    date_creation: string;
    links: Links;
}
