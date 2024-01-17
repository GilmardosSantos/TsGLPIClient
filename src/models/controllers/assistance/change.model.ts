import { Links, truefalse } from "../../glpi/glpi";

export interface Change {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: truefalse;
    is_deleted: truefalse;
    status: number;
    content: string;
    date_mod: string;
    date: string;
    solvedate: string;
    closedate: string;
    time_to_resolve: string;
    users_id_recipient: number;
    users_id_lastupdater: number;
    urgency: number;
    impact: number;
    priority: number;
    itilcategories_id: number;
    impactcontent: string;
    controlistcontent: string;
    rolloutplancontent: string;
    backoutplancontent: string;
    checklistcontent: string;
    global_validation: number;
    validation_percent: number;
    actiontime: number;
    begin_waiting_date: string;
    waiting_duration: number;
    close_delay_stat: number;
    solve_delay_stat: number;
    date_creation: string;
    links: Links;
}