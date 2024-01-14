import { Links, truefalse } from "../glpi/glpi";
import { Entity } from "./entity.model";

export interface Group{
    ancestors_cache:any;
    comment:string;
    completename:string;
    date_creation:string;
    date_mod:string;
    entity?:Entity;
    entities_id:number;
    groups?:Group;
    groups_id:number;
    id:number;
    is_assign: truefalse;
    is_itemgroup: truefalse;
    is_manager: truefalse;
    is_notify: truefalse;
    is_recursive: truefalse;
    is_requester: truefalse;
    is_task: truefalse;
    is_usergroup: truefalse;
    is_watcher: truefalse;
    ldap_field?:null;
    ldap_group_dn?:null;
    ldap_value?:null;
    level:number;
    links:Links;
    name:string;
    sons_cache?: null;    
}