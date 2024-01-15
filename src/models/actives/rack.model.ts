import { Links, truefalse } from "../glpi/glpi";

export interface Rack {
    id: number;
    name: string;
    comment: string;
    entities_id: number;
    is_recursive: truefalse;
    locations_id: number;
    serial: string;
    otherserial: string;
    rackmodels_id: number;
    manufacturers_id: number;
    racktypes_id: number;
    states_id: number;
    users_id_tech: number;
    groups_id_tech: number;
    width: number;
    height: number;
    depth: number;
    number_units: number;
    is_template: number;
    template_name: number;
    is_deleted: number;
    dcrooms_id: number;
    room_orientation: number;
    position: string;
    bgcolor: string;
    max_power: number;
    mesured_power: number;
    max_weight: number;
    date_mod: string;
    date_creation: string;
    links: Links;
}