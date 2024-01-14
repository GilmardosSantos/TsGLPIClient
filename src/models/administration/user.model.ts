import { AuthLDAP } from "../glpi/authldap.model";
import { Links, truefalse } from "../glpi/glpi";
import { Entity } from "./entity.model";
import { Group } from "./group.model";
import { Profile } from "./profile.model";

export interface User {
    api_token_date?: null;
    auths_id: number;
    AuthLDAP:AuthLDAP;
    authtype: number;
    backcreated?: null;
    begin_date?: null;
    comment?: null;
    cookie_token_date: string;
    csv_delimiter?: null;
    date_creation?: null;
    date_format?: null;
    date_mod: string;
    date_sync?: null;
    default_central_tab: number;
    default_dashboard_assets?: null;
    default_dashboard_central?: null;
    default_dashboard_helpdesk?: null;
    default_dashboard_mini_ticket?: null;
    default_requesttypes_id?: null;
    display_count_on_home?: null;
    display_options?: null;
    duedatecritical_color?: null;
    duedatecritical_less?: null;
    duedatecritical_unit?: null;
    duedateok_color?: null;
    duedatewarning_color?: null;
    duedatewarning_less?: null;
    duedatewarning_unit?: null;
    end_date?: null;
    entities_id: number;
    Entity:Entity;
    firstname?: string;
    fold_menu?: null;
    fold_search?: null;
    followup_private?: null;
    groups_id: number;
    Group:Group;
    highcontrast_css?: null;
    id: number;
    is_active: truefalse;
    is_deleted: truefalse;
    is_deleted_ldap: truefalse;
    is_ids_visible?: truefalse;
    itil_layout?: null;
    keep_devices_when_purging_item?: null;
    language?: null;
    last_login: string;
    links:Links;
    list_limit: number;
    locations_id: number;
    Location:Location;
    lock_autolock_mode?: null;
    lock_directunlock_notification?: null;
    mobile?: null;
    name: string;
    names_format?: null;
    nickname?: null;
    notification_to_myself?: null;
    number_format?: null;
    page_layout?: null;
    palette?: null;
    password_forget_token?: null;
    password_forget_token_date?: null;
    password_last_update?: null;
    pdffont?: null;
    personal_token_date?: null;
    phone?: null;
    phone2?: null;
    picture?: null;
    plannings?: null;
    priority_1?: null;
    priority_2?: null;
    priority_3?: null;
    priority_4?: null;
    priority_5?: null;
    priority_6?: null;
    privatebookmarkorder?: null;
    profiles_id: number;
    Profile:Profile;
    realname: string;
    refresh_views?: null;
    registration_number?: null;
    richtext_layout?: null;
    savedsearches_pinned?: null;
    set_default_requester?: null;
    set_default_tech?: null;
    show_count_on_tabs?: null;
    show_jobs_at_login?: null;
    sync_field?: null;
    task_private?: null;
    task_state?: null;
    timeline_order?: null;
    timezone?: null;
    use_flat_dropdowntree?: null;
    use_mode: 0;
    user_dn?: null;
    usercategories_id: number;
    UserCategory:UserCategory
    users_id_supervisor: number;
    usertitles_id: number;
    UserTitle:UserTitle
}
  
export interface UserCategory{

}

export interface UserTitle {
    comment:string;
    date_creation:string;
    date_mod:string;
    id:number;
    name:string;
}