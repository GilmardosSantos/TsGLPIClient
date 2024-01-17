import { Links, truefalse } from "../../glpi/glpi";

export interface PendingReason {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    followup_frequency: number;
    followups_before_resolution: number;
    itilfollowuptemplates_id: number;
    solutiontemplates_id: number;
    comment: string;
    links: Links;
}