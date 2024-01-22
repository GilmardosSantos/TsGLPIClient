import { Links, TrueFalse } from "src/types/types";
export interface Group{
    id: number;
    entities_id: number;
    is_recursive: number;
    name: string;
    comment: string;
    ldap_field: string;
    ldap_value: string;
    ldap_group_dn: string;
    date_mod: string;
    groups_id: number;
    completename: string;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    is_requester: TrueFalse;
    is_watcher: TrueFalse;
    is_assign: TrueFalse;
    is_task: TrueFalse;
    is_notify: TrueFalse;
    is_itemgroup: TrueFalse;
    is_usergroup: TrueFalse;
    is_manager: TrueFalse;
    date_creation: string;
    links: Links;
}