import { Links, TrueFalse } from "src/types/types";


export interface Project {
    id: number;
    name: string;
    code: string;
    priority: number;
    entities_id: number;
    is_recursive: TrueFalse;    
    projects_id: number;
    projectstates_id: number;
    projecttypes_id: number;
    date: string;
    date_mod: string;
    users_id: number;
    groups_id: number;
    plan_start_date: string;
    plan_end_date: string;
    real_start_date: string;
    real_end_date: string;
    percent_done: number;
    auto_percent_done: number;
    show_on_global_gantt: number;
    content: string;
    comment: string;
    is_deleted: TrueFalse;
    date_creation: string;
    projecttemplates_id: number;
    is_template: TrueFalse;
    template_name: string;
    links: Links
}
