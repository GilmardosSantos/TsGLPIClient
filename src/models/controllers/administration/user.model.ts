import { Links, truefalse } from "../../glpi/glpi";
export interface User {
    id: number;
    name: string;
    password_last_update: string;
    phone: string;
    phone2: string;
    mobile: string;
    realname: string;
    firstname: string;
    locations_id: number;
    language: string;
    use_mode: number;
    list_limit: string;
    is_active: truefalse;
    comment: '';
    auths_id: number;
    authtype: number;
    last_login: string;
    date_mod: string;
    date_sync: string;
    is_deleted: truefalse;
    profiles_id: number;
    entities_id: number;
    usertitles_id: number;
    usercategories_id: number;
    date_format: string;
    number_format: string;
    names_format: string;
    csv_delimiter: string;
    is_ids_visible: truefalse;
    use_flat_dropdowntree: string;
    show_jobs_at_login: string;
    priority_1: string;
    priority_2: string;
    priority_3: string;
    priority_4: string;
    priority_5: string;
    priority_6: string;
    followup_private: string;
    task_private: string;
    default_requesttypes_id: string;
    password_forget_token: string;
    password_forget_token_date: string;
    user_dn: string;
    registration_number: '';
    show_count_on_tabs: string;
    refresh_views: string;
    set_default_tech: string;
    personal_token_date: string;
    api_token_date: string;
    cookie_token_date: string;
    display_count_on_home: string;
    notification_to_myself: string;
    duedateok_color: string;
    duedatewarning_color: string;
    duedatecritical_color: string;
    duedatewarning_less: string;
    duedatecritical_less: string;
    duedatewarning_unit: string;
    duedatecritical_unit: string;
    display_options: string;
    is_deleted_ldap: number;
    pdffont: string;
    picture: string;
    begin_date: string;
    end_date: string;
    keep_devices_when_purging_item: string;
    privatebookmarkorder: string;
    backcreated: string;
    task_state: string;
    palette: string;
    page_layout: string;
    fold_menu: number;
    fold_search: string;
    savedsearches_pinned: string;
    timeline_order: string;
    itil_layout: string;
    richtext_layout: string;
    set_default_requester: string;
    lock_autolock_mode: string;
    lock_directunlock_notification: string;
    date_creation: string;
    highcontrast_css: string;
    plannings: string;
    sync_field: string;
    groups_id: number;
    users_id_supervisor: number;
    timezone: string;
    default_dashboard_central: string;
    default_dashboard_assets: string;
    default_dashboard_helpdesk: string;
    default_dashboard_mini_ticket: string;
    default_central_tab: string;
    nickname: string;
    links: Links;
}
  