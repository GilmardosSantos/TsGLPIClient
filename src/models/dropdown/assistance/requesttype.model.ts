import { truefalse } from "../../glpi/glpi";

export interface RequestType {
    id: number;
    name: string;
    is_helpdesk_default: truefalse;
    is_followup_default: truefalse;
    is_mail_default: truefalse;
    is_mailfollowup_default: truefalse;
    is_active: truefalse;
    is_ticketheader: truefalse;
    is_itilfollowup: truefalse;
    comment: string;
    date_mod: string;
    date_creation: string;
}
