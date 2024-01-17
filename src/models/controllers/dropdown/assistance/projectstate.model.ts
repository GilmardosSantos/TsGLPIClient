import { truefalse } from "../../glpi/glpi";

export interface ProjectState {
    id: number;
    name: string;
    comment: string;
    color: string;
    is_finished: truefalse;
    date_mod: string;
    date_creation: string;
}
