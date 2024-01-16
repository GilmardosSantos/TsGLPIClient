import { Links, truefalse } from "../glpi/glpi";
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
    is_requester: truefalse;
    is_watcher: truefalse;
    is_assign: truefalse;
    is_task: truefalse;
    is_notify: truefalse;
    is_itemgroup: truefalse;
    is_usergroup: truefalse;
    is_manager: truefalse;
    date_creation: string;
    links: Links;
}