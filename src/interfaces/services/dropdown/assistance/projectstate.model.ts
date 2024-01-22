import { TrueFalse } from "src/types/types";


export interface ProjectState {
    id: number;
    name: string;
    comment: string;
    color: string;
    is_finished: TrueFalse;
    date_mod: string;
    date_creation: string;
}
