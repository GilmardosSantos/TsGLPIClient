import { Entity } from "../administration/entity.model";
import { Group } from "../administration/group.model";
import { User } from "../administration/user.model";
import { Links, truefalse } from "../../glpi/glpi";
import { Manufacturer } from "../../glpi/manufacturer.model";
import { State } from "../../glpi/state.model";

export interface Computer{
    id: number;
    entities_id: number;
    name: string;
    serial: string;
    otherserial: string;
    contact: string;
    contact_num: string;
    users_id_tech: number;
    groups_id_tech: number;
    comment: string;
    date_mod: string;
    autoupdatesystem_id: string;
    locations_id: number;
    networks_id: number;
    computermodels_id: number;
    computertypes_id: number;
    is_template: truefalse;
    template_name: string;
    manufacturers_id: number;
    is_deleted: truefalse;
    is_dynamic: truefalse;
    users_id: number;
    groups_id: number;
    states_id: number;
    ticket_tco: string;
    uuid: string;
    date_creation: string;
    is_recursive: number;
    last_inventory_update: string;
    last_boot: string;
    links: Links
}

export interface ComputerModel{
    comment:string;
    date_creation:string;
    date_mod:string;
    depth:number;
    id:number;
    is_half_rack:number;
    name:string;
    picture_front?:null;
    picture_rear?:null;
    pictures?:null;
    power_connections:number;
    power_consumption:number;
    product_number:null;
    required_units:number;
    weight:number
}

export interface ComputerType{

}