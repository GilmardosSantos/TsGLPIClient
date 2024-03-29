import { Links, truefalse } from "../../glpi/glpi";

export interface Location {
    id: number;
    entities_id: number;
    is_recursive: truefalse;
    name: string;
    locations_id: number;
    completename: string;
    comment: string;
    level: number;
    ancestors_cache: string;
    sons_cache: string;
    address: string;
    postcode: string;
    town: string;
    state: string;
    country: string;
    building: string;
    room: string;
    latitude: string;
    longitude: string;
    altitude: string;
    date_mod: string;
    date_creation: string;
    links: Links;
}