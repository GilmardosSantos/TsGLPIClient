import { Links, TrueFalse } from "src/types/types";

export interface Problem {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: TrueFalse;
    is_deleted: TrueFalse;
    status: number;
    content: string;
    date_mod: string;
    date: string;
    solvedate: null;
    closedate: null;
    time_to_resolve: null;
    users_id_recipient: number;
    users_id_lastupdater: number;
    urgency: number;
    impact: number;
    priority: number;
    itilcategories_id: number;
    impactcontent: string;
    causecontent: string;
    symptomcontent: string;
    actiontime: number;
    begin_waiting_date: null;
    waiting_duration: number;
    close_delay_stat: number;
    solve_delay_stat: number;
    date_creation: string;
    links: Links
}