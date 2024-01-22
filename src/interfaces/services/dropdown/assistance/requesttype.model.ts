import { TrueFalse } from "src/types/types";


export interface RequestType {
    id: number;
    name: string;
    is_helpdesk_default: TrueFalse;
    is_followup_default: TrueFalse;
    is_mail_default: TrueFalse;
    is_mailfollowup_default: TrueFalse;
    is_active: TrueFalse;
    is_ticketheader: TrueFalse;
    is_itilfollowup: TrueFalse;
    comment: string;
    date_mod: string;
    date_creation: string;
}
