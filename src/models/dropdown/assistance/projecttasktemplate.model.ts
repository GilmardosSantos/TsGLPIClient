import { Links, truefalse } from "../../glpi/glpi";

export interface ProjectTaskTemplate {
    name: string;
    description: string;
    comment: string;
    projects_id: number;
    projecttasks_id: number;
    plan_start_date: string;
    plan_end_date: string;
    real_start_date: string;
    real_end_date: string;
    planned_duration: number;
    effective_duration: number;
    projectstates_id: number;
    projecttasktypes_id: number;
    users_id: number;
    percent_done: number;
    is_milestone: truefalse;
    comments: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}
