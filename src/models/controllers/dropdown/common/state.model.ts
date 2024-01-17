import { Links, truefalse } from "../../glpi/glpi";

export interface State {
    id: number;
    name: string;
    entities_id: number;
    is_recursive: number;
    comment: string;
    states_id: number;
    completename: string;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    is_visible_computer: truefalse;
    is_visible_monitor: truefalse;
    is_visible_networkequipment: truefalse;
    is_visible_peripheral: truefalse;
    is_visible_phone: truefalse;
    is_visible_printer: truefalse;
    is_visible_softwareversion: truefalse;
    is_visible_softwarelicense: truefalse;
    is_visible_line: truefalse;
    is_visible_certificate: truefalse;
    is_visible_rack: truefalse;
    is_visible_passivedcequipment: truefalse;
    is_visible_enclosure: truefalse;
    is_visible_pdu: truefalse;
    is_visible_cluster: truefalse;
    is_visible_contract: truefalse;
    is_visible_appliance: truefalse;
    is_visible_databaseinstance: truefalse;
    is_visible_cable: truefalse;
    date_mod: string;
    date_creation: string;
    links: Links;
}