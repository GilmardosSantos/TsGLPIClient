import { Links, TrueFalse } from "src/types/types";

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
    is_visible_computer: TrueFalse;
    is_visible_monitor: TrueFalse;
    is_visible_networkequipment: TrueFalse;
    is_visible_peripheral: TrueFalse;
    is_visible_phone: TrueFalse;
    is_visible_printer: TrueFalse;
    is_visible_softwareversion: TrueFalse;
    is_visible_softwarelicense: TrueFalse;
    is_visible_line: TrueFalse;
    is_visible_certificate: TrueFalse;
    is_visible_rack: TrueFalse;
    is_visible_passivedcequipment: TrueFalse;
    is_visible_enclosure: TrueFalse;
    is_visible_pdu: TrueFalse;
    is_visible_cluster: TrueFalse;
    is_visible_contract: TrueFalse;
    is_visible_appliance: TrueFalse;
    is_visible_databaseinstance: TrueFalse;
    is_visible_cable: TrueFalse;
    date_mod: string;
    date_creation: string;
    links: Links;
}